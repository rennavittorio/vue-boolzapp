let contacts = [
    {
        name: 'Michele',
        avatar: './assets/man1.png',
        visible: true,
        messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Ricordati di stendere i panni',
            status: 'sent'
            },
            {
            date: '10/01/2020 16:15:22',
            message: 'Tutto fatto!',
            status: 'received'
            }
        ],
    },
    {
        name: 'Fabio',
        avatar: './assets/man2.png',
        visible: true,
        messages: [
            {
            date: '20/03/2020 16:30:00',
            message: 'Ciao come stai?',
            status: 'sent'
            },
            {
            date: '20/03/2020 16:30:55',
            message: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
            },
            {
            date: '20/03/2020 16:35:00',
            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
            }
        ],
    },
    {
        name: 'Samuele',
        avatar: './assets/man1.png',
        visible: true,
        messages: [
            {
            date: '28/03/2020 10:10:40',
            message: 'La Marianna va in campagna',
            status: 'received'
            },
            {
            date: '28/03/2020 10:20:10',
            message: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
            },
            {
            date: '28/03/2020 16:15:22',
            message: 'Ah scusa!',
            status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro B.',
        avatar: './assets/man2.png',
        visible: true,
        messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Si, ma preferirei andare al cinema',
            status: 'received'
            }
        ],
        },
    {
        name: 'Alessandro L.',
        avatar: './assets/man1.png',
        visible: true,
        messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ricordati di chiamare la nonna',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Va bene, stasera la sento',
            status: 'received'
            }
        ],
    },
    {
        name: 'Claudia',
        avatar: './assets/woman1.png',
        visible: true,
        messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ciao Claudia, hai novità?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Non ancora',
            status: 'received'
            },
            {
            date: '10/01/2020 15:51:00',
            message: 'Nessuna nuova, buona nuova',
            status: 'sent'
            }
        ],
    },
    {
        name: 'Federico',
        avatar: './assets/man1.png',
        visible: true,
        messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Fai gli auguri a Martina che è il suo compleanno!',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Grazie per avermelo ricordato, le scrivo subito!',
            status: 'received'
            }
        ],
    },
    {
        name: 'Davide',
        avatar: './assets/man2.png',
        visible: true,
        messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ciao, andiamo a mangiare la pizza stasera?',
            status: 'received'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:51:00',
            message: 'OK!!',
            status: 'received'
            }
        ],
    }
];



const { createApp } = Vue

createApp({
  data() {

    return {
      contactsList: contacts , //array di oggetti
      activeContact: 0,
      newMessage: '',
      searchInput: '',
      activeOption: undefined,
    }

  },

  watch: {
    activeContact(newIndex, oldIndex){
        let check = newIndex === oldIndex;
        if (check === false){
            this.activeOption = undefined;
        }
    }
  },

  methods: {

    setActiveContact(i){
        let currentContactIndex = i
        this.activeContact = currentContactIndex
    },

    sendMessage(){
        if (this.newMessage.trim() !== ''){
            let indexContactsClicked = [];
            indexContactsClicked.push(this.activeContact);
            let senderIndex = indexContactsClicked[0];
            console.log('out function', senderIndex)

            this.contactsList[senderIndex].messages.push({
                date: '10/01/2020 15:51:00',
                message: this.newMessage,
                status: 'sent'
            });


            setTimeout(()=>{
                this.contactsList[senderIndex].messages.push({
                    date: '10/01/2020 15:51:00',
                    message: 'lesss go',
                    status: 'received'
                });

            }, 3000)

            this.newMessage = '';
            indexContactsClicked = [];

        } else {
            this.newMessage = '';
        }
    },

    getFilteredContactList(){

        let inputToArray = this.searchInput.toLowerCase();
        console.log('user input: ', inputToArray);

        this.contactsList.forEach((el)=>{
            let name = el.name.toLowerCase()
            if(name.includes(inputToArray)){
                el.visible = true;
            } else {
                el.visible = false;
            }

        })

    },


    getMessagesLastIndex(contact){
        return contact.messages.length - 1
    },


    setActiveOption(i){
        if (this.activeOption === undefined){
            let activeOptionIndex = i;
            this.activeOption = activeOptionIndex;

        } else {
            this.activeOption = undefined;
        }

        
    },

    deleteMessage(i){
        let activeContact = this.activeContact
        this.contactsList[activeContact].messages.splice(i, 1);
        this.activeOption = undefined;
    }

  },

  mounted(){
    console.log(this.$refs)
  },

}).mount('#app')