<script>
	import { createEventDispatcher } from 'svelte';
	import { blur } from 'svelte/transition';

	export let _id;
	export let Naslov;
	export let Trajanje;
	export let Leto;
	export let Reziser;
	export let Ocena;
	export let Ogledan;
	export let Image;

	const dispatch = createEventDispatcher();

	function spremeniStanje() {
		dispatch('sprememba', {
			id: _id,
			ogledan: Ogledan
		});
	}

	function izbrisiCard() {
		dispatch('izbris', {
			id: _id
		});
	}
</script>

<!--max-w-sm-->

<div transition:blur class=" overflow-hidden rounded-xl shadow-lg">
	<img class="max-h-60" src={Image} alt="Fotografija {Naslov}" />
	<div class="p-6 flex flex-col items-center">
		<p class="mb-2 text-2xl font-bold {Ogledan == true ? 'text-green-600' : 'text-red-400'} ">
			{Naslov}
		</p>
		<p class="text-gray-700">Trajanje filma: {Trajanje} minut</p>
		<p class="text-gray-700">Leto izvajanja: {Leto}</p>
		<p class="text-gray-700">Režiser: {Reziser}</p>
		<p class="text-gray-700">Ocena: {Ocena}</p>

		<div class=" pt-5 flex flex-row gap-4 justify-center">
			{#if Ogledan == true}
				<button
					on:click={spremeniStanje}
					class="my-5 w-28 self-center rounded bg-green-500 px-5 py-3 text-sm font-bold text-white hover:bg-green-700"
					>Ogledan</button
				>
			{:else}
				<button
					on:click={spremeniStanje}
					class="my-5 w-28 self-center rounded bg-red-500 px-5 py-3 text-sm font-bold text-white hover:bg-red-700"
					>Neogledan</button
				>
			{/if}

			<button
				on:click={izbrisiCard}
				class=" text-md font-bold underline text-red-400 hover:text-red-700"
				>Izbrisi</button
			>
		</div>
	</div>
</div>
