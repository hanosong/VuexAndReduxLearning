<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>vuex1:{{$store.state.num}}</h1>
    <button @click="addition">vuxNum+++</button>
    <button @click="subtraction">vuxNum---</button>
    <HelloWorld :msg="msg" />
    <h1>-------------HomeView的内容--------------</h1>
    <h2>{{ $store.getters.powerCounter }}</h2>
    <button @click="getTotalHandle(10)">vuexNum+10+++</button>
    <h1>-------------vuexState中的属性为对象-----</h1>
    {{ $store.state.info }}
    <button @click="$store.commit('modifyInfo')">修改age</button>
    <button @click="$store.commit('updateInfo')">插入fav</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  data(){
    return {
      msg: "whats happend ???  = ="
    }
  },
  methods: {
    addition(){
      this.$store.commit('increment')
    },
    subtraction(){
      this.$store.commit('decrement')
    },
    // 1.封装成一个方法，像vuex传参
   /*  getTotalHandle(count){
      this.$store.commit('incrementTotal', count)
    } */

    // 2.另一种方式触发mutation
    getTotalHandle(count){
      this.$store.commit({
        type: 'incrementTotal', 
        count,
      })
    }

  }
};
</script>
