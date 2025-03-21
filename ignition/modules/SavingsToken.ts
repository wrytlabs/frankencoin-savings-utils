import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';
import { storeConstructorArgs } from '../../helper/store.args';
import { args, params } from '../params/SavingsToken';

export const NAME: string = 'SavingsToken';
export const MOD: string = NAME + 'Module';
console.log(NAME);

// params
console.log('Imported Params:');
console.log(params);

// export args
storeConstructorArgs(NAME, args);
console.log('Constructor Args');
console.log(args);

export default buildModule(MOD, (m) => {
	return {
		[NAME]: m.contract(NAME, args),
	};
});
