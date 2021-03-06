import React from 'react';

import {graphql, useStaticQuery} from 'gatsby'
import Image from 'gatsby-image';
import styled from '@emotion/styled'
import {css} from '@emotion/core'


const TextoInicio = styled.div`
    padding-Top: 4rem;
    margin: 0 auto;
    max-Width: 1200px;
    width: 95%;


    @media(min-width:768px){
        display: grid;
        grid-template-columns: 2fr 2fr;
        column-gap:100px;
    }

    p{
        line-Height: 2; 
    }
`

const ContenidoInicio = () => {
    const informacion= useStaticQuery(graphql`
    query{
        allDatoCmsPagina(filter:{ slug: {eq: "inicio"}}){
         nodes{
           titulo
           contenido
           imagen{
             fluid{
               ...GatsbyDatoCmsFluid
             }
           }
         }
       }
       }       
    `)
    // console.log(informacion.allDatoCmsPagina.nodes[0]);

    const {titulo, contenido, imagen} = informacion.allDatoCmsPagina.nodes[0];
    return (
        <>
            <h2  
                css={
                    css`
                        text-Align:center;
                        font-size:4rem;
                        margin-top:4rem;
                    `
                }
            >{titulo}</h2>

            <TextoInicio>
                <p>{contenido}</p>
                <Image fluid={imagen.fluid}/>
            </TextoInicio>



        </>
    );
};

export default ContenidoInicio;