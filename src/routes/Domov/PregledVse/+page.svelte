
<script>
	import Card from "$lib/Card.svelte";

    let naslov = "Zdravo"
    let ID = 0
    let ogledan = "true"
    let result = null
	let json = null


	// Delujoča
	///let promise = ShraniVBazo()

	///async function ShraniVBazo() {
    /////const res = await fetch("http://127.0.0.1:8000/Filmi")
	///const res = await fetch("http://127.0.0.1:8000/Filmi")
	///const json = await res.json()
	///console.log(json)
	///
	///if (res.ok) {
	///	return json;
	///} else {
	///	throw new Error(text);
	///}
	///}
	///
	///function handleClick() {
	///	promise = ShraniVBazo();
	///}


	/// DELA tudi, ločena od zgornje
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

	

	// Za page.js pusti pri miru. Prihaja iz load function
	export let data;
	console.log(data.json)
	
</script>


<h1 class="text-5xl text-center p-5 font-sans">
    Pregled vseh datotek
</h1>

<p class="text-xl text-center font-bold text-blue-400 m-4">Tukaj se nahaja vaša zbirka filmov in serij</p>

<!--
	<button on:click={handleClick}>
    Pregled vseh datotek
</button>

{#await promise}
	<p>...waiting</p>
{:then json}
	{#each json as item }
		<p> ID: {JSON.stringify(item._id)}, Naslov: {item.naslov}, Trajanje: {item.trajanje} minut</p>
	{/each}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

<p> ID: {JSON.stringify(item._id)}, Naslov: , Trajanje: {item.trajanje} minut</p>




{#each data.json as item (item._id) }
	<Card>
			<p> ID: {JSON.stringify(item._id)}</p>
			<p>Naslov filma: {item.Naslov}</p>
			<p>Trajanje filma: {item.Trajanje} minut</p>
			<p>Leto izvajanja: {item.Leto}</p>
			<p>Reziser: {item.Reziser}</p>
			<p>Ocena: {item.Ocena}</p>
			<p>Ogledan: {item.Ogledan}</p>	
			<img height = "400" width="400" src={item.Image} alt="Fotografija"/>
	</Card>
{/each}


-->

<!--Spraed operator-->
<div class="p-10 ml-10 flex flex-wrap gap-6 ">
	{#each data.json as item (item._id) }
		<Card {...item}>
		</Card>
	{/each}
</div>










