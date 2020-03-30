import React from 'react';

import {css} from'@emotion/core';
import styled from '@emotion/styled'

import Navegacion from './nav';
import {Link} from 'gatsby';

const EnlaceHome = styled(Link)`
    color:#FFF;
    text-Align: center;
    text-Decoration: none;
`

const Footer = ({title}) => {
    const year = new Date().getFullYear();
    return (
         <>       
        <footer
            style={{backgroundColor:"rgba(44,62,80)",
                    marginTop: "6.5rem",
                    padding: "1rem"
            }}
        >
            <div
                css={
                    css`
                        max-width:1200px;
                        margin: 0 auto;
                        
                        @media (min-width: 768px){
                            display: flex;
                            align-Items: center;
                            justify-content: space-between; 
                        }
                    `
                }
                >
                <Navegacion/>
                <EnlaceHome
                    to='/'
                >
                    <h1>Hotel Gatsby</h1>
                </EnlaceHome>

            </div>
        </footer>
        <p css={css`
            text-Align: center;
            color:#FFF;
            background-Color: rgb(33,44,55);
            margin:0;
            padding: 1rem;
        `}>{title}. Todos los derechos reservados {year} &copy;</p>
        </>
    );
};

export default Footer;