<script lang="ts">
  import { goto } from "$app/navigation";
  import { authClient } from "$lib/auth-client";
  import { toast } from "svelte-sonner";
  import { m } from "../../../paraglide/messages";

  const session = authClient.useSession();

  const { children } = $props();

  $effect(() => {
    if (!$session.isPending && !$session.data) {
      goto("/auth");
      toast.error(m.trick_fun_polecat_assure());
    }
  });
</script>

{@render children()}
