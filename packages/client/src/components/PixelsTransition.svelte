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
  let observerElement: HTMLElement;
  let appeared = $state(false);

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !appeared) {
          regenerate();
          appeared = true;
        }
      },
      {
        rootMargin: "0px 0px 10px 0px",
        threshold: 1.0,
      }
    );

    if (observerElement) {
      observer.observe(observerElement);
    }
    return () => {
      if (observerElement) {
        observer.unobserve(observerElement);
      }
    };
  });
</script>

<div bind:this={observerElement}></div>

<div
  onclickcapture={regenerate}
  class="flex flex-col items-start relative top-0 left-1/2 -translate-x-1/2 overflow-x-hidden py-px bg-base-300 gap-px h-[calc(165px)]"
>
  {#each blocks as row}
    <div class="flex gap-px">
      {#each row as blockColor}
        <div
          class="size-10 relative before:absolute before:inset-0 before:bg-white before:opacity-0 hover:before:opacity-10 before:transition-opacity active:before:opacity-20 cursor-pointer group"
          style="background: {blockColor}"
        ></div>
      {/each}
    </div>
  {/each}
</div>
