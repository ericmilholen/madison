<template>
	<div id="app">
		<div id="nav">
			<RouterLink to="/">Home</RouterLink> |
			<RouterLink to="/about">About</RouterLink>
		</div>
	
		<RouterView />
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300&display=swap');

* { font-family: 'Montserrat Alternates', sans-serif !important; }

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
