<template>
  <div id="app">
    <nav id="header">
      <div class="wrapper">
        <div class="nav-logo"><img src="@/assets/brand-logo.svg" /></div>
        <div>
          <router-link to="/">Home</router-link>
          <router-link to="/products">Products</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/contact">Contact</router-link>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
  export default {
    methods: {
      handleSCroll (event) {
        let header = document.querySelector("#header");
        if (window.scrollY > 400) {
          header.classList.add("nav-scrolled");          
        } else {
          header.classList.remove("nav-scrolled");
        }
      }
    },
    created () {
      window.addEventListener('scroll', this.handleSCroll);
    },
  }
</script>

<style>
</style>