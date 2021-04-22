<template>

    <section
        @click="close"
        class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"
    ></section>
    <div class="absolute inset-0">
        <div class="flex h-full">
            <div class="z-30 m-auto bg-white p-2 rounded shadow w-1/3">
                <div class="p-2 border">
                <h1 class="text-2xl text-center">Login</h1>
                <GoogleLogin @close-login-from-google="close"/>                
                <p class="my-5 text-center">Or</p>
                <form class="p-2 my-2" @submit.prevent="submit">
                    <div class="my-4">
                        <label>Email or Username</label>
                        <input
                            ref="emailRef" 
                            v-model="email"
                            class="rounded shadow p-2 w-full"
                            type="text"
                            placeholder="Enter your email or username"
                            >
                            
                    </div>
                    <div class="my-4">
                        <label>Enter Password</label>
                        <input
                            v-model="password" 
                            class="rounded shadow p-2 w-full" 
                            type="password"
                            placeholder="Enter your password"
                        >
                    </div>
                </form>
                </div>
                <div class="my-4">
                    <button
                        type="submit"
                        class="w-full rounded shadow-md bg-gradient-to-r from-red-800 to-pink-800 text-white"
                    >
                    <span v-if="!isLoading">Login</span>
                    <span v-else>Loading</span>
                        
                    </button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import firebase from "../utilities/firebase";

import GoogleLogin from '../components/Login/GoogleLogin';
export default {
    components:{GoogleLogin},
    data() {
        return {
           
                email:'nasir93cse@gmail.com',
                password:"password",
                isloading:false,
             
        };
    },
    mounted() {
        this.$refs.emailRef.focus();
    },
    methods: {
       submit(){
           this.isloading = true;
           firebase.auth()
           .signInWithEmailAndPassword(this.email, this.password)
           .then(() => {
               this.email = "";
               this.password = "";
               this.isloading =  false,
               this.close();
           }).catch((e) => {
               console.log(e);
               this.isloading = false;
           })
       },
       close(){
           this.$emit('close-login');
       },

    },
};
</script>

<style lang="scss" scoped>

</style>