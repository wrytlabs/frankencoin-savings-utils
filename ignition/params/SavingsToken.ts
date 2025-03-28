import { Address } from 'viem';

export type DeploymentParams = {
	zchf: Address;
	savings: Address;
	name: string;
	symbol: string;
};

export const params: DeploymentParams = {
	zchf: '0x89C31867c878E4268C65de3CDf8Ea201310c5851',
	savings: '0xc50bF51ee9AaC98E2886ABD8c18876dA11D38709',
	name: 'Savings Token for Frankencoin ZCHF',
	symbol: 'stZCHF',
};

export type ConstructorArgs = [Address, Address, string, string];

export const args: ConstructorArgs = [params.zchf, params.savings, params.name, params.symbol];
