const CONTRACT_COL = "0x5B0D643dEf5fa4b07c37Dc5e5c9FAaCc0E1422ea";
const CONTRACT_STAKE = "0x5Cafc45E2f39d8056a965c17f691B7e394644299";
const CONTRACT_STAKING_2 = "0xeeA4B6cB5A61150894151dE69c2DF0Ec6e7B7DD5";

const ABI_COL = [{"inputs":[{"internalType":"string","name":"_initBaseURI","type":"string"},{"internalType":"string","name":"_initEvolvedURI","type":"string"},{"internalType":"string","name":"_initNotRevealedURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressMintedBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"devolveNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"evolution","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"evolveNFT","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"evolved","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"extraSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mintForAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"mintTokenId","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftPerAddressLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"notRevealedURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"parentAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reveal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revealed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setEvolution","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newEvolvedURI","type":"string"}],"name":"setEvolvedURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_limit","type":"uint256"}],"name":"setNftPerAddressLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_notRevealedURI","type":"string"}],"name":"setNotRevealedURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newAddress","type":"address"}],"name":"setParentAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]

const ABI_STAKE = [{"inputs":[{"internalType":"contract ERC721Enumerable","name":"_nft","type":"address"},{"internalType":"contract EvolvedRewards","name":"_token","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"NFTStaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"NFTUnstaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"claimForAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"earningInfo","outputs":[{"internalType":"uint256[1]","name":"info","type":"uint256[1]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"ownerTokens","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"vault","outputs":[{"internalType":"uint24","name":"tokenId","type":"uint24"},{"internalType":"uint48","name":"timestamp","type":"uint48"},{"internalType":"address","name":"owner","type":"address"}],"stateMutability":"view","type":"function"}]

const abi_staking_2 = [{"inputs":[{"internalType":"contract ERC721A","name":"_nft","type":"address"},{"internalType":"contract TokenRewards","name":"_token","type":"address"},{"internalType":"contract Headache","name":"_headacheContract","type":"address"},{"internalType":"contract Staking","name":"_stakingContract","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"EXTRA_KEYS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MaxperTx","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressMintedDogliens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressMintedHeadache","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"claimDoglien","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"claimDoglienEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"claimExt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"discRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"discountRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"doglienID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dogliensPerAddressLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"headachePerAddressLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"headache_wallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"isValidData","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastRewardsClaim","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintExtraDogliens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mintExtraHeadache","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"mintHeadache","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"mintHeadacheDisc","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mintHeadacheEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"message","type":"bytes32"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"recoverSigner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setClaimDoglienState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setClaimHeadacheState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_costDogliens","type":"uint256"}],"name":"setCostDogliens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_costHeadache","type":"uint256"}],"name":"setCostHeadache","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_discCost","type":"uint256"}],"name":"setDiscCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_discountRate","type":"uint256"}],"name":"setDiscountRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_ID","type":"uint256"}],"name":"setDoglienID","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_wallet","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setExtraKeys","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_wallet","type":"address"}],"name":"setHaWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxDogliensLimit","type":"uint256"}],"name":"setMaxDogliensPerAddressLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxHeadacheLimit","type":"uint256"}],"name":"setMaxHeadachePerAddLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxMintAmountPerTx","type":"uint256"}],"name":"setMaxMintPerTx","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_wallet","type":"address"}],"name":"setSignWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setSignatureRequired","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newSigner","type":"address"}],"name":"setSigner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_stakeTime","type":"uint256"}],"name":"setStakeTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"signatureRequired","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"signerAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"splitSignature","outputs":[{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"stakeTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"wallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]

var account = null;
var wallet = null;
var contract1 = null;
var contract2 = null;
var contract3 = null;
var price = null;

var tokenId = [];
var tokensStaked = [];
var colTokensArray = [];
var stakedTokensArray = [];
var stakeSelectedTokens = [];
var unstakeSelectedTokens = [];
var totalStaked = "";
var earningInfo = 0;
var earningInfoMath = 0;
var approved = "";
var j = 0;

window.ethereum.on('accountsChanged', function (accounts) {
	document.getElementById("approve").innerHTML = "Authorize Your Wallet";
	connect();
  })

//APPROVE YOUR WALLET
const approve = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
		if (account.length > 0) {
			var success = "";
			document.getElementById("approve").innerHTML = "WORKING..."
			try {
	  			const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
				account = accounts[0];

				document.getElementById("connect_button").innerHTML = account.substr(0,10) + "..." + account.substr(-4);
  
				const web3 = new Web3(window.ethereum);
				contract1 = new web3.eth.Contract(ABI_COL, CONTRACT_COL, { from: account });
				approved = await contract1.methods.isApprovedForAll(account, CONTRACT_STAKE).call();

				if (approved) {
					alert("Already approved!")
					console.log("Already approved!");
					document.getElementById("approve").innerHTML = "WALLET APPROVED";
					}
				else
					{
					await contract1.methods.setApprovalForAll(CONTRACT_STAKE, true).send({from: account});
					alert("Wallet approved!")
					console.log("Wallet approved!");
					success = document.getElementById("approve").innerHTML = "WALLET APPROVED";
					}
				}
			catch(e)
				{
				alert("Error: " + e.message)
				console.log("Error: ",e)
		  		document.getElementById("approve").innerHTML = "Authorize Your Wallet";
		  		}
			}
		}
	}

//CHECK WALLET APPROVAL
const approveState = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
		const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
		account = accounts[0];
		
		if (account.length > 0) {
			const web3 = new Web3(window.ethereum);
			contract1 = new web3.eth.Contract(ABI_COL, CONTRACT_COL, { from: account });
			approved = await contract1.methods.isApprovedForAll(account, CONTRACT_STAKE).call();

			if (approved) { document.getElementById("approve").innerHTML = "WALLET APPROVED"; }
			}
		}
		return false;
	}

//STAKE ONE TOKEN
const stakeOne = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
	  	if (tokenId != "") {
			var result = "";
			var success = "";
			document.getElementById(tokenId).innerHTML = "WORKING..."
			try {
			  	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
			  	account = accounts[0];

			  	const web3 = new Web3(window.ethereum);
			  	contract2 = new web3.eth.Contract(ABI_STAKE, CONTRACT_STAKE, { from: account });

			  	const gas = Math.round( await contract2.methods.stake(tokenId).estimateGas({from: account, to: CONTRACT_STAKE, }) * 1.1 );
			  	result = await contract2.methods.stake(tokenId).send({from: account, to: CONTRACT_STAKE, gas: gas});

				success = document.getElementById(tokenId).innerHTML = "At Work!";
			  	} 
		  	catch(e)
			  	{
			  	alert("Error: " + e.message)
			  	console.log("Error: ",e)
				document.getElementById(tokenId).innerHTML = "PUT TO WORK";
				}
		  	}
		}
  	}

//UNSTAKE ONE TOKEN
const unstakeOne = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
	  	if (tokenId != "") {
			var result = "";
			var success = "";
			document.getElementById(tokenId).innerHTML = "WORKING...";
			try {
			  	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
			  	account = accounts[0];

			  	const web3 = new Web3(window.ethereum);
			  	contract2 = new web3.eth.Contract(ABI_STAKE, CONTRACT_STAKE, { from: account });

			  	const gas = Math.round( await contract2.methods.unstake(tokenId).estimateGas({from: account, to: CONTRACT_STAKE, }) * 1.1 );
			  	result = await contract2.methods.unstake(tokenId).send({from: account, to: CONTRACT_STAKE, gas: gas});

				success = document.getElementById(tokenId).innerHTML = "At Home!";
			  	} 
		  catch(e)
			  	{
			  	alert("Error: " + e.message)
			  	console.log("Error: ",e)
				document.getElementById(tokenId).innerHTML = "BRING HOME";
				}
		  	}
		}
  	}

//STAKE ALL YOUR TOKENS
const stakeAll = async (e)=> {
  	if (typeof window.ethereum !== 'undefined') {
        if (colTokensArray != "") {
          	var result = "";
		var success = "";
		document.getElementById("tokens_available").innerHTML = "WORKING...";
          	try {
            	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
				account = accounts[0];

            	const web3 = new Web3(window.ethereum);
            	contract2 = new web3.eth.Contract(ABI_STAKE, CONTRACT_STAKE, { from: account });

            	const gas = Math.round( await contract2.methods.stake(colTokensArray).estimateGas({value: 0, from: account}) * 1.1 );
            	result = await contract2.methods.stake(colTokensArray).send({value: 0, from: account, gas: gas});

				success = document.getElementById("tokens_available").innerHTML = "SUCCESS!";
				} 
			catch(e)
				{
            	alert("Error: " + e.message)
            	console.log("Error: ",e)
				document.getElementById("tokens_available").innerHTML = totalStaked + " / " + 1500;
          		}
        	}
		else
			{
			alert("No more Dogliens for work.")
			console.log("No more Dogliens for work.");
			}
  		}
	}

//UNSTAKE ALL YOUR TOKENS
const unstakeAll = async (e)=> {
  	if (typeof window.ethereum !== 'undefined') {
		if (stakedTokensArray != "") {
          	var result = "";
			var success = "";
			document.getElementById("tokens_available").innerHTML = "WORKING...";
          	try {
            	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
				account = accounts[0];

            	const web3 = new Web3(window.ethereum);
            	contract2 = new web3.eth.Contract(ABI_STAKE, CONTRACT_STAKE, { from: account });

            	const gas = Math.round( await contract2.methods.unstake(stakedTokensArray).estimateGas({value: 0, from: account}) * 1.1 );
            	result = await contract2.methods.unstake(stakedTokensArray).send({value: 0, from: account, gas: gas});

				success = document.getElementById("tokens_available").innerHTML = "SUCCESS!";
				claimExt();
			   	}
			catch(e) 
				{
            	alert("Error: " + e.message)
            	console.log("Error: ",e)
				document.getElementById("tokens_available").innerHTML = totalStaked + " / " + 1500;
          		}
        	}
		else
			{
			alert("No tokens staked.")
			console.log("No tokens staked.");
			}
  		}
	}

//CLAIM YOUR REWARDS
const claimExt = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
		if (earningInfo != 0) {
			var result = "";
			var success = "";
			document.getElementById("tokens_available").innerHTML = "CLAIMING...";
			try {
			  	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
			  	account = accounts[0];
  
			  	const web3 = new Web3(window.ethereum);
			  	contract3 = new web3.eth.Contract(abi_staking_2, CONTRACT_STAKING_2, { from: account });
				
				addressSign = signatures[2];
				parse = earningInfoMath.toString() + "000000000000000000";

			  	const gas = Math.round( await contract3.methods.claimExt(account, parse, addressSign).estimateGas({value: 0, from: account}) * 1.1 );
			  	result = await contract3.methods.claimExt(account, parse, addressSign).send({value: 0, from: account, gas: gas});

				success = document.getElementById("tokens_available").innerHTML = "SUCCESS!";
				}
			catch(e) 
				{
            	alert("Error: " + e.message)
            	console.log("Error: ",e)
				document.getElementById("tokens_available").innerHTML = totalStaked + " / " + 1500;
          		}
        	}
		else
			{
			alert("No rewards to claim.")
			console.log("No rewards to claim.");
			}
  		}
	}

