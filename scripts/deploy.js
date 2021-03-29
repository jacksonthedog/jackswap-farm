const { run, ethers } = require("hardhat");

// this.cake = await CakeToken.new({ from: minter });
// this.syrup = await SyrupBar.new(this.cake.address, { from: minter });
// this.lp1 = await MockBEP20.new("LPToken", "LP1", "1000000", { from: minter });
// this.lp2 = await MockBEP20.new("LPToken", "LP2", "1000000", { from: minter });
// this.lp3 = await MockBEP20.new("LPToken", "LP3", "1000000", { from: minter });
// this.chef = await MasterChef.new(
//   this.cake.address,
//   this.syrup.address,
//   dev,
//   "1000",
//   "100",
//   { from: minter }
// );
// await this.cake.transferOwnership(this.chef.address, { from: minter });
// await this.syrup.transferOwnership(this.chef.address, { from: minter });

async function deploy() {
  await run("compile");
  const [owner, minter] = await ethers.getSigners();
  console.log(`Owner: ${owner.address}`);
  // Get the contract constructor
  const Jack = await ethers.getContractFactory("JackToken");
  const Syrup = await ethers.getContractFactory("SyrupBar");
  const MasterChef = await ethers.getContractFactory("MasterChef");
  // const MockBEP20 = await ethers.getContractFactory("libs/MockBEP20");

  // Create contract instance
  const jack = await Jack.deploy();
  const syrup = await Syrup.deploy(jack.address);

  await jack.deployed();
  await syrup.deployed();

  const masterChef = await MasterChef.deploy(
    jack.address,
    syrup.address,
    owner.address,
    "1000",
    "80"
  );
  // const mockBEP20 = await MockBEP20.deploy();

  // Wait for contract deployed;
  await masterChef.deployed();

  // Transfer ownership of contract to MasterChef
  await jack.transferOwnership(masterChef.address);
  await syrup.transferOwnership(masterChef.address);
  // await mockBEP20.deployed();
  console.log(`${await jack.name()}: ${jack.address}`);
  console.log(`${await syrup.name()}: ${syrup.address}`);
  console.log(`MasterChef: ${masterChef.address}`);
}

deploy()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
