<script lang="ts">
  import { link as routerLink } from "svelte-spa-router";
  import active from "svelte-spa-router/active";
  import NavItems from "../data/NavItem";
</script>

<nav
  class="fixed bg-blue-900 h-screen m-0 w-20 duration-300 hover:w-52 text-white"
>
  <ul class="flex items-start flex-col h-full w-full list-none m-0 p-0">
    {#each NavItems as { text, link, icon }}
      <li class="w-full">
        <a
          class="flex items-center justify-start h-16 outline-none no-underline duration-300 
            hover:text-blue-300"
          href={link}
          use:routerLink
          use:active
        >
          <i class="fas fa-{icon} fa-2x ml-6 w-7" />
          <span class="hidden flex-grow">
            {text}
          </span>
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  nav:hover span {
    @apply block ml-4;
  }

  :global(.active) {
    background-color: rgb(147, 197, 253);
    transition: 300ms;
    color: rgb(30 58 138) !important;
  }
</style>
