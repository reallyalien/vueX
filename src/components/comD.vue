<template>
  <div>
    ComD 演示action
    <br />
    <button @click="handle">按钮</button>
    <br />
    {{ count }}
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "comD",
  methods: {
    handle() {
      //调用action
	  // let promise = this.$store.dispatch('setCount',10)
      this.actionA(100);
    },

	...mapActions(["setCount", "actionA"]),
  },
  computed: {
	...mapState(["count"]),
  },
};
</script>

<style scoped>
</style>
