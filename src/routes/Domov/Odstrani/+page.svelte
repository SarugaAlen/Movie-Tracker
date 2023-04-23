<script>
    let naslov = "Zdravo"
    let ID = 0
    let ogledan = "true"
    let result = null
    	
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
		
		let povezava = "http://127.0.0.1:8000/Film/" + ID
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

<button on:click={Izbrisi}>Izbrisi!</button>

<p>{result}</p>


