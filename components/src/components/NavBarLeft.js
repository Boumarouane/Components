import React from 'react';
import styled from "styled-components";

const ContainerNav = styled.nav`
    background: #fff;
    box-shadow: 0 1px 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1000px){
        display:none;
    }
`;

const ContainerLink = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style:none;
    width: 40%;
    height: 70vh;
`

const LinkComponent = styled.li`
    font-size: 1.6rem;
`

const NavBarLeft = () => {
    return (
        <ContainerNav>
            <ContainerLink>
               <LinkComponent>Header</LinkComponent>
               <LinkComponent>Card</LinkComponent>
               <LinkComponent>Text</LinkComponent>
               <LinkComponent>Button/Modal</LinkComponent>
               <LinkComponent>Loader</LinkComponent>
               <LinkComponent>Input/icons</LinkComponent>
               <LinkComponent>ProgressBar</LinkComponent>
               <LinkComponent>Login/Formulaire</LinkComponent>
               <LinkComponent>SVG</LinkComponent>
               <LinkComponent>Footer</LinkComponent>
            </ContainerLink>
        </ContainerNav>
    )
}

export default NavBarLeft
