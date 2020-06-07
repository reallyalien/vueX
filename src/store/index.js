import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const moduleA = {
    //开启命名空间
    namespaced: true,
    state: {
        name: 'jack',
        age: '18'
    }
};
const moduleB = {
    namespaced:true,
    state: {
        hero: '乔布斯',
        sex: '男'
    }
};
const store = new Vuex.Store({
    //状态，数据
    state: {
        count: 0,
        msg: 'hello'
    },
    //改变状态
    mutations: {
        add(state) {
            state.count++;
        },
        sub(state) {
            state.count--;
        },
        //第一个参数就是状态，第二个参数就是payload，额外的参数
        //在mutations中去调用异步方法，devtools无法追踪state的状态改变
        setCount(state, payload) {
            // setTimeout(()=>{
            //
            // },1000);
            state.count = state.count + payload;
        }
    },
    actions: {
        //context拥有的属性跟方法与store一样
        setCount(context, payload) {
            //context去调用mutations更改状态
            setTimeout(() => {
                context.commit('setCount', payload);
            }, 2000);
        }
    },
    modules: {
        //这个名字就是命名空间
        moduleA, moduleB
    }
});
export default store;
