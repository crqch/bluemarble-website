<script lang="ts">
  import { inViewPopIn } from "$lib/motion.svelte";

  let { children } = $props();
</script>

<div
  use:inViewPopIn={{}}
  class="flex flex-col bg-base-200 p-4 w-full items-center rounded-box border border-base-200 gap-2"
>
  {@render children()}
</div>
