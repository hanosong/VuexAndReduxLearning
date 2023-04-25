## State单一状态树 Single Source of Truth

只创建一个store对象 => 方便维护
使用单一状态树管理应用层级的全部状态。
可以用最直接的方式找到某个状态的片段，并且在之后的维护和调试过程中，也会比较方便管理。

### 什么情况下会使用计算属性？
数据必须经过一系列变化之后才做展示

## vuex
### 如果在vuex中的state定义了数据，vue是如何做到响应式的？
这些属性都会被加入到响应式系统中 => dept = [watch,watch,...]
而响应式系统会监听属性的变化
当属性发生变化时，会通知所有界面中用到这些属性的地方发生刷新

~~~js
const store = new Vuex.store({
    state: {
        info:{
            name: "haha", // => 这里的数据被修改，视图也会更新
            age: 40, 
        }
    },
    mutation:{
        updateInfo(sate){
            state.info.name = 'heihei'; // 直接修改 => 响应式更新
            state.info['fav'] = 'basketball'; // 直接插入一个新属性，插入成功，但视图不刷新，失去响应式 => 解决方法 Vue.set(state.info, 'fav', 'basketball')；
        }
    }
})
~~~
在对象和数组中 ：
* vue中通过索引值修改数组中的元素不是响应式的 
* 增加：Vue.set(要修改的对象，索引值|key，修改后的值)
* 直接通过delete删除属性，也是不具备响应式的
* 删除：Vue.delete(objName, key)
## mutation
* 背景
在mutation中，定义了很多事件类型（方法）
方法过多，需要大量的精力去记忆这些方法，还需要再多个文件之间来回切换查看方法名，如何解决？
=> 将函数名统统作为字符串封装出去
=> 使用计算属性！

注意，如果导出的方法是export constxx；那么导入一定需要带{}；只有export default 才能 import xxx => 相当于自己重命名