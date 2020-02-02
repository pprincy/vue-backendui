<template>
  <div>
    <headerCustom></headerCustom>
    <div class="template main-content sidenav-part ng-scope">
      <!-- <div id="progressBar">
	<div class="loader"></div>
      </div>-->
      <div>
        <div class="heading-sec">
          <div class="row">
            <div class="col-md-4 column">
              <div class="heading-profile">
                <h2>Employee</h2>
              </div>
            </div>
          </div>
        </div>
        <!-- Top Bar Chart -->
        <div class="panel-content">
          <div class="row">
            <div class="col-md-12">
              <div class="widget">
                <div class="table-area">
                  <div class="widget-title">
                    <div class="float-right">
                      <form class="search-form mr-form">
                        <input
                          type="text "
                          @keyup="searchuser()"
                          placeholder="Search Here..."
                          v-model="formData.keyword"
                        />
                      </form>
                      <router-link to="CreateUser" class="btn btn-success btn-small"
                        >Create</router-link
                      >
                    </div>
                    <h3>
                      List of User
                      <span class="tableTotal">(Total : {{ totalItems }})</span>
                    </h3>
                  </div>
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>#</th>

                          <th>Name</th>

                          <th>Username</th>

                          <th>Mobile</th>

                          <th colspan="2">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(user, index) in users" v-bind:key="user._id">
                          <td>{{ index + 1 }}</td>

                          <td>
                            <div>{{ user.name }}</div>
                          </td>

                          <td>
                            <div>{{ user.email }}</div>
                          </td>

                          <td>
                            <div>{{ user.mobile }}</div>
                          </td>

                          <!-- v-repeat -->
                          <td>
                            <router-link
                              class="btn btn-primary"
                              :to="{
                                name: 'edituser',
                                params: { userID: user._id }
                              }"
                              append
                            >
                              <i class="fa fa-pencil"></i>edit </router-link
                            >&nbsp;
                            <!-- <button class="btn btn-danger">
                              <i class="fa fa-trash"></i>delete
                            </button>-->
                          </td>
                          <!-- end v-repeat -->

                          <!-- end v-repeat -->
                        </tr>
                        <!-- end v-repeat -->
                      </tbody>
                    </table>
                  </div>
                  <div class="overflow-auto">
                    <!-- Use text in props -->
                    <b-pagination
                      v-model="currentPage"
                      :total-rows="totalItems"
                      :per-page="perPage"
                      first-text="First"
                      prev-text="Prev"
                      next-text="Next"
                      last-text="Last"
                    ></b-pagination>
                  </div>
                  <!-- <div class="tableData" v-if="totalItems==0 ">
                    <h5>No data found</h5>
                  </div>
                  <div class="tableData" v-if="totalItems==undefined">
                    <h5>Loading Data</h5>
                  </div>-->
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
import headerCustom from "@/components/Header.vue";

export default {
  components: {
    headerCustom
  },
  data() {
    return {
      totalItems: "2",
      formData: {
        keyword: ""
      },
      // keyword:"",
      errors: [],
      users: [
        {
          name: "dds",
          email: "abc@gmail.com",
          mobile: "9987423172"
        },
        {
          name: "abc",
          email: "abc@gmail.com",
          mobile: "9987423172"
        },
        {
          name: "bbc",
          email: "abc@gmail.com",
          mobile: "9987423172"
        }
      ]
    };
  },
  methods: {
    searchuser() {}
  },
  created() {
    this.searchuser();
  }
};
</script>
<style>
thead{
  background: gray;
}
.table-area{
  background: lightgray;
}
</style>
