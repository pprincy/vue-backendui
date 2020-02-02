<template>
  <div>
    <div>
      <headerCustom></headerCustom>
  
      <div class="sidenav-part template main-content">
        <div>
          <div class="breadcrumbs">
            <ul>
              <li>
                <a title="Home">Home</a>
              </li>
              <li>
                <a>Create Employee</a>
              </li>
            </ul>
          </div>
          <div class="heading-sec">
            <div class="row">
              <div class="col-md-4 column">
                <div class="heading-profile">
                  <h2>Create Employee</h2>
                </div>
              </div>
            </div>
          </div>
          <!-- Top Bar Chart -->
          <div class="panel-content">
            <div class="row">
              <div class="col-md-12">
                <div class="widget">
                  <div class="form-elements-sec">
                    <div class="form-body">
                      <form name="details" class="form text-left" @submit.prevent="submit">
                        <!-- first name start-->
                        <div>
                          <div class="form-group col" :class="{ 'form-group--error': $v.details.firstname.$error }">
                            <label for="firstname">First Name:</label>
                            <input type="firstname" class="form-control" id="firstname" placeholder="Enter First Name" v-model.trim="details.firstname" @input="setFirstName()">
                            <div class="error" v-if="!$v.details.firstname.required && $v.details.firstname.$error">firstname is required</div>
                          </div>
                        </div>
                        <!-- first name end -->
                        <!-- last name start -->
                        <div>
                          <div class="form-group col" :class="{ 'form-group--error': $v.details.lastname.$error }">
                            <label for="lastname">Last Name:</label>
                            <input type="lastname" class="form-control" id="lastname" placeholder="Enter Name" v-model.trim="details.lastname" @input="setLastName()">
                            <div class="error" v-if="!$v.details.lastname.required && $v.details.lastname.$error">lastname is required</div>
                          </div>
                        </div>
                        <!-- last name end -->
                        <!-- Email start -->
                        <div>
                          <div class="form-group col" :class="{ 'form-group--error': $v.details.email.$error }">
                            <label for="email">Email:</label>
                            <input type="email" class="form-control" id="email" onkeypress="return ( \b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b.)" placeholder="name@gmail.com" v-model.trim="details.email" @input="setEmail()">
                            <div class="error" v-if="!$v.details.email.required && $v.details.email.$error">Email is required</div>
                          </div>
                        </div>
                        <!-- Email end -->
                        <!-- mobile no start -->
                        <div>
                          <div class="form-group col" :class="{ 'form-group--error': $v.details.phoneno.$error }">
                            <label for="phoneno">Mobile No:</label>
                            <input type="number" class="form-control" id="phoneno" placeholder="Enter Phonr No" v-model.trim="details.phoneno" @input="setPhoneno()">
                            <div class="error" v-if="!$v.details.phoneno.required && $v.details.phoneno.$error">Mobile No is required</div>
                          </div>
                        </div>
                        <!-- mobile no end -->
                        <!-- address -->
                        <div>
                          <div class="form-group col" :class="{ 'form-group--error': $v.details.address.$error }">
                            <label for="address">Address:</label>
                            <input type="text" class="form-control" id="address" placeholder="Enter Address" v-model.trim="details.address" v-on:click="setAddress()">
                            <div class="error" v-if="!$v.details.address.required && $v.details.address.$error">Address is required</div>
                          </div>
                        </div>
                        <!-- state start -->
                         <div>
                          <div class="form-group col" :class="{ 'form-group--error': $v.details.state.$error }">
                            <label for="state">State:</label>
                            <input type="text" class="form-control" id="state" placeholder="Enter state" v-model.trim="details.state" @input="setState()">
                            <div class="error" v-if="!$v.details.state.required && $v.details.state.$error">State is required</div>
                          </div>
                        </div>
                        <!-- state end -->
                        <!-- city start -->
                         <div>
                          <div class="form-group col" :class="{ 'form-group--error': $v.details.city.$error }">
                            <label for="city">City:</label>
                            <input type="text" class="form-control" id="city" placeholder="Enter city" v-model.trim="details.city" @input="setCity()">
                            <div class="error" v-if="!$v.details.city.required && $v.details.city.$error">City is required</div>
                          </div>
                        </div>
                        <!-- city end -->
                        <!-- pincode start -->
                          <div>
                          <div class="form-group col" :class="{ 'form-group--error': $v.details.pincode.$error }">
                            <label for="pincode">Pincode:</label>
                            <input type="number" class="form-control" id="pincode" placeholder="Enter pincode" v-model.trim="details.pincode" @input="setPincode()">
                            <div class="error" v-if="!$v.details.pincode.required && $v.details.pincode.$error">pincode is required</div>
                          </div>
                        </div>
                        <!-- pincode end -->
                        <!-- password start -->
                          <div>
                          <div class="form-group col" :class="{ 'form-group--error': $v.details.password.$error }">
                            <label for="password">Password:</label>
                            <input type="password" class="form-control" id="password" placeholder="Enter password" v-model.trim="details.password" @input="setPassword()">
                            <div class="error" v-if="!$v.details.password.required && $v.details.password.$error">Password is required</div>
                          </div>
                        </div>
                        <!-- password end -->
                        <!-- confirm password start -->
                          <div>
                          <div class="form-group col" :class="{ 'form-group--error': $v.details.cpassword.$error }">
                            <label for="cpassword">Confirm Password:</label>
                            <input type="password" class="form-control" id="cpassword" placeholder="Enter cpassword" v-model.trim="details.cpassword" @input="setCPassword()">
                            <div class="error" v-if="!$v.details.cpassword.required && $v.details.cpassword.$error">Confirm Password is required</div>
                          </div>
                        </div>
                        <!-- confirm password end -->
                        <div class="button">
                          <button type="submit" class="btn btn-success" v-on:click="submitForm()">Save</button>
                          <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
                          <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
                          <button type="reset" class="btn btn-danger mx-3" v-on:click="resetForm()">Cancel</button>
                        </div>
                      </form>
                    </div>
                  </div>
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
import {
  required,
  minLength,
  maxLength,
  between,
  sameAs,
  email
} from "vuelidate/lib/validators";
import headerCustom from "@/components/Header.vue";
export default {
  components: {
    headerCustom
  },
  data() {
    return {
      details: {
        firstname: "",
        lastname: "",
        address: "",
        email: "",
        phoneno: "",
        state: "",
        city: "",
        pincode: "",
        password: "",
        cpassword: "",

        submitStatus: null
      }
    };
  },

  validations: {
    details: {
      firstname: {
        required
      },
      lastname: {
        required
      },
      email: {
        required,
        email
      },
      address: {
        required
      },
      phoneno: {
        required
      },
      state: {
        required
      },
      city: {
        required
      },
      pincode: {
        required
      },
      password: {
        required
      },
      cpassword: {
        required
      }
    }
  },

  methods: {
    setFirstName(value) {
      // this.details.middlename = value;
      this.$v.details.firstname.$touch();
    },
    setLastName(value) {
      // this.details.middlename = value;
      this.$v.details.lastname.$touch();
    },
    setEmail() {
      this.$v.details.email.$touch();
    },
    setEmail() {
      this.$v.details.setEmail.$touch();
    },
    setPhoneno() {
      this.$v.details.phoneno.$touch();
    },
    setAddress() {
      this.$v.details.address.$touch();
    },
    setState() {
      this.$v.details.state.$touch();
    },
    setCity() {
      this.$v.details.city.$touch();
    },
    setPincode() {
      this.$v.details.pincode.$touch();
    },
    setPassword() {
      this.$v.details.password.$touch();
    },
    setCPassword() {
      this.$v.details.cpassword.$touch();
    },

    submitForm() {
      console.log("submit");
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "OK";
      }
    },

    resetForm() {
      this.details = "blank";
      this.$nextTick(() => {
        this.$v.$reset();
      });
    }
  }
};
</script>

<style>
.example {
  text-align: center;
  background-color: darkorange;
}

.error {
  color: red;
}

.button {
  text-align: center;
}
</style>
