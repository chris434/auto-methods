<script>
	import { arrayData } from "$lib/state/arrayData/arrayData.svelte";
	import DataImport from "$lib/veiws/data-import/data-import.svelte";
	import Method from "$lib/veiws/method/method.svelte";
	import { setContext } from "svelte";
	setContext('data',arrayData)
</script>

<DataImport/>
<Method/>