<template>
  <div>
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo center">Logo</a>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger right">
          <i class="material-icons">menu</i>
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <div v-if="this.$store.getters.isLoggedIn">
              <a href @click.prevent="logout">Logout</a>
            </div>
            <div v-else>
              <router-link to="/login">Login</router-link>
            </div>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">JavaScript</a>
          </li>
        </ul>
      </div>
    </nav>
    <ul class="sidenav" id="mobile-demo">
      <li>
        <a href="sass.html">Sass</a>
      </li>
      <li>
        <a href="badges.html">Components</a>
      </li>
      <li>
        <a href="collapsible.html">Javascript</a>
      </li>
      <li>
        <a href="mobile.html">Mobile</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "navBar",
  mounted() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".sidenav");
      // eslint-disable-next-line no-undef
      M.Sidenav.init(elems, {});
    });
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/login?message=logout");
    }
  }
};
</script>
