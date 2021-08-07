<template>
	<div class="home">
		<BRow>
			<BCol cols="12" md="6" lg="4">
				<StockTracker :data="data" class="mx-auto mb-4" />
			</BCol>
			<BCol cols="12" md="6" lg="4">
				<DiagramStats class="mx-auto" />
			</BCol>
		</BRow>
	</div>
</template>

<script>
	import DiagramStats from '../components/widgets/DiagramStats.vue'
	import StockTracker from '../components/widgets/StockTracker'
	import data from '../defaults/data'

	export default {
		components: {
			DiagramStats,
			StockTracker
		},

		data() {
			return {
				data: data,
			}
		},
	}
</script>