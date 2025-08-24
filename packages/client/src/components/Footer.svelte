<script>
  import PixelsTransition from "./PixelsTransition.svelte";
</script>

<PixelsTransition from="var(--color-base-100)" to="var(--color-primary)" />
<footer class="flex flex-col w-full items-center gap-[2px] bg-base-200/50">
  <div
    class="flex flex-col md:flex-row gap-4 w-full bg-primary text-primary-content py-10 lg:px-40 md:px-20 px-4"
  >
    <div class="flex flex-col flex-1 items-start gap-2">
      <a
        class="btn btn-ghost px-2 -ml-2 active:scale-[0.98] transition-all"
        href="/"
      >
        <img src="bm-highres.webp" class="size-8" alt="" />
        Blue Marble
      </a>
      <p>
        Project maintained by <a
          href="https://github.com/SwingTheVine"
          target="_blank"
          class="href-white">SwingTheVine</a
        >
      </p>
      <p>
        Website maintained by <a
          href="https://github.com/crqch"
          target="_blank"
          class="href-white">crqch</a
        >
      </p>
    </div>
    <div class="flex flex-col items-start gap-2">
      <b class="font-mono border-b border-b-primary-content/40 w-full">GUIDES</b
      >
      <a href="#install" class="href-white">Installing</a>
      <a href="#usage" class="href-white">Using</a>
      <a href="#support" class="href-white">Getting Support</a>
    </div>
    <div class="flex flex-col items-start gap-2">
      <b class="font-mono border-b border-b-primary-content/40 w-full"
        >PROJECT</b
      >
      <a href="#contributing" class="href-white">Join the Community</a>
      <a href="#contributing" class="href-white">Get involved</a>
      <a href="#security" class="href-white">Report a Vulnerability</a>
    </div>
    <div class="flex flex-col items-start gap-2">
      <b class="font-mono border-b border-b-primary-content/40 w-full"
        >WEBSITE</b
      >
      <a
        href="https://github.com/crqch/bluemarble-website"
        target="_blank"
        class="href-white">Source Code</a
      >
      <a href="privacy-policy" class="href-white">Privacy Policy</a>
    </div>
  </div>
  <code class="text-sm">open source <u><b><i>rocks</i></b></u>!</code>
  <code class="text-sm"
    >made with 🧉 by <a
      class="href"
      target="_blank"
      href="https://github.com/crqch">crqch</a
    ></code
  >
</footer>
