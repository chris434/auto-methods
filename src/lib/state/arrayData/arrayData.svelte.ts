import { INIT_ARRAY_DATA } from "./data.js"
import type { ArrayDataType, InputValue, Methods} from "./types"

class ArrayData{
     data=$state<ArrayDataType>(INIT_ARRAY_DATA)
    setInputValue=(value:InputValue )=>{
        this.data={...this.data,inputValue:value,methods:[...this.data.methods,{name:'',arrgs:[]}]}
    }
    #mapMethod=(targetIndex:number,cb:(value:Methods,i:number)=>Methods)=>{
        const mappedMethods=  this.data.methods.map((method,index)=>{
        if(targetIndex===index)return cb(method,index)
        return method
        })
        this.data.methods=mappedMethods
    }
    replaceMethod=(name:string,i:number)=>{
        this.#mapMethod(i,(method)=>{
        return {...method,name}
        })
    }
    addNewArrg =(i:number)=>{
        this.#mapMethod(i,(method)=>{
            const lastArrg=method.arrgs[method.arrgs.length-1]
            const types= !method.arrgs.length?this.data.inputValue.types.singleTypes:lastArrg.types.filter(type=>{
             return type !==lastArrg.type
            })
             return {...method,arrgs:[...method.arrgs,{type:'',types}]}
        })
    }
    updateArrg=(type:string,methodIndex:number,arrgIndex:number)=>{
       this.#mapMethod(methodIndex,(method)=>{
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
        })
    }

    deleteArrg=(methodIndex:number,arrgIndex:number)=>{
        this.#mapMethod(methodIndex,(method)=>{
                let type=''
                const filteredArrgs=method.arrgs.filter((arrg,index)=>{
                 type=index===arrgIndex?arrg.type:type
                    return index!==arrgIndex
                })
                const mappedArrgs=filteredArrgs.map(arrg=>{
                    return {...arrg,types:[...arrg.types,type]}
                })
            
                return {...method, arrgs:mappedArrgs}
           })
    }

} 

export let arrayData=new ArrayData()