<template>
    <h1>Meu nome é: {{nome}}</h1>
</template>

<script>
    export default{
        name:'LifeCycle',
        data(){
            return{
                nome:'Ainda não sei'
            }
        },
        created(){
            setTimeout (() => {
                this.nome='Gabriel'
            }, 2000);

            this.LifeCycle()
          
        },
        mounted(){
             setTimeout (() => {
                 this.nome = 'Pedro'
            }, 1000);
            this.LifeCycle()
        },
        methods:{
            LifeCycle(){
                console.log('executou')
            }
        }
        
    }
</script>
