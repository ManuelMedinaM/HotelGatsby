import React from 'react';

import {graphql, useStaticQuery} from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import {css} from '@emotion/core';


const Contenido = styled.div`
    padding-Top: 4rem;
    max-Width: 1200px;
    margin: 0 auto;
    width: 95%;

    @media(min-Width: 768px ){
        display: grid;
        grid-template-columns:repeat(2,1fr);
        column-gap:3rem;
    }

    p{
        line-Height:2;
        margin-top:2rem;
    }
`

const ContenidoNostros = () => {

    const resultado = useStaticQuery(graphql`
        query{
            allDatoCmsPagina(filter:{ slug: {eq: "nosotros"}}){
            nodes{
            titulo
            contenido
            imagen{
                fluid(maxWidth:1200){
                ...GatsbyDatoCmsFluid
                     }
                    }
                }
            }
        }

    `);

    const{titulo, contenido, imagen}=resultado.allDatoCmsPagina.nodes[0];

    return (
        <>
            <h2
                css={css`
                    margin-Top: 4rem;
                    text-Align: center;
                    font-Size: 4rem;
                `}
            >{titulo}</h2>  
            <Contenido>
                <p>{contenido}</p>
                <Image
                    fluid={imagen.fluid}/>
            </Contenido>
        </>
    );
};

export default ContenidoNostros;