<template>
 <div class="m-auto"> 
      
      <h1 class="text-2xl text-center">Dc Horeos {{herosCount}}</h1>
      <ul>
        <li 
          class="flex justify-between" 
          v-for="(hero, index) in dcHoros" 
          :key="hero.name"
        >
            <div>
              {{hero.name}} 
            </div>
              <button @click="remove(index)">x</button>
          </li>
      </ul>
      <form class="mt-10" @submit.prevent="addHero">
      <input
        class="border rounded" 
        v-model="newHero" 
        placeholder="Input hero name">
      <button
        class="border rounded bg-gradient-to-r from-red-700 to-pink-500 text-white" 
        type="submit"
      >
        Add Hero
      </button>
      </form>
     
   </div>
</template>

<script>
export default {
    data() {
        return {
            isActive:false,
      newHero:"Aquaman",
      dcHoros: [
        {name:'supergirl'},
        {name:'Flash'},
        {name:'Batman'},
        {name:'Supernam'},
      ], 
            
        };
    },
    

  methods:{
    addHero(){
      if(this.newHero !== ""){
      this.dcHoros.unshift({name:this.newHero});
      this.newHero =  "";
      }
    },
    remove(index){
      this.dcHoros = this.dcHoros.filter((hero,i) => i !== index);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>