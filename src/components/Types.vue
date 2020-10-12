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
      msj: "... :(",
      types: [],
    };
  },
  methods: {
    findAll: function () {
      fetch("http://127.0.0.1:8000/api/type/?format=json")
        .then((res) => res.json())
        //.then(res => console.log(res))
        .then((res) => (this.types = res));
    },
  },
};
</script>