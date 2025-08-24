<script>
  import { goto } from "$app/navigation";
  import { page } from "$app/state";
  import { Home, RefreshCcw } from "@lucide/svelte";
  import Button from "../components/Button.svelte";
  import { m } from "../paraglide/messages";
</script>

<div
  class="flex flex-col w-full min-h-screen items-center justify-center bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] [background-size:36px_36px]"
>
  <div
    class="flex flex-col border bg-base-200 border-base-300 rounded-box p-8 gap-4"
  >
    {#if page.status === 404}
      <h1 class="text-4xl font-bold">{m.error_notfound_title()}</h1>
      <p>{m.error_notfound_description()}</p>
    {:else}
      <h1 class="text-4xl font-bold">{m.error_title()}</h1>
      <p>{m.error_description()}</p>
    {/if}
    <Button onclick={() => window.location.reload()} className="mt-8">
      {#snippet itemBefore()}
        <RefreshCcw class="w-4 h-4 text-secondary" />
      {/snippet}
      {m.error_refresh()}
    </Button>
    <Button onclick={() => goto("/")}>
      {#snippet itemBefore()}
        <Home class="w-4 h-4" />
      {/snippet}
      {m.error_homepage()}
    </Button>
  </div>
</div>
