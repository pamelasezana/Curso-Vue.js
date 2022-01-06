<template>
<div>
    <h2>Essa é a descrição da pessoa: {{nome}}</h2>
    <p>Estou trabalhando no momento.</p>
    <p>Utilizo as seguintes tecnologias:</p>
    <ul>
        <li>Javascript</li>
        <li>PHP</li>
        <li>C#</li>
        <li>Python</li>

    </ul>
    <info :email="email" /> 
    

</div>

</template>
    
<script>
    import info from './info'

    export default {
        name: 'pessoa',
        Components:{
            info
        },

        data(){
            return{
                nome: "Gabriel",
                email: "sezanapamela@gmail.com"
            }
        }
    }
</script>
