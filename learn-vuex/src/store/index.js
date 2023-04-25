import Vue from "vue";
import Vuex from "vuex";

// 安装插件 -- 底层会执行Vuex.install
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 保存共享的状态
    num: 1000,
    info: {
      name: 'haha',
      age: 19
    }
  },
  getters: {
    // 计算属性--如果多个页面都需要某种方法加工数据，就把方法抽到这
    powerCounter(state){
      return state.num * state.num
    }
  },
  mutations: {
    // 方法 , 执行的时候默认会传state
    increment(state){
      state.num ++;
    },
    decrement(state){
      state.num --;
    },
    // 1.普通提交：需要传其他入参，在后面加参数就好了 => 这些额外的参数被称为载荷（payload）
    /* incrementTotal(state, count) {
      state.num += count;
    } */
    // 2.特殊的提交封装，第二个参数在mutation里面拿到的会是一个对象
    incrementTotal(state, payload) {
      state.num += payload.count;
    },
    updateInfo(state){
      // state.info['fav'] = 'basketball';
      Vue.set(state.info, 'fav', 'basketball');
    },
    modifyInfo(state){
      state.info.age = 99;
      
    }



  },
  actions: {}, //（Backend API） 当修改mutations，有异步操作，需要通过action修改mutation；其余情况可以直接修改mutation
  modules: {},
});
