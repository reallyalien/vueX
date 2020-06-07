<template>
    <div>
        comC:用来演示mutations
        <br>
        <button @click="handle">按钮</button>
        <hr>
        {{ count }}
        {{ msg }}
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import {mapMutations} from 'vuex'
    export default {
        name: "comC",
        data(){
            return{

            }
        },
        computed:{
            ...mapState(['count','msg'])
        },
        methods:{
            handle(){
                // console.log("c普通函数");
                // console.log(this);
                // this.$store.commit('setCount',5);
                this.setCount(6);
            },
            //mapMutations函数返回一个对象，简化this.$state.commit('')
            //生成方法this.setCount()
            ...mapMutations(["setCount"])
        }
    }
</script>

<style scoped>

</style>
