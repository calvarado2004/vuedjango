<template>
  <div id="app">
    <Header />
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <Categories/>
          <br>
          <Types/>
        </div>
        <div class="col-md-8">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import List from "./components/List.vue";
//import Detail from './components/Detail.vue'
//import List from './components/Table.vue'
import Header from "./components/Header.vue";
import Categories from "./components/Categories.vue"
import Types from "./components/Types.vue"


export default {
  name: "App",
  components: {
    //Detail
    Header,
    Categories,
    Types,
  },
  data() {
    return {
      host: process.env.VUE_APP_DJANGO_HOST,
      port: process.env.VUE_APP_DJANGO_PORT,
    };
  },
};
</script>
