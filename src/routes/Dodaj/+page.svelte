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

<h1 class="text-5xl text-center p-5 font-sans">
    Dodaj film
</h1>
<p class="text-xl text-center font-bold text-blue-400 m-4">Tukaj lahko dodajate filme</p>


<form class="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
	<div class="flex flex-wrap flex-row gap-10 justify-center">
		<div class="flex flex-col flex-wrap justify-evenly">
			<div class= "mt-4">
				<label class="block text-gray-600 font-bold mb-2" for="Naslov">Vnesi naslov filma:</label>
				<input class="shadow appearance-none border rounded-md w-auto text-gray-800" placeholder="Naslov" name="Naslov" type="text" bind:value={naslov} />
			</div>
			<div class="mt-4">
				<label class="block text-gray-600 font-bold mb-2" for="Leto">Vnesi leto izida filma:</label>
				<input class="shadow appearance-none border rounded-md w-auto text-gray-800" placeholder="Leto" name="Leto" type="number" bind:value={leto} />
			</div>
			<div class="mt-4">
				<label class="block text-gray-600 font-bold mb-2" for="Trajanje">Vnesi trajanje filma:</label>
				<input class="shadow appearance-none border rounded-md w-auto text-gray-800" placeholder="Dolžina filma" name="Trajanje" type="text" bind:value={trajanje} />
			</div>
		
			<div class="mt-4">
				<label class="block text-gray-600 font-bold mb-2" for="Reziser">Vnesi režiserja filma:</label>
				<input class="shadow appearance-none border rounded-md w-auto text-gray-800" placeholder="Režiser" name="Reziser" type="text" bind:value={reziser} />
			</div>
		</div>

		<div class=" mb-7 flex flex-col flex-wrap justify-evenly">
			<div class="mt-4">
				<label class="block text-gray-600 font-bold mb-2" for="Ocena">Vnesi oceno filma:</label>
				<input class="shadow appearance-none border rounded-md w-auto text-gray-800" name="Ocena" type="number" bind:value={ocena} />
			</div>
		
			<div class="mt-4">
				<label class="block text-gray-600 font-bold mb-2" for="Image">Vnesi URL slike filma:</label>
				<input class="shadow appearance-none border rounded-md w-auto text-gray-800" placeholder="URL fotografije" name="Image" type="text" bind:value={img_url} />
			</div>
		
			<div class="mt-4 flex items-center justify-center">
				<label class="ml-2 block font-bold text-xl text-gray-600" for="Ogledan">Ogledan</label>
				<input class=" m-7 w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" name="Ogledan" type="checkbox" bind:checked={ogledan} />
			</div>
		</div>	
 	</div>
	 	<div class="flex flex-col mt-8">
			<button on:click|preventDefault={ShraniVBazo} class= "self-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded max-w-lg">Shrani v bazo!</button>
		</div>
</form>



