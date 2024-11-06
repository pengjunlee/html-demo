//注册组件

Vue.component("custom-select",{
  props:["btnValue","list"], 
  data:function(){
    return {
      selectShow:false,
      val:""
    };
  },
  template:`<section class="warp">
  <div class="searchIpt clearFix">
    <div class="clearFix">
      <input type="text" class="keyWord" :value="val" @click="selectShow = !selectShow"/>
      <input type="button" :value="btnValue" />
      <span></span>
    </div>
    <custom-list 
      v-show="selectShow" 
      :list="list"
      v-on:receive="changeValue"
    ></custom-list>
  </div>
</section>`,
  methods:{
    changeValue(value){
      this.val = value;
    }
  }
})
Vue.component("custom-list",{
  props:["list"],
  template:`<ul class="list">
      <li v-for="item of list" @click="selectValue(item)">{{item}}</li>
    </ul>`,
  methods:{
    selectValue:function(item){
      //点击子组件，与父组件有交互
      //告知父组件更改val值，需要触发一个自定义事件
      this.$emit("receive",item);
    }
  }
})
var data= {
  list1:["北京","上海","广州"],
  list2:["17-02-19","18-03-15","18-10-27"]
}
new Vue({
  el:"#app",
  data
})