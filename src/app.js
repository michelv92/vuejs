const MyNameApp = {
    data(){
        return{
            nome: "",
            validade: "",
            input_nome: "",
            input_validade: ""
        }
    },
    methods: {
        submitForm(e){
            e.preventDefault();
            this.nome = this.input_nome;
            this.validade = this.input_validade;
        },
        formatValidate(date){
            if(!date) return "";
            const [year, month] = date.split("-");
            return `${month}/${year.slice(-2)}`;
        }
    }
}

Vue.createApp(MyNameApp).mount('#app');