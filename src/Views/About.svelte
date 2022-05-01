<script lang="ts">
  import picture from "../assets/girvin.png";
  import View from "../lib/View.svelte";
</script>

<View nextViewPath="/about" prevViewPath="/">
  <div class="flex flex-col justify-center items-center z-30">
    <div>
      <h2>About Me</h2>
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

  .circle {
    @apply bg-blue-300 h-3 w-3 rounded-full;
  }
</style>
