const exec = require('child_process').exec


module.exports = {
    getSignedBlockHeader: async function(rpcAddress, blockNumber) {
        return new Promise(function(resolve, reject) {
            const pathToIonBinary = "$GOPATH/src/github.com/taylorjdawson/ion/ion-cli"
            const cmd = `${pathToIonBinary}/ion-cli ${rpcAddress} getBlockByNumber_Clique ${blockNumber} signed`
            exec(cmd, async function(err, stdout, stderr) {
                if(!!err) {
                    console.log('Error while trying to exec ion-cli:', err)
                } else {
                    const signedHeader = stdout
                    resolve(signedHeader)
                }
            })
        })
    },
    getUnsignedBlockHeader: async function (rpcAddress, blockNumber) {
        return new Promise(function(resolve, reject) {
            const pathToIonBinary = "$GOPATH/src/github.com/taylorjdawson/ion/ion-cli"
            const cmd = `${pathToIonBinary}/ion-cli ${rpcAddress} getBlockByNumber_Clique ${blockNumber} unsigned`
            exec(cmd, async function(err, stdout, stderr) {
                if(!!err) {
                    console.log('Error while trying to exec ion-cli:', err)
                } else {
                    const unsignedHeader = stdout
                    resolve(unsignedHeader)
                }
            })
        })
    },
    getProofData: async function (rpcAddress, txHash) {
        const pathToIonBinary = "$GOPATH/src/github.com/taylorjdawson/ion/ion-cli"
        const cmd = `${pathToIonBinary}/ion-cli ${rpcAddress} getProof ${txHash}`
        await exec(cmd, async function(err, stdout, stderr) {
            if(!!err) {
                console.log('Error while trying to exec ion-cli:', err)
            } else {
                const proof = stdout.substring(stdout.indexOf('0x'))
                console.log(proof)
            }
        })
    }
}