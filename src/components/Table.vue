<template>
  <div class="container">
    <b-table striped hover :items="elements" :fields="fields"></b-table>
  </div>
</template>

<script>
export default {
  created() {
    this.findAll();
  },

  data() {
    return {
      fields: [
        {
          key: "id",
          sortable: true,
        },
        {
          key: "title",
          sortable: true,
        },
        {
          key: "url_clean",
          label: "url limpia",
          sortable: true,
          variant: "warning",
        },
        {
          key: "description",
          sortable: true,
        },
        {
          key: "category",
          sortable: true,
        },
        {
          key: "type",
          sortable: true,
        },
      ],
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