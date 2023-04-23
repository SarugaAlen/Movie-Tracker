
<script>
    let naslov = "Zdravo"
    let ID = 0
    let ogledan = "true"
    let result = null
	let json


	async function ShraniVBazo() {
        const res = await fetch("http://127.0.0.1:8000/Filmi")
		const json = await res.json()
		result = JSON.stringify(json)
	}

	//export let data;
	
</script>


<h1>
    Pregled vseh datotek
</h1>

<!--
<div>
	{#if result}
	  {#each result as item}
		<p>{item.naslov}</p>
	  {/each}
	{:else}
	  <p>Loading...</p>
	{/if}
</div>
-->


<button on:click={ShraniVBazo}>
    Pregled vseh datotek
</button>


