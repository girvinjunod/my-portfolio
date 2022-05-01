<script lang="ts">
  import View from "../lib/View.svelte";
</script>

<View nextViewPath="/projects" prevViewPath="/about">
  <div class="flex flex-col justify-center items-center z-30">
    <div class="text-white">
      <h2>Projects</h2>
      <p>This page is under construction</p>
    </div>
  </div>
</View>

<style>
  h2 {
    @apply font-sans text-white;
  }
</style>
