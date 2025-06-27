/**
 * trickHelper - Simple Visual Effect Utility
 * Author: IlReDelTrucco
 * License: Custom
 */

const trickHelper = {
    /**
     * Applies a temporary visual highlight to an element.
     * @param {string} selector - CSS selector of the target element.
     * @param {number} [duration=1000] - Duration in milliseconds.
     */
    highlight(selector, duration = 1000) {
        const element = document.querySelector(selector);
        if (!element) {
            console.error(`[trickHelper] Element "${selector}" not found.`);
            return;
        }

        const originalBg = element.style.backgroundColor;
        element.style.backgroundColor = 'yellow';

        setTimeout(() => {
            element.style.backgroundColor = originalBg;
        }, duration);
    },

    /**
     * Applies a quick shake animation to an element.
     * @param {string} selector - CSS selector of the target element.
     */
    shake(selector) {
        const element = document.querySelector(selector);
        if (!element) {
            console.error(`[trickHelper] Element "${selector}" not found.`);
            return;
        }

        element.style.transition = 'transform 0.1s';
        element.style.transform = 'translateX(5px)';

        setTimeout(() => {
            element.style.transform = 'translateX(-5px)';
        }, 100);

        setTimeout(() => {
            element.style.transform = 'translateX(0)';
        }, 200);
    }
};

// Example usage:
// trickHelper.highlight('#message', 1500);
// trickHelper.shake('#errorBox');

module.exports = trickHelper;
