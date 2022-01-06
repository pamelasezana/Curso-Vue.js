<template>
    <div>
        <ul>
            <li><a href="">HOME</a></li>
              <li><a href="">ABOUT</a></li>
             <li><a href="">PROJECTS</a></li>
              <li><a href="">CONTACT</a></li>
                <li v-if="esta_logado"><a href="">Meu Perfil</a></li>
              
 
        </ul>
    </div>
</template>

<script>
    export default{
        name: 'Header',
        props:[
            'esta_logado'
        ],
       
    }
</script>

<style scoped> /*scoped faz com que o style definido aqui nao vá pro resto da aplicação*/
 ul{
        list-style: none;
        display: flex;
        background-color:#999;
        font-size: 20px;
        
 }
 li{
     margin-right:10px;
 }
 a{
     color:#ddd;
     text-decoration: none;
     transition: 2s;
 }
 a:hover{
     color:turquoise;
 }
</style>
