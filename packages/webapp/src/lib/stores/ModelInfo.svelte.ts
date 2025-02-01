export interface ModelInfo {
	// name of the currently shown model
	modelName: string
	// names of all model unit types
	unitTypes: string[]
	// all known file extensions
	fileExtensions: string[]
	// all possible projections
	projectionNames: string[]
}

export const modelInfo: ModelInfo = $state({
	modelName: 'FreLanguage ...',
	unitTypes: [] as string[],
	fileExtensions: [] as string[],
	projectionNames: [] as string[]
})
export interface serverInfo {
	allModelNames: string[]
}
export const serverInfo: serverInfo = $state({
	allModelNames: []
})
