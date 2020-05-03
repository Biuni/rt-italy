import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"

function Footer() {
  return (
    <footer>
      Creato con <FontAwesomeIcon icon={faHeart} color="#eb5569" /> da{" "}
      <a href="https://biuni.it">Biuni</a>
      <br />
      <small>
        Dati della{" "}
        <a href="https://github.com/pcm-dpc/COVID-19">Protezione Civile</a>
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
