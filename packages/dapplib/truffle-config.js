require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drive flock slush stock raise still minor honey light army gesture'; 
let testAccounts = [
"0x6b97638e2280584e6ea7a71fa4fdba799393b8a5b72c7a1c02ce3ce736c0fbe2",
"0x1ca7ff982a37defa6216cee0077523cf5d5f41f3e8fbdba5011eb9d464e314d5",
"0x0527df0829cd8daf84c748f7fa455e1888fd0fea292902c096e90a848f11bd67",
"0x60ad51f39ccdf3f896a4649769457ae297e6fa6c77090dd9c9989d75e248dad0",
"0xd000ad37a2a0ff9458ed3b8d53bd60945d85be3d50028a37a3c640451861caf1",
"0xc3dbd2c488401c11286d616038b85172803dabdeba9cdc6fe27d9d36a970b423",
"0x477aa333da13b2b5505d207ca339cc04c036cd9d2ca82c1e196194d567d3e7ae",
"0xff4938d1d8600c294ae54600fd0c3cfa127d1133e4239ace766c83a657445180",
"0x719a5585c70b427c4e8f588ac0c5fc1b555ab29bc701f692b413aee033639c1b",
"0x6472bfc6d6ee692e28932ef81639d867af85d53f7050b8832d89363734a14591"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
