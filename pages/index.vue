<template>
  <div>
    <heads/>
    <home/>
    <foots/>
  </div>
 </template>
 
<script>
  import heads from "~/components/header.vue";
  import home from "~/components/home.vue";
  import foots from "~/components/footer.vue";
  
 export default {
   components: {
    heads,
    home,
    foots,
  },
 }
 
</script>
<style>

</style>
 