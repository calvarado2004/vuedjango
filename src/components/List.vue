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
      msj: "... :(",
      elements: [],
    };
  },
  methods: {
    findAll: function () {
      console.log("Hola Mundo");
      fetch("http://127.0.0.1:8000/api/element/?format=json")
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