<template>
	<VueApexCharts type="donut" :options="options" :series="series" />
</template>

<script>
	import VueApexCharts from 'vue-apexcharts'
	export default {
		props: {
			total: {
				required: true,
				type: Number,
			},

			series: {
				required: true,
				type: Array,
			},
		},

		components: {
			VueApexCharts
		},

		data() {
			return {
				options: {
					legend: {
						show: false,
					},
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
			}
		},
	}
</script>