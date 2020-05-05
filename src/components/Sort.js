import React from "react"
import { Button } from "react-bootstrap"

function Sort(props) {
  return (
    <div className="SortData">
      <h6>Ordina per:</h6>
      <Button
        size="sm"
        variant="outline-info"
        onClick={() => props.sortData(props.values, "ML", "desc")}
      >
        R<sub>t</sub>
      </Button>
      <Button
        size="sm"
        variant="outline-info"
        onClick={() => props.sortData(props.values, "High_90", "desc")}
      >
        Max 90%
      </Button>
      <Button
        size="sm"
        variant="outline-info"
        onClick={() => props.sortData(props.values, "High_50", "desc")}
      >
        Max 50%
      </Button>
      <Button
        size="sm"
        variant="outline-info"
        onClick={() => props.sortData(props.values, "state", "asc")}
      >
        A-Z
      </Button>
    </div>
  )
}

export default Sort
