<script lang="ts">
    import {
        ChevronLeft,
        ChevronRight,
        Play,
        Repeat,
        RotateCcw,
    } from "@lucide/svelte"
    import clsx from "clsx"
    import { onMount } from "svelte"
    import { m } from "../paraglide/messages"

    type Guide = {
        videoSrc: string
        steps: {
            time: number
            caption: string
        }[]
    }
    const guidesData: {
        chromium: Guide
        firefox: Guide
        edge: Guide
    } = {
        chromium: {
            videoSrc:
                "https://5z7ci365vn.ufs.sh/f/88jSHGM4wtrPwvDCi6YIBK0FifALjkcSClygq4u7X9p5ObUe",
            steps: [
                {
                    time: 3.06,
                    caption: m.install_chromium_step1(),
                },
                {
                    time: 12,
                    caption: m.install_chromium_step2(),
                },
                {
                    time: 22.5,
                    caption: m.install_chromium_step4(),
                },
                {
                    time: 25.5,
                    caption: m.install_chromium_step5(),
                },
                {
                    time: 29.5,
                    caption: m.install_video_tampermonkey_warning(),
                },
                {
                    time: 42,
                    caption: m.install_video_oneclick(),
                },
                {
                    time: 53,
                    caption: m.install_video_visitwplace(),
                },
            ],
        },
        firefox: {
            videoSrc:
                "https://5z7ci365vn.ufs.sh/f/88jSHGM4wtrPckCYfQv6eHtVT82RpED1M0SrbPCzZ7cYvflI",
            steps: [
                {
                    time: 0.2,
                    caption: m.install_firefox_step1(),
                },
                {
                    time: 7.3,
                    caption: m.install_video_oneclick(),
                },
                {
                    time: 18.5,
                    caption: m.install_video_visitwplace(),
                },
            ],
        },
        edge: {
            videoSrc:
                "https://5z7ci365vn.ufs.sh/f/88jSHGM4wtrPfYnc80xQFabEyWTNnMVhzrjCu0x1HeOIoJPf",
            steps: [
                {
                    time: 0.2,
                    caption: m.install_edge_step1(),
                },
                {
                    time: 8.6,
                    caption: m.install_chromium_step2(),
                },
                {
                    time: 14,
                    caption: m.install_chromium_step4(),
                },
                {
                    time: 18.7,
                    caption: m.install_video_tampermonkey_warning_suggestion(),
                },
                {
                    time: 26.6,
                    caption: m.install_video_oneclick(),
                },
                {
                    time: 36.5,
                    caption: m.install_video_visitwplace(),
                },
            ],
        },
    }

    let {
        browser,
    }: {
        browser: "chromium" | "firefox" | "edge"
    } = $props()

    let loading = $state(true)
    let guide = $derived(guidesData[browser])
    let videoRef: HTMLVideoElement
    let time = $state(0)
    let paused = $state(true)
    let currentStep = $derived<{
        caption: string
        index: number
        time: number
    }>({
        ...guide.steps[0],
        index: 0,
    })
    let jumped = $state(false)
    let abortChecking = $state(false)
    let initialPause = $state(true)

    onMount(() => {
        if (!videoRef) return
        const onProgress = (e: Event) => {
            if (videoRef.currentTime < guide.steps[0].time) {
                videoRef.currentTime = guide.steps[0].time
                if (currentStep.index !== 0) {
                    currentStep = {
                        ...guide.steps[0],
                        index: 0,
                    }
                    initialPause = true
                    paused = true
                    videoRef.pause()
                }
            }
            time = videoRef.currentTime
        }

        videoRef.addEventListener("timeupdate", onProgress)

        return () => videoRef.removeEventListener("timeupdate", onProgress)
    })

    const next = () => {
        if (initialPause) initialPause = false
        if (!jumped) {
            currentStep = {
                ...guide.steps[currentStep.index + 1],
                index: currentStep.index + 1,
            }
        }
        videoRef.play()
        paused = false
        abortChecking = false
        jumped = false
    }

    const skip = () => {
        const nextStep = guide.steps[currentStep.index + 1]
        videoRef.currentTime = nextStep.time
        currentStep = {
            ...nextStep,
            index: currentStep.index + 1,
        }
        jumped = true
    }

    const previous = () => {
        const previousStep = guide.steps[currentStep.index - 1]
        videoRef.currentTime = previousStep.time
        currentStep = {
            ...previousStep,
            index: currentStep.index - 1,
        }
        jumped = true
    }

    const repeat = () => {
        videoRef.currentTime = currentStep.time
        videoRef.play()
        setTimeout(() => {
            paused = false
            abortChecking = false
        }, 100)
    }

    $effect(() => {
        if (abortChecking) return
        const step = guide.steps.find((s) => Math.abs(s.time - time) < 0.25)
        if (step) {
            const indexOfNewStep = guide.steps.findIndex(
                (s) => s.time === step.time
            )

            if (currentStep !== null) {
                if (indexOfNewStep - 1 === currentStep.index) {
                    if (!paused) {
                        videoRef.pause()
                        paused = true
                        abortChecking = true
                    } else {
                        currentStep = {
                            ...step,
                            index: indexOfNewStep,
                        }
                        paused = false
                    }
                }
            } else {
                paused = false
                currentStep = {
                    ...step,
                    index: indexOfNewStep,
                }
            }
        }
    })
