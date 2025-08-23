<script>
  import { page } from "$app/state";
  import { Home, RefreshCcw } from "@lucide/svelte";
  import Button from "../components/Button.svelte";
</script>

<div class="flex flex-col w-full min-h-screen items-center justify-center">
  <div
    class="flex flex-col border bg-base-200 border-base-300 rounded-box p-8 gap-4"
  >
    {#if page.status === 404}
      <h1 class="text-4xl font-bold">404 Not Found</h1>
      <p>The page you're trying to reach is not here.</p>
    {:else}
      <h1 class="text-4xl font-bold">An error ocurred.</h1>
      <p>Try again. If the error is not resolved please report it.</p>
    {/if}
    <Button onclick={() => window.location.reload()} className="mt-8">
      {#snippet itemBefore()}
        <RefreshCcw class="w-4 h-4 text-secondary" />
      {/snippet}
      Refresh the page
    </Button>
    <Button onclick={() => window.location.reload()}>
      {#snippet itemBefore()}
        <Home class="w-4 h-4" />
      {/snippet}
      Go back to homepage
    </Button>
  </div>
</div>
