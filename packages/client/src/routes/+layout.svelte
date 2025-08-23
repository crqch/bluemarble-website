<script lang="ts">
  import { page } from "$app/state";
  import { Toaster } from "svelte-sonner";
  import "../app.css";
  import Modal from "../components/ModalContext.svelte";
  import { locales, localizeHref } from "../paraglide/runtime";

  const { children } = $props();
</script>

<main class="scroll-smooth">
  <Toaster
    toastOptions={{
      class:
        "!bg-base-100 !rounded-box border !border-base-300 !text-base-content",
    }}
  />
  <Modal />
  {@render children()}
</main>

<div style="display:none">
  {#each locales as locale}
    <a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
  {/each}
</div>
