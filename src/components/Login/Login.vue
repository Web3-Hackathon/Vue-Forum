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

			//Send the request
			await(this.name = publickey.slice(0, 5) + "..." + publickey.slice(-6, -1))
			if (publickey != null) {
				axios.post("https://forum.leet-auth.dev/authenticate", { publickey, signature }).then((response) => {
					console.log("sssssssssssssssssssssssssss")
					console.log(response.data)
				})
				// const request = {
				// 		method: "POST",
				// 		headers: {
				// 			'Accept': '/',
				// 			'Content-Type': 'application/json'
				// 		},
				// 		body: JSON.stringify({
				// 			"publickey": publickey,
				// 			"signature": signature,
				// 		})
				// 	}

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
	<div class="navi-item mx-8 hidden-xs-only">
		<vue-metamask ref="metamask" :initConnect="false"></vue-metamask>
		<v-btn class="primary-btn" @click="connect">{{ name }}</v-btn>
	</div>
</template>