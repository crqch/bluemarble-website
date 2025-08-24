<script>
    import { Coffee } from "@lucide/svelte"
    import { m } from "../paraglide/messages"
    import PixelsTransition from "./PixelsTransition.svelte"
</script>

<PixelsTransition from="var(--color-base-100)" to="var(--color-primary)" />
<footer class="flex flex-col w-full items-center gap-[2px] bg-base-200/50">
    <div
        class="flex flex-col lg:flex-row gap-16 md:gap-8 lg:gap-4 w-full bg-primary text-primary-content py-10 lg:px-40 md:px-20 px-4"
    >
        <div class="flex flex-col flex-1 items-start gap-2">
            <a
                class="btn btn-ghost px-2 -ml-2 active:scale-[0.98] transition-all"
                href="/"
            >
                <img src="bm-highres.webp" class="size-8" alt="" />
                Blue Marble
            </a>
            <span class="flex gap-2">
                <p>
                    {@html m.footer_maintainedby_project()}
                </p>
                <a href="https://ko-fi.com/SwingTheVine">
                    <Coffee class="size-4" />
                </a>
            </span>
            <span class="flex gap-2">
                <p>
                    {@html m.footer_maintainedby_website()}
                </p>
                <a href="https://ko-fi.com/crqch">
                    <Coffee class="size-4" />
                </a>
            </span>
        </div>
        <div class="flex flex-col items-start gap-2">
            <b class="font-mono border-b border-b-primary-content/40 w-full"
                >{m.footer_guides()}</b
            >
            <a href="#install" class="href-white"
                >{m.footer_guides_installing()}</a
            >
            <a href="#usage" class="href-white">{m.footer_guides_using()}</a>
            <a href="#support" class="href-white"
                >{m.footer_guides_gettingsupport()}</a
            >
        </div>
        <div class="flex flex-col items-start gap-2">
            <b class="font-mono border-b border-b-primary-content/40 w-full"
                >{m.footer_project()}</b
            >
            <a href="#support" class="href-white"
                >{m.footer_project_community()}</a
            >
            <a href="#contributing" class="href-white"
                >{m.footer_project_contribute()}</a
            >
            <a href="#security" class="href-white"
                >{m.footer_project_report()}</a
            >
        </div>
        <div class="flex flex-col items-start gap-2">
            <b class="font-mono border-b border-b-primary-content/40 w-full"
                >{m.footer_website()}</b
            >
            <a
                href="https://github.com/crqch/bluemarble-website"
                target="_blank"
                class="href-white">{m.footer_website_source()}</a
            >
            <a href="privacy-policy" class="href-white"
                >{m.footer_website_privacypolicy()}</a
            >
        </div>
    </div>
    <code class="text-sm">{@html m.footer_opensourcerocks()}</code>
    <code class="text-sm">{@html m.footer_madebycrqch()}</code>
</footer>
