<template>
    <div>
        comB
        <br>
        计算属性
        {{ count }}
    </div>
</template>

<script>
    //当一个组件要使用多个state的时候，给每一个state都添加一个计算属性会冗余，这时候就借助mapState帮我们生成计算属性
    import {mapState} from 'vuex'

    export default {
        name: "comB",
        computed:{
            //演示state mapState的使用
            //mapState帮助我们生成计算属性，返回的是对象
            //帮助我们生成计算属性count ->this.$store.state.count
            ...mapState(['count'])
        },
        //当映射的计算属性的名称与state的节点名称相同的话，就可以直接传一个字符串数组,mapState返回的是对象，因此我们可以这样写
        // computed: mapState([
        //     'count'
        // ])
    }
</script>

<style scoped>

</style>
