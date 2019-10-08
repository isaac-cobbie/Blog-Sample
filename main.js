import Vue from 'vue';
import App from './App.vue';
import { constants } from 'crypto';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import showblog from './component/showblog';
import Footer from './component/Footer';
import Header from './component/Header';

Vue.use(VueRouter);
Vue.use(VueResource);
// custom directives

const router =new VueRouter ({
  routes :[
  {path:'/', component:showblog},
  {path:'/Footer', component:Footer},
  {path:'*', component:Header},
  ],
  mode: 'history'
})


    
  Vue.directive('theame', {
    bind(el, binding, vnode){
        if (binding.value == 'kob'){
            el.style.maxWidth = "500px";
           
        }else (binding.value == 'narrow')
       {
        el.style.maxWidth = "500px";
       }
       if (binding.arg == 'col')
       {
         el.style.background ='#ddd';
         el.style.padding ='30px';
       }
      }
  });

// Filters


Vue.filter('short', function(value)
{
  return value.slice (0,70) + '...';
})


new Vue({
  el: '#app',
  router,
  render: h => h(App),
})

