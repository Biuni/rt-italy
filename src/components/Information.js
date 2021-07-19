import React, { useState } from "react"
import { Alert, Modal, Button } from "react-bootstrap"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarCheck, faExclamation } from "@fortawesome/free-solid-svg-icons"
import newLogo from "../images/new.png"

function Information(props) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className="Information">
      {props.last !== "" ? (
        <Alert variant={"info"} className="AlertInformation">
          R<sub>t</sub> aggiornato al: <strong>{props.last}</strong>&nbsp;&nbsp;
          <FontAwesomeIcon icon={faCalendarCheck} color="#43a03d" /><br />
          <small>(estratto dal report ISS del <strong>16-07-2021</strong>)</small>
        </Alert>
      ) : (
        <Link to="/">
          <Button
            className="ButtonInformation BackHome"
            variant="outline-info"
            size="sm"
          >
            <span style={{ padding: '3px 0', display: 'inline-block' }}>Torna alla homepage</span>
          </Button>
        </Link>
      )}
      <Button
        className="ButtonInformation"
        variant="outline-info"
        size="sm"
        onClick={handleShow}
      >
        <span style={{ marginTop: '3px', display: 'inline-block' }}>Maggiori informazioni</span>
        <img alt="new" style={{ paddingLeft: '10px', marginTop: '-1px' }} src={newLogo} />
      </Button>

      <Modal show={show} onHide={handleClose} size="lg" className="ModalInformation">
        <Modal.Header closeButton>
          <Modal.Title>Maggiori informazioni</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert variant={"warning"}>
            <FontAwesomeIcon icon={faExclamation} />&nbsp;&nbsp;&nbsp;&nbsp;
            <strong>Aggiornamento del 18 Gennaio 2021.</strong><br /><br />
            I valori di R<sub>t</sub> presenti in questo sito web non sono
            più calcolati a partire dai dati della Protezione Civile ma vengono
            direttamente estratti dai report di monitoraggio settimanale
            dell'Istituto Superiore di Sanità (ISS).
          </Alert>
          <h3>Informazioni</h3>
          I dati successivi al <strong>14 Ottobre 2020</strong> indicano
          il valore puntuale di R<sub>t</sub> associato alla data in
          cui sono stati calcolati. Queste stime derivano dai report utilizzati
          dal Ministero della Salute per attuare le misure
          restrittive sulla base delle colorazioni regionali e sono estratti dalla{" "}
          <a href="https://github.com/opencovid-mr/Report_Integrali_ISS">repository</a>{" "}
          Github di <a href="https://twitter.com/OpencovidM">@OpenCovidM</a>.<br />
          I dati precedenti al <strong>14 Ottobre 2020</strong> indicano
          il valore medio di R<sub>t</sub> calcolato nei 14 giorni antecedenti
          alla data di pubblicazione del report. Le date associate a questi
          valori rappresentano la data mediana nel range di riferimento.
          Questi dati sono estratti dalla{" "}
          <a href="https://bit.ly/35WluGO">repository</a>{" "}
          di <a href="https://ondata.it/">onData</a>.
          <br /><br />

          <h3>Come leggere i dati</h3>
          Oltre all'effettivo numero di riproduzione del virus, è
          riportato anche l'intervallo di credibilità del 95%.
          Nel grafico avremo quindi:
          <br />
          <ul>
            <li>
              <strong>
                R<sub>t</sub>
              </strong>
              : rappresentato dal puntino nero.
            </li>
            <li>
              <strong>Intervallo del 95%</strong>: rappresentato dalla "candela"
              che può essere verde, arancione o rossa. È verde quando sia il
              valore di R<sub>t</sub>, sia l'intervallo rientrano nella soglia
              di 1. È arancione quando il valore di R<sub>t</sub> è inferiore alla
              soglia ma il punto di massimo dell'intervallo la supera. È rossa
              quando sia il valore di R<sub>t</sub> che quello di massimo
              superano la soglia.
            </li>
          </ul>
          <strong><u>ATTENZIONE</u>:</strong> Il colore della "candela" non è in 
          nessun modo associato con il meccanismo della colorazione delle regioni,
          introdotto con il DPCM del 3 Novembre 2020.
          <br /><br />

          <h3>Metodo utilizzato</h3>
          L'Istituto Superiore di Sanità stima il valore
          di R<sub>t</sub> attraverso un metodo statistico introdotto  
          da <a href="https://doi.org/10.1093/aje/kwt133">Cori et al</a>. Maggiori
          informazioni sono riportate in <a href="https://bit.ly/35RmmN7">questa pagina</a> del
          loro sito web e in questo <a href="https://bit.ly/2LJbs5c">articolo</a>.
          <br /><br />

          <h3>Aggiornamento dei dati</h3>Il valore di R<sub>t</sub>{" "}
          (ed i rispettivi intervalli di credibilità) sono aggiornati con cadenza settimanale
          in concomintanza dell'uscita del report di monitoraggio dell'ISS. Per seguire
          l'aggiornamento quotidiano di R<sub>t</sub>, calcolato con i dati della Protezione Civile,
          è possibile visitare il sito <a href="https://covid19.infn.it/">CovidStat</a> dell'INFN.
          <br /><br />

          <h3>Disclaimer</h3>
          I dati presenti in questa pagina sono consideraribili ufficiali in quanto
          calcolati dall'Istituto Superiore di Sanità. Eventuali errori o incongurenze
          sono riconducibili alla fase di estrapolazione dei dati.
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
