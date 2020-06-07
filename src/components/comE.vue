<template>
    <div>
        comE 用来演示module
        <br>
        store:{{ count }}
        <br>
        moduleA: {{$store.state.moduleA.name}} ---{{name}} ----{{age}}
        <br>
        moduleB:{{hero}}----{{sex}}
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "comE",
        computed:{
            ...mapState(['count']),


            //module 命名空间 作用就是简化我们模块取值
            //映射模块B的state
            ...mapState('moduleA',['name','age']),
            ...mapState('moduleB',['hero','sex'])
        }
    }
</script>

<style scoped>

</style>
