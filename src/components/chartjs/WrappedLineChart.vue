<template>
	<div class="rounded-top color">
		<div class="px-3 py-3">
			<h1 class="m-0 text-left text-light">⮝{{ this.data[this.data.length - 1] }}</h1>
			<h6 class="text-light">+{{ change }} ({{ pct }}%)</h6>
		</div>
		
		<LineChart
			:chartData="{
				labels: this.labels,
				datasets: [
					{
						data: this.data,
						backgroundColor: 'rgb(0 0 0 / 0%)',
						borderColor: 'white',
					}
				]
			}"
			:options="{
				elements: {
					line: { tension: .1 },
					point:{ radius: 0 }
				},
				legend: { display: false, },
				maintainAspectRatio: false,
				responsive: true,
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
			style="height: 100px !important;"
		/>
	</div>
</template>

<script>
	// [IMPORT] //
	import LineChart from './LineChart'

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

			change: {
				type: Number,
				required: true,
			},

			pct: {
				type: Number,
				required: true,
			},
		},

		components: {
			LineChart,
		},
	}
</script>

<style scoped>
	.color {
		background-color: #5ca065;
	}
</style>