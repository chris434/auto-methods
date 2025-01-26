

<script lang="ts" generics="T extends ActionKeys">
    import type {ActionKeys,SelectedProp, GetReturnType} from '$lib/state/arrayData/types'
	import { arrayData } from '$lib/state/arrayData/arrayData.svelte';
	import type { Snippet } from 'svelte';
	import { getProperty } from './helpers/getProperty';
	import { get } from './helpers/get';
let {key,props,children}:{key:T,props:SelectedProp<T>,children:Snippet<[child:GetReturnType<T>,sindex:number]>}=$props()
let data= $derived(key=="methods"&&{methods:arrayData.data.methods}||props&& get<T>(props))
console.log(props&&get<T>(props))
</script>

{#each getProperty<T>(data) as child,index  }
{@render children(child as GetReturnType<T>,index)}
{/each}  