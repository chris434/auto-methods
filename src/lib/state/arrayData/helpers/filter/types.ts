export type opts<T>={
    cb?:(item:T,i:number)=>void
    arrgType:{
        targetIndex:number
    }|{
        targetValue:string
    }
}