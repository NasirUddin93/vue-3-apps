<template>
    <div class="m-auto">
       <h1 class="text-2xl my-2 text-center">Vue Calendar</h1> 
         
       <section class="flex mx-2 justify-between">
            <p class="font-bold">{{currentMonthName}}</p>
            <p class="font-bold">{{currentYear}}</p>
       </section>
       <section class="flex my-2">
           <p 
            class="text-center" 
            style="width:14.28%"
            v-for="day in days" 
            :key="day"
            >
                {{day}}
            </p>
       </section>
       <section class="flex flex-wrap">
           <p 
                class="text-center" 
                style="width:14.28%" 
                v-for="num in startDay()" 
                :key="num"></p>
           <p 
                class="text-center" 
                style="width:14.28%" 
                v-for="num in daysInMonth()" 
                :class="currentDateClass(num)"
                :key="num">{{num}}</p>
       </section>
       <section class="flex justify-between my-4">
           <button class="px-2 border rounded" @click="previous">Previous</button>
           <button class="px-2 border rounded" @click="next">Next</button>
       </section>
    </div>
</template>

<script>
export default {
    
    data() {
        return {
            currentDate: new Date().getUTCDate(),
            currentMonth: new Date().getMonth() + 1,
            currentYear: new Date().getFullYear(),
            days:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
        };
    },
    mounted() {
        
    },
    methods: {
        daysInMonth(){
            return new Date(this.currentYear,this.currentMonth + 1,0).getDate();
        },
        startDay(){
            return new Date(this.currentYear,this.currentMonth,1).getDay();
        },
        next(){
            if(this.currentMonth == 11){
                this.currentMonth = 0;
                this.currentYear++;
            }else{

                this.currentMonth++;
            }
        },
        previous(){
            if(this.currentMonth == 0){
                this.currentMonth = 11;
                this.currentYear--;
            }else{

                this.currentMonth--;
            }
        },
        currentDateClass(num){
            const calendarFullDate =  new Date(
                this.currentYear,
                this.currentMonth,
                num
            ).toDateString();
            const currentFullDate = new Date().toDateString();
            return calendarFullDate === currentFullDate ? "text-yellow-600" : "";
        },
    },
    computed:{
        currentMonthName(){
            return new Date(this.currentYear,this.currentMonth).toLocaleString("default",{month:"long"});
        }
    }
};
</script>

<style lang="scss" scoped>

</style>