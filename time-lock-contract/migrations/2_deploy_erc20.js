
const  TradingToken= artifacts.require('TradingToken');

module.exports = function (deployer) {
  deployer.deploy(TradingToken);
};

/*
//using @openzeppelin/truffle-upgrades truffle upgrades so that smart contract can be upgraded easily.
const { deployProxy } = require('@openzeppelin/truffle-upgrades');
 
module.exports = async function (deployer) {
  await deployProxy(TimeLock, { deployer, initializer: 'initializer' });
};
*/

