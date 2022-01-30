import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Images = () => {
  return (
    <Wrapper>
      <article>
        <h4>Constrained / default</h4>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="food"
          height={400}
          placeholder="tracedSVG"
          layout="constrained"
          className="example-img"
          as="section"
        />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 70vw;
  margin: 0 auto;
  article {
    border: 2px solid red;
  }
  .example-img {
    border-radius: 1rem;
  }
`

export default Images
