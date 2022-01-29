import React from "react"
import { Link } from "gatsby"
import { FaAlignJustify } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav>
      <FaAlignJustify />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/tags">Tags</Link>
        </li>
        <li>
          <Link to="/recipes">Recipies</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
