<script lang="ts">
  import Footer from "../../components/Footer.svelte";
  import Navbar from "../../components/Navbar.svelte";

  const { children } = $props();
</script>

<Navbar />

<div class="min-h-screen w-full">
  {@render children()}
</div>
<Footer />