//CLAIM YOUR REWARDS
const claim = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
		if (earningInfo != 0) {
			var result = "";
			var success = "";
			document.getElementById("tokens_available").innerHTML = "CLAIMING...";
			try {
			  	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
			  	account = accounts[0];
  
			  	const web3 = new Web3(window.ethereum);
			  	contract3 = new web3.eth.Contract(abi_staking_2, CONTRACT_STAKING_2, { from: account });
				
				addressSign = signatures[2];
				parse = earningInfoMath.toString() + "000000000000000000";

			  	const gas = Math.round( await contract3.methods.claim(account, parse, stakedTokensArray, addressSign).estimateGas({value: 0, from: account}) * 1.1 );
			  	result = await contract3.methods.claim(account, parse, stakedTokensArray, addressSign).send({value: 0, from: account, gas: gas});

				success = document.getElementById("tokens_available").innerHTML = "SUCCESS!";
				}
			catch(e) 
				{
            	alert("Error: " + e.message)
            	console.log("Error: ",e)
				document.getElementById("tokens_available").innerHTML = totalStaked + " / " + 1500;
          		}
        	}
		else
			{
			alert("No rewards to claim.")
			console.log("No rewards to claim.");
			}
  		}
	}

//SELECT TOKENS
const select = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
	  	if (tokenId != "") {
			var tString = tokenId.toString();
			var tokenS = tString.slice(0,-4);
			var removeThisToken = stakeSelectedTokens.indexOf(tokenS);
			var removeThisToken2 = unstakeSelectedTokens.indexOf(tokenS);

			if (colTokensArray.indexOf(tokenS) != -1) {
				if (stakeSelectedTokens.indexOf(tokenS) === -1) {
					stakeSelectedTokens.push(tokenS);
					document.getElementById(tokenId).src = 'images/select-btn-1.png';
				}
				else
				{
					stakeSelectedTokens.splice(removeThisToken,1);
					document.getElementById(tokenId).src = 'images/select-btn-2.png';
				}

				if (stakeSelectedTokens.length != 0) {
					document.getElementById("stakeSelected").innerHTML = "STAKE SELECTED " + "(" + stakeSelectedTokens.length + ")";
					}

				if (stakeSelectedTokens.length == 0) {
					document.getElementById("stakeSelected").innerHTML = "STAKE SELECTED";
					}
				}
			else
				{
				if (unstakeSelectedTokens.indexOf(tokenS) === -1) {
					unstakeSelectedTokens.push(tokenS);
					document.getElementById(tokenId).src = 'images/select-btn-1.png';
					}
				else
					{
					unstakeSelectedTokens.splice(removeThisToken2,1);
					document.getElementById(tokenId).src = 'images/select-btn-2.png';
					}
	
				if (unstakeSelectedTokens.length != 0) {
					document.getElementById("unstakeSelected").innerHTML = "UNSTAKE SELECTED " + "(" + unstakeSelectedTokens.length + ")";
					}
	
				if (unstakeSelectedTokens.length == 0) {
					document.getElementById("unstakeSelected").innerHTML = "UNSTAKE SELECTED";
					}
				}
			}
		}
  	}

