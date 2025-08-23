<script lang="ts">
  import type { Snippet } from "svelte";
  import type { ClassValue, HTMLButtonAttributes } from "svelte/elements";

  const {
    children,
    itemBefore,
    itemAfter,
    className,
    iconAnimations = true,
    ...props
  }: {
    children?: Snippet | Snippet[];
    itemBefore?: Snippet;
    itemAfter?: Snippet;
    className?: ClassValue;
    iconAnimations?: boolean;
  } & HTMLButtonAttributes = $props();
</script>

<button
  {...props}
  class={[
    "btn flex flex-row relative px-2 py-1 overflow-hidden group gap-2",
    className,
  ]}
>
  {#if itemBefore}
    {@render itemBefore()}
  {/if}
  {#if itemBefore && iconAnimations}
    <div
      class="absolute top-0 left-0 blur-sm scale-[4] group-hover:left-full group-hover:scale[8] group-active:scale[8] group-active:left-full transition-all duration-1000"
    >
      {@render itemBefore()}
    </div>
  {:else if itemAfter && iconAnimations}
    <div
      class="absolute top-0 left-0 blur-sm scale-[4] group-hover:left-full group-hover:scale[8] group-active:scale[8] group-active:left-full transition-all duration-1000"
    >
      {@render itemAfter()}
    </div>
  {/if}
  {#if children}
    {@render children()}
  {/if}
  {#if itemAfter}
    {@render itemAfter()}
  {/if}
</button>
