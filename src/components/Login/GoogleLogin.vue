<template>
    <div>
       <section class="my-5 text-center">
                    <button 
                        class="border px-2 rounded" 
                        @click="loginWithGoogle">
                        Login with Google
                    </button>
        </section>
    </div>
</template>

<script>
import firebase from "../../utilities/firebase";

export default {
    

    data() {
        return {
            
        };
    },
    mounted() {
        
    },
    methods: {
        loginWithGoogle(){
           var provider = new firebase.auth.GoogleAuthProvider();
           firebase.auth().signInWithPopup(provider).then(()=>{
               this.$emit('close-login-from-google');
           });
            
       },
    },
};
</script>

<style lang="scss" scoped>

</style>