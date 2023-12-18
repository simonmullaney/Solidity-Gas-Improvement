// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;


contract Distribute {
    address[6] private contributors;
    uint256 private immutable createTime;
    
    constructor(address[6] memory _contributors) payable {
        createTime = block.timestamp;
        contributors = _contributors;
    }

    function distribute() external {
        require(block.timestamp > createTime + 2 weeks,"Too soon");
        uint256 bal = address(this).balance/6;
     
        payable(contributors[0]).transfer(bal);
        payable(contributors[1]).transfer(bal);
        payable(contributors[2]).transfer(bal);
        payable(contributors[3]).transfer(bal);
        payable(contributors[4]).transfer(bal);
        payable(contributors[5]).transfer(bal);
    }
}