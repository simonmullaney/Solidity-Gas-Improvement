import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { expect } from "chai";
import { ethers } from "hardhat";



describe("Distribute", async function () {
  let acct1: SignerWithAddress;
  let acct2: SignerWithAddress;
  let acct3: SignerWithAddress;
  let acct4: SignerWithAddress;
  let acct5: SignerWithAddress;
  let acct6: SignerWithAddress;

  before(async function() {
    [acct1, acct2, acct3, acct4, acct5, acct6] = await ethers.getSigners();
  });


  async function deployDistribute() {
    const Distribute = await ethers.getContractFactory("Distribute");
    const distribute = await Distribute.deploy([acct1.address, acct1.address, acct1.address, acct1.address, acct1.address, acct1.address]);
    return distribute;
  }

  it('Should measure gas efficiency of deployDistribute', async function () {
    const Distribute = await ethers.getContractFactory('Distribute');
    const distribute = await deployDistribute();
    await ethers.provider.send("evm_increaseTime", [60 * 60 * 24 * 14]); // Increase time by 14 days
    await ethers.provider.send("evm_mine"); // Mine the next block
    const tx = await distribute.distribute();
    const receipt = await tx.wait();
  });
 
});
