import Vue from 'vue'
import Vuex from 'vuex'
import {SOME_MUTATION} from "./mutation-types";

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
    namespaced: true,
    state: {
        hero: '乔布斯',
        sex: '男'
    },
    mutations: {
        incr(state) {
            state.sex = state.sex + '111'
        }
    },
    getters: {
        incr(state,getters,rootState) {
            // console.log(state)
            // console.log(getters)
            // console.log(rootState)
        }
    },
    actions: {
        //state是context.state，
        //rootState是根state
        incr({state, commit, rootState}) {
            console.log(`根状态${rootState.msg}`)
        }
    }


};
const store = new Vuex.Store({
    //状态，数据
    state: {
        count: 0,
        msg: 'hello',
        todo: [
            {id: 1, text: '...', done: true},
            {id: 2, text: '...', done: false}
        ]
    },
    //改变状态,mutation必须是同步函数，否则状态不可追踪
    mutations: {
        add(state) {
            state.count++;
        },
        sub(state) {
            state.count--;
        },
        //第一个参数就是状态，第二个参数就是payload，额外的参数
        //在mutations中去调用异步方法，devtools 无法追踪state的状态改变
        setCount(state, payload) {
            // setTimeout(()=>{
            //
            // },1000);
            state.count = state.count + payload;
        },
        [SOME_MUTATION](state) {

        }
    },
    actions: {
        //context拥有的属性跟方法与store一样,在没有分模块的时候可以理解为与store是一样的，因此可以调用context来提交一个mutation
        setCount(context, payload) {
            //context去调用mutations更改状态
            setTimeout(() => {
                context.commit('setCount', payload);
            }, 2000);
        },
        //action通常都是异步的，那么我们如何才能组合多个action，以处理更加复杂的异步流程呢，store.dispatch返回的是一个promise对象，action
        //处理函数返回的也是一个promise
        actionA({commit}, payload) {
            return new Promise(((resolve, reject) => {
                setTimeout((x) => {
                    commit('setCount', x)
                    resolve()
                }, 1000, payload)
            }))
        },
        actionB({dispatch, commit}) {
            return dispatch('actionA').then(() => {
                commit('setCount')
            })
        }
    },
    modules: {
        //这个名字就是命名空间
        moduleA, moduleB
    },
    //相当于store的计算属性，返回值会根据依赖的state的值被缓存起来，而且只有他依赖的值发生变化才会被调用
    //getter会暴漏成store.getter对象，外部可以对象属性的值被访问
    getters: {
        done(state) {
            return state.todo.filter(item => item.id % 2 === 0)
        },
        getTodoById: (state) => (id) => {
            return state.todo.find(todo => todo.id === id)
        },
        //store.getter.getTodoById1返回的是一个function，作为方法调用，不会缓存
        getTodoById1(state) {
            return function (id) {
                return state.todo.find(item => item.id === id)
            }
        }
    }
});
export default store;
