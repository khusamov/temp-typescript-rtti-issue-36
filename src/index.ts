import "reflect-metadata"
import {reflect} from 'typescript-rtti'
import IMovable from './IMovable';

console.log(
	// Uncaught TypeError: Type has kind any, expected interface
	reflect<IMovable>().as('interface').reflectedInterface
)
