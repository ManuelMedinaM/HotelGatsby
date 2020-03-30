import {graphql,useStaticQuery} from 'gatsby'

import React from 'react';

const useSeo = () => {
    const data = useStaticQuery(graphql`
    query{
        datoCmsSite{
          globalSeo{
            siteName
            titleSuffix
            fallbackSeo{
              title
              description
            }
          }
        }
      }
    `)

    return data.datoCmsSite.globalSeo ;
};

export default useSeo;