//STAKE SELECTED TOKENS
const stakeSelected = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
	  	if (stakeSelectedTokens.length != 0) {
		  	var result = "";
		  	var success = "";
		  	document.getElementById("tokens_available").innerHTML = "WORKING...";
			try {
			  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
			  account = accounts[0];

			  const web3 = new Web3(window.ethereum);
			  contract2 = new web3.eth.Contract(ABI_STAKE, CONTRACT_STAKE, { from: account });

			  const gas = Math.round( await contract2.methods.stake(stakeSelectedTokens).estimateGas({value: 0, from: account}) * 1.1 );
			  result = await contract2.methods.stake(stakeSelectedTokens).send({value: 0, from: account, gas: gas});

			  success = document.getElementById("tokens_available").innerHTML = "SUCCESS!";
			  } 
		  	catch(e)
			  {
			  alert("Error: " + e.message)
			  console.log("Error: ",e)
			  document.getElementById("tokens_available").innerHTML = totalStaked + " / " + 1500;
			  }
		  	}
	  	else
		  	{
		  	alert("No tokens selected to stake.")
		  	console.log("No tokens selected to stake.");
		  	}
		}
  	}


//UNSTAKE SELECTED TOKENS
const unstakeSelected = async (e)=> {/*
	if (typeof window.ethereum !== 'undefined') {
	  	if (unstakeSelectedTokens.length != 0) {
		  	var result = "";
		  	var success = "";
		  	document.getElementById("tokens_available").innerHTML = "WORKING...";
			try {
			  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
			  account = accounts[0];

			  const web3 = new Web3(window.ethereum);
			  contract2 = new web3.eth.Contract(ABI_STAKE, CONTRACT_STAKE, { from: account });

			  const gas = Math.round( await contract2.methods.unstake(unstakeSelectedTokens).estimateGas({value: 0, from: account}) * 1.1 );
			  result = await contract2.methods.unstake(unstakeSelectedTokens).send({value: 0, from: account, gas: gas});

			  success = document.getElementById("tokens_available").innerHTML = "SUCCESS!";
			  } 
		  	catch(e)
			  {
			  alert("Error: " + e.message)
			  console.log("Error: ",e)
			  document.getElementById("tokens_available").innerHTML = totalStaked + " / " + 1500;
			  }
		  	}
	  	else
		  	{
			alert("No tokens selected to unstake.")
			console.log("No tokens selected to unstake.");
			}
		}
  	*/}

