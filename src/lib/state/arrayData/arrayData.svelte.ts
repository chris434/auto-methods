import { deleteArrgController, updateArrgController, updateArrgOtherConroller } from "./controllers/arrgument.js"
import { updateConditionController } from "./controllers/condition.js"
import { addNewArrgConroller, replaceMethodController } from "./controllers/method.js"
import { addConditionController } from "./controllers/statement.js"
import { INIT_ARRAY_DATA } from "./data.js"
import { map } from "./helpers/map/map.js"
import type { ArrayDataType, InputValue, Methods, CondisionKeys, IndexsType, ArrgProps, MethodProps, StatementProps, ConditionProps, GetReturnType, GetProps, Arrgs, DataCb, Statement, Condition} from "./types"

class ArrayData{
     data=$state<ArrayDataType>(INIT_ARRAY_DATA)
    setInputValue=(value:InputValue )=>{
        this.data={...this.data,inputValue:value,methods:[...this.data.methods,{name:'',arrgs:[]}]}
    }
   
    #mapMethod=(targetIndex:number,cb:(value:Methods,i:number)=>Methods)=>{
        map(this.data,this.data.methods,'methods',targetIndex,(method,i)=>cb(method,i),{setCb:(value)=> {this.data.methods=value}})
    }
    #mapArrgument=({methodIndex,arrgIndex}:ArrgProps,isCb:DataCb<Arrgs>,isNotCb?:DataCb<Arrgs>)=>{
     return this.#mapMethod(methodIndex,(method)=>{
        return map(method,method.arrgs,'arrgs',arrgIndex,(arrg,i,isNotEqual)=>!isNotEqual?isCb(arrg,i):isNotCb?isNotCb(arrg,i):arrg,{notEqaul:true})
      })
    }

    #mapStatement=({methodIndex,arrgIndex,statementIndex}:Omit<StatementProps,'type'> ,isCb:DataCb<Statement>)=>{
   return this.#mapArrgument({methodIndex,arrgIndex},(arrg)=> {
       return map(arrg,arrg.statements,'statements',statementIndex,(statement,i)=>isCb(statement,i))
    })
    }
    #mapCondition=({methodIndex,arrgIndex,statementIndex,conditionIndex}:ConditionProps,isCb:DataCb<Condition>)=>{
     return this.#mapStatement({methodIndex,arrgIndex,statementIndex},(statement)=> {
       return map(statement,statement.conditions,'conditions',conditionIndex,(condition,i)=>isCb(condition,i))
    })
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
        const {methodIndex}=arrgProps
       const updateArrg=(type:string)=>{
        this.#mapArrgument(arrgProps,(arrg)=>updateArrgController(arrg,type),(arrg)=>updateArrgOtherConroller(arrg,type))
    }
       const deleteArrg=()=>{
            this.#mapMethod(methodIndex,deleteArrgController)
        }
        return {updateArrg,deleteArrg}
    }
    satementActions=(statementProps:StatementProps)=>{
        const addCondition=()=>{
        this.#mapStatement(statementProps,(statement)=>addConditionController(statement,statementProps.type))
        }
           return {addCondition}
    }
     conditionActions=(conditionProps:ConditionProps)=>{
      const  updateCondition=(key:CondisionKeys, ObjectKey:string)=>{
        this.#mapCondition(conditionProps,(condition)=>updateConditionController(condition,key,ObjectKey))
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