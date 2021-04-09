const JackToken = artifacts.require("JackToken");
const MasterChef = artifacts.require("MasterChef");
const SyrupBar = artifacts.require("SyrupBar");

module.exports = async function (deployer, _, [roger]) {
  await deployer.deploy(JackToken);
  const jackToken = await JackToken.deployed();
  await deployer.deploy(SyrupBar, jackToken.address);
  const syrupBar = await SyrupBar.deployed();

  await deployer.deploy(
    MasterChef,
    jackToken.address,
    syrupBar.address,
    roger,
    "10",
    "440"
  );

  const masterChef = await MasterChef.deployed();

  await jackToken.transferOwnership(masterChef.address);
  await syrupBar.transferOwnership(masterChef.address);
};
