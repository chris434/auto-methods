import { INIT_ARRAY_DATA } from "./data.js"
import type { ArrayDataType, InputValue, Methods} from "./types.ts"

class ArrayData{
     data=$state<ArrayDataType>(INIT_ARRAY_DATA)
    setInputValue=(value:InputValue )=>{
        this.data={...this.data,inputValue:value,methods:[...this.data.methods,{name:'',arrgs:[]}]}
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
            const lastArrg=method.arrgs[method.arrgs.length-1]
            const types= !method.arrgs.length?this.data.inputValue.types.singleTypes:lastArrg.types.filter(type=>{
             return type !==lastArrg.type
            })
            if(index===i) return {...method,arrgs:[...method.arrgs,{type:'',types}]}
            return method
        })
    }
    updateArrg=(type:string,methodIndex:number,arrgIndex:number)=>{
       this.#mapMethod((method,index)=>{
         
            if(index===methodIndex){
                 const mappedArrgs=method.arrgs.map((arrg,index)=>{
                    
                   if(index!==arrgIndex){
                    const preType=method.arrgs[arrgIndex].type
                    const newTypes= preType!==type&&preType?arrg.types.map(thisType=>{
                        if(thisType===type) return preType
                        return thisType
                    }):arrg.types.filter(thisType=>{
                        return thisType!==type
                    })
                    return {...arrg,types:newTypes}
                   }
                   return {...arrg,type}
                })
                return {...method,
                    arrgs:mappedArrgs
                }
            } 
          
            return method
        })
    }

    deleteArrg=(methodIndex:number,arrgIndex:number)=>{
        this.#mapMethod((method,index)=>{
            if(index===methodIndex){
                let type=''
                const filteredArrgs=method.arrgs.filter((arrg,index)=>{
                 type=index===arrgIndex?arrg.type:type
                    return index!==arrgIndex
                })
                const mappedArrgs=filteredArrgs.map(arrg=>{
                    return {...arrg,types:[...arrg.types,type]}
                })
            
                return {...method, arrgs:mappedArrgs}
            } 
          
            return method
        })
    }

} 

export let arrayData=new ArrayData()