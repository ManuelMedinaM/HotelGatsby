import React from 'react';

import {graphql, useStaticQuery} from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from '@emotion/styled'

const ImageBackground = styled(BackgroundImage)`
    height: 600px;

`
const TextImagen = styled.div`
    background-Image: linear-gradient( to top, rgba(34,49,63,.8),rgba(34,49,63,.8));
    color:#FFF;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex:1;
    align-items:center;
    justify-Content:center; 

    h1{
        font-size:4rem;
        margin 0%;

        @media(min-width:992px){
            font-size:5.8rem;
        }
    }
    p{
        font-Size: 2rem;
        @media(min-width:992px){
            font-size:2.6rem;
        }
    }
`

const ImagenHotel = () => {

    const {image} = useStaticQuery(graphql`
        query{
            image: file(relativePath:{eq:"resort.jpg"}){
              sharp:childImageSharp{
                fluid{
                  srcSetWebp
                }
              }
            }
          }
        `);

        // console.log(image.sharp.fluid);
    return (

        <ImageBackground
            tag="section"
            fluid={image.sharp.fluid}
            fadeIn="soft"
        >
            <TextImagen>
                <h1>
                    Bienvenidos a hotel gatsby
                </h1>
                <p> Lo mejor para las vacaciones en familia</p>
            </TextImagen>
        </ImageBackground>
    );
};

export default ImagenHotel;