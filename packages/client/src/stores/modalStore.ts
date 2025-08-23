// src/stores/modalStore.ts
import type { Snippet } from "svelte";
import { writable } from "svelte/store";

/**
 * Defines the structure for a button within the modal.
 * @property {string} text - The text displayed on the button.
 * @property {() => void} onClick - The function to execute when the button is clicked.
 * @property {string} [className] - Optional Tailwind CSS classes for styling the button (e.g., "btn-primary", "btn-ghost").
 */
export type ModalButton = {
    text: string;
    onClick: () => void;
    className?: string;
};

/**
 * Defines the state structure for the modal.
 * @property {boolean} shown - Whether the modal is currently visible.
 * @property {string} title - The title displayed at the top of the modal.
 * @property {string | Snippet} content - The main content of the modal. This can be a simple string or a Svelte render function (e.g., a function returning an HTML template literal or a Svelte component).
 * @property {ModalButton[]} buttons - An array of button configurations to display at the bottom of the modal.
 */
export type ModalState = {
    shown: boolean;
    title: string;
    content: string | Snippet; // Changed type from ReturnType<Snippet> to Snippet
    buttons: ModalButton[];
};

/**
 * The writable Svelte store that holds the current state of the modal.
 * Components can subscribe to this store to react to modal state changes.
 */
export const modalStore = writable<ModalState>({
    shown: false,
    title: "",
    content: "",
    buttons: [],
});

/**
 * Displays the modal with the specified content, title, and buttons.
 * This is the primary function to call from your components to open the modal.
 * @param {Omit<ModalState, 'shown'>} options - An object containing the modal's title, content, and button configurations.
 */
export function showModal(options: Omit<ModalState, 'shown'>) {
    modalStore.set({
        ...options,
        shown: true, // Always set to true when showing the modal
    });
}

/**
 * Hides the modal.
 * This function is automatically called when a modal button is clicked or the overlay is clicked.
 * You can also call it manually to programmatically close the modal.
 */
export function hideModal() {
    modalStore.update(state => ({ ...state, shown: false }));
}
