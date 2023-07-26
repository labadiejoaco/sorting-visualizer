<script>
	import { Button, NavBrand, NavHamburger, NavLi, NavUl, Navbar } from 'flowbite-svelte';
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

<Navbar let:hidden let:toggle class="border-b-2 mb-8">
	<NavBrand>
		<h1 class="text-xl font-semibold">Sorting Visualizer</h1>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<NavLi>
			<Button color="dark" on:click={handleGenerateNewArray}>Generate New Array</Button>
		</NavLi>
		<NavLi>
			<Button color="light" on:click={() => setSortingAlgorithm('bubbleSort')}>Bubble Sort</Button>
		</NavLi>
		<NavLi>
			<Button color="light" on:click={() => setSortingAlgorithm('insertionSort')}
				>Insertion Sort</Button
			>
		</NavLi>
	</NavUl>
</Navbar>
