const Web3 = require('web3')

const validators = ["0x42eb768f2244c8811c63729a21a3569731535f06", "0x6635f83421bf059cd8111f180f0727128685bae4", "0x7ffc57839b00206d1ad20c69a1981b489f772031", "0xb279182d99e65703f0076e4812653aab85fca0f0", "0xd6ae8250b8348c94847280928c79fb3b63ca453e", "0xda35dee8eddeaa556e4c26268463e26fb91ff74f", "0xfc18cbc391de84dbd87db83b20935d3e89f5dd91"]




// let ion = await Ion.new(DEPLOYEDCHAINID);
// let clique = await Clique.new(ion.address);

let storage_addr = '0x9c4eb780ba99f27a64f6259589ad7388f10af208'

const web3 = new Web3('http://167.99.163.41:22000');

// TODO: TAKE  a look at this bc address might not be available as it is a thenable

// TODO: Check if account exists first
let acct = '0x9c8c83ecb89384db79b7f9da90224a8d6bcd1bf5'
let pass = 'Arrogance-Overhand-Reliant-Unsaved-Overstate-Excess'

// web3.eth.personal.importRawKey("e7d23467303719292f626b9d7f1a66008785ddbdaec1e2d2d62ca17f6b8276ee", "Arrogance-Overhand-Reliant-Unsaved-Overstate-Excess")
//     .then( (_address) => {address = _address})

const cliquey_addr = '0xdfb68aacc7af7c089a7bbda01c918cb3a9c488f7'

let clique_interface = require('../build/contracts/Clique.json')
let cliquey = new web3.eth.Contract(clique_interface.abi, cliquey_addr)

module.exports = {
    registerChain: async function (chainId, genesisBlockHash) {
        await web3.eth.personal.unlockAccount(acct, pass, 600)
        return cliquey.methods.RegisterChain(chainId, validators, genesisBlockHash, storage_addr)
                    .send({from: acct, gas: 450000000, gasPrice: 0})
    },
    // SubmitBlock(bytes32 _chainId, bytes _rlpUnsignedBlockHeader, bytes _rlpSignedBlockHeader, address _storageAddr)
    submitBlock: async function(chainId, rlpUnsignedBlockHeader, rlpSignedBlockHeader) {
        await web3.eth.personal.unlockAccount(acct, pass, 600)
        return cliquey.methods.SubmitBlock(chainId, rlpUnsignedBlockHeader, rlpSignedBlockHeader, storage_addr)
            .send({from: acct, gas: 450000000, gasPrice: 0}).then(console.log)
    },
    // function verifyAndExecute(bytes32 _chainId, bytes32 _blockHash, bytes20 _contractEmittedAddress, bytes _proof, bytes20 _expectedAddress)
    verifyAndExecute: async function(chainId, blockHash, contractEmittedAddress, proof, expectedAddress) {
        return cliquey.methods.verifyAndExecute(chainId, blockHash, contractEmittedAddress, proof, expectedAddress)
            .send({from: acct, gas: 450000000, gasPrice: 0}).then(console.log)
    }
}
