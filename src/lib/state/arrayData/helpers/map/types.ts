export type DataCb<T>=(value:T,i:number,isNotEqual:boolean)=>T
export type Options<T>= {
    notEqaul?:boolean
    setCb?:(value:T)=>void
}