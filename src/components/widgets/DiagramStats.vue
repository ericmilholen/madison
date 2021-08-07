<template>
	<BCard no-body class="shadow" style="max-width: 400px;">
		<BTabs content-class="mt-3" fill>
			
			<BTab title="Diagram Stats" class="p-4" active>
				<h3 class="text-center">Data Transfer</h3>
				<PieChart
					:total="data.totalGB"
					:series="[data.audioPct, data.videoPct, data.photoPct, ]"
					class="w-100 mb-4"
				/>

				<BRow>
					<BCol cols="4" style="border-width: 8px !important;" class="border-top border-success">
						<h6 class="mt-3 text-center">audio</h6>
						<h1 class="text-center font-weight-bold">{{ data.audioPct }}%</h1>
					</BCol>
					<BCol cols="4" style="border-width: 8px !important;" class="border-top border-danger">
						<h6 class="mt-3 text-center">Video</h6>
						<h1 class="text-center font-weight-bold">{{ data.videoPct }}%</h1>
					</BCol>
					<BCol cols="4" style="border-width: 8px !important;" class="border-top border-warning">
						<h6 class="mt-3 text-center">Photo</h6>
						<h1 class="text-center font-weight-bold">{{ data.photoPct }}%</h1>
					</BCol>
				</BRow>
			</BTab>

			<BTab title="Month Report" class="p-4">
				<p>I'm the second tab</p>
			</BTab>
		</BTabs>

		<b-button-group class="">
			<BButton variant="" class="rounded-0 py-3 btn-color1">
				<CloudIcon class="mb-2" />
				<h6 class="text-center">Upload File</h6>
			</BButton>
			<BButton variant="" class="rounded-0 py-3 btn-color">
				<Share2Icon class="mb-2" />
				<h6 class="text-center">Share Link</h6>
			</BButton>
			<BButton variant="" class="rounded-0 py-3 btn-color2">
				<RepeatIcon class="mb-2" />
				<h6 class="text-center">Backup</h6>
			</BButton>
		</b-button-group>
	</BCard>
</template>


<script>
	// [IMPORT] //
	import { CloudIcon, RepeatIcon, Share2Icon } from 'vue-feather-icons'


	// [IMPORT] Personal //
	import PieChart from '../apexcharts/PieChart.vue'
	import data from '../../defaults/data2'


	export default {
		data() {
			return {
				data: data,
			}
		},

		components: {
			CloudIcon,
			RepeatIcon,
			Share2Icon,
			PieChart,
		},
	}
</script>

<style lang="scss" scoped>
	.btn-color1 {
		background-color: rgb(126, 113, 101) !important;
		border-radius: 0 0 0 5px !important;
	}

	.btn-color {
		background-color: rgb(126, 113, 101) !important;
	}

	.btn-color2 {
		background-color: rgb(126, 113, 101) !important;
		border-radius: 0 0 5px 0 !important;
	}
</style>