<template>
<div>
   <Header :esta_logado="true"/>
    <componentone/> <!--quarto passo, ele está sendo utilizado aqui através da tag template -->
  
  <LifeCycle/> 
  <info/>
  <pessoa/>
  <Picture/>  
</div>
  
</template>

<script>

  import componentone from './components/componentone.vue' //terceiro passo, o componente foi importado na aplicação//

  import LifeCycle from './components/LifeCycle.vue' 
  import pessoa from './components/pessoa.vue'
  import info from './components/info.vue'
    import Header from './components/header.vue'
    import Picture from './components/picture.vue'

 

  export default {
    name: 'App',
    components:{
      Header,
      componentone,
      LifeCycle,
      pessoa,
      info,
      Picture
      
      
    }
  }
</script>

<style >
body{
  background-color:#333;
  color:#fff;
}
a{
  color:red;
}
</style>