<template>
     <div>
          <form>
    <header>
         <div slot="form-header">
        <h3>this a header 22222222</h3>
        <p>this is a paragraph</p>
      </div>
      </header>
        <div slot="form-fields">
        <input type="text" placeholder="name" required>
        <input type="password" placeholder="password" required>
      </div>

     
     <button @click="">Submit</button>
     </form>
     </div>
</template>

<script> 

import {bus} from '../main';

export default {


  data () {
    return {
         title:'Vue Cobbie'
    }
  },
  methods:
  {
      
  }
}
</script>

<style scoped>
header{
     background-color: rgb(128, 240, 175);
     padding: 10px;
}

h1{
     color:#222;
     text-align:center;
}

</style>