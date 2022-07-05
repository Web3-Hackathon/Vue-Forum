<script>

import VueMetamask from 'vue-metamask';
import axios from 'axios'
import Vue, { ref } from "vue"
import Web3 from "web3"
import Web3Uitls from "web3-utils"
import { ethers } from 'ethers'


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
				axios.post("http://localhost:8082/add_user", { publickey, signature }).then((response) => {
					console.log(response.data)
				})
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