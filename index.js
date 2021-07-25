const AUTO_SAVE_DELAY = 2000
const SERVER_CALL_DELAY = 1000

let autoSaveTimer

const Counter = {
    data() {
        return {
            quantity: 0,
            quantityOnServer: 0,
            status: ''
        }
    },
    mounted() {
        
    },
    methods: {
        onNewQuantity() {
            clearTimeout(autoSaveTimer)

            autoSaveTimer = setTimeout(this.saveQuantity, AUTO_SAVE_DELAY)
        },

        saveQuantity() {
            this.status = 'Auto-saving'
            this.simulateServerCall()
        },

        simulateServerCall() {
            setTimeout(this.onServerResponse, SERVER_CALL_DELAY)
        },

        onServerResponse() {
            this.status = 'Saved'

            // This is just a simulation of the value saved in the server
            this.quantityOnServer = this.quantity 
        }
    }
  }
  
  Vue.createApp(Counter).mount('#app')