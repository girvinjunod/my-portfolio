<script lang="ts">
  import View from "../lib/View.svelte";
  import cv from "../assets/CV_Girvin_Junod.pdf";
</script>

<View nextViewPath="/projects" prevViewPath="/">
  <div class="flex flex-col items-center h-full w-full ml-12 text-lg">
    <div class="flex items-center mt-20">
      <div class="w-40">
        <h2 class="text-2xl text-right">About Me</h2>
      </div>
      <div class="ml-20 w-[800px] ">
        <p class="text-white text-left">
          Hello there, my name is Girvin Junod. I'm currently an undergraduate
          student in Institut Teknologi Bandung (ITB) majoring in Computer
          Science. I love exploring new stuff and learning more about computer
          science in general.
        </p>
      </div>
    </div>

    <div class="flex items-center mt-10">
      <div class="w-40">
        <h2 class="text-2xl text-right">Experiences</h2>
      </div>
      <div class="ml-20 w-[800px] text-white">
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

    <div class="flex items-center mt-10">
      <div class="w-40">
        <h2 class="text-2xl text-right">CV</h2>
      </div>
      <div class="ml-20 w-[800px] ">
        <p class="text-white text-left">
          You can preview my CV<a
            href={cv}
            download
            class="bg-amber-500 hover:bg-blue-500 duration-300 px-4 mx-2 rounded border-none py-1"
            >here</a
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
