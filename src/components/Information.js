import React, { useState } from "react"
import { Alert, Modal, Button } from "react-bootstrap"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons"

function Information(props) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className="Information">
      {props.last !== "" ? (
        <Alert variant={"info"} className="AlertInformation">
          Ultimo aggiornamento: <strong>{props.last}</strong>&nbsp;&nbsp;
          <FontAwesomeIcon icon={faCalendarCheck} color="#43a03d" />
        </Alert>
      ) : (
        <Link to="/">
          <Button
            className="ButtonInformation BackHome"
            variant="outline-info"
            size="sm"
          >
            Torna alla homepage
          </Button>
        </Link>
      )}
      <Button
        className="ButtonInformation"
        variant="outline-info"
        size="sm"
        onClick={handleShow}
      >
        Maggiori informazioni
      </Button>

      <Modal show={show} onHide={handleClose} className="ModalInformation">
        <Modal.Header closeButton>
          <Modal.Title>Maggiori informazioni</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>Come leggere i dati</h3>
          Lo scopo di questo progetto è quello di stimare l'attuale valore di R
          <sub>t</sub> di ogni regione, attraverso un metodo statistico. A tal
          proposito, oltre all'effettivo numero di riproduzione del virus, sono
          considerati due intervalli di credibilità: uno del 50% ed uno del 90%.
          Ad ognuno di questi intervalli è associato un valore massimo ed un
          valore minimo. Nel grafico avremo quindi:
          <br />
          <ul>
            <li>
              <strong>
                R<sub>t</sub>
              </strong>
              : rappresentato dal puntino nero.
            </li>
            <li>
              <strong>Intervallo del 50%</strong>: rappresentato dalla "candela"
              che può essere verde, gialla o rossa. E' verde quando sia il
              valore di R<sub>t</sub>, sia l'intervallo rientrano nella soglia
              di 1. E' gialla quando il valore di R<sub>t</sub> è inferiore alla
              soglia ma il punto di massimo dell'intervallo la supera. E' rossa
              quando sia il valore di R<sub>t</sub> che quello di massimo
              superano la soglia.
            </li>
            <li>
              <strong>Intervallo del 90%</strong>: rappresentato dalla riga
              verticale celeste con ai capi due linee trasversali che
              corrispondono ai valori di massimo e minimo dell'intervallo di
              credibilità.
            </li>
          </ul>
          <h3>Metodo utilizzato</h3>
          Il valore dell'effettivo numero di riproduzione del virus (R
          <sub>t</sub>) è calcolato tramite un metodo bayesiano proposto da{" "}
          <strong>Kevin Systrom</strong>, co-founder ed ex CEO di Instagram, che
          sfrutta l'incremento dei nuovi casi positivi. Per chi volesse
          approfondire vi invito a leggere direttamente l'articolo pubblicato
          nel suo{" "}
          <a href="http://systrom.com/blog/the-metric-we-need-to-manage-covid-19/">
            blog
          </a>
          . <br />
          Per adattarlo ai dati italiani, come consigliato dall'
          <strong>Istituto Superiore della Sanità</strong>, sono considerati i
          casi negli ultimi 15 giorni invece che 7, come indicato da Systrom.
          <h3>Aggiornamento dei dati</h3>Dal 06-07-2020, il valore di R<sub>t</sub>{" "}
          (ed i rispettivi intervalli di credibilità) non verranno più aggiornati
          quotidianamente ma ogni Lunedì. Questa scelta deriva dalla poca variabilità
          dei casi e dal problema del continuo ricalcolo che le regioni effettuano
          oramai ogni giorno, rendendo impossibile effettuare una predizione credibile.
          <h3>Disclaimer</h3>
          I dati presenti in questa pagina non sono consideraribili ufficiali in
          quanto non rilasciati da nessun ente qualificato.
          <br />
          Questo sito web è ispirato a <a href="https://rt.live/">rt.live</a>.
        </Modal.Body>
        <Modal.Footer>
          <a href="https://github.com/Biuni/rt-italy/issues">
            Segnala eventuali problemi o bug.
          </a>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Information
