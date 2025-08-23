<script>
  import { goto } from "$app/navigation";
  import {
    CheckSquare,
    Download,
    FolderCode,
    ImageUpscale,
    Users,
  } from "@lucide/svelte";
  import Button from "../../components/Button.svelte";
  import DownloadSection from "../../components/DownloadSection.svelte";
  import PixelsTransition from "../../components/PixelsTransition.svelte";
</script>

<div>
  <section
    class="relative flex flex-col justify-center items-center text-center gap-8 min-h-screen
    mt-[-60px] overflow-hidden
    bg-gradient-to-b from-[#000000] via-[#0f2d43] to-[#4180c8]"
  >
    <div
      class="absolute pointer-events-none left-1/2 -translate-x-1/2 md:bottom-[60vh] size-[500px] md:size-[1000px] opacity-60"
    >
      <div class="relative">
        <div
          style="animation: pulse 20s cubic-bezier(0.4, 0, 0.6, 1) infinite"
          class="absolute inset-0 rounded-full blur-[3000px] bg-[#9ed3ff] opacity-50"
        ></div>
        <img
          src="bm-highres.webp"
          alt=""
          draggable="false"
          class=" spin drop-shadow-[0_0_60px_rgba(0,120,255,0.3)]"
          style="animation: spin 300s linear infinite;"
        />
      </div>
    </div>

    <h1
      class="text-2xl md:text-4xl xl:text-6xl font-bold text-white drop-shadow-[0_0_20px_rgba(0,0,0,0.6)]"
    >
      Don't let the stars be Your guide
    </h1>
    <h2
      class="text-lg md:text-xl xl:text-3xl opacity-80 max-w-2xl text-balance"
    >
      start using Blue Marble for the pixel perfect precision
    </h2>
    <Button
      onclick={() => goto("#install")}
      className="btn-neutral btn-lg min-w-80"
      >Install
      {#snippet itemBefore()}
        <Download class="w-4 h-4" />
      {/snippet}
    </Button>
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="w-full h-full bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] [background-size:16px_16px] opacity-20"
      ></div>
    </div>
  </section>
  <PixelsTransition from="#4180c8" to="var(--color-base-100)" />
  <!-- <div class="relative">
    <div
      class="flex flex-col justify-center items-center text-center
    h-[80px] overflow-hidden
    bg-gradient-to-b from-[#4180c8] to-base-100"
    ></div>
    <div
      class="absolute top-10 left-0 z-10 w-full h-[100px] mask-t-from-0 backdrop-blur-xl"
    ></div>
  </div> -->
  <section class="flex flex-col md:px-20 lg:px-40 px-4 py-10">
    <code class="text-primary scale-y-[.85]">FEATURES</code>
    <h1 class="text-4xl font-semibold">Why Use Blue Marble?</h1>
    <ul class="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-4 mt-8">
      <li
        class="flex flex-col gap-4 p-4 rounded-box border border-base-200 overflow-hidden bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_1px,_transparent_1px)] [background-size:20px_20px]"
      >
        <div class="relative">
          <div
            class="absolute top-0 left-0 w-full h-[20px] bg-primary blur-2xl rounded-full"
          ></div>
        </div>
        <span class="flex gap-2 items-center">
          <ImageUpscale class="size-6" />
          <h2 class="text-2xl font-semibold">Canvas Overlay</h2>
        </span>
        <p>
          Blue Marble displays the template directly onto the canvas, no
          additional lineups are required.
        </p>
      </li>
      <li
        class="flex flex-col gap-4 p-4 rounded-box border border-base-200 overflow-hidden bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_1px,_transparent_1px)] [background-size:20px_20px]"
      >
        <div class="relative">
          <div
            class="absolute top-0 left-0 w-full h-[20px] bg-primary blur-2xl rounded-full"
          ></div>
        </div>
        <span class="flex gap-2 items-center">
          <CheckSquare class="size-6" />
          <h2 class="text-2xl font-semibold">Progress Tracking</h2>
        </span>
        <p>
          Tracking the number of correctly and incorrectly placed pixels at
          real-time.
        </p>
      </li>
      <li
        class="flex flex-col gap-4 p-4 rounded-box border border-base-200 overflow-hidden bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_1px,_transparent_1px)] [background-size:20px_20px]"
      >
        <div class="relative">
          <div
            class="absolute top-0 left-0 w-full h-[20px] bg-primary blur-2xl rounded-full"
          ></div>
        </div>
        <span class="flex gap-2 items-center">
          <FolderCode class="size-6" />
          <h2 class="text-2xl font-semibold">Open Sourced</h2>
        </span>
        <p>
          The entire Blue Marble <span class="opacity-50"
            >(even this website!)</span
          >
          codebase is open sourced and available for anyone to contribute.
          <br />
          <br />
          This ensures security and high performance.
        </p>
      </li>
      <li
        class="flex flex-col gap-4 p-4 rounded-box border border-base-200 overflow-hidden bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_1px,_transparent_1px)] [background-size:20px_20px]"
      >
        <div class="relative">
          <div
            class="absolute top-0 left-0 w-full h-[20px] bg-primary blur-2xl rounded-full"
          ></div>
        </div>
        <span class="flex gap-2 items-center">
          <Users class="size-6" />
          <h2 class="text-2xl font-semibold">User base</h2>
        </span>
        <p>
          Because Blue Marble is <a href="telemetry" class="href"
            >used concurrently by 20,000+ users</a
          >, collaborating on pixel projects is as easy as it can get.
        </p>
      </li>
    </ul>
  </section>
  <DownloadSection />
</div>
