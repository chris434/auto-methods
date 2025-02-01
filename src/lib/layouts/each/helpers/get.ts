import { arrayData } from "$lib/state/arrayData/arrayData.svelte"
import type { GetProps, GetReturnType } from "$lib/state/arrayData/types"

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