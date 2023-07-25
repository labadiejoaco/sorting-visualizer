export function insertionSort(arr) {
	const sorted = [...arr];
	const swaps = [];

	for (let i = 1; i < sorted.length; i++) {
		const currentVal = sorted[i];

		let j;

		for (j = i - 1; j >= 0 && sorted[j] > currentVal; j--) {
			swaps.push([j, j + 1]);
			sorted[j + 1] = sorted[j];
		}

		sorted[j + 1] = currentVal;
	}

	return swaps;
}
