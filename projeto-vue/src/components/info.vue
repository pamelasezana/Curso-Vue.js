<template>
 <div>
   <p> {{email}}</p>
      <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
  <p v-else>Estou em busca de novas oportunidades!</p>
  <p>Utilizo as seguintes tecnologias para backend:</p>
  <ul >
    <li v-for="(technology, index) in backend_technologies " v-bind:key="index">{{technology}}</li>
   
  </ul>
  <p>Utilizo as seguintes tecnologias para frontend:</p>
  <ul>
    <li v-for="technology in frontend_technologies" :key="technology.id">
      {{technology.language}}
    </li>
  </ul>
 
  <div>
      <button @click="showEmail">
         {{TextoBottao}}
      </button>
  </div>
  <p v-show="mostrar_email">Mande mensagem para esse email: {{email}}</p>
  <p>Para acessar meu portifolio basta <a v-bind:href="meu_link" target="_blank">Clicar aqui</a></p>
  <Picture/>
 </div>
 
</template>
<script>
import Picture from './picture.vue'

export default {
  name: 'info',
 components:{
    Picture
    
 },
 props:{
   email: String
 },
  data() {
    return { 
      esta_trabalhando: false,
     mostrar_email: false,
     
     meu_link:'https://www.google.com/',
     TextoBottao: "Mostrar email",
     backend_technologies:['JavaScript','PHP','Python'],
     frontend_technologies:[
       {id: 1, language: 'HTML'},
       {id: 2, language: 'CSS'},
       {id: 3, language: 'Vue'}
     ]
      
    }
  },
  methods:{
      showEmail(){
         this.mostrar_email = !this.mostrar_email
         if (!this.mostrar_email){
                this.TextoBottao = "Mostrar email"
            }
            else{
                this.TextoBottao = "Esconder email"
            }
          
      }
  }
}

</script>