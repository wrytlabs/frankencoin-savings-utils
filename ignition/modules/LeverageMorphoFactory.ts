import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';
import { storeConstructorArgs } from '../../helper/store.args';
import { args, params } from '../params/LeverageMorphoFactory'; // <-- check for correct import

export const NAME: string = 'LeverageMorphoFactory';
export const MOD: string = NAME + 'Module';
console.log(NAME);

// params
console.log('Imported Params:');
console.log(params);

// export args
storeConstructorArgs(NAME, args);
console.log('Constructor Args');
console.log(args);

// fail safe
process.exit();

export default buildModule(MOD, (m) => {
	return {
		[NAME]: m.contract(NAME, args),
	};
});
