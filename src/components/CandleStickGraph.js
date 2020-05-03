import React, { useState, useEffect } from "react"
import {
  XAxis,
  YAxis,
  LineSeries,
  FlexibleWidthXYPlot,
  MarkSeries,
  HorizontalGridLines,
} from "react-vis"
import Candlestick from "../components/CandleStickLayout"

function CandleStickGraph(props) {
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
        x: region.node.state,
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
        <FlexibleWidthXYPlot
          animation
          yDomain={[0, 2.5]}
          height={500}
          xType="ordinal"
          margin={{ bottom: 150 }}
        >
          <XAxis tickLabelAngle={-90} />
          <YAxis />
          <HorizontalGridLines />
          <Candlestick
            colorType="literal"
            opacityType="literal"
            stroke="#79C7E3"
            data={data}
          />
          <MarkSeries size={2} color="#1d1d1d" data={data} />
          <LineSeries
            strokeStyle={"dashed"}
            data={[
              { x: props.max, y: 1 },
              { x: props.min, y: 1 },
            ]}
            opacity={0.7}
            style={{ d: 'path("M 0 204 L 200000000000000 204")' }}
          />
        </FlexibleWidthXYPlot>
      </div>
    </div>
  )
}

export default CandleStickGraph
