<template>
<div>
  <img :src="avatar" :alt="descricao">

  <Mudarimagem  @Mudar-imagem="trocarimagem" />
</div>
  
</template>

<script>
import Mudarimagem from './Mudarimagem.vue'


export default{
    name: 'Picture',
    components: {
        Mudarimagem
    },

    data(){
        return{
            avatar:"/imgs/avatar.png",
            descricao: "Gabriel Estevam"
        }
    },
    methods:{
        trocarimagem(){
       if (this.avatar == "/imgs/avatar.png"){
           this.avatar = "/imgs/avatar2.png";
         
        }
        else{
            this.avatar = "/imgs/avatar.png";
        }
        }
    }
    
}
</script>
