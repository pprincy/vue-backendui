<template>
  <div>
    <div class="account-user-sec">
      <div class="account-sec">
        <div class="account-top-bar">
          <div class="container">
            <div class="logo">
              <a ui-sref="login" title="Admin"> </a>
            </div>
          </div>
        </div>
        <div class="acount-sec">
          <div class="container">
            <notifications group="foo" />
            <div class="row justify-content-md-center">
              <div class="col-md-4 col-md-offset-4">
                <div class="contact-sec">
                  <div class="text-center p-4"><h4>Logo image</h4></div>
                  <b-form @submit.prevent="onSubmitUser" @reset="onReset" v-if="show">
                    <b-form-group id="input-group-1" label="Email:" label-for="input-1">
                      <!-- <b-form-input
                        id="input-1"
                        type="email"
                        v-model="user.username"
                        required
                        placeholder="Enter email"
                      ></b-form-input> -->
                      <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
                        <b-input
                          id="inline-form-input-username"
                          placeholder="Enter Username"
                          v-model="user.username"
                          type="email"
                          required
                        ></b-input>
                      </b-input-group>
                      <div class="error text-left">Username is required</div>
                    </b-form-group>
                    <b-form-group id="input-group-1" label="Password:" label-for="input-1">
                      <!-- <b-form-input
                        id="input-1"
                        v-model="user.password"
                        type="password"
                        required
                        placeholder="Password"
                      ></b-form-input> -->
                      <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
                        <b-input
                          id="inline-form-input-username"
                          placeholder="Enter Password"
                          v-model="user.password"
                          type="password"
                          required
                        ></b-input>
                      </b-input-group>
                      <div class="error text-left">Password is required</div>
                    </b-form-group>
                    <div class="form-group text-center">
                      <button class="btn btn-primary px-5">
                        Login
                      </button>
                    </div>
                  </b-form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      errors: [],
      user: {
        username: "",
        password: ""
      },
      show: true
    };
  },
  created() {
    console.log("********************");
    this.CheckIdleTime();
  },
  methods: {
    onSubmitUser(user) {
      if (this.user.username && this.user.password) {
      } else {
        console.log("roles", this.user.accessLevel);
      }
      this.errors = [];

      if (!this.user.email) {
        this.errors.push("Login required.");
      }
      if (!this.user.password) {
        this.errors.push("Password required.");
      }
      // console.log(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.password = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
