import type { ObjectKey } from "$lib/types/object/object"

export type Types={
    singleTypes:string[]
    objectTypes:ObjectType
}

export type ObjectType=ObjectKey<{
    types:string[]
    keyInAll:boolean
}>