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
      <router-link to="/newAccount" class="btn-floating btn-large red pulse">
        <i class="large material-icons">add_circle_outline</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/app/SideBar";
import NavBar from "../components/app/NavBar";
import Footer from "../components/app/Footer";
export default {
  name: "main-layout",
  components: { NavBar, Footer, SideBar }
};
</script>
