<template>
  <div>
    <b-navbar type="dark" variant="dark" class="mb-3">
      <b-navbar-brand> Elements </b-navbar-brand>

      <b-navbar-nav>
        <b-nav-item href="#">Home</b-nav-item>


        <b-nav-item-dropdown text="Categories" right>
          <b-dropdown-item
            v-for="c in categories"
            v-bind:key="c.id"
            :to="'/category/' + c.id + '/elements'"
          >
            {{ c.title }}</b-dropdown-item
          >
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Types" right>
          <b-dropdown-item
            v-for="t in types"
            v-bind:key="t.id"
            :to="'/type/' + t.id + '/elements'"
          >
            {{ t.title }}</b-dropdown-item
          >
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>


<script>
export default {
  created() {
    this.findAllCategory();
    this.findAllTypes();
  },

  data() {
    return {
      categories: [],
      types: [],
      host: process.env.VUE_APP_DJANGO_HOST,
      port: process.env.VUE_APP_DJANGO_PORT,
      protocol: process.env.VUE_APP_DJANGO_PROTOCOL,
    };
  },
  methods: {
    findAllCategory: function () {
      fetch(this.protocol + "://" + this.host + ":" + this.port + "/api/category/?format=json")
        .then((res) => res.json())
        .then((res) => (this.categories = res));
    },
    findAllTypes: function () {
      fetch(this.protocol + "://" + this.host + ":" + this.port + "/api/type/?format=json")
        .then((res) => res.json())
        .then((res) => (this.types = res));
    },
  },
};
</script>