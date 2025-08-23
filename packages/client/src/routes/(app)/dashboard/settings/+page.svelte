<script>
  import { goto } from "$app/navigation";
  import { authClient } from "$lib/auth-client";
  import { LogOut, Trash } from "@lucide/svelte";
  import { toast } from "svelte-sonner";
  import Button from "../../../../components/Button.svelte";
  import { m } from "../../../../paraglide/messages";
  import { hideModal, showModal } from "../../../../stores/modalStore";
</script>

<div class="flex flex-col my-10">
  <div class="flex flex-row gap-4 items-center">
    <h1 class="text-4xl">{m.known_soft_shark_read()}</h1>
    <Button
      className="btn-error w-max"
      onclick={() => {
        goto("/");
        authClient.signOut();
      }}
    >
      Sign out
      {#snippet itemAfter()}
        <LogOut class="w-4 h-4" />
      {/snippet}
    </Button>
  </div>
  <div class="divider"></div>

  <div class="flex flex-col gap-20">
    <h2 class="text-2xl">{m.stock_away_puma_create()}</h2>

    <div
      class="flex flex-col p-4 md:p-8 bg-error/10 rounded-box border-4 border-dashed border-error gap-4"
    >
      <h2 class="text-2xl text-error font-bold">
        {m.wise_swift_cod_inspire()}
      </h2>
      <div class="flex flex-col md:flex-row justify-between gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-xl font-bold">{m.sunny_maroon_elephant_borrow()}</h3>
          <p class="opacity-50">
            {@html m.topical_orange_gadfly_fold()}
          </p>
        </div>
        <Button
          className="btn-error"
          onclick={() => {
            showModal({
              title: m.tasty_silly_puma_buy(),
              content: m.dull_muddy_fox_hope(),
              buttons: [
                {
                  text: m.busy_nimble_cowfish_exhale(),
                  onClick: () => {
                    goto("/");
                    authClient.deleteUser().then((r) => {
                      if (r.data?.success) {
                        toast.success(m.warm_cute_macaw_lead());
                      }
                    });
                  },
                  className: "btn-error",
                },
                {
                  text: m.jumpy_tame_lemur_grace(),
                  onClick: () => hideModal(),
                  className: "",
                },
              ],
            });
          }}
        >
          {m.merry_smug_crocodile_dazzle()}
          {#snippet itemAfter()}
            <Trash class="w-4 h-4" />
          {/snippet}
        </Button>
      </div>
    </div>
  </div>
</div>
