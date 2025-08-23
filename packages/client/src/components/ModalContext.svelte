<script lang="ts">
  import { X } from "@lucide/svelte";
  import { Motion } from "motion-start";
  import { fade } from "svelte/transition";
  import { hideModal, modalStore } from "../stores/modalStore";

  const state = modalStore;

  function handleButtonClick(onClickFn: () => void) {
    onClickFn();
    hideModal();
  }
</script>

{#if $state.shown}
  <div
    role="dialog"
    tabindex="0"
    class="fixed inset-0 bg-base-100/60 z-40 flex items-center justify-center p-4"
    on:keydown={(e) => {
      if (e.key === "Escape") hideModal();
    }}
    on:click|self={hideModal}
    transition:fade={{ duration: 150 }}
  >
    <Motion.div
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      initial={{
        opacity: 0,
        y: -20,
        scale: 0.95,
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      class="flex flex-col border border-base-200 bg-base-100 rounded-box p-6 shadow-xl max-w-3xl w-full"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div class="flex justify-between items-center mb-4">
        <h1 id="modal-title" class="text-2xl font-bold text-base-content">
          {$state.title}
        </h1>
        <button on:click={hideModal} class="btn btn-sm btn-square btn-ghost">
          <X class="w-4 h-4" />
        </button>
      </div>

      <div class="mb-6 text-base-content">
        {#if typeof $state.content === "string"}
          <p>{@html $state.content}</p>
        {:else}
          <!-- When content is a Svelte snippet, it's a function that needs to be called -->
          {@render $state.content()}
        {/if}
      </div>

      <div class="flex flex-row justify-end gap-3 w-full">
        {#each $state.buttons as button (button.text)}
          <button
            class="btn {button.className || 'btn-neutral'}"
            on:click={() => handleButtonClick(button.onClick)}
          >
            {button.text}
          </button>
        {/each}
      </div>
    </Motion.div>
  </div>
{/if}
