export function findJsonArrays(data:object ){
const arrays:[string,unknown][]=[]
function find(data:object,path:string){
    Object.entries(data).forEach((entry) =>{
        const [key,value]=entry
        const currentPath=`${path}/${key}`
       
        if(Array.isArray(value)) arrays.push([currentPath,value])
         if(typeof value==='object')return find(value as object,currentPath)

        
     })
}
find(data,'')
console.log(arrays)
return arrays
} 