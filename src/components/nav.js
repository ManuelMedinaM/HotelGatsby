import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const Nav=styled.nav`
    display: flex;
    justify-Content:center;
    padding-Bottom:3rem;
    
    @media(min-Width:768px ){
        padding-Bottom:0;
    }
`;

const NavLink = styled(Link)`
    color:#FFFFFF;
    font-Size: 1.6rem;
    font-Weight: 700;
    line-Height:1rem;
    font-family: 'PT sans', sans-serif;
    text-Decoration: none;
    padding: 1rem;
    margin-Right: 1rem;

    &:last-of-type{
        margin-Right: 0;
    }

    &.pagina-actual{
        border-Bottom: 2px solid #FFF;
    }
`;


const Navegacion = () => {
    return (
        <Nav>
            <NavLink to={"/"} activeClassName="pagina-actual">Inicio</NavLink>
            <NavLink to={"/nosotros"} activeClassName="pagina-actual">Nosotros</NavLink>
        </Nav>
    );
};

export default Navegacion;