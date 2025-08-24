<script>
  import { m } from "../../../paraglide/messages";
</script>

<div class="flex flex-col lg:px-40 md:px-20 gap-12 px-4 py-10">
  <div>
    <h1 class="text-2xl md:text-4xl font-semibold">
      {m.privacypolicy_title()}
    </h1>
    <p class="text-sm">
      {@html m.privacypolicy_lastupdated()}
    </p>
  </div>

  <p class="text-lg leading-relaxed">
    {m.privacypolicy_description()}
  </p>

  <div>
    <h2 class="text-2xl md:text-3xl font-bold mb-4 text-primary">
      {m.privacypolicy_1_title()}
    </h2>
    {@html m.privacypolicy_1_content()}
  </div>

  <div>
    <h2 class="text-2xl md:text-3xl font-bold mb-4 text-primary">
      {m.privacypolicy_2_title()}
    </h2>
    <p class="leading-relaxed">
      {m.privacypolicy_2_content()}
    </p>
  </div>

  <div>
    <h2 class="text-2xl md:text-3xl font-bold mb-4 text-primary">
      {m.privacypolicy_3_title()}
    </h2>
    <p class="leading-relaxed">
      {m.privacypolicy_3_content()}
    </p>
  </div>

  <div>
    <h2 class="text-2xl md:text-3xl font-bold mb-4 text-primary">
      {m.privacypolicy_4_title()}
    </h2>
    <p class="leading-relaxed">
      {m.privacypolicy_4_content()}
    </p>
  </div>

  <div>
    <h2 class="text-2xl md:text-3xl font-bold mb-4 text-primary">
      {m.privacypolicy_5_title()}
    </h2>
    <p class="leading-relaxed">
      {m.privacypolicy_5_content()}
    </p>
    <a class="href" href={`mailto:${atob("Y3JxY2guZGV2QGdtYWlsLmNvbQ")}`}
      >{atob("Y3JxY2guZGV2QGdtYWlsLmNvbQ")}</a
    >
  </div>
</div>
