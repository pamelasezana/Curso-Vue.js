<template>
    <div>
        <button @click="primeiro(txt1, $event), segundo(txt2, $event)">Ativar multiplos eventos</button>
        <p>{{multiplos_eventos}}</p>
    </div>
</template>

<script>
    export default{
        name: 'multiplosEventos',
        data(){
            return{
                multiplos_eventos:'',
                txt1:"Primeiro dado ativado",
                txt2:"Segundo dado ativado"
            }
        },
        methods:{
            primeiro(txt){
               
                this.multiplos_eventos=txt;
              
               
               
            },
            segundo(txt){
                
                setTimeout(()=>{
                   this.multiplos_eventos=txt;},1000)
            }

        }
    }
</script>

<style scoped>
    div{
        margin:100px;
    }
</style>