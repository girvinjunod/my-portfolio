<script lang="ts">
  import View from "../lib/View.svelte";
  import cv from "../assets/CV_Girvin_Junod.pdf";
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  let showLang = false;
  let hideLang = false;
  let toggleLanguage = () => {
    console.log("Click");
    showLang = !showLang;
    hideLang = !hideLang;
  };
</script>

<View nextViewPath="/projects" prevViewPath="/">
  <div class="flex flex-col items-center h-full w-full ml-12 text-lg">
    <!-- Description -->
    <div class="flex mt-10">
      <div class="w-40">
        <h2 class="text-xl text-right">About Me</h2>
      </div>
      <div class="ml-20 w-[800px] ">
        <p class="text-white text-left text-base">
          Hello there, my name is Girvin Junod. I'm currently an undergraduate
          student in Institut Teknologi Bandung (ITB) majoring in Computer
          Science. I love exploring new stuff and learning more about computer
          science in general.
        </p>
      </div>
    </div>

    <!-- Skills -->
    <div class="flex mt-10">
      <div class="w-40 flex justify-end">
        <h2 class="text-xl text-right">Skills</h2>
      </div>
      <div class="ml-20 w-[800px] text-white text-left text-base">
        <button class="font-bold flex items-center" on:click={toggleLanguage}>
          <span class:hidden={hideLang} class=" w-1">
            <i class="fa-solid fa-chevron-right" />
          </span>
          <span class:hidden={!hideLang} class=" w-1">
            <i class="fa-solid fa-chevron-down " />
          </span>
          <p class="ml-4">Programming Languages</p></button
        >
        {#if showLang}
          <div
            transition:slide|local={{ easing: quintOut }}
            class="bg-blue-400 rounded ml-5 p-1"
          >
            <ul class="flex">
              <li>JavaScript</li>
              <li>Python</li>
            </ul>
          </div>
        {/if}
        <!-- <details>
          <summary>Technologies</summary>
          <p>Hi</p>
        </details> -->
      </div>
    </div>

    <!-- Experiences -->
    <div class="flex mt-10">
      <div class="w-40">
        <h2 class="text-xl text-right">Experiences</h2>
      </div>
      <div class="ml-20 w-[800px] text-white text-base">
        <div class="flex">
          <div class="line">
            <div class="dot" />
          </div>
          <div class="text-left mb-6">
            <h3>Backend Engineer (Part-Time)</h3>
            <h4>Kenangan.com</h4>
            <h5>December 2021 - Present</h5>
          </div>
        </div>
        <div class="flex">
          <div class="line">
            <div class="dot" />
          </div>
          <div class="text-left mb-6">
            <h3>Computational Science and Engineering Laboratory Assistant</h3>
            <h4>Institut Teknologi Bandung</h4>
            <h5>August 2021 - Present</h5>
          </div>
        </div>
        <div class="flex">
          <div class="line">
            <div class="dot" />
          </div>
          <div class="text-left mb-4">
            <h3>Lab Assistant of Introduction to Computation Course</h3>
            <h4>Institut Teknologi Bandung</h4>
            <h5>August 2020 - December 2020</h5>
          </div>
        </div>
      </div>
    </div>

    <!-- CV -->
    <div class="flex mt-10">
      <div class="w-40">
        <h2 class="text-xl text-right">CV</h2>
      </div>
      <div class="ml-20 w-[800px] ">
        <p class="text-white text-left text-base">
          You can preview my CV <a
            href={cv}
            download="CV_Girvin_Junod"
            class="text-yellow-300 hover:text-blue-300 duration-300">here</a
          >
        </p>
      </div>
    </div>
  </div>
</View>

<style>
  h2 {
    @apply font-sans text-white;
  }

  .line {
    @apply w-1 bg-slate-400 my-0 mr-4;
  }

  .dot {
    @apply w-4 h-4 rounded-full mt-6 -ml-[0.33rem] bg-blue-300 bg-auto;
  }
</style>
