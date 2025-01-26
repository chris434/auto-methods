import { deleteArrgController, updateArrgController, updateArrgOtherConroller } from "./controllers/arrgument.js"
import { updateConditionController } from "./controllers/condition.js"
import { addNewArrgConroller, replaceMethodController } from "./controllers/method.js"
import { addConditionController } from "./controllers/statement.js"
import { INIT_ARRAY_DATA } from "./data.js"
import type { ArrayDataType, InputValue, Methods, CondisionKeys, IndexsType, ArrgProps, MethodProps, StatementProps, ConditionProps, GetReturnType, GetProps} from "./types"

class ArrayData{
     data=$state<ArrayDataType>(INIT_ARRAY_DATA)
    setInputValue=(value:InputValue )=>{
        this.data={...this.data,inputValue:value,methods:[...this.data.methods,{name:'',arrgs:[]}]}
    }
   
    #mapMethod=(targetIndex:number,cb:(value:Methods,i:number)=>Methods)=>{
        const mappedMethods=  this.data.methods.map((method,index)=>{
        if(targetIndex===index) return cb(method,index)
        return method
        })
        this.data.methods=mappedMethods
    }
    replaceMethod=(name:string,{methodIndex}:IndexsType)=>{
        this.#mapMethod(methodIndex,(method)=>replaceMethodController(name,method))
    }
    methodActions=(methodProps:MethodProps)=>{
        const {methodIndex}=methodProps
       const replaceMethod=(name:string)=>{
        this.#mapMethod(methodIndex,(method)=>replaceMethodController(name,method))
        }
        const addNewArrg =()=>{
            this.#mapMethod(methodIndex,(method,index)=>addNewArrgConroller(method,index,this.data.inputValue.types.singleTypes))
    }
    return {replaceMethod,addNewArrg}
   }
    arrgActions=(arrgProps:ArrgProps)=>{
        const {methodIndex,arrgIndex}=arrgProps
       const updateArrg=(type:string)=>{
           this.#mapMethod(methodIndex,(method)=>{
            const mappedArrgs=method.arrgs.map((arrg,index)=>{
                        
                if(index!==arrgIndex){
                 return updateArrgOtherConroller(arrg,type)
                } 
                if(arrgIndex===arrgIndex){
                    return updateArrgController(arrg,type)
                }
                return arrg
             }) 
             return {...method,
                 arrgs:mappedArrgs
             }
        })
    }
       const deleteArrg=()=>{
            this.#mapMethod(methodIndex,deleteArrgController)
        }
        return {updateArrg,deleteArrg}
    }
    satementActions=({methodIndex,arrgIndex,statementIndex,type}:StatementProps)=>{
        const addCondition=()=>{

            this.#mapMethod(methodIndex,method=>{
              return {...method,arrgs:method.arrgs.map((arrg,i)=>{
                   if(arrgIndex===i)return {...arrg,statements:arrg.statements.map((statement,i)=>{
                       console.log(statement)
                      if(statementIndex===i)  return addConditionController(statement,type)
                      return statement
                      })}
                      return arrg
                   })}
              })
              
            
           }
           return {addCondition}
    }
     conditionActions=({methodIndex,arrgIndex,statementIndex,conditionIndex,type}:ConditionProps)=>{
      const  updateCondition=(key:CondisionKeys, ObjectKey:string)=>{
    
         this.#mapMethod(methodIndex,method=>{
           return {...method,arrgs:method.arrgs.map((arrg,i)=>{
                
                if(arrgIndex===i)return {...arrg,statements:arrg.statements.map((statement,i)=>{
                    console.log(statementIndex===i)
                   if(statementIndex===i)  return {...statement,conditions:statement.conditions.map((condition,i)=>{
                    if(conditionIndex===i) return updateConditionController(condition,key,ObjectKey)
                    return condition
                   })}
                   return statement
                })}
                return arrg
            })
        }
         })
         
        }
        return {updateCondition}
    }
   
} 

export let arrayData=new ArrayData()

export function get<T extends 'methods'|'arrgs'|'statement'|'conditions', R=GetReturnType<T>>(indexs:GetProps):R{
     
    const methods=arrayData.data.methods[indexs.methodIndex]
  if(typeof indexs?.arrgIndex!=='number') return methods as R
  const arrgs=methods.arrgs[indexs.arrgIndex]
  if(typeof indexs?.statementIndex !=='number') return arrgs as R
 const statement= arrgs.statements[indexs.statementIndex]
  if(typeof indexs?.conditionIndex !=='number') return statement as R
  const conditions=statement.conditions
  return conditions as R
}