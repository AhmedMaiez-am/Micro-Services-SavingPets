// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.12;

contract paperSign {
    mapping(address => bool) admin;
    mapping(address => bool) allowedToSign;
    mapping(bytes32 => Signature) signedDocument;
    struct Signature {
        uint256 timestamp;
        address signer;
        string description;
    }
    event DocumentSigned(
        bytes32 documentHash,
        uint256 timestamp,
        address signer,
        string description
    );

    constructor() {
        admin[msg.sender] = true;
        allowedToSign[msg.sender] = true;
    }

    modifier onlySigner() {
        require(allowedToSign[msg.sender], "You don't have this permission!");
        _;
    }

    modifier onlyAdmin() {
        require(admin[msg.sender], "You don't have this permission");
        _;
    }

    modifier isNotSigned(bytes32 _documentHash) {
        //disallow updating a signature
        require(
            signedDocument[_documentHash].timestamp == 0,
            "This document is already signed and cannot be signed another time."
        );
        _;
    }

    function addAdmin(address _admin) public onlyAdmin {
        admin[_admin] = true;
        allowedToSign[_admin] = true;
    }

    function removeAdmin(address _admin) public onlyAdmin {
        admin[_admin] = false;
        allowedToSign[_admin] = false;
    }

    function addSigner(address _signer) public onlyAdmin {
        allowedToSign[_signer] = true;
    }

    function sign(bytes32 documentHash, string calldata description)
        public
        onlySigner
        isNotSigned(documentHash)
    {
        Signature memory signature = Signature(
            block.timestamp,
            msg.sender,
            description
        );
        signedDocument[documentHash] = signature;
        emit DocumentSigned(
            documentHash,
            block.timestamp,
            msg.sender,
            description
        );
    }

    function getPaperSignature(bytes32 documentHash)
        public
        view
        returns (Signature memory)
    {
        return signedDocument[documentHash];
    }
}
