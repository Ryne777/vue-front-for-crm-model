<template>
  <div class="main-layout">
    <NavBar></NavBar>
    <SideBar></SideBar>
    <main class="container main">
      <router-view />
    </main>
  </div>
</template>

<script>
import SideBar from "@/components/app/SideBar";
import NavBar from "../components/app/NavBar";
export default {
  name: "main-layout",
  components: { SideBar, NavBar }
};
</script>
