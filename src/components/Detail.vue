<template>
  <div>
    <b-card>
      <h1>{{ element.title }}</h1>
      <div class="p-3" v-if="element.category" >
        <router-link
          class="btn btn-secondary btn-sm"
          :to="{ name: 'list-category', params: { id: element.category } }"
          >{{ category.title }}</router-link
        >
        <router-link
          class="ml-2 btn btn-secondary btn-sm"
          :to="{ name: 'list-type', params: { id: element.types } }"
          >{{ type.title }}</router-link
        >
        <b-card-text>
          {{ element.description }}
        </b-card-text>
      </div>
    </b-card>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  created() {
    this.find();
  },
  data() {
    return {
      element: Object,
      category: Object,
      type: Object,
      host: process.env.VUE_APP_DJANGO_HOST,
      port: process.env.VUE_APP_DJANGO_PORT,
    };
  },
  methods: {
    find: function () {
      axios.get(
        "http://" + this.host + ":" + this.port + "/api/element/" +
          this.$route.params.id +
          "/?format=json")
      
        //.then((res) => res.json())
        .then((res) => {
          this.element = res.data;
          this.findCategory(this.element.category);
          this.findType(this.element.types);
        });
    },
    findCategory: function (id) {
      axios.get("http://" + this.host + ":" + this.port + "/api/category/" + id + "/?format=json")
        //.then((res) => res.json())
        .then((res) => (this.category = res.data));
    },
    findType: function (id) {
      axios.get("http://" + this.host + ":" + this.port + "/api/type/" + id + "/?format=json")
        //.then((res) => res.json())
        .then((res) => (this.type = res.data));
    },
  }
};
</script>


<style >
.box {
  border: 3px solid #ccc;
  margin: 5px 0 0;
}
</style>