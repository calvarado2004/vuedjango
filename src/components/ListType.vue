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
      protocol: process.env.VUE_APP_DJANGO_PROTOCOL,
    };
  },
  methods: {
    findAll: function () {
      fetch(
        this.protocol + "://" + this.host + ":" + this.port + "/api/type/" +
          this.$route.params.id +
          "/elements/?format=json"
      )
        .then((res) => res.json())
        .then((res) => (this.elements = res));
    },
    watch:{
      "$route.params.id": function(){
         this.findAll();
      }
    }
  },

};
</script>


<style >
.box {
  border: 3px solid #ccc;
  margin: 5px 0 0;
}
</style>