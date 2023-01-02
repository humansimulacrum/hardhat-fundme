require('@nomicfoundation/hardhat-toolbox');
require('hardhat-deploy');
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	defaultNetwork: 'hardhat',
	networks: {
		goerli: {
			url: process.env.GOERLI_RPC_URL || '',
			accounts: [process.env.GOERLI_PRIVATE_KEY || ''],
			chainId: 5,
		},
		localhost: {
			url: 'http://127.0.0.1:8545/',
			chainId: 31337,
		},
	},
	namedAccounts: {
		deployer: {
			default: 0,
			5: 0,
		},
	},
	solidity: {
		compilers: [
			{
				version: '0.8.8',
			},
			{
				version: '0.6.6',
			},
		],
	},
};
