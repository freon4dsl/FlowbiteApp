import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export let drawerHidden: Writable<boolean> = writable<boolean>(true);
