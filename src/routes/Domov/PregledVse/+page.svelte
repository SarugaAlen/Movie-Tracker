<script>
	import Card from '$lib/Card.svelte';
	

	let naslov = 'Zdravo';
	let ID = 0;
	let ogledan = 'true';
	let result = null;
	let json = null;


	// Za page.js pusti pri miru. Prihaja iz load function
	export let data;

	async function updateCard(event) {
		let id = event.detail.id;
		let ogledan = event.detail.ogledan;
		console.log(event.detail)
		let povezava = 'http://127.0.0.1:8000/Film/Status/' + id + '/' + ogledan;
		const res = await fetch(povezava, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json; charset=UTF-8'
			}
		})
		const getResponse = await fetch('http://127.0.0.1:8000/Filmi');
    	json = await getResponse.json();
		data.json = json;
	}

	async function deleteCard(event) {
		let id = event.detail.id;
		console.log(event.detail)
	
		let povezava = "http://127.0.0.1:8000/Film/" + id
        const res = await fetch(povezava, {
			method: 'DELETE',
		})
	

		const getResponse = await fetch('http://127.0.0.1:8000/Filmi');
    	json = await getResponse.json();
		data.json = json;
	}
</script>

[
<h1 class="p-5 text-center font-sans text-5xl">Pregled vseh datotek</h1>

<p class="m-4 text-center text-xl font-bold text-blue-400">
	Tukaj se nahaja vaša zbirka filmov in serij
</p>

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


-->

<!--Spraed operator-->
<div class="ml-10 flex flex-wrap gap-7 p-10">
	{#each data.json as item (item._id)}
		<Card on:sprememba={updateCard} on:izbris={deleteCard} {...item} />
	{/each}
</div>

]
