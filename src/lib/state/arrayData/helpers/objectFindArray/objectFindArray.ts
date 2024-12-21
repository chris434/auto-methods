import type { Props } from "./props"

export function objectFindArray(obj:Props){
    const arrays:unknown[]=[]
    function find(obj:Props){
        const keys = Object.keys(obj)
       for( let i=0; i<keys.length; i++){
         if(typeof obj[keys[i]] ==='object'){
        find(obj[keys[i]]as Props )
         }

         if(Array.isArray(obj[keys[i]])){
            arrays.push(obj)
          
         }
       }
      }
      find(obj)
      return arrays
}