<script>
  import { goto } from "$app/navigation";
  import { inViewPopIn } from "$lib/motion.svelte";
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

<section
  class="relative flex flex-col justify-center items-center text-center gap-8 min-h-screen
    mt-[-60px] overflow-hidden
    bg-gradient-to-b from-[#000000] via-[#0f2d43] to-[#4180c8]"
>
  <div
    class="absolute pointer-events-none left-1/2 -translate-x-1/2 bottom-[60vh] size-[500px] md:size-[1000px] opacity-60"
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
    use:inViewPopIn={{
      delay: 0.3,
      duration: 0.6,
    }}
    class="text-2xl md:text-4xl xl:text-6xl font-bold text-white drop-shadow-[0_0_20px_rgba(0,0,0,0.6)]"
  >
    Don't let the stars be Your guide
  </h1>
  <h2
    use:inViewPopIn={{
      delay: 1,
      duration: 0.6,
    }}
    class="text-lg md:text-xl xl:text-3xl opacity-80 max-w-2xl text-balance"
  >
    start using Blue Marble for the pixel perfect precision
  </h2>
  <div
    use:inViewPopIn={{
      delay: 2,
      duration: 0.6,
    }}
  >
    <Button
      iconAnimations
      onclick={() => goto("#install")}
      className="btn-neutral btn-lg min-w-80"
      >Install
      {#snippet itemBefore()}
        <Download class="w-4 h-4" />
      {/snippet}
    </Button>
  </div>
  <div class="absolute inset-0 pointer-events-none">
    <div
      class="w-full h-full bg-[radial-gradient(circle,_rgba(255,255,255,0.4)_1px,_transparent_1px)] [background-size:16px_16px] opacity-20"
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
<section id="features" class="flex flex-col md:px-20 lg:px-40 px-4 py-10">
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
<PixelsTransition from="var(--color-base-100)" to="var(--color-primary)" />
<section
  id="usage"
  class="w-full py-10 bg-primary text-primary-content min-h-screen lg:px-40 md:px-20 px-4 flex flex-col gap-4"
>
  <code class="text-base-100 scale-y-[.85] self-center">USAGE</code>
  <h1 class="text-4xl self-center">How to use Blue Marble</h1>
  <p class="mb-8 mt-4">
    Blue Marble will display your template as the same size. If your image is
    500 pixels tall and 300 pixels wide, the template will be 500 pixels tall
    and 300 pixels wide. Here is the instructions to display a template image on
    the canvas:
  </p>
  <span class="flex gap-2 items-end">
    <h2 class="text-6xl">1.</h2>
    <p class="text-xl">
      Find the pixel in the top left corner. Fill in Tl X, Tl Y, Px X, and Px Y
      with the coordinates. You can use the "Pin" icon to auto-fill the
      coordinates after clicking the pixel.
    </p>
  </span>
  <img
    src="guide/usage/1.png"
    class="mt-4 opacity-90 rounded-box"
    alt="Screenshot showing 4 coordinates mapped from the wplace.live layout to Blue Marble GUI."
  />
  <div class="alert alert-warning items-start gap-2 flex flex-col">
    <b class="text-xl">Creating an image</b>
    <p>
      For creating your template we recommend using the <a
        href="https://pepoafonso.github.io/color_converter_wplace/"
        class="href"
        target="_blank">Wplace Color Converter</a
      >.
    </p>
    <p>
      For <u>explicitly</u> transparent pixels, you need to use the
      <span class="font-mono bg-warning-content/20 rounded-md">#deface</span> HEX
      color.
    </p>
  </div>
  <span class="flex gap-2 items-end">
    <h2 class="text-6xl">2.</h2>
    <p class="text-xl">Upload a PNG or WEBP image.</p>
  </span>

  <span class="flex gap-2 items-end">
    <h2 class="text-6xl">3.</h2>
    <p class="text-xl">
      Click the <i>Create</i> button.
    </p>
  </span>
  <span class="flex gap-2 items-end">
    <h2 class="text-6xl">4.</h2>
    <p class="text-xl">
      If your template still does not show, try clicking the <i>Enable</i> button.
    </p>
  </span>
</section>
<PixelsTransition to="var(--color-base-100)" from="var(--color-primary)" />
<section
  id="support"
  class="w-full py-20 flex flex-col gap-4 md:items-center px-4"
>
  <code class="text-primary scale-y-[.85]">SUPPORT</code>
  <h1 class="text-2xl md:text-4xl text-balance">
    If you have any problems, reach out!
  </h1>
  <a
    target="_blank"
    href="https://discord.gg/WXWqhZ3udH"
    class="flex relative md:flex-col gap-4 p-4 rounded-box md:items-center overflow-hidden border border-base-300 hover:scale-[.98] transition-all before:absolute before:inset-0 before:transition-colors hover:before:bg-base-content/10"
  >
    <svg
      viewBox="0 0 256 199"
      class="size-10"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      ><path
        d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z"
        fill="#5865F2"
      /></svg
    >
    <div class="flex flex-col">
      <p class="font-mono text-xs opacity-50 text-primary self-start">
        3000+ MEMBERS
      </p>
      <h2 class="text-2xl font-semibold">The Tipping Hat</h2>
    </div>
  </a>
</section>
<section
  id="security"
  class="w-full py-20 flex flex-col gap-4 md:items-center lg:px-40 md:px-20 px-4"
>
  <code class="text-primary scale-y-[.85]">SECURITY</code>
  <h1 class="text-2xl md:text-4xl text-balance">
    Reporting a Security Vulnerability
  </h1>
  <p>
    Since this is a userscript, there will not be many vulnerabilities. The user
    is in charge of their own security, by choosing which scripts to run.
    Regardless, if you do find a security vulnerability in Blue Marble, please
    report it on the GitHub Security Advisory <a
      href="https://github.com/SwingTheVine/Wplace-BlueMarble/security/advisories/new"
      class="href"
      target="_blank">Report a Vulnerability</a
    > tab.
  </p>
</section>
<section
  id="contributing"
  class="w-full py-20 flex flex-col gap-4 md:items-center lg:px-40 md:px-20 px-4"
>
  <code class="text-primary scale-y-[.85]">CONTRIBUTING</code>
  <h1 class="text-2xl md:text-4xl text-balance md:text-center">
    Blue Marble is a community-driven project
  </h1>
  <p class="text-lg">
    We're happy to see you contribute to our project.
    <br />
    View more info on collaboration on our
    <a
      href="https://github.com/SwingTheVine/Wplace-BlueMarble/blob/main/docs/CONTRIBUTING.md"
      target="_blank"
      class="href">Github Docs</a
    >
  </p>
</section>
