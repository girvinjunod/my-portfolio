<script lang="ts">
  import picture from "../assets/girvin.png";
  import { slide } from "svelte/transition";
  import { quartInOut } from "svelte/easing";
  import View from "../lib//View.svelte";
  const roles = ["Student", "Software Engineer", "Fullstack Developer"];
  let i = 0;
  let activeIndex = 0;
  setInterval(() => {
    i = (i + 1) % roles.length;
    activeIndex = i;
  }, 2500);
</script>

<View nextViewPath="/" prevViewPath="/">
  <div class="flex mx-auto my-auto justify-center items-center">
    <img
      src={picture}
      alt="Girvin Junod"
      class="object-cover rounded-full h-52 w-52 m-8"
    />
    <div class="w-max text-left">
      <h2 class="text-4xl mb-4">Hello, I'm Girvin Junod</h2>
      {#each roles as role, idx}
        {#if activeIndex == idx}
          <p
            transition:slide|local={{
              duration: 200,
              easing: quartInOut,
            }}
            class="role"
          >
            {role}
          </p>
        {/if}
      {/each}
    </div>
  </div>
</View>

<style>
  p,
  h2 {
    @apply font-sans text-white;
  }

  .role {
    @apply text-3xl font-bold font-mono;
  }
</style>
