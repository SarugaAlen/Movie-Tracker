<script>
    let naslov = "Zdravo"
    let ID = 0
    let ogledan = "true"
    let result = null

    let povezavaDodaj = "http://127.0.0.1:8000/Filmi/Dodaj"
    	
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

    async function Izbrisi() {
        const res = await fetch(povezavaDodaj, {
			method: 'DELETE',
			body: JSON.stringify({
				naslov
			})
		})

		const json = await res.json()
		result = JSON.stringify(json)
	}


</script>


<h1>
    Odstrani datoteko
</h1>

<p>Tukaj izberi, kateri film bo izbrisan</p>




<label for="Naslov">Vnesi naslov filma:</label>
<input name="Naslov" type="text" bind:value={naslov} />
<p>Ali pa vnesi ID:</p>
<input name="Trajanje" type="number" bind:value={ID} />

<button on:click={Izbrisi}>Shrani v bazo!</button>

<p>{result}</p>