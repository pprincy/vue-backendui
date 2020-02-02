<template>
  <div   :class="{'main-sidenav': $store.state.hamburger}" id="app">
    <notifications group="foo" />
    <router-view />
  </div>
</template>

<style lang="scss">
@import "src/assets/scss/main.scss";
</style>
