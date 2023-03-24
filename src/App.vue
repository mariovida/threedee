<template>
  <div id="app">
    <nav>
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

<style>
</style>