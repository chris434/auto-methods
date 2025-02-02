import type { ArrgProps, Arrgs, Condition, ConditionProps, DataCb, MethodProps, Methods, Statement, StatementProps } from "../types"

export type MapProps<T,R>=(props:T,isCb:DataCb<R>,isNotCb?: DataCb<R>)=>void

export type mapMethod=MapProps<MethodProps,Methods>
export type MapArrgs= MapProps<ArrgProps,Arrgs>
export type mapStatement=MapProps<StatementProps,Statement>
export type mapCondition=MapProps<ConditionProps,Condition>

