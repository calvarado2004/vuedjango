<template>
  <div>
    <h5>Types</h5>
    <b-list-group>
        <b-list-group-item button v-for="t in types" v-bind:key="t.id">
          <router-link :to="'/detail/' + t.id">
            {{ t.title }}
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
      types: [],
      host: process.env.VUE_APP_DJANGO_HOST,
      port: process.env.VUE_APP_DJANGO_PORT,
    };
  },
  methods: {
    findAll: function () {
      fetch("https://" + this.host + ":" + this.port + "/api/type/?format=json")
        .then((res) => res.json())
        //.then(res => console.log(res))
        .then((res) => (this.types = res));
    },
  },
};
</script>