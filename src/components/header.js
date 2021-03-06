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
const Header = () => {
    return (

        <header
            style={{backgroundColor:"rgba(44,62,80)",
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
                <EnlaceHome
                    to='/'
                >
                    <h1>Hotel Gatsby</h1>
                </EnlaceHome>

                <Navegacion/>
            </div>
        </header>
    );
};

export default Header;