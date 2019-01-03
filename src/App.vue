<template>
  <div id="app">
    <section class="hero is-primary">
    <div class="hero-head">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <!-- <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
            </a> -->
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
            <router-link to="/Home" class="navbar-item">
                Home
            </router-link>

            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                Car Care
                </a>

                <div class="navbar-dropdown">
                <router-link to="/CarWash" class="navbar-item">
                    Car Wash
                </router-link>
                <router-link to="/AutoDetailing" class="navbar-item">
                    Auto Detailing
                </router-link>
                </div>
            </div>
            </div>

            <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                <a class="button is-primary">
                    <strong>About Us</strong>
                </a>
                <a class="button is-primary">
                    <strong>Contact</strong>
                </a>
                <router-link to="/BookingForm" class="button is-light">
                    Book A Service
                </router-link>
                </div>
            </div>
            </div>
        </div>
      </nav>
    </div>
    </section>
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css');
@import './static/css/bulma.min.css';
</style>
