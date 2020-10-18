<template>
  <div>
    <ListDefault :elementsList="elements" />
  </div>
</template>

<script>
import ListDefault from "../partials/_ListDefault.vue";

export default {
  components: {
    ListDefault,
  },
  created() {
    this.findAll();
  },

  data() {
    return {
      elements: [],
      host: process.env.VUE_APP_DJANGO_HOST,
      port: process.env.VUE_APP_DJANGO_PORT,
    };
  },
  methods: {
    findAll: function () {
      fetch("https://" + this.host + ":" + this.port + "/api/element/?format=json")
        .then((res) => res.json())
        //.then(res => console.log(res))
        .then((res) => (this.elements = res));
    },
  },
};
</script>


<style >
.box {
  border: 3px solid #ccc;
  margin: 5px 0 0;
}
</style>