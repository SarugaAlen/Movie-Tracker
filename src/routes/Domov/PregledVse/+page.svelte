
<script>
    let naslov = "Zdravo"
    let ID = 0
    let ogledan = "true"
    let result = null
	let json = null

	let promise = ShraniVBazo()


	/// DELA
	//async function ShraniVBazo() {
    //    //const res = await fetch("http://127.0.0.1:8000/Filmi")
	//	const res = await fetch("http://127.0.0.1:8000/Filmi/Pridobi/64451c725d451970bc2da2c9")
	//	const json = await res.json()
    //
	//	if (res.ok) {
	//		return json.Naslov;
	//	} else {
	//		throw new Error(text);
	//	}
	//	//console.log(json)
	//	//result= JSON.parse(json)
	//	//result = JSON.stringify(json)
	//}

	async function ShraniVBazo() {
    //const res = await fetch("http://127.0.0.1:8000/Filmi")
	const res = await fetch("http://127.0.0.1:8000/Filmi")
	const json = await res.json()
	console.log(json)
	
	if (res.ok) {
		return json;
	} else {
		throw new Error(text);
	}
	}

	function handleClick() {
		promise = ShraniVBazo();
	}

	
</script>


<h1>
    Pregled vseh datotek
</h1>

<button on:click={handleClick}>
    Pregled vseh datotek
</button>




{#await promise}
	<p>...waiting</p>
{:then json}
	{#each json as item }
		<p> ID: {JSON.stringify(item._id)}, Naslov: {item.Naslov}, Trajanje: {item.Trajanje} minut</p>
	{/each}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}






