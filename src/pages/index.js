import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <h1>Hello World</h1>
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
