export const SEARCH_MODAL_EVENT = "search-modal-event";
export type SearchModalEvent = CustomEvent<{
  action: "open" | "close";
}>;
/**
 * Sends a custom event to trigger the opening of the search modal.
 * @param {("open" | "close")} action - The action to perform can be either "open" or "close".
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent}
 */
export const sendSearchModalEvent = (action: "open" | "close") => {
  if (typeof window !== undefined) {
    window.dispatchEvent(
      new CustomEvent(SEARCH_MODAL_EVENT, {
        detail: {
          action,
        },
      }),
    );
  }
};
