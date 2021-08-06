<template>
  <div id="app">

    <div id="nav">
  
      <RouterLink to="/">Home</RouterLink> |
  
      <RouterLink to="/about">About</RouterLink>
  
    </div>

    <BButton variant="primary">we lit</BButton>
  
    <router-view/>
  
    {{ Date.now() }}

    
  </div>
</template>

<script>
export default {
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

<style>
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
