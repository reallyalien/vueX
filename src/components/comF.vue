<template>
    <div>
        comF:用来演示getter
        {{ count }}
        {{ getTodoById(1) }}
    </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
    name: "comF",
    data() {
        return {};
    },
    computed: {
        ...mapState(["count"]),
        ...mapGetters(["done", "getTodoById", "getTodoById1"]),
    },
    methods: {},
};
</script>

<style scoped>
</style>
