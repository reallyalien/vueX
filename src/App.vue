<template>
    <div id="app">
        {{ $store.state.count }}
        <!--调用mutations的方法-->
        <input type="button" value="按钮+" @click="$store.commit('add')">
        <input type="button" value="按钮-" @click="$store.commit('sub')">


        <hr>
        <p>子组件开始</p>

        <com-a></com-a>
        <hr>
        <com-b></com-b>
        <hr>
        <com-c></com-c>
        <hr>
        <com-d></com-d>
        <hr>
        <com-e></com-e>
        <hr>
        <com-f></com-f>
        <p>子组件结束</p>
    </div>
</template>

<script>
    import ComA from './components/comA'
    import ComB from './components/comB'
    import ComC from './components/comC'
    import ComD from './components/comD'
    import ComE from './components/comE'
    import ComF from './components/comF'
    export default {
        name: 'app',
        components:{
            ComE,
            ComA,ComB,ComC,ComD,ComF
        },
        data() {
            return {}
        },
		
    }
</script>

<style>

</style>
