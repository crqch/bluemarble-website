import { writable } from 'svelte/store';

function createThemeStore() {
    let initialTheme: "light" | "dark" = "light";
    if (typeof window !== 'undefined') {
        const saved = localStorage.getItem("theme") as "light" | "dark";
        if (saved) {
            initialTheme = saved;
        }
        document.body.setAttribute('data-theme', initialTheme);
    }

    const { subscribe, set, update } = writable<'light' | 'dark'>(initialTheme);

    return {
        subscribe,
        set: (value: 'light' | 'dark') => {
            if (typeof window !== 'undefined') {
                localStorage.setItem("theme", value);
                document.body.setAttribute('data-theme', value);
            }
            set(value);
        },
        update: (fn: (value: 'light' | 'dark') => 'light' | 'dark') => {
            update(currentValue => {
                const newValue = fn(currentValue);
                if (typeof window !== 'undefined') {
                    localStorage.setItem("theme", newValue);
                    document.body.setAttribute('data-theme', newValue);
                }
                return newValue;
            });
        }
    };
}

export const themeStore = createThemeStore();