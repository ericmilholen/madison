<template>
	<div class="home">
	</div>
</template>

<script>

export default {
	name: 'Home',
	components: {
		HelloWorld
	},

	data() {
		return {}
	},

	methods: {
		getTenDaysAgoUnix() {
			var tenDaysAgo = new Date()
			tenDaysAgo.setDate(tenDaysAgo.getDate() - 10)

			console.log('ten days ago:', tenDaysAgo.getTime());
			return tenDaysAgo.getTime()
		},

		getNowUnix() {
			console.log('now', Date.now());
			return Date.now()
		},

		getStockData() {
			const finnhub = require('finnhub')
	
			const api_key = finnhub.ApiClient.instance.authentications['api_key'];
			api_key.apiKey = "c46p04aad3iagvmhcglg"
	
			const finnhubClient = new finnhub.DefaultApi()
	
			finnhubClient.stockCandles(
				"AAPL",
				"D",
				1590988249, //this.getTenDaysAgoUnix(),
				1591852249, //this.getNowUnix(),
				{},
				(error, data, response) => {
					console.log(data),
	
					console.log(response);
				}
			)
		},
	},

	created() {
		this.getStockData()
	}
}
</script>
