import { writable } from 'svelte/store';

export const array = writable([]);

export const currentSortingAlgorithm = writable(null);

export const sortingState = writable(false);
