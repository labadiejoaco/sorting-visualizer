<script>
	import { currentSortingAlgorithm, sortingState } from '../../store';

	export let generateNewArray;

	const handleGenerateNewArray = () => {
		if (!$sortingState) {
			generateNewArray();
		}
	};

	const setSortingAlgorithm = (sortingAlgorithm) => {
		if (!$sortingState) {
			$currentSortingAlgorithm = sortingAlgorithm;
		}
	};
</script>

<button on:click={handleGenerateNewArray}>Generate New Array</button>
<button on:click={() => setSortingAlgorithm('bubbleSort')}>Bubble Sort</button>
<button on:click={() => setSortingAlgorithm('insertionSort')}> Insertion Sort</button>
