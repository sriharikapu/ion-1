let Web3 = require('web3')
const rpc_node_local = '127.0.0.1:8545'
const rcp_node_quorum = 'http://167.99.163.41:22001'
const rinkeby = 'https://rinkeby.infura.io/v3/186cde1cc4ec45fdac45b9e7c120c34c'
const ion = require('./ionLogic')
const specialSauce = require('./specialSauce')

// Initialize web3
const web3 = new Web3(
    new Web3.providers.WebsocketProvider('wss://rinkeby.infura.io/ws')
)

// const web3 = new Web3(
//     new Web3.providers.WebsocketProvider('ws://167.99.163.41:23002')
// )

// Get/setup the test contract instance
// let abi = require('./contract_sol_Coursetro.json')
// Coursetro = new web3.eth.Contract(abi, '0x3948b02737704ac1a1178c934da9265a909072cd')
// Coursetro.events.Instructor({}, (error, event) => { })
//     .on('data', async (event) => {
//
//         // get previous blockhash
//         let genesisHash =  await web3.eth.getBlock(event.blockNumber - 1)
//         let blockToSubmit =  await web3.eth.getBlock(event.blockNumber)
//
//         // Arbitrary for now
//         let chainId = event.transactionHash
//
//         let txData_reg = await ion.registerChain(chainId, genesisHash.hash)
//         console.log(txData_reg)
//         let signedBlockHeader = await specialSauce.getSignedBlockHeader(rcp_node_quorum, blockToSubmit)
//         let unSignedBlockHeader = await specialSauce.getUnsignedBlockHeader(rcp_node_quorum, blockToSubmit)
//         let txData_sub = await ion.submitBlock(chainId, unSignedBlockHeader, signedBlockHeader)
//         specialSauce.getProofData(rcp_node_quorum, txData_reg.transactionHash)
//         console.log("made it thus far...")
//     })
//     .on('changed', (event) => {
//     })
//     .on('error', console.error);

// const test_contract_quorum = '0x7350205b691d89013eb96dcc115b5c0e8135a97a'
let Murdoch = require('../build/Murdoch.json')
let abi = Murdoch.abi
murdoch = new web3.eth.Contract(abi, '0x3747b299d0d8ef209e2a84720483630faaf732dd')
murdoch.events.topUp({}, (error, event) => { })
    .on('data', (event) => {
        console.log(event);
    })
    .on('changed', (event) => {
    })
    .on('error', console.error);

// solc SampleContract.sol --combined-json abi,asm,ast,bin,bin-runtime,clone-bin,devdoc,interface,opcodes,srcmap,srcmap-runtime,userdoc > contracts.json

// Get the blockheaders

// Register the chain (genesis block == current block - 1)

// Submit block

// Get the transaction proof

