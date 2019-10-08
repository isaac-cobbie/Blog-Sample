<template>
<div >
     <!-- <ul>
          <li v-for="x in squad" @click="x.show=!x.show">
          <h2> {{x.name}} </h2>
          <h3 v-show="x.show">  {{x.speciality}}</h3>
         
          </li>
     </ul>

     <button @click="delectsq">Delect squad</button> -->
<div slot="form-fields">
        <input type="text" placeholder="name" required>
        <input type="password" placeholder="password" required>
      </div>
<button >Submit</button>
 
</div> 
</template>
<script>
export default {
 
 
    data()
    {
        return{
            
        }
    },
    //life cycle hook
    beforeCreate(){
         alert('before create');

    },

    created(){
         alert('created');
    },
    beforeMount(){
          alert('mount');

    },
     mounted(){
          alert('mounted');

    },
     beforeUpdate(){
          alert('beforeupdate');

    },
    updated()
    {
         alert('update');
    },
 methods:
 {
      delectsq(){
           this.squad.pop();
   
      }
 }   
}
</script>
<style  scoped>
#squad{
     width:100%;
     max-width:1200px;
     margin: 50px auto;
     padding:0 20px;
     box-sizing: border-box;
}
ul{
     display: flex;
     flex-wrap: wrap;
     list-style-type: none;
     padding: 0;

}

li{
     flex-grow: 1;
     flex-basis: 300px;
     text-align:center;
     padding:30px;
     border: 1px solid #222;
     margin:10px;

}

</style>