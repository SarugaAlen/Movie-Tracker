<script>
    let naslov = "Zdravo"
    let ID = 0
    let ogledan = "true"
    let result = null
    	

    async function IzbrisiID() {
		
		let povezava = "http://127.0.0.1:8000/Film/" + ID 
        const res = await fetch(povezava, {
			method: 'DELETE',
		})
	}

	async function IzbrisiNaslov() {
		
		let povezava = "http://127.0.0.1:8000/Film/Naslov/" + naslov
        const res = await fetch(povezava, {
			method: 'DELETE',
		})
	}



</script>

<h1>
    Odstrani datoteko
</h1>

<p>Tukaj izberi, kateri film bo izbrisan</p>


<label for="Naslov">Vnesi naslov filma:</label>
<input name="Naslov" type="text" bind:value={naslov} />
<p>Ali pa vnesi ID:</p>
<input type="text" bind:value={ID} />

<button on:click={IzbrisiID}>Izbrisi!</button>
<button on:click={IzbrisiNaslov}>Izbrisi naslov!</button>

<p>{result}</p>


