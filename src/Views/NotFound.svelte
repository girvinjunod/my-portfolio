<script lang="ts">
  import View from "../lib/View.svelte";
</script>

<View nextViewPath="/" prevViewPath="/">
  <div class="flex flex-col justify-center items-center z-30">
    <div>
      <h2 class="text-4xl mb-4">Page Not Found :(</h2>
    </div>
  </div>
</View>

<style>
  h2 {
    @apply font-sans text-white;
  }
</style>
