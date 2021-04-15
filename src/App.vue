<template>
<AppHeader/> 
  <div class="w-full flex">
    <router-view></router-view>
   <!-- <DcHeros/> -->
   <!-- <Calendar/> -->
  </div>
   <AppFooter/>
</template>
<script>
import AppHeader from "./components/AppHeader"
import AppFooter from "./components/AppFooter"
// import Calendar from "./components/Calendar"
// import DcHeros from "./components/DcHeros"
export default {
  components:{
    AppHeader,
    AppFooter,
    // DcHeros,
    // Calendar
 

  },
  data(){
    return{   
            
  }
}
}
</script>

<style scoped>

</style>