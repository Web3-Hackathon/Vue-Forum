<script>

import VueMetamask from 'vue-metamask';
import axios from 'axios'
import { ref } from "vue"

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
		connect() {
			this.$refs.metamask.init();
			
			if (window.ethereum.selectedAddress != null) {
				axios.post("http://localhost:8082/add_user", { publickey: window.ethereum.selectedAddress }).then((response) => {
					console.log(response.data)
					this.name = window.ethereum.selectedAddress.slice(0,5) + "..."  + window.ethereum.selectedAddress.slice(-6, -1);
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