//GET YOUR COLLECTION TOKENS IDs
const getTokens = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
    	console.log('MetaMask is installed!');
    	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
		account = accounts[0];
		
    	if (account.length > 0) {
  	  		const web3 = new Web3(window.ethereum);
			contract1 = new web3.eth.Contract(ABI_COL, CONTRACT_COL, {gas: 30000000});
			var getTokensArray = await contract1.methods.walletOfOwner(account).call();
			var NFTamount = await contract1.methods.balanceOf(account).call();

			var colTokensString = String(getTokensArray);
			colTokensArray = Array.from(getTokensArray);

			if (getTokensArray != "") {
				for(var i=0 ; i<NFTamount ; i++) {
					let div = document.createElement('p');
					div.className = 'NFTcard';
        			div.innerHTML = '<img class="card-image" src="images/dogliens/'
					+ colTokensArray[i] + '.png" onerror="this.src=' + "'images/load.png'" + '"> <img class="card-select-btn" src="images/select-btn-2.png" onclick="select(tokenId = [this.id])" id="' 
					+ colTokensArray[i] + "card" + '"> <a class="card-text"> DOGLIEN ID: ' + colTokensArray[i]
					+ ' </a> <br> <a class="card-text"> Available </a> <br> <button class="card-stk-btn" onclick="stakeOne(tokenId = [this.id])" id="' 
					+ colTokensArray[i] + '"> PUT TO WORK </button>';
        		
					const NFTcard = document.getElementById('grid');
					NFTcard.appendChild(div);
			 		}
				}

			if (colTokensArray != "") {
				document.getElementById("unstakeIds").innerHTML = NFTamount ;
				}
			else
				{
				document.getElementById("unstakeIds").innerHTML = "No more Dogliens for work.";
				}
			}
  		}
  		return false;
	}

//GET YOUR STAKED TOKENS IDs
const getTokens2 = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
    	console.log('MetaMask is installed!');
    	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
		account = accounts[0];


    	if (account.length > 0) {
  	  		const web3 = new Web3(window.ethereum);
  	  		contract2 = new web3.eth.Contract(ABI_STAKE, CONTRACT_STAKE, {gas: 30000000});
			var tokensStaked = await contract2.methods.tokensOfOwner(account).call();
			var NFTstaked = await contract2.methods.balanceOf(account).call();

			var stakedTokensString = String(tokensStaked);
			stakedTokensArray = Array.from(tokensStaked);

			if (tokensStaked != "") {
				for(var i=0 ; i<NFTstaked ; i++) {
					let div = document.createElement('p');
					div.className = 'NFTcard';
        			div.innerHTML = '<img class="card-image" src="images/dogliens/'
					+ stakedTokensArray[i] + '.png" onerror="this.src=' + "'images/load.png'" + '"> <img class="card-select-btn" src="images/select-btn-2.png" onclick="select(tokenId = [this.id])" id="' 
					+ stakedTokensArray[i] + "card" + '"> <a class="card-text"> DOGLIEN ID: ' + stakedTokensArray[i]
					+ ' </a> <br> <a class="card-text"> At Work </a> <br> <button class="card-unstk-btn" onclick="unstakeOne(tokenId = [this.id])" id="'
					+ stakedTokensArray[i] + '"> BRING HOME </button>';

					const NFTcard = document.getElementById('grid');
					NFTcard.appendChild(div);
			 		}
				}

			if (stakedTokensArray != "") {
				document.getElementById("stakeIds").innerHTML = NFTstaked ;
				}
			else
				{
				document.getElementById("stakeIds").innerHTML = "No staked dogliens.";
				}
			}
  		}
  		return false;
	}

// DISC Rewards Info
const rewards = async (e)=> {
	if (j < stakedTokensArray.length) {
		earningInfo += parseInt(await contract2.methods.earningInfo(account,[stakedTokensArray[j]]).call());
		j += 1;
		rewards(j);
   		}
	
	earningInfoMath = Math.ceil(earningInfo / 1e18);

	if (earningInfo != 0)
	   	{
		document.getElementById("rewards").innerHTML = earningInfoMath;
	   	}
   	else
	   	{
	   	document.getElementById("rewards").innerHTML = "No rewards to claim.";
	   	}
	}

//CONNECT YOUR WALLET
const connect = async (e)=> {
  	if (typeof window.ethereum !== 'undefined') {
    	console.log('MetaMask is installed!');
    	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
		account = accounts[0];

    	if (account.length != 0) {
        	document.getElementById("connect_button").innerHTML = account.substr(0,10) + "..." + account.substr(-4);

  	  		const web3 = new Web3(window.ethereum);
  	  		contract2 = new web3.eth.Contract(ABI_STAKE, CONTRACT_STAKE, {gas: 300000000});

      			totalStaked = await contract2.methods.totalStaked().call();
			tokensStaked = await contract2.methods.tokensOfOwner(account).call();
			//price = await contract2.methods.cost().call();

			stakedTokensArray = Array.from(tokensStaked);

			document.getElementById("tokens_available").innerHTML = totalStaked + " / " + 1500;

			approveState();
			await getTokens();
			getTokens2();
			rewards();
			}
    	else
			{
        	document.getElementById("connect_button").innerHTML = "Connect wallet";
			}
  	}
  	return false;
}
  
//BUTTON FUNCTIONS
document.getElementById('connect_button').onclick = connect;
document.getElementById('stakeAll').onclick = stakeAll;
document.getElementById('unstakeAll').onclick = unstakeAll;
document.getElementById('stakeSelected').onclick = stakeSelected;
//document.getElementById('unstakeSelected').onclick = unstakeSelected;
document.getElementById('claim').onclick = claim;
document.getElementById('approve').onclick = approve;

connect();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const currentYear = new Date().getUTCFullYear();
const launchDate = new Date(`Dec 12 ${currentYear} 16:00:00`);

var diff = null;

// update countdown time
function updateCountdown() {
  const currentTime = new Date();
  var currentTimeUTC = new Date(
    currentTime.getUTCFullYear(),
    currentTime.getUTCMonth(),
    currentTime.getUTCDate(),
    currentTime.getUTCHours(),
    currentTime.getUTCMinutes(),
    currentTime.getUTCSeconds(),
  );

  if (currentTimeUTC < launchDate) {
    diff = launchDate - currentTimeUTC;
    }
  else
    {
    diff = 0;
    }

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;
}

setInterval(updateCountdown, 1000);

const signatures = [
	'0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
	'0x00ffB2153E8F2475328898Fdf9DF0Ee9D3cd92F4',
	'0xa91708fe50c1d17cd45fe5136fc70f4dc2e8701635201e9b779bb19d4376f7ca0a768cd38a8bcf3d76cc9874c28358c4ea5a9a73189480f5b52166a640d929e61c'
  ]
