require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog olympic tell educate ranch remember attitude include enter oil section'; 
let testAccounts = [
"0x1528be6c6cb9ae41a0856a3476161dd15892b79e9e747bffa933301b997219c9",
"0x267e8b0078a3f4b8d7aaa4dd735f1da8886ea2d609774fbe076a89f35c853532",
"0x0eaa28f215c50debd3cc654e1dd2d245e80c6952c288211597d820d3836c4663",
"0xdfa5f0f3a060acd128e42d667e854db48075bdafea9e984a0becddf7b5f838dc",
"0xb4dd004aca5f09258c78de99c1883baf450d73e5d68f7031ffbb5ef570dab2e6",
"0xcfc584931cde3a30221cc851bfd5f5e2951f95be673db0919e50431e0b583144",
"0x724939910764189b58038ab0415787a694b83952090899f5a7db1179f515b709",
"0x08e0abf2baed6c32633803fb170f799eeba98eba5a3f5a59a3cfe4bd1295229a",
"0xe05b9b3e3465cc5d28328cc5b37968490a2e2f25d0648fee407091264a2eba76",
"0xcf41045c70131653aa14132c8aa31f56e5a0e42f52042542fa067a540bfcd73e"
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
            version: '^0.8.0'
        }
    }
};