</script>

<div
    class="relative flex flex-col rounded-box w-full overflow-hidden border-2 border-primary/40 ring-8 ring-primary/10"
>
    {#if initialPause}
        <div
            tabindex="0"
            onkeydown={() => {}}
            onclick={() => {
                if (loading) return
                videoRef.play()
                setTimeout(() => {
                    initialPause = false
                    paused = false
                    abortChecking = false
                }, 100)
            }}
            role="button"
            class="absolute inset-0 flex flex-col before:absolute before:inset-0 before:bg-base-100/80 cursor-pointer rounded-box overflow-hidden after:absolute after:inset-0 after:transition-colors hover:after:bg-primary/20 group"
        >
            <div
                class="absolute flex flex-col items-center justify-center inset-0 gap-4"
            >
                {#if loading}
                    <span class="loading loading-spinner size-14"></span>{:else}
                    <button
                        class=" cursor-pointer group-hover:scale-[.98] transition-all z-10 group-hover:border-primary border-2 border-base-300 bg-base-100/90 rounded-full size-20 flex items-center justify-center"
                    >
                        <Play class="size-8 text-primary" />
                    </button>
                {/if}
            </div>
        </div>
    {:else}
        <!-- <code class="absolute top-4 left-4 bg-base-100">{time}</code> -->
        <div
            class={clsx([
                "absolute inset-0 before:absolute before:pointer-events-none pointer-events-none before:inset-0 before:transition-colors flex-col gap-2 select-none items-center justify-center z-10",
                paused ? "flex before:bg-base-100/90" : "hidden ",
            ])}
        >
            {#if currentStep.index !== guide.steps.length - 1}
                <button
                    onclick={next}
                    class="cursor-pointer pointer-events-auto hover:scale-[.98] transition-all z-10 hover:border-primary border-2 border-base-300 bg-base-100/90 rounded-full size-14 md:size-20 flex items-center justify-center"
                >
                    <Play class="size-6 md:size-8 text-primary" />
                </button>
            {:else}
                <button
                    onclick={() => {
                        currentStep = {
                            ...guide.steps[0],
                            index: 0,
                        }
                        initialPause = true
                        paused = true
                        videoRef.pause()
                    }}
                    class="cursor-pointer pointer-events-auto hover:scale-[.98] transition-all z-10 hover:border-primary border-2 border-base-300 bg-base-100/90 rounded-full size-14 md:size-20 flex items-center justify-center"
                >
                    <RotateCcw class="size-6 md:size-8 text-primary" />
                </button>
            {/if}

            <button
                onclick={repeat}
                class="cursor-pointer pointer-events-auto transition-all z-10 hover:border-primary border-2 border-base-300 bg-base-100/90 rounded-box flex items-center justify-center p-px px-1 md:p-2 md:px-2 gap-2"
            >
                <p class="text-sm">{m.install_video_watchagain()}</p>
                <Repeat class="size-3 text-primary" />
            </button>
            <div
                class="hidden md:flex join pointer-events-auto z-20 opacity-50 hover:opacity-100 transition-opacity"
            >
                {#if currentStep.index !== 0}
                    <button
                        onclick={previous}
                        class="flex cursor-pointer bg-base-100 border-2 text-sm p-px px-2 items-center border-base-300 hover:border-primary transition-colors join-item gap-2 text-base-content"
                    >
                        <ChevronLeft class="size-3" />
                        {m.install_video_back()}
                        {currentStep.index}
                    </button>
                {/if}
                {#if currentStep.index !== guide.steps.length - 1}
                    <button
                        onclick={skip}
                        class="flex cursor-pointer bg-base-100 border-2 text-sm p-px px-2 items-center border-base-300 hover:border-primary transition-colors join-item gap-2 text-base-content"
                    >
                        {m.install_video_skip()}
                        {currentStep.index + 2}
                        <ChevronRight class="size-3" />
                    </button>
                {/if}
            </div>
        </div>
        <div
            class="flex flex-col items-center justify-end w-full absolute h-1/2 pointer-events-none bottom-0 left-0"
        >
            {#if currentStep !== null}
                <div
                    class="flex flex-col gap-2 select-none self-center items-center justify-end z-10 backdrop-blur-xl rounded-box bg-base-200/90 border-2 border-primary p-2 md:p-4 pointer-events-auto mb-2 md:mb-4 lg:mb-10"
                >
                    <h2 class="text-xl md:xl lg:text-2xl xl:text-3xl">
                        <b class="text-primary">{currentStep.index + 1}.</b>
                        {@html currentStep.caption}
                    </h2>
                </div>
            {/if}
        </div>
    {/if}
    <video
        onloadeddata={() => (loading = false)}
        src={guide.videoSrc}
        muted
        loop
        bind:this={videoRef}
    ></video>
</div>
