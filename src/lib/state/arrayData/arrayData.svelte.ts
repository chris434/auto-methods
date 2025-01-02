import { INIT_ARRAY_DATA } from "./data.js"
import type { ArrayDataType, InputValue, Methods} from "./types.ts"

class ArrayData{
     data=$state<ArrayDataType>(INIT_ARRAY_DATA)
    setInputValue=(value:InputValue )=>{
        this.data={...this.data,inputValue:value,methods:[...this.data.methods,{name:'',arrgs:[],types:[...value.types.singleTypes]}]}
    }
    #mapMethod=(cb:(value:Methods,i:number)=>Methods)=>{
        const mappedMethods=  this.data.methods.map((method,index)=>{
          return cb(method,index)
        })
        this.data.methods=mappedMethods
    }
    replaceMethod=(name:string,i:number)=>{
        console.log(name)
        this.#mapMethod((method,index)=>{
            if(index===i) return {...method,name}
            return method
        })
    }
    addNewArrg =(i:number)=>{
        this.#mapMethod((method,index)=>{
            if(index===i) return {...method,arrgs:[...method.arrgs,{type:''}]}
            return method
        })
    }
    updateArrg=(type:string,methodIndex:number,arrgIndex:number)=>{
       this.#mapMethod((method,index)=>{
            if(index===methodIndex){
                const filteredTypes=method.types.filter((thisType)=>{return thisType!==type})
                const mappedArrgs=method.arrgs.map((arrg,index)=>{
                    return index===arrgIndex?{...arrg,type}:arrg
                })
                return {...method,
                    types:filteredTypes,
                    arrgs:mappedArrgs
                }
            } 
          
            return method
        })
    }

} 

export let arrayData=new ArrayData()