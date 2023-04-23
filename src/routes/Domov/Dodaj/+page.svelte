<script>
    let naslov = ""
    let trajanje = 0
    let ogledan = true
    let result = null
    let json = null

    	
    //Poglej kako se delajo api klici s tem fetchom 
   //async function ShraniVBazo() {
   //    const res = await fetch('https://httpbin.org/post', {
	//		method: 'POST',
	//		body: JSON.stringify({
	//			naslov,
	//			trajanje,
   //            ogledan
	//		})
	//	})

	//	const json = await res.json()
	//	result = JSON.stringify(json)
	//}

    async function ShraniVBazo() {
        const res = await fetch("http://127.0.0.1:8000/Filmi/Dodaj", {
			method: 'POST',
			headers: {
    		'content-type': 'application/json'
  			},
			body: JSON.stringify({
				naslov,
				trajanje,
				ogledan
			})
		})

		const json = await res.json()
		result = JSON.stringify(json)
	}


</script>


<h1>
    Dodaj datoteko
</h1>

<p>Tukaj se dodajajo elementi v podatkovno bazo:</p>

<p>Ime filma: {naslov}</p>
<p>Trajanje filma: {trajanje}</p>

{#if ogledan == false}
    <p>Film ni bil ogledan</p>
{:else}
    <p>Film je bil ogledan</p>
{/if}


<label for="Naslov">Vnesi naslov filma:</label>
<input name="Naslov" type="text" bind:value={naslov} />
<label for="Trajanje">Vnesi naslov filma:</label>
<input name="Trajanje" type="number" bind:value={trajanje} />
<label for="Ogledan">Ogledan?</label>
<input name="Ogledan" type="checkbox" bind:checked={ogledan} />


<button on:click={ShraniVBazo}>Shrani v bazo!</button>

<p>{result}</p>