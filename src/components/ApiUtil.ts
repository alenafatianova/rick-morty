/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { gql } from '@apollo/client'


export const result = (searchQuery: string) => gql`
query getImageByName {
    characters(filter: {name: "${searchQuery}"}) {
        results {
         image
         name 
         id
       }
       }
}
`

