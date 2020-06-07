<template>
    <div>
        comB
        <br>
        计算属性
        {{ count }}
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "comB",
        computed:{
            //演示state mapState的使用
            //mapState帮助我们生成计算属性，返回的是对象
            //帮助我们生成计算属性count ->this.$store.state.count
            ...mapState(['count'])
        }
    }
</script>

<style scoped>

</style>
