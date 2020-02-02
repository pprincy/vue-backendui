<template>
  <div>
    <div class="top-bar">
      <div class="logo">
        <a title="Admin" class="display-4">
          Logo
        </a>
        <div
          class="menu-options"
          @click="hamburgerChange"
          :class="{ active: $store.state.hamburger }"
        >
          <span class="menu-action">
            <i></i>
          </span>
        </div>
      </div>
      <div class="quick-links">
        <ul>
          <li>
            <button title="Logout" class="btn btn-danger btn-small" v-on:click="logout">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
    <!-- Top Bar -->
    <!-- {{$store.state.sideNav}} -->
    <header class="side-header opened-menu" :class="{ 'nav-width': $store.state.hamburger }">
      <div class="admin-details">
        <h3 style="text-transform: capitalize;">Dashboard</h3>
        <i></i>
      </div>
      <div class="menu-scroll">
        <div class="side-menus">
          <span>MAIN LINKS</span>
          <!-- <nav ng-include="template.menu"></nav> -->
          <!-- <nav>
            <b-list-group @click="mylinkbar()" :class="{'linkcolor':mylinkset==true}">
              <router-link to="/viewUser" ><b-list-group-item >User</b-list-group-item></router-link>
            </b-list-group>
            <b-list-group @click="mylinkbar()" :class="{'linkcolor':mylinkset==true}">
              <router-link to="/viewUser" ><b-list-group-item >User</b-list-group-item></router-link>
            </b-list-group>
          </nav> -->
          <nav>
            <ul>
              <li><router-link to="/viewUser">Employee</router-link></li>
            </ul>
          </nav>
        </div>
      </div>
      <!-- Menu Scroll -->
    </header>
  </div>
</template>
<script>
import Vue from "vue";
import Vuex from "vuex";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      isActive: false,
      mysidebar: false,
      mylinkset: false
    };
  },

  methods: {
    ...mapMutations({
      hamburgerChange: "changeHamburger" // map `this.increment()` to `this.$store.commit('increment')`
    }),

    logout() {},
    clickSide() {
      this.mysidebar = !this.mysidebar;
    },
    mylinkbar() {
      console.log("fggdfgdfg");
      this.mylinkset == !this.mylinkset;
    }
  }
};
</script>
<style lang="scss">
.nav-width {
  width: 0px !important;
}

.linkcolor {
  background: red;
  text-decoration: none;
  color: black;
}
@media (max-width: 1200px) {
  header.side-header {
    left: 0px;
  }
}
@media (max-width: 767px) {
  header.side-header {
    top: 110px;
  }
}
</style>
