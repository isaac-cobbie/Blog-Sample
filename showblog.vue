<template>
     <div  v-theame:col='kob' id="showit"  >
         <h1> All blogs </h1>
         <label>Search</label>
          <input type="text" v-model="search" size="30" placeholder="search blogs"/>
         <div v-for="x in filteredBlogs" class="single-blog">
             <router-link v-bind:to="/x/" ><h2 v-rain> {{x.title }}</h2></router-link>
             <article>{{x.content |short}} </article>

            
         </div>
         
        
     </div> 

</template>

<script> 

import searchmininx from '../mixins/searchmininx';


export default {

  data () {
    return {
        blogs:[],
        names:["ama","kofi","kojo"],
        animals:["bird","cat","dog"],
        car:["toyota","benz","fiat"],
        search:'',
        nana:'',
        
    }
  },
  methods:
  {  
  
  },
 
 
 
  created(){
      this.$http.get('https://vue-blog-1254e.firebaseio.com/posts.json').then(function(data){
        return data.json();
    }).then(function(data){
      var blogsArray =[];

      for (let key in data)
      {
      data[key].id= key;
      blogsArray.push(data[key])
      }
    this.blogs = blogsArray;
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
mixins:[searchmininx],

}
</script>
<style scoped>

.single-blog{
  background-color: #efefef;
}
#showit{
  margin: 0 auto;

}
</style>
