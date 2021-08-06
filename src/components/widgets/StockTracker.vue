<template>
	<BCard no-body class="shadow rounded-lg" style="max-width: 400px;">
		<BRow>
			<BCol cols="12">
				<WrappedLineChart
					title="AAPL"
					:labels="data.labels"
					:data="data.closes"
					:change="data.change"
					:pct="data.pct"
					class="h-100"
				/>
			</BCol>
			
			<BCol cols="12">
				<div class="px-4 py-3">
					<h6 class="small text-secondary">Today {{ data.time }}</h6>
					<h5 class="text-secondary">{{ data.location }}</h5>
					<br>

					<BCard no-body bg-variant="light" border-variant="white">
						<BRow>
							<BCol cols="6" class="px-0 py-3 border-right border-white">
								<h3 class="text-center font-weight-bold">{{ data.sharesTraded }} M</h3>
								<h6 class="text-center">Shares Traded</h6>
							</BCol>

							<BCol cols="6" class="px-0 py-3 border-left border-white">
								<h3 class="text-center font-weight-bold">{{ data.marketCap }} M</h3>
								<h6 class="text-center">Market Cap.</h6>
							</BCol>
						</BRow>
					</BCard>
					<br>


					<BRow>
						<BCol cols="7">
							<h6 class="small">Yearly Change</h6>

							<WrappedBarChart
								:labels="data.barChartLabels"
								:data="data.barChartData"
							/>
						</BCol>

						<BCol cols="5">
							<h6 class="small text-center">Yearly Change</h6>
							<BBadge variant="success" class="w-100 py-2"><h2 class="m-0">+ {{ data.pct }}</h2></BBadge>
						</BCol>
					</BRow>
				</div>
			</Bcol>
		</BRow>
	</BCard>
</template>

<script>
	import WrappedBarChart from '../../components/chartjs/WrappedBarChart.vue'
	import WrappedLineChart from '../../components/chartjs/WrappedLineChart.vue'

	export default {
		props: {
			data: {
				type: Object,
				required: true,
			}
		},

		components: {
			WrappedBarChart,
			WrappedLineChart
		},

		
	}
</script>