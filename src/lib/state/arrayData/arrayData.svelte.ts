import { arrgActionsHandler } from "./actions/argument/action.js"
import { conditionActionHandler } from "./actions/condition/action.js"
import { methodActions } from "./actions/method/action.js"
import { satementActionHandler } from "./actions/statement/action.js"
import { INIT_ARRAY_DATA } from "./data.js"
import { map } from "./helpers/map/map.js"
import type { ArrayDataType, InputValue, Methods,ArrgProps, MethodProps, StatementProps, ConditionProps, Arrgs, DataCb, Statement, Condition} from "./types"

class ArrayData{
     data=$state<ArrayDataType>(INIT_ARRAY_DATA)
    setInputValue=(value:InputValue )=>{
        this.data={...this.data,inputValue:value,methods:[...this.data.methods,{name:'',arrgs:[]}]}
    }
   
    #mapMethod=(methodProps:MethodProps,cb:(value:Methods,i:number)=>Methods)=>{
        const {methodIndex}=methodProps
        map(this.data,this.data.methods,'methods',methodIndex,(method,i)=>cb(method,i),{setCb:(value)=> {this.data.methods=value}})
    }
    #mapArrgument=({methodIndex,arrgIndex}:ArrgProps,isCb:DataCb<Arrgs>,isNotCb?:DataCb<Arrgs>|undefined)=>{
     const targetArrg=this.data.methods[methodIndex].arrgs[arrgIndex]
     return this.#mapMethod({methodIndex},(method)=>{
        return map(method,method.arrgs,'arrgs',arrgIndex,(arrg,i,isNotEqual)=>isNotEqual&&isNotCb?isNotCb(arrg,i,targetArrg):isCb(arrg,i),{notEqaul:true})
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
   
    methodActions=(methodProps:MethodProps)=>{
        return methodActions(methodProps,this.data.inputValue.types.singleTypes,this.#mapMethod)
   }
   arrgActions=(arrgProps:ArrgProps)=>{
     return arrgActionsHandler(arrgProps,this.#mapArrgument,this.#mapMethod)
   }
    satementActions=(statementProps:StatementProps)=>{
        return satementActionHandler(statementProps,this.#mapStatement,this.#mapArrgument)
    }
     conditionActions=(conditionProps:ConditionProps)=>{
        return conditionActionHandler(conditionProps,this.#mapCondition,this.#mapStatement)
     }
} 
export let arrayData=new ArrayData()