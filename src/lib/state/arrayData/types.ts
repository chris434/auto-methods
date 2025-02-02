import type { ObjectKey } from "$lib/types/object/object";
import type { INDEXS } from "./data";

export type ArrayDataType={
    inputValue: InputValue
    outputValue: any[],
    methods:Methods[]
    usedTypes:string[]
    inputType: InputType,
}
export type InputValue={
    data:unknown[]
    types:Types
}
export type Methods={
    name:string,
    arrgs:Arrgs[]
}
export type Arrgs={
    type:string
    statements:Statement[]
    typeof:ArrgTypeof,
    types:string[]
}
export type ArrgTypeof='type and value'|'type only'
export type Statement={
    statementType:StatementType
    conditions:Condition[]
}
export type Condition={
    valueType:string
    oparator:string
    conditionValue:''
    logical:'AND'|'OR'|''
    selectedObjectKey:string
}
export type CondisionKeys=  keyof Condition
export type StatementType='if'|'if else'
export type InputType='json'|'array'|''

export type Types={
    singleTypes:string[]
    objectTypes:ObjectType
}

export type ObjectType=ObjectKey<{
    types:string[]
    keyInAll:boolean
}>
// export type IndexsType=typeof INDEXS

export type IndexsType={
    methodIndex:number
    arrgIndex:number
    statementIndex:number
    conditionIndex:number
}
type IndexTypeKeys=keyof IndexsType
export type MethodType<T extends IndexTypeKeys, K=''>=K extends 'type-none'?Pick<IndexsType,T>:Pick<IndexsType,T>&{type:string}

export type MethodProps=MethodType<"methodIndex",'type-none'>
export type ArrgProps=MethodType<"methodIndex"|"arrgIndex",'type-none'>
export type StatementProps=MethodType<"methodIndex"|"arrgIndex"|"statementIndex">
export type ConditionProps=MethodType<"methodIndex"|"arrgIndex"|"statementIndex"|"conditionIndex">
export type StatementComponentProps=ArrgProps&{type:string}

export type SelectedProp<T>= 
T extends 'arrgs'?MethodProps:
T extends 'statement'?ArrgProps:
T extends 'conditions'? StatementProps:
null

type Compounents={
    methods:Methods
    arrgs:Arrgs
    statement:Statement
    conditions:Condition
}
export type ActionKeys='methods'|'arrgs'|'statement'|'conditions'
export type CompounentKeys=keyof Compounents
export type GetProps=Partial<ConditionProps>&{methodIndex:number}
export type GetReturnType<T>=
T extends 'methods'?Methods:
T extends 'arrgs'?Arrgs:
T extends 'statement'?Statement:
Condition
export type DataCb<T>=(value:T,i:number,targetValue?:T)=>T
