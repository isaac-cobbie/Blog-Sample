<template>
     <div  v-theame:col='kob' id="showit"  >
   
        <h1>All Blog Articles</h1>
        <input type="text" v-model="search" placeholder="search blogs" />
        <div v-for="blog in filteredBlogs" class="single-blog">
            <router-link v-bind:to="/blog/"><h2>{{ blog.title }}</h2></router-link>
            <article>{{ blog.content }}</article>
        </div>
    </div>
         
     

</template> 

<script> 
import searchmininx from '../mixins/searchmininx';


export default {

  data () {
    return {
      id:this.$route.params.id,
        
        x:{},
        // names:["ama","kofi","kojo"],
        // animals:["bird","cat","dog"],
        // car:["toyota","benz","fiat"],
        // search:'',
        // nana:''
    }
  },
  methods:
  {  
  
  },
 
 
 
  created(){
      this.$http.get('https://vue-blog-1254e.firebaseio.com/posts/'+this.id +'.json').then(function(data){
        return data.json();
    }).then (function(data)
    {
      this.blog =data;
    })
  },

  

 computed:{
  
 },
 filters:{
   toUpperCase(value){
     return value.toUpperCase();
   }
 },

directives:{
  'rain':{
   bind(el,binding,vnode)
   {
el.style.color = "green"   }
  }
},
mixins:[searchmininx]
}
</script>
<style scoped>

.single-blog{
  background-color: #efefef;
}
</style>
