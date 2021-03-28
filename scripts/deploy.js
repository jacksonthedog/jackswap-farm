const { run, ethers } = require("hardhat");
async function deploy() {
  await run("compile");
  const [deployer] = await ethers.getSigners();
  const JackToken = await ethers.getContractFactory("JackToken");
  const jack = await JackToken.deploy();
  await jack.deployed();
  // await jack.mint(deployer, 100);
  console.log(`${await jack.name()}: ${jack.address}`);
  console.log(`Owner: ${deployer.address}`);
  // console.log(`${await jack.mint(100)}`);
  console.log(`${await jack.balanceOf(deployer.address)}`);
}

deploy()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
