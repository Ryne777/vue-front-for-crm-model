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
      <i style="padding-left: 20px; padding-top: 10px" class="material-icons">arrow_forward</i>
    </a>
  </div>
</template>

<script>
import M from "materialize-css";
export default {
  name: "sideBar",
  mounted() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".sidenav");
      M.Sidenav.init(elems, {});
    });
  }
};
</script>
