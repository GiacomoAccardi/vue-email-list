const { createApp } = Vue;

createApp({
    data() {
        return { 
            random_mails: [],
        }
    },
    methods: {
        generateRandomMail(){
            this.random_mails = [];
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                    this.random_mails.push(response.data.response)
                });
            }
        }
    }
}).mount('#app');