import React from 'react';
import {graphql} from 'gatsby';
import {css} from '@emotion/core'


import Image from'gatsby-image';
import Layout from './Layout';

export const query = graphql`
    query($slug: String!){
        allDatoCmsHabitacion(filter:{slug:{eq:$slug}}){
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
         
`
const HabitacionTemplate = ({data:{allDatoCmsHabitacion:{nodes}}}) => {

    const {titulo, contenido, imagen} = nodes[0];
    
    return (
        <Layout>
            <main
                css={css`
                    margin 0 auto;
                    max-Width: 1200px;
                    width: 95%;
                `}
            >
                <h1
                    css={css`
                        text-Align: center;
                        margin-top:4rem;
                    `}
                >{titulo}</h1>
                <p>{contenido}</p>
                <Image
                    fluid={imagen.fluid}
                />

            </main>
            
        </Layout>
    );
};

export default HabitacionTemplate;