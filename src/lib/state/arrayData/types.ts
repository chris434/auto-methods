import type { ObjectKey } from "$lib/types/object/object";

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
    types:string[]
}
export type InputType='json'|'array'|''

export type Types={
    singleTypes:string[]
    objectTypes:ObjectType
}

export type ObjectType=ObjectKey<{
    types:string[]
    keyInAll:boolean
}>