import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCog } from "@fortawesome/free-solid-svg-icons"

function Loader() {
  return (
    <div className="AppLoader">
      <FontAwesomeIcon icon={faCog} size="3x" spin />
      <br />
      Calcolo in corso...
    </div>
  )
}

export default Loader
