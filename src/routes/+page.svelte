<script>
	import Bars from '$lib/components/Bars.svelte';
	import Toolbar from '$lib/components/Toolbar.svelte';
	import { onMount } from 'svelte';
	import { array } from '../store';

	const getRandomIntInRange = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	const fillArray = () => {
		if ($array.length !== 0) {
			$array = [];
		}

		for (let i = 0; i < 100; i++) {
			$array = [...$array, getRandomIntInRange(5, 500)];
		}
	};

	onMount(() => {
		fillArray();
	});
</script>

<main class="h-screen flex flex-col">
	<Toolbar generateNewArray={fillArray} />
	<Bars array={$array} />
</main>
