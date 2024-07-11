const MyNameApp = {
    data(){
        return{
            nome: "",
            sobrenome: "",
            idade: "",
            input_nome: "",
            input_sobrenome: "",
            input_idade: ""
        }
    },
    methods: {
        submitForm(e){
            e.preventDefault();
            this.nome = this.input_nome;
            this.sobrenome = this.input_sobrenome;
            this.idade = this.input_idade;
        }
    }
}

Vue.createApp(MyNameApp).mount('#app');