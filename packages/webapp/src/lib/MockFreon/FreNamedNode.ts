import { type FreNode } from './FreNode.js';

export interface FreNamedNode extends FreNode {
	name: string;

	// copy(): FreNamedNode;
}
