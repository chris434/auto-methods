import type { Arrays, Props } from "./types"

export function objectFindArray(obj:Props){
    let arrays:Arrays={keys:[],values:[]}
    function find(obj:Props){
        const keys = Object.keys(obj)
       for( let i=0; i<keys.length; i++){
         if(typeof obj[keys[i]] ==='object'){
        find(obj[keys[i]]as Props )
         }

         if(Array.isArray(obj[keys[i]])){
            arrays={keys:[...arrays.keys,keys[i]],values:[...arrays.values,obj[keys[i]]] }
          
         }
       }
      }
      find(obj)
      return arrays
}