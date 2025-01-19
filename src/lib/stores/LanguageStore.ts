// info about the language
import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

// name of the language
export let languageName: Writable<string> = writable<string>("FreLanguage ...");
// all possible unit types
export let unitTypes: Writable<string[]> = writable<string[]>([]);
// all file extensions associated with the model units
export let fileExtensions: Writable<string[]> = writable<string[]>([]);
// all possible projections
export let projectionNames: Writable<string[]> = writable<string[]>(["default", "view1", "view2"]);
// the projections that are currently chosen to be shown
export let projectionsShown: Writable<string[]> = writable<string[]>(["default"]);
