import React, { useState, useEffect } from "react"
import { StaticQuery, graphql } from "gatsby"
import _ from "lodash"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Information from "../../components/Information"
import Loader from "../../components/Loader"
import Share from "../../components/Share"
import TrendGraph from "../../components/TrendGraph"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons"

function Lombardia(values) {
  const [data, setData] = useState()
  const [isLoaded, setIsLoaded] = useState(true)
  const [utility, setUtility] = useState()

  useEffect(() => {
    createData(values.data.allRtCsv.edges)
    const timer = setTimeout(() => {
      setIsLoaded(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [values])

  const createData = data => {
    setData(data)
    setUtility({
      max: parseFloat(_.maxBy(data, o => o.node.High_90).node.High_90),
      first: data[0].node.date,
      last: data.slice(-1)[0].node.date,
    })
  }

  return (
    <Layout>
      <SEO title="Lombardia" />
      {isLoaded ? (
        <Loader />
      ) : (
        <>
          <Information last={""} />
          <div className="RegionDetails">
            <span className="RegionName">Lombardia</span>
            <Share />
            <div className="RegionScrollInfo">
              <FontAwesomeIcon icon={faAngleDoubleLeft} size="sm" /> Scorri per
              vedere l'intero grafico{" "}
              <FontAwesomeIcon icon={faAngleDoubleRight} size="sm" />
            </div>
            <div className="RegionGraph">
              <TrendGraph
                values={data}
                max={utility.max}
                first={utility.first}
                last={utility.last}
              />
            </div>
          </div>
        </>
      )}
    </Layout>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query Lombardia {
        allRtCsv(filter: { state: { eq: "Lombardia" } }) {
          totalCount
          edges {
            node {
              id
              ML
              Low_90
              High_90
              state
              date(formatString: "DD-MMMM", locale: "it")
              Low_50
              High_50
            }
          }
        }
      }
    `}
    render={data => <Lombardia data={data} />}
  />
)
