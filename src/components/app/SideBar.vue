<template>
  <div>
    <ul id="slide-out" class="sidenav sidenav-fixed">
      <router-link
        v-for="link in links"
        :key="link.url"
        tag="li"
        active-class="active"
        :to="link.url"
        :exact="link.exact"
      >
        <a href="#" class="waves-effect waves-orange pointer">{{ link.title }}</a>
      </router-link>
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
  data: () => ({
    links: [
      { title: "HOME", url: "/", exact: true }
      // { title: localizeFilter('Menu_History'), url: '/history' },
      // { title: localizeFilter('Menu_Planning'), url: '/planning' },
      // { title: localizeFilter('Menu_NewRecord'), url: '/record' },
      // { title: localizeFilter('Menu_Categories'), url: '/categories' }
    ]
  }),
  mounted() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".sidenav");
      // eslint-disable-next-line no-undef
      M.Sidenav.init(elems, {});
    });
  }
};
</script>
