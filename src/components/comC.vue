<template>
    <div>
        comC:用来演示mutations
        <br>
        <button @click="setCount(10)">按钮</button>
        {{ count }}
        {{ msg }}
    </div>
</template>

<script>
    import {
        mapState
    } from 'vuex'
    import {
        mapMutations
    } from 'vuex'

    export default {
        name: "comC",
        data() {
            return {

            }
        },
        computed: {
            ...mapState(['count', 'msg'])
        },
        methods: {
            handle() {
                // this.$store.commit('setCount',5)
                this.setCount(5);
            },
            //mapMutations函数返回一个对象，简化this.$state.commit('')
            //生成方法this.setCount(),上面的handler相当于一个方法调用另一个方法
            ...mapMutations(["setCount"])
        }
    }
</script>

<style scoped>

</style>
