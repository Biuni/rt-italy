import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBolt } from "@fortawesome/free-solid-svg-icons"

function Footer() {
  return (
    <footer>
      Creato da <a href="https://biuni.it">Biuni</a>{" "}
      <FontAwesomeIcon icon={faBolt} color="#DAA520" />
      <br />
      <small>
        Dati: <a href="https://www.iss.it/">Istituto Superiore di Sanità</a>
      </small>
      <div className="text-center mt-2">
        <a
          href="https://www.buymeacoffee.com/Biuni"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="AppDonation"
            src="https://cdn.buymeacoffee.com/buttons/default-orange.png"
            alt="Buy Me A Coffee"
          />
        </a>
      </div>
    </footer>
  )
}

export default Footer
