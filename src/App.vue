<template>
    <div id="app">
        {{ $store.state.count }}
        <!--调用mutations的方法-->
        <input type="button" value="按钮+" @click="$store.commit('add')">
        <input type="button" value="按钮-" @click="$store.commit('sub')">


        <hr>

        <com-a></com-a>
        <hr>
        <com-b></com-b>
        <hr>
        <com-c></com-c>
        <hr>
        <com-d></com-d>
        <hr>
        <com-e></com-e>
    </div>
</template>

<script>
    import ComA from './components/comA'
    import ComB from './components/comB'
    import ComC from './components/comC'
    import ComD from './components/comD'
    import ComE from './components/comE'
    export default {
        name: 'app',
        components:{
            ComE,
            ComB,
            ComA,ComB,ComC,ComD
        },
        data() {
            return {}
        }
    }
</script>

<style>

</style>
