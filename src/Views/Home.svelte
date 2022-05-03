<script lang="ts">
  import { slide } from "svelte/transition";
  import { quartInOut } from "svelte/easing";
  import View from "../lib/View.svelte";
  import SocialMedia from "../data/SocialMedia";

  // import { onMount } from "svelte";
  // import anime from "animejs";

  const roles = ["Student", "Software Engineer", "Fullstack Developer"];
  let i = 0;
  let activeIndex = 0;

  setInterval(() => {
    i = (i + 1) % roles.length;
    activeIndex = i;
  }, 2000);
  // onMount(() => {
  //   anime({
  //     targets: ".canim .circle",
  //     scale: 2,
  //     easing: "easeInOutQuad",
  //     direction: "alternate",
  //     duration: 2000,
  //     delay: anime.stagger(200),
  //     loop: true,
  //   });
  // });
</script>

<View nextViewPath="/about" prevViewPath="/">
  <div class="flex flex-col justify-center items-center z-30 mx-auto my-auto">
    <div class="flex justify-center items-center w-[650px]">
      <img
        src="assets/girvin.png"
        alt="Girvin Junod"
        class="object-cover rounded-full h-52 w-52 m-8"
      />
      <div class="w-max text-left h-36 flex flex-col justify-centers">
        <h2 class="text-4xl mb-4">Hello, I'm Girvin Junod</h2>
        <div class="">
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
        <div class="mt-auto">
          {#each SocialMedia as { link, icon, isBrand }}
            <a
              href={link}
              target="_blank"
              class="text-white hover:text-blue-600 duration-300"
            >
              <i class="{isBrand ? 'fab' : 'fas'} fa-{icon} fa-2x icon mr-2 " />
            </a>
          {/each}
        </div>
      </div>
    </div>
    <!-- <div class="mx-auto flex canim">
      <div class="circle c1" />
      <div class="circle c2 ml-5" />
      <div class="circle c3 ml-5" />
      <div class="circle c4 ml-5" />
      <div class="circle c5 ml-5" />
    </div> -->
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

  .circle {
    @apply bg-blue-300 h-3 w-3 rounded-full;
  }
</style>
