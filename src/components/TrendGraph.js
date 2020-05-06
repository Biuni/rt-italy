import React, { useState, useEffect } from "react"
import {
  XAxis,
  YAxis,
  LineSeries,
  XYPlot,
  MarkSeries,
  HorizontalGridLines,
  VerticalGridLines,
} from "react-vis"
import Candlestick from "../components/CandleStickLayout"

function TrendGraph(props) {
  const [data, setData] = useState()

  useEffect(() => {
    buildData(props.values)
  }, [props.values])

  const buildData = values => {
    const result = values.map(region => {
      const y = parseFloat(region.node.ML)
      const high_50 = parseFloat(region.node.High_50)
      const high_90 = parseFloat(region.node.High_90)
      const low_50 = parseFloat(region.node.Low_50)
      const low_90 = parseFloat(region.node.Low_90)
      const getColor =
        y > 1
          ? "rgba(235, 83, 88, 0.4)"
          : high_50 > 1
          ? "rgba(237, 152, 84, 0.4)"
          : "rgba(53, 179, 28, 0.4)"
      return {
        x: region.node.date,
        y,
        yHigh: high_90,
        yOpen: high_50,
        yClose: low_50,
        yLow: low_90,
        color: getColor,
      }
    })
    setData(result)
  }

  return (
    <div className="Candlestick">
      <div className="CandlestickChart">
        <XYPlot
          animation
          yDomain={[0, props.max + 0.2]}
          height={500}
          width={2000}
          xType="ordinal"
          margin={{ bottom: 90 }}
        >
          <XAxis tickLabelAngle={-60} />
          <YAxis />
          <HorizontalGridLines />
          <VerticalGridLines />
          <Candlestick
            colorType="literal"
            opacityType="literal"
            stroke="#79C7E3"
            data={data}
          />
          <LineSeries color="#12939A" data={data} />
          <MarkSeries size={2} color="#1d1d1d" data={data} />
          <LineSeries
            strokeStyle="dashed"
            data={[
              { x: props.first, y: 1 },
              { x: props.last, y: 1 },
            ]}
            opacity={0.7}
            stroke="#1d1d1d"
          />
        </XYPlot>
      </div>
    </div>
  )
}

export default TrendGraph
