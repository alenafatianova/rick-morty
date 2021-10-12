/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { gql } from '@apollo/client'


export const apolloQuery = gql`
query getCharactersByName ($searchQuery: String!) {
    characters(filter: {name: $searchQuery}) {
        results {
         image
         name 
         id
       }
       }
}
`

