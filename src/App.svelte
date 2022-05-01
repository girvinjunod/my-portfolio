<script lang="ts">
  import "@fortawesome/fontawesome-free/js/all.min";
  import Router from "svelte-spa-router";
  import { Home, About, NotFound } from "./Views/routes";
  import Footer from "./lib/Footer.svelte";
  import Navbar from "./lib/Navbar.svelte";

  const routes = {
    "/": Home,
    "/about": About,

    "*": NotFound,
  };
</script>

<main class="flex">
  <Navbar />
  <div class="bg-[#00134A] z-0 flex text-center mx-0 my-auto h-full w-full">
    <Router {routes} restoreScrollState={true} />
    <Footer />
  </div>
</main>

<style>
  main {
    @apply h-screen w-screen;
  }
</style>
