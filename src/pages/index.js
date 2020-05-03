import React, { useState, useEffect } from "react"
import { StaticQuery, graphql } from "gatsby"
import { Row, Button } from "react-bootstrap"
import _ from "lodash"

import Information from "../components/Information"
import RegionDetails from "../components/RegionDetails"
import Sort from "../components/Sort"
import Layout from "../components/Layout"
import CandleStickGraph from "../components/CandleStickGraph"
import SEO from "../components/SEO"

function IndexPage(values) {
  const [data, setData] = useState(values.data.allRtCsv.edges)

  const sortData = (data, key) => {
    const sortedData = _.orderBy(data, `node.${key}`, "desc")
    setData(sortedData)
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Information last={data[0].node.date} />
      <CandleStickGraph
        values={data}
        max={data[0].node.state}
        min={data.slice(-1)[0].node.state}
      />
      <Sort sortData={sortData} values={data} />
      <Row>
        {data.length > 0 &&
          data.map(region => (
            <RegionDetails region={region} key={region.node.id} />
          ))}
      </Row>
    </Layout>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query AllValue {
        allRtCsv(
          filter: { date: { gt: "2020-05-02" } }
          sort: { fields: ML, order: DESC }
        ) {
          totalCount
          edges {
            node {
              id
              ML
              Low_90
              High_90
              state
              date(formatString: "DD-MM-YYYY", locale: "it")
              Low_50
              High_50
            }
          }
        }
      }
    `}
    render={data => <IndexPage data={data} />}
  />
)
