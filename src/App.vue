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
    };
  },
  methods: {
    submit() {
      this.$http
        .post("https://vue-http-46012.firebaseio.com/user.json", this.user)
        .then(
          (response) => {
            console.log("submit -> response", response);
          },
          (error) => console.error(error)
        );
    },
  },
};
</script>

<style>
</style>
