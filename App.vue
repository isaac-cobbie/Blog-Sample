<template>
  <div id="app" >
    
      
<!--       
<keep-alive>
  <component v-bind:is="component"></component>  
</keep-alive>
<button @click="component='app-footer'" >Switch to form one</button>
<button @click="component='app-header'" >Switch to form two</button> -->
 
  <!-- <app-show></app-show>
  <app-list></app-list> -->

  <ul>
    <li>  <router-link to="/">Showblogs</router-link>
</li>
    <li>  <router-link to="/Footer">Footer</router-link>
</li>
  </ul>


<router-view></router-view>


  </div>
</template>

<script>

import Footer from  './component/Footer.vue';
import Header from  './component/Header.vue';
import Real from  './component/Real.vue';
import showblog from  './component/showblog.vue';
import listblogs from  './component/listblogs.vue';

export default {
 
 components:{
   'app-footer':Footer,
 'app-header':Header,
 'app-real':Real,
  'app-show':showblog,
   'app-list':listblogs,
 },

  data () {
    return {
      title:'i am a dynamic slot' ,
      component:'app-footer'
    }
  }}
</script>

<style scoped>


h3{
  color:red ;
}
</style>