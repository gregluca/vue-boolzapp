const { createApp } = Vue; 

const dt = luxon.DateTime;

createApp({
    data(){
        return {
            contacts: contacts,
            indexUser: 0
        }
    },
    methods: {
        dateTo(fullDate) {
            const luxonDate = dt.fromFormat(fullDate, "dd/MM/yyyy HH:mm:ss" );
            return luxonDate.toFormat("HH:mm");
        },
        changeContact(clickedIndex) {
            this.indexUser = clickedIndex;
        }
    }
}).mount("#app");