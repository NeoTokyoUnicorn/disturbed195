// get wallet provider, phantom
const get_provider = () => {
  if ('phantom' in window) {
    const provider = window.phantom?.solana;

    if (provider?.isPhantom) {
      return provider;
    }
  }

  window.open('https://phantom.app/', '_blank');
};

// get balance from connected Phantom wallet
async function is_NFT_in_wallet() {
  // alt window.solana
  const phantom = get_provider();
  const resp = await phantom.connect();
  console.log("Wallet Connected: " + phantom.isConnected);
  if (phantom.isConnected !== false) {

    const wallet = phantom.publicKey;
    const wallet_b58 = phantom.publicKey.toString();
	alert(wallet_b58);

    // connect to the cluster
    console.log("Connecting Cluster");
    var connection = new solanaWeb3.Connection(
      solanaWeb3.clusterApiUrl('devnet'),
      'confirmed',
    );
	  
//	const web3 = require("@solana/web3.js");
(async () => {
  const accountPublicKey = new solanaWeb3.PublicKey(
    wallet_b58
  );
	
  const mintAccount = new solanaWeb3.PublicKey(
    "6wHXQTFbvhxUyKZVqNgb93vRwzVeWRpQ3kZ5MPccsGK8" //disturbed mint token
  );
	
  alert ("mintAccount " + mintAccount);
	
  console.log(
    await connection.getTokenAccountsByOwner(accountPublicKey, {
      mint: mintAccount
    })
  );
	
(async () => {
  let mintPubkey = mintAccount;
  let tokenmetaPubkey = await Metadata.getPDA(mintPubkey);

  const tokenmeta = await Metadata.load(connection, tokenmetaPubkey);
  console.log(tokenmeta);
})();	
	

//	if (await connection.getTokenAccountsByOwner(accountPublicKey, {
//      mint: mintAccount}).lenght > 0)
//	  { return true; } else { return false; } 
//	)
})();
	
  }
}

var isPresent = is_NFT_in_wallet();
alert(isPresent);


