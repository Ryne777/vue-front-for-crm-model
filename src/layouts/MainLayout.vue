<template>
  <div class="main-layout">
    <header>
      <NavBar></NavBar>
      <SideBar></SideBar>
    </header>
    <main class="container">
      <router-view />
    </main>
    <Footer></Footer>
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
