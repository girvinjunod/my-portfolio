<script lang="ts">
  import View from "../lib/View.svelte";
</script>

<View nextViewPath="/projects" prevViewPath="/about">
  <div class="flex flex-col justify-center items-center z-30">
    <div>
      <h2>Projects</h2>
    </div>
  </div>
</View>

<style>
  h2 {
    @apply font-sans text-white;
  }
</style>
