<template>
	<BCard class="shadow" style="max-width: 400px;">
		<h3 class="text-center">Data Transfer</h3>
		<PieChart class="w-100"/>
	</BCard>
</template>


<script>
import PieChart from '../apexcharts/PieChart.vue'
export default {
	components: {
		PieChart,
	},
}
</script>