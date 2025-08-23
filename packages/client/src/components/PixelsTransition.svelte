<script lang="ts">
  import { onMount } from "svelte";

  let {
    from,
    to,
  }: {
    from: string;
    to: string;
  } = $props();

  let blocks = $state<string[][]>([]);

  let regenerate = () => {
    blocks = [];
    for (let i = 0; i < 4; i++) {
      blocks[i] = [];
      for (let j = 0; j < 50; j++) {
        setTimeout(
          () => {
            if (i === 0) {
              blocks[i].push(from);
            } else {
              if (Math.random() + Math.sin((i - 1) / 5) < 0.5) {
                blocks[i].push(from);
              } else {
                blocks[i].push(to);
              }
            }
          },
          i * 250 + 20 * j
        );
      }
    }
  };

  onMount(() => {
    regenerate();
  });
</script>

<div
  onclickcapture={regenerate}
  class="flex flex-col items-start relative top-0 left-1/2 -translate-x-1/2 overflow-x-hidden bg-base-300 gap-px py-px h-[calc(166px)]"
>
  {#each blocks as row}
    <div class="flex gap-px">
      {#each row as blockColor}
        <div
          class="size-10 relative cursor-pointer group"
          style="background: {blockColor}"
        >
          <div
            class="absolute inset-0 bg-white opacity-0 transition-opacity group-hover:opacity-20 group-active:opacity-40"
          ></div>
        </div>
      {/each}
    </div>
  {/each}
</div>
