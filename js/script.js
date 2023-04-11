const { createApp } = Vue;

createApp({
    data() {
        return {
            mails: new Array()
        }
    },

    methods: {
        getMail(){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then( (response) => {this.mails.push(response.data.response);});
        },

        generateMails(){
            for(let i = 0; i < 10; i++)
                this.getMail();
        }
    },

    created() {
        this.generateMails();
    }

}).mount("#app");