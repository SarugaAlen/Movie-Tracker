<script>
    let naslov = ""
	let reziser = ""
	let leto = ""
	let ocena = 0
    let trajanje = 0
	let img_url = ""
    let ogledan = true
    let result = null

    async function ShraniVBazo() {
        const res = await fetch("http://127.0.0.1:8000/Film", {
			method: 'POST',
			headers: {
    		"Content-type": "application/json; charset=UTF-8"
 			 },
			body: JSON.stringify({
				Naslov : naslov,
				Leto : leto,				
				Trajanje : trajanje,
				Reziser : reziser,
				Ocena : ocena,
				Image : img_url,
				Ogledan : ogledan
			}),
		})
		const json = await res.json()
		result = JSON.stringify(json)
		console.log(result)
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

<label for="Leto">Vnesi leto izida filma:</label>
<input name="Leto" type="number" bind:value={leto} />

<label for="Trajanje">Vnesi trajanje filma:</label>
<input name="Trajanje" type="string" bind:value={trajanje} />

<label for="Reziser">Vnesi reziserja filma:</label>
<input name="Reziser" type="text" bind:value={reziser} />

<label for="Ocena">Vnesi oceno filma:</label>
<input name="Ocena" type="number" bind:value={ocena} />

<label for="Image">Vnesi URL slike filma:</label>
<input name="Image" type="text" bind:value={img_url} />

<label for="Ogledan">Ogledan?</label>
<input name="Ogledan" type="checkbox" bind:checked={ogledan} />



<button on:click|preventDefault={ShraniVBazo}>Shrani v bazo!</button>

<p>{result}</p>

