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
      msj: "... :(",
      categories: [],
    };
  },
  methods: {
    findAll: function () {
      fetch("http://127.0.0.1:8000/api/category/?format=json")
        .then((res) => res.json())
        //.then(res => console.log(res))
        .then((res) => (this.categories = res));
    },
  },
};
</script>