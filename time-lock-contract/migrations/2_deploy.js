
const  TimeLock= artifacts.require('TimeLock');
const  TradingToken= artifacts.require('TradingToken');

//using @openzeppelin/truffle-upgrades truffle upgrades so that smart contract can be upgraded easily.
const { deployProxy } = require('@openzeppelin/truffle-upgrades');
 
module.exports = async function (deployer) {
  const inst = await TradingToken.deployed();
  await deployProxy(TimeLock, [inst.address], { deployer, initializer: 'initializer' });
};

/*
NOTE  :
to deploy use 'npx truffle migrate'.
*/

