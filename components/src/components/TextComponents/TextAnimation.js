import React from 'react';
import styled, { keyframes } from "styled-components";

const typewriter = keyframes`
0%{
    width:0em;
}
100%{
    width:5em;
}
`

const textCursor = keyframes`
0%{
    border-right-color:black;
}
100%{
    border-right-color:transparent;
}
`

const Section = styled.section`
display:flex;
justify-content:center;
align-items:center;
height: 100vh;
`
 
const Text = styled.p`
    font-size:6em;
    font-weight:900;
    color:black;
    overflow:hidden;
    white-space:nowrap;
    animation: ${typewriter} 1.5s steps(15) 1s 1 normal both,
    ${textCursor} 700ms steps(40) infinite normal;
    font-family:consolas;
    border-right:2px solid black;
    width:5em;
`

const TextAnimation = () => {
    return (
        <Section>
            <Text>Reveal text</Text>
        </Section>
    )
}

export default TextAnimation
