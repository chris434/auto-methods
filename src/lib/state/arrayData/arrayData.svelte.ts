import { INIT_ARRAY_DATA } from "./data.js"
import type { ArrayDataType, InputValue} from "./types.ts"

class ArrayData{
     data=$state<ArrayDataType>(INIT_ARRAY_DATA)
    setInputValue=(value:InputValue )=>{
        this.data={...this.data,inputValue:value,methods:[...this.data.methods,{name:'',arrgs:[],types:[...value.types.singleTypes]}]}
    }
    replaceMethod=(name:string,i:number)=>{
        console.log(name)
        const mappedMethods=  this.data.methods.map((method,index)=>{
            if(index===i) return {...method,name}
            return method
        })
        this.data.methods=mappedMethods
    }
    addNewArrg =(i:number)=>{
      const mappedMethods=  this.data.methods.map((method,index)=>{
            if(index===i) return {...method,arrgs:[...method.arrgs,{type:''}]}
            return method
        })
        this.data.methods=mappedMethods
    }
    updateArrg=(type:string,methodIndex:number,arrgIndex:number)=>{
  
        const mappedMethods=this.data.methods.map((method,index)=>{
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
        this.data.methods=mappedMethods
        console.log(mappedMethods)
    }

} 

export let arrayData=new ArrayData()