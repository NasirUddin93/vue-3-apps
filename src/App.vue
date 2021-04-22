<template>
<AppHeader :isLoggedIn="isLoggedIn" @open-login-model="isLoginOpen =  true"/> 
  <div class="w-full flex">
    <router-view></router-view>
   <DcHeros/>
   <!-- <Calendar/> -->
  </div>
   <AppFooter/>
   <LoginModel v-if="isLoginOpen" @close-login="isLoginOpen = false"/>
</template>
<script>
import AppHeader from "./components/AppHeader"
import AppFooter from "./components/AppFooter"
import LoginModel from "./components/LoginModel"
import firebase from "./utilities/firebase"
// import Calendar from "./components/Calendar"
// import DcHeros from "./components/DcHeros"

export default {
  components:{
    AppHeader,
    AppFooter,
    LoginModel,
    // DcHeros,
    // Calendar
  },
  data(){
    return{   
      isLoginOpen: false,   
      isLoggedIn: false,
      authUser:{},
  }
},
mounted(){
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      this.isLoggedIn = true;
      this.authUser = user;
    }else{
      this.isLoggedIn = false;
      this.authUser = {};
    }
  });
},




}

</script>

<style scoped>

</style>