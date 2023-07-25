<script>
	import { currentSortingAlgorithm, sortingState } from '../../store';
	import { bubbleSort } from '../sortingAlgorithms/bubbleSort';
	import { insertionSort } from '../sortingAlgorithms/insertionSort';

	export let array;

	const SORTING_ALGORITHMS = {
		bubbleSort,
		insertionSort
	};

	const animateSorting = (selectedSortingAlgorithm) => {
		const sortingAlgorithm = SORTING_ALGORITHMS[selectedSortingAlgorithm];

		const swaps = sortingAlgorithm(array);

		$currentSortingAlgorithm = null;

		$sortingState = true;

		animateBars(swaps);
	};

	const animateBars = (swaps) => {
		if (swaps.length === 0) {
			$sortingState = false;

			return;
		}

		const [i, j] = swaps[0];

		[array[i], array[j]] = [array[j], array[i]];

		setTimeout(() => {
			animateBars(swaps.slice(1));
		}, 5);
	};

	$: {
		if (array && $currentSortingAlgorithm) {
			animateSorting($currentSortingAlgorithm);
		}
	}
</script>

<div class="flex items-end justify-center space-x-1 h-full px-1">
	{#each array as bar}
		<div class="w-2 bg-blue-400" style={`height: ${bar}px`} />
	{/each}
</div>
