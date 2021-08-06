<template>
	<div class="rounded-top">		
		<BarChart
			:chartData=" {
				labels: this.labels,
				datasets: [
					{
						label: 'Data One',
						backgroundColor: '#f87979',
						data: this.data
					}
				]
			}"
			:options="{
				responsive: true,
				maintainAspectRatio: false,
				legend: { display: false, },
				scales: {
					yAxes: [
						{
							ticks: {
								fontColor: 'white',
								fontSize: 12,
								stepSize: 1,
								beginAtZero: false,
								display: false,
							},
							gridLines: {
								display: false
							}
						}
					],
					xAxes: [
						{
							ticks: {
								fontColor: 'white',
								fontSize: 10,
								stepSize: 1,
								beginAtZero: false,
								display: false,
							},
							gridLines: {
								display:false
							}
						}
					]
				}
			}"
			style="height: 75px !important;"
		/>
	</div>
</template>

<script>
	// [IMPORT] //
	import BarChart from './BarChart'

	// [EXPORT] //
	export default {
		props: {
			data: {
				type: Array,
				required: true,
			},

			labels: {
				type: Array, 
				required: true,
			},
		},

		components: {
			BarChart,
		},
	}
</script>