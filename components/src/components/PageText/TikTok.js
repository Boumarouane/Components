import React from 'react';
import styled, { keyframes } from "styled-components";


const animate = keyframes`
    0%{
        text-shadow: -1.5px -1.5px 0 #0ff, 1.5px 1.5px 0 #f00;
    }
    25%{
        text-shadow: 1.5px 1.5px 0 #0ff, -1.5px -1.5px 0 #f00;       
    }
    50%{
        text-shadow: 1.5px -1.5px 0 #0ff, -1.5px 1.5px 0 #f00;       
    }
    75%{
        text-shadow: -1.5px 1.5px 0 #0ff, 1.5px -1.5px 0 #f00;       
    }
`

const Section =styled.section`
display:flex;
justify-content:center;
align-items:center;
height: 100vh;
background:#000;
`

const Text = styled.h2`
    color:#fff;
    font-size:8em;
    animation: ${animate} .5s linear infinite;
`

const TikTok = () => {
    return (
        <Section>
            <Text>TikTok</Text>
        </Section>
    )
}

export default TikTok
