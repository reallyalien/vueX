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
    export default {
        name: "comA",
        computed:{
            a(){
                console.log("a普通方法");
                console.log(this);//this就是main.js的vue对象
                return this.$store.state.count;
            },
            // a1:()=>{
            //     console.log("a1箭头函数");
            //     console.log(this);//这个this指的是当前组件对象
            //     return this.$store.state.count;
            // }
        }
    }
</script>

<style scoped>

</style>
