import React, { useState, useEffect } from "react"
import { StaticQuery, graphql } from "gatsby"
import { Row } from "react-bootstrap"
import _ from "lodash"

import Loader from "../components/Loader"
import Information from "../components/Information"
import RegionDetails from "../components/RegionDetails"
import Sort from "../components/Sort"
import Layout from "../components/Layout"
import CandleStickGraph from "../components/CandleStickGraph"
import SEO from "../components/SEO"

// Fix huge icon flash
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

function IndexPage(values) {
  const [data, setData] = useState(values.data.allRtCsv.edges)
  const [isLoaded, setIsLoaded] = useState(true)

  const sortData = (data, key) => {
    const sortedData = _.orderBy(data, `node.${key}`, "desc")
    setData(sortedData)
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false)
    }, 1000)
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      {isLoaded ? (
        <Loader />
      ) : (
        <>
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
        </>
      )}
    </Layout>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query AllValue {
        allRtCsv(
          filter: { date: { gt: "2020-05-04" } },
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
