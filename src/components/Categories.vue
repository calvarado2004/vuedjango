<template>
  <div>
    <h5>Categories</h5>
    <b-list-group>
        <b-list-group-item button v-for="c in categories" v-bind:key="c.id">
          <router-link :to="'/detail/' + c.id">
            {{ c.title }}
          </router-link>
        </b-list-group-item>
    </b-list-group>
  </div>
</template>


<script>
export default {
  created() {
    this.findAll();
  },

  data() {
    return {
      categories: [],
      host: process.env.VUE_APP_DJANGO_HOST,
      port: process.env.VUE_APP_DJANGO_PORT,
    };
  },
  methods: {
    findAll: function () {
      fetch("https://" + this.host + ":" + this.port + "/api/category/?format=json")
        .then((res) => res.json())
        //.then(res => console.log(res))
        .then((res) => (this.categories = res));
    },
  },
};
</script>