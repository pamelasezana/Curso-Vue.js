<template>
   <div>
        <h1>Olá Vue!</h1>
        
    <p>Meu nome é: {{ nome }} e trabalho como {{profissao}}</p>
    <multiplosEventos/>
    <Reutilizacao/>
     <Reutilizacao/>
     

   </div>
</template>

<script>
import multiplosEventos from './MultiplosEventos.vue';
import Reutilizacao from './Reutilizacao.vue';
//segundo passo exportamos o componente//
    export default  { 
        name: 'componentone',
        components:{
            multiplosEventos,
            Reutilizacao
        },
        
        data(){
            return{
                nome: 'Pâmela',
                profissao: 'Desenvolvedora'
            }
        }
    }
</script>

<!--primeiro passo, criar componente--> 