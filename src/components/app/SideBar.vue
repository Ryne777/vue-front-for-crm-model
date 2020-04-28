<template>
  <div>
    <ul id="slide-out" class="sidenav sidenav-fixed">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <a href="#!">Second Sidebar Link</a>
      </li>
    </ul>
    <a href="#" data-target="slide-out" class="sidenav-trigger side-icon">
      <!--  eslint-disable-next-line prettier/prettier -->
      <i class="material-icons">arrow_forward</i>
    </a>
  </div>
</template>

<script>
export default {
  name: "sideBar",
  mounted() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".sidenav");
      // eslint-disable-next-line no-undef
      M.Sidenav.init(elems, {});
    });
  }
};
</script>
