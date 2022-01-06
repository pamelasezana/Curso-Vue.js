const Nameapp = {
    data() {
        return{
            name:"",
            idade:20,
            cidade:"São Paulo",
            estado:"SP",
            input_name:""
        }
    },
    methods:{
        submit_form(e){
            e.preventDefault(); //evitaque o form seja enviado para o servidor
            console.log(this.input_name);
            this.name = this.input_name;
        }
    }
}

Vue.createApp(Nameapp).mount('#app'); //montei em uma div