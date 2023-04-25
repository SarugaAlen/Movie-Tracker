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

<div transition:blur class="max-w-sm overflow-hidden rounded-xl shadow-lg">
	<img class="max-h-40 max-w-xs" src={Image} alt="Sunset in the mountains" />
	<div class="px-6 py-6">
		<p class="mb-2 text-2xl font-bold {Ogledan == true ? 'text-green-600' : 'text-red-400'} ">
			{Naslov}
		</p>
		<p class="text-gray-700">Trajanje filma: {Trajanje} minut</p>
		<p class="text-gray-700">Leto izvajanja: {Leto}</p>
		<p class="text-gray-700">Reziser: {Reziser}</p>
		<p class="text-gray-700">Ocena: {Ocena}</p>

		<div class="flex flex-row gap-3 items-center">
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
				class="my-5 w-28 self-center rounded bg-red-500 p-3 text-sm font-bold text-white hover:bg-red-700"
				>Izbrisi</button
			>
		</div>
	</div>
</div>
