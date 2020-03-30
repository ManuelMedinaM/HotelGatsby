import React from 'react';

import Image from'gatsby-image';
import {css} from '@emotion/core';
import styled from "@emotion/styled";
import{Link} from 'gatsby';

const Boton = styled(Link)`
    margin-Top: 2rem;
    padding: 1rem;
    background-Color: rgba(44,62,80,.85);
    width: 100%;
    color: #FFF;
    display: block;
    text-Decoration: none;
    text-Transform: uppercase;
    font-Weight: 700;
    text-Align:center;
`

const HabitacionPreview = ({habitacion}) => {
    const {contenido,imagen,titulo,slug} = habitacion;
    return (
        <div
            css={css`
                border:1px solid #e1e1e1;
                margin-Bottom: 2rem;
            `}
        
        >
            <Image
                fluid={imagen.fluid}
            />
            <div
                css={css`
                    padding: 3rem;

                `}
            >
                <h3
                    css={css`
                        font-Size: 3rem;
                    `}
                >{titulo}</h3>
                <p>{contenido}</p>

                <Boton to={slug}>
                    ver habitaciones
                </Boton>
            </div>
        </div>
    );
};

export default HabitacionPreview;