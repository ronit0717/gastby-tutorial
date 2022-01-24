import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <div className="home-heading">
        <h1>Hello world </h1>
        <h1>Ronit</h1>
      </div>

      <div>
        <Link to="/about">About Us</Link>
      </div>
      <div>
        <Link to="/company/history">History</Link>
      </div>
      <div>
        <a href="https://www.gatsbyjs.com/docs/how-to">Gatsby Docs</a>
      </div>
    </Layout>
  )
}
