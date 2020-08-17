<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1 class="text-center">HTTP</h1>
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" class="form-control" v-model="user.username" />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" class="form-control" v-model="user.email" />
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
        <hr />
        <button class="btn btn-primary" @click="fetchData">Get Data</button>
        <hr />
        <ul class="list-group">
          <li class="list-group-item" v-for="(u, i) of users" :key="i">{{u.username}} - {{u.email}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        email: "",
      },
      users: [],
      BASE_URL: process.env.VUE_APP_API_URL,
    };
  },
  methods: {
    submit() {
      this.$axios.post(this.BASE_URL, this.user).then((response) => {
        console.log("submit -> response", response);
      });
    },
    async fetchData() {
      let response = await this.$axios.get(this.BASE_URL);
      this.users = response.data;
    },
  },
};
</script>

<style>
</style>
