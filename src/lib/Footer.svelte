<script lang="ts">
  import cv from "../assets/CV_Girvin_Junod.pdf";
</script>

<footer>
  <p class="text-center">
    2022 - Preview my CV <a
      href={cv}
      download="CV_Girvin_Junod"
      class="text-yellow-300 hover:text-blue-300 duration-300">here</a
    >
  </p>
</footer>

<style>
  footer {
    @apply h-5 m-0 fixed left-0 bottom-0 w-full p-4 text-center text-white text-xs flex items-center justify-center;
  }
</style>
