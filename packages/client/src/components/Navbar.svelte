<script lang="ts">
    import { page } from "$app/state"
    import { motion } from "motion-start"
    import { scrollY } from "svelte/reactivity/window"
    import { m } from "../paraglide/messages"
    import { getLocale, locales, setLocale } from "../paraglide/runtime"

    // Derive the scroll progress, defaulting scrollY.current to 0 on initial load.
    let scrollProgress = $derived(
        Math.min(Math.max((scrollY?.current ?? 0) - 100) / 100, 1)
    )

    // Derive a single translateY value based on page and scroll position.
    let navTranslateY = $derived(
        page.url.pathname === "/" ? (1 - scrollProgress) * -40 : 0
    )
</script>

<motion.nav
    initial={{ y: navTranslateY }}
    animate={{ y: navTranslateY }}
    transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
        mass: 0.8,
    }}
    class="flex flex-row md:px-20 lg:px-40 px-4 bg-base-100 backdrop-blur-lg sticky left-0 w-full top-0 py-4 justify-between z-50 h-[60px] items-center border-base-content/10"
>
    <a class="btn btn-ghost -ml-4 active:scale-[0.98] transition-all" href="/">
        <img src="bm-highres.webp" class="size-8" alt="" />
        Blue Marble
    </a>
    <div class="flex flex-row gap-2 items-center">
        <details class="dropdown">
            <summary class="btn btn-square btn-outline">{m.EMOJI()}</summary>
            <ul
                class="menu dropdown-content right-0 bg-base-100 rounded-box border border-base-200 z-1 gap-2"
            >
                {#each locales.filter((l) => l !== getLocale()) as locale}
                    <button
                        class="btn btn-outline flex !flex-row gap-2 justify-start"
                        onclick={() => setLocale(locale)}
                    >
                        <p>
                            {m.EMOJI(
                                {},
                                {
                                    locale,
                                }
                            )}
                        </p>
                        <p>
                            {m.NAME(
                                {},
                                {
                                    locale,
                                }
                            )}
                        </p>
                    </button>
                {/each}
            </ul>
        </details>
        <!-- <Button
      onclick={() => {
        themeStore.update((currentTheme) =>
          currentTheme === "dark" ? "light" : "dark"
        );
      }}
      className="btn-square btn-outline"
    >
      {#if $themeStore === "dark"}
        <motion.div
          animate={{ rotateZ: 0 }}
          exit={{ rotateZ: 90 }}
          initial={{ rotateZ: -90 }}
        >
          <Moon class="w-4 h-4" />
        </motion.div>
      {:else}
        <motion.div
          animate={{ rotateZ: 0 }}
          exit={{ rotateZ: -90 }}
          initial={{ rotateZ: 90 }}
        >
          <Sun class="w-4 h-4" />
        </motion.div>
      {/if}
    </Button> -->
    </div>
</motion.nav>
