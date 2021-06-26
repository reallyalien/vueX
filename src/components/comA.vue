<template>
	<div>
		comA
		<br>
		{{ $store.state.count }}
		<br>
		计算属性：{{ a }}
	</div>
</template>

<script>
	import {
		mapState
	} from 'vuex'

	export default {
		name: "comA",
		computed: {
			a() {
				return this.$store.state.count;
			},
		}
	}
</script>

<style scoped>

</style>
