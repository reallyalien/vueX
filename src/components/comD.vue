<template>
    <div>
        ComC 演示action
        <br>
        <button @click="handle">按钮</button>
        <br>
        {{ count }}
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import {mapMutations} from 'vuex'
    import {mapActions} from 'vuex'
    export default {
        name: "comD",
        methods:{
            handle(){
                //调用action
                // this.$store.dispatch('setCount',10)
                this.setCount(20);
            },

            ...mapActions(["setCount"])
        },
        computed:{
            ...mapState(['count'])
        }


    }
</script>

<style scoped>

</style>
