<template>
  <div class="main-layout">
    <header>
      <NavBar></NavBar>
      <SideBar></SideBar>
    </header>
    <main>
      <router-view />
    </main>
    <Footer></Footer>
    <div class="fixed-action-btn">
      <a class="btn-floating btn-large red">
        <i class="large material-icons">mode_edit</i>
      </a>
      <ul>
        <li>
          <a class="btn-floating red">
            <i class="material-icons">insert_chart</i>
          </a>
        </li>
        <li>
          <a class="btn-floating yellow darken-1">
            <i class="material-icons">format_quote</i>
          </a>
        </li>
        <li>
          <a class="btn-floating green">
            <i class="material-icons">publish</i>
          </a>
        </li>
        <li>
          <a class="btn-floating blue">
            <i class="material-icons">attach_file</i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/app/SideBar";
import NavBar from "../components/app/NavBar";
import Footer from "../components/app/Footer";
export default {
  name: "main-layout",
  components: { NavBar, Footer, SideBar },
  mounted() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".fixed-action-btn");
      // eslint-disable-next-line no-undef
      M.FloatingActionButton.init(elems, { hoverEnabled: false });
    });
  }
};
</script>
