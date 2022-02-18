//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.11;

contract MyContract {
    function helloWorld()
        external
        pure
        returns (string memory _hello)
    {
        _hello = "Hello World!";
    }
}
