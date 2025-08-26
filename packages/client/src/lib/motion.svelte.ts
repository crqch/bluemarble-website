import { animate, inView } from "motion"
import type { Action } from "svelte/action"

export const inViewPopIn: Action<
    HTMLDivElement,
    {
        duration?: number
        delay?: number
    }
> = (
    node: HTMLElement,
    config?: {
        duration?: number
        delay?: number
    }
) => {
        $effect(() => {
            node.style.opacity = "0"
            node.style.filter = "blur(5px)"
            node.style.transform = "translateY(20px)"
            inView(
                node,
                (element) => {
                    animate(
                        element,
                        { opacity: 1, filter: "blur(0px)", y: 0 },
                        { duration: config?.duration, delay: config?.delay }
                    )
                },
                {
                    margin:
                        node.getBoundingClientRect().top < 200 ? "0px" : "-200px",
                }
            )
        })
    }
