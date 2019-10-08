<template>

    <!-- <footer>
       <h1>Please fill the form</h1>
      
          <form v-if="!submit">
            <label>Blog Title:</label>
            <input type="text" v-model.lazy="blog.title" required />
            <label>Blog Content:</label>
            <textarea v-model.lazy.trim="blog.content"></textarea>
         
       <div slot="form-header">
        <h3>this a header</h3>
        <p>this is a paragraph</p>
      </div>
        <div slot="form-fields">
        <input type="text" placeholder="name" required>
        <input type="password" placeholder="password" required>
      </div>
   

           <div id="links">
            <ul>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
            </ul>
           </div>
       </form>
    <div id="checkbox">
      <label >Kofi</label>
       <input type="checkbox"    value="Kofi" v-model="blog.categories">
        <label >Dyland</label>
       <input type="checkbox"          value="Dyland" v-model="blog.categories">
        <label >Kobbie</label>
       <input type="checkbox"    value="Kobbie" v-model="blog.categories">
     
    </div>
    <label >Subject</label>
    <select v-model="blog.subject">
          <option hidden>Choose </option>
          <option v-for=" x in  subjects"> {{x}}</option>
    </select>
    <button @click.prevent="post">Add Blog</button>
    <div v-if="!submit">
      <h3>Thanks for adding your post</h3>
    </div>
    <br>
    <br>
 
      Blog categories: 
      <ul>
          <li v-for=" x in blog.categories"> {{x}}</li>
       
      </ul>

         <p>Blog Subject:  {{blog.subject}}</p>
  
     </footer>
</div> -->

  <div >
        <h2>Add a New Blog Post</h2>
        <form v-if="!submitted">
            <label>Blog Title:</label>
            <input type="text" v-model.lazy="blog.title" required />
            <label>Blog Content:</label>
                        <textarea v-model.lazy.trim="blog.content"></textarea>
            <div id="checkboxes">
                <p>Blog Categories:</p>
                <label>Ninjas</label>
                <input type="checkbox" value="ninjas" v-model="blog.categories" />
                <label>Wizards</label>
                <input type="checkbox" value="wizards" v-model="blog.categories" />
                <label>Mario</label>
                <input type="checkbox" value="mario" v-model="blog.categories" />
                <label>Cheese</label>
                <input type="checkbox" value="cheese" v-model="blog.categories" />
            </div>
            <label>Author:</label>
            <select v-model="blog.author">
                <option v-for="author in authors">{{ author }}</option>
            </select>
            <hr />
            <button v-on:click.prevent="post">Add Blog</button>
        </form>
        <div v-if="submitted">
            <h3>Thanks for adding your post</h3>
        </div>
        <div>
            <h3>Preview blog</h3>
            <p>Blog title: {{ blog.title }}</p>
            <p>Blog content:</p>
            <p style="white-space: pre">{{ blog.content }}</p>
            <p>Blog Categories:</p>
            <ul>
                <li v-for="category in blog.categories">{{ category }}</li>
            </ul>
            <p>Author: {{ blog.author }}</p>
        </div>
  </div>
</template>

<script>

// export default {
  
   
//     data()
//     {
//         return{
         
//           blog:{
//             subject:'',
//             title:'',
//             content:'',
//             categories:[]
//           },
//              subjects:['maths','french','science'],
//              submitted:false
//         }
//     },
//     methods:{
//       post(){
//         this.$http.post('https://jsonplaceholder.typicode.com/posts',{
//           title: this.blog.title,
//           body:this.blog.content,
//           userId:1
//         }).then (function(data){
//           console.log(data);
//           this.submitted= true;
//         });
//       }

//     }
   
// }

export default {
    data () {
        return {
            blog: {
                title: '',
                content: '',
                categories: [],
                author: ''
            },
            authors: ['The Net Ninja', 'The Angular Avenger', 'The Vue Vindicator'],
            submitted: false
        }
    },
    methods: {
        post: function(){
            this.$http.post('https://vue-blog-1254e.firebaseio.com/posts.json',this.blog).then(function(data){
                console.log(data);
                this.submitted = true;
            }
            );
        }
    }
}
</script>

</script>
<style  scoped>
footer{
    padding: 6px;
}
#checkbox label{
display: inline-block;

}
#checkbox input{
display: inline-block;
margin-right: 10px;
}


</style>