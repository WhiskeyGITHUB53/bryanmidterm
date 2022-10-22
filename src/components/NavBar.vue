<template>
  <nav>
      <v-toolbar app >
       <v-app-bar-nav-icon @click='toggleDrawer'></v-app-bar-nav-icon>
      <v-toolbar-title >
        <span class="font-weight-light">Mas Bryan </span>
        <span>Midterm Project INTEG  </span>
      </v-toolbar-title>
      <v-spacer ></v-spacer>

      <!-- dropdown menu -->
    <v-menu
      open-on-hover
      
    >
      

        <v-list >
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            router
            :to="item.path" :prepend-icon="item.icon">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
    </v-menu>

    
      
      
      </v-toolbar>

     <v-navigation-drawer id="aydol" app v-model="drawer" >
       <v-list-item
          v-for="item in items"
          :key="item.title"
          router 
          :to="item.path" :prepend-icon="item.icon">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          
        </v-list-item>
      
     </v-navigation-drawer>
  </nav>
</template>

<script setup>
  import { ref } from 'vue'
    
  const drawer = ref(false)

  const  items =  ref([
           { title: 'Personal Life of Mine', icon: 'mdi-account', path: '/' },
           { title: 'My Skills', icon: 'mdi-view-dashboard', path: '/skills' },
           { title: 'Basic Mathematics Demo', icon: 'mdi-plus-one', path: '/basicMath' },
           { title: 'String Application', icon: 'mdi-code-string', path: '/stringApp'},
           { title: 'Axios Demo', icon: 'mdi-api', path: '/axiosDemo'},
           { title: 'Part of Calculator', icon: 'mdi-calculator-variant-outline', path: '/area'},
           { title: 'Quiz Application', icon: 'mdi-lightbulb-on', path: '/quiz'},
           
           

           
        ])

 function toggleDrawer(){
  return drawer.value = !drawer.value
 }

 
</script>
<style>
 #aydol{
    color: rgb(0, 0, 0);
    background-color: rgba(178, 120, 4, 0.885);
   }
</style>