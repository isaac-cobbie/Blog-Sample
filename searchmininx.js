export default{
    computed:{
        filteredBlogs(){
            return this.blogs.filter(x=>{
               return x.title.match (this.search)
            });
          }
    }
}