export function bubbleSort(arr) {
	const sorted = [...arr];
	const swaps = [];

	for (let i = sorted.length; i > 0; i--) {
		let noSwaps = true;

		for (let j = 0; j < i - 1; j++) {
			if (sorted[j] > sorted[j + 1]) {
				swaps.push([j, j + 1]);
				[sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];

				noSwaps = false;
			}
		}

		if (noSwaps) {
			break;
		}
	}

	return swaps;
}
