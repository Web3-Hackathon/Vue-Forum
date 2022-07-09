<script>

import VueMetamask from 'vue-metamask';
import axios from 'axios'
import { ethers } from 'ethers'
import { error } from 'console';
// import { response } from 'express';


export default {
	data() {
		return {
			name: "Connect wallet"
		}
	},

	components: {
		VueMetamask,
	},

	methods: {
		connect: async function () {
			const { ethereum } = window;
			if (!ethereum) {
				alert("Get MetaMask!");
				return;
			}

			//Get public_key
			const accounts = await ethereum.request({
				method: "eth_requestAccounts",
			});

			const publickey = accounts[0]

			//Get a signature
			const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = await provider.getSigner();
            const signature = await signer.signMessage("Please confirm your login ");
			
			//wallet conenct
			this.$refs.metamask.init();

			const header = {
				'Access-Control-Allow-Origin': '*',
				// 'Access-Control-Allow-Methods': 'OPTIONS, DELETE, POST, GET, PATCH, PUT',
				// 'Access-Control-Max-Age': '3600',
				'Access-Control-Allow-Credentials': true,
				// 'Access-Control-Allow-Headers': 'Content-Type',
			}

			//Send the request
			await(this.name = publickey.slice(0, 5) + "..." + publickey.slice(-6, -1))
			if (publickey != null) {
				// axios.defaults.baseURL = "https://forum.leet-auth.dev/";
				// axios.defaults.headers.post["Content-Type"] = 'application/json;charset=utf-8';
				// axios.defaults.headers.post['Access-Control-Allow-Origin']='*';

				const options = {
					url: 'https://forum.leet-auth.dev/authenticate',
					method: 'POST',
					data: {
						publicKey: publickey,
						signature: signature
					},
					// headers: {
					// 	'Access-Control-Allow-Origin': '*',
					// 	'Access-Control-Allow-Methods': 'OPTIONS, DELETE, POST, GET, PATCH, PUT',
					// 	'Access-Control-Allow-Credentials': true,
					// 	'Access-Control-Allow-Headers': 'Content-Type',
					// }
				}
				this.$axios(options)
				.then((res) => {
					console.log("we are here!!!")
					console.log('Login suceeded!', res)
				})
				.catch((err) => {
					console.log("we are here!!!")
					console.error('Login failed.', err);
				})

				// axios.post(
				// 	"https://forum.leet-auth.dev/authenticate", 
				// 	{ publickey, signature },
				// 	{header})
				// 	.then((response) => {
				// 		console.log("sssssssssssssssssssssssssss")
				// 		console.log(response.data)
				// 	});

				// const request = {
				// 	method: "POST",
				// 	header,
				// 	body: JSON.stringify({
				// 		"publickey": publickey,
				// 		"signature": signature,
				// 	})
				// }

				// fetch("https://forum.leet-auth.dev/authenticate", request).then(res => res.json()).catch(console.error)
			}
			else {
				return;
			}
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