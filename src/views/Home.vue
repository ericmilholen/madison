<template>
	<div class="home">
		<StockTracker :data="data" class="mx-auto" />
	</div>
</template>

<script>
	import StockTracker from '../components/widgets/StockTracker'
	import data from '../defaults/data'

	export default {
		components: {
			StockTracker
		},

		data() {
			return {
				data: data,
			}
		},
	}
</script>