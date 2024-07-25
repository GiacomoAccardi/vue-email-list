const { createApp } = Vue;

createApp({
    data() {
        return {
            email: null, 
        }
    },
    created() {
        this.generateRandomMail();
    },
    methods: {
        generateRandomMail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                this.email = response
            });
        }
    }
}).mount('#app');