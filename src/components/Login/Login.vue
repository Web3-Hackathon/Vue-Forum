<script>

import VueMetamask from 'vue-metamask';
import axios from 'axios'
import { ethers } from 'ethers'
import { error } from 'console';
import { solana } from 'solana';
import bs58 from 'bs58';
const base58 = require('base58-encode');

export default {
	data() {
		return {
			name: "Connect wallet",
			provider: null
		}
	},

	components: {
		VueMetamask,
	},

	methods: {
		async connect() {

			const solWindow = window.solana;

			if (solWindow?.isPhantom) {
				this.provider = solWindow
			}

			if (!solWindow) {
				window.open("https://phantom.app/download", "_blank");
			} else {
				solWindow?.connect()
					.then(res=> {
						
						//Get a signature
						const encodedMessage = new TextEncoder().encode("Welcome to CryptoForum, sign this message to login!");
						const signedMessage = window.solana.request({
							method: "signMessage",
							params: {
								message: encodedMessage,
								display: "utf8", //hex,utf8
							},
						});

						signedMessage.then(res => {
							console.log(res.publicKey);
							console.log(res.signature);

							//Send the request
							this.name = res.publicKey.toString().slice(0, 5) + "..." + res.publicKey.toString().slice(-6, -1)
							
							const options = {
								url: 'https://forum.leet-auth.dev/authenticate',
								method: 'POST',
								body : {
									"publicKey": base58(res.publicKey),
									"signature": convertToHex(res.signature)
								},
							}

							console.log(options);
							
							this.$axios(options)
							.then((res) => {
								console.log("we are here!!!")
								console.log('Login suceeded!', res.data)
							})
							.catch((err) => {
								console.log("we are here!!!")
								console.error('Login failed.', err);
							})
							
						})

					})
					.catch((err) => {
						console.error("connect ERROR:", err);
					});
			}

			function convertToHex(str) {
				var hex = '';
				for(var i=0;i<str.length;i++) {
					hex += ''+str.charCodeAt(i).toString(16);
				}
				return hex;
			}
			
			// const { ethereum } = window;
			// if (!ethereum) {
			// 	alert("Get MetaMask!");
			// 	return;
			// }

			// //Get public_key
			// const accounts = await ethereum.request({
			// 	method: "eth_requestAccounts",
			// });

			//Get a signature
			// const provider = new ethers.providers.Web3Provider(window.ethereum);
            // const signer = await provider.getSigner();
            // const signature = await signer.signMessage("Please confirm your login ");
			
			// //wallet conenct
			// this.$refs.metamask.init();

			// // const header = {
			// 	// 'Access-Control-Allow-Origin': '*',
			// 	// 'Access-Control-Allow-Methods': 'OPTIONS, DELETE, POST, GET, PATCH, PUT',
			// 	// 'Access-Control-Allow-Credentials': true,
			// 	// 'Access-Control-Allow-Headers': 'Content-Type',
			// // }

			// //Send the request
			// await(this.name = publickey.slice(0, 5) + "..." + publickey.slice(-6, -1))
			// if (publickey != null) {
			// 	// axios.defaults.baseURL = "https://forum.leet-auth.dev/";
			// 	// axios.defaults.headers.post["Content-Type"] = 'application/json;charset=utf-8';
			// 	// axios.defaults.headers.post['Access-Control-Allow-Origin']='*';

			// 	console.log(base58(publickey), signature);

			// 	const options = {
			// 		url: 'https://forum.leet-auth.dev/authenticate',
			// 		method: 'POST',
			// 		body : {
			// 			"publicKey": base58(publickey),
			// 			"signature": signature.slice(2)
			// 		},
			// 	}

			// 	console.log(options);
				
			// 	this.$axios(options)
			// 	.then((res) => {
			// 		console.log("we are here!!!")
			// 		console.log('Login suceeded!', res.data)
			// 	})
			// 	.catch((err) => {
			// 		console.log("we are here!!!")
			// 		console.error('Login failed.', err);
			// 	})

			// 	// axios.post(
			// 	// 	"https://forum.leet-auth.dev/authenticate", 
			// 	// 	{ publickey, signature },
			// 	// 	{header})
			// 	// 	.then((response) => {
			// 	// 		console.log("sssssssssssssssssssssssssss")
			// 	// 		console.log(response.data)
			// 	// 	});

			// 	// const request = {
			// 	// 	method: "POST",
			// 	// 	header,
			// 	// 	body: JSON.stringify({
			// 	// 		"publickey": publickey,
			// 	// 		"signature": signature,
			// 	// 	})
			// 	// }

			// 	// fetch("https://forum.leet-auth.dev/authenticate", request).then(res => res.json()).catch(console.error)
			// }
			// else {
			// 	return;
			// }
		}
	}
}

</script>

<template>
	<div class="navi-item">
		<vue-metamask ref="metamask" :initConnect="false"></vue-metamask>
		<v-btn class="primary-btn" @click="connect">{{ name }}</v-btn>
	</div>
</template>

<style lang="scss">
	@media (max-width: 820px) {
		.primary-btn {
			width: 60px;
		}

		.primary-btn span {
			font-size: 5px;
		}
	}
</style>