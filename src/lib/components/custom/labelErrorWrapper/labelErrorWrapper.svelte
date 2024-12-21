<script lang="ts">
	import Label from "$lib/components/ui/label/label.svelte";
   
	import type { Props } from "./types";

let {label,children,errorMessage,labelId}:Props=$props()
</script>

<div>
    <Label for={labelId}>{label}</Label>
      {@render children()}
    <div class="text-red-400 mt-3">{errorMessage}</div>  
    </div>