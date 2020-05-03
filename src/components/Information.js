import React, { useState } from "react"
import { Alert, Button, Modal } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons"

function Information(props) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className="Information">
      <Alert variant={"info"} className="AlertInformation">
        Ultimo aggiornamento: <strong>{props.last}</strong>&nbsp;&nbsp;
        <FontAwesomeIcon icon={faCalendarCheck} color="#43a03d" />
      </Alert>
      <a href="#" onClick={handleShow}>
        Maggiori informazioni
      </a>

      <Modal show={show} onHide={handleClose} className="ModalInformation">
        <Modal.Header closeButton>
          <Modal.Title>Maggiori informazioni</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>Come leggere i dati</h3>
          Lo scopo dei dati presenti in questa pagina è quello di stimare il
          valore di R<sub>t</sub> di ogni regione, attraverso un metodo
          statistico. A tal proposito, oltre all'effettivo numero di
          riproduzione del virus, sono considerati due intervalli di
          credibilità: uno del 50% ed uno del 90%. Ad ognuno di questi
          intervalli è associato un valore massimo ed un valore minimo. Nel
          grafico avremo quindi:
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
          .<h3>Aggiornamento quotidiano</h3>I dati, che sfruttano il dataset
          della Protezione Civile, vengono calcolati ed aggiornati
          quotidianamente alle ore 18:30 circa.
          <h3>Disclaimer</h3>
          I dati presenti in questa pagina sono stati elaborati tramite metodi
          statistici. Non sono inoltre consideraribili ufficiali in quanto non
          rilasciati da nessun ente qualificato.
          <br />
          Questo sito web è ispirato a <a href="https://rt.live/">Rt live</a>.
          <h3>Prossimi aggiornamenti</h3>
          Arriverà a breve anche la possibilità di vedere l'andamento storico di
          ogni regione ed il valore di R<sub>t</sub> calcolato per ogni
          provincia.
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
