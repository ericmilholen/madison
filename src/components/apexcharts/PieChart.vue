<template>
	<VueApexCharts type="donut" :options="options" :series="series"></VueApexCharts>
</template>

<script>
	import VueApexCharts from 'vue-apexcharts'
	export default {
		props: {
			total: {
				required: true,
				type: Number,
			}
		},

		components: {
			VueApexCharts
		},

		data() {
			return {
				options: {
					plotOptions: {
						pie: {
							donut: {
								labels: {
									show: true,
									total: {
										show: true,
										label: `${this.total} Gb`,
										formatter: () => ''
									}
								}
							}
						}
					}
				},
				series: [44, 55, 41, 17, 15]
			}
		},
	}
</script>