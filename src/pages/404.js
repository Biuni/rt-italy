import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{ textAlign: "center", color: "#17a2b8" }}>
      <h3>Ops! Pagina non trovata!</h3>
      <Link to="/">Torna alla homepage!</Link>
    </div>
  </Layout>
)

export default NotFoundPage
