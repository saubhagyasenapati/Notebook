import React from 'react'
import styled from "styled-components"
const Hero = () => {
  return (
    <Section>
      <div className='hero-landing'>
        <h1>NoteBook</h1>
        <h2><span>Fast.</span><span>Secure.</span><span></span>Free.</h2>
    </div>
    </Section>
     
  )
}

export default Hero

const Section=styled.section`
height:95vh;
width:100vw ;
background: #1CD8D2;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #93EDC7, #1CD8D2);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #93EDC7, #1CD8D2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

display: flex;
justify-content: center;
align-items: center;
h1{
    display: flex;
justify-content: center;
}

`