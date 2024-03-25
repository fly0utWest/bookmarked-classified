import { clear, time } from "console";

export function debounce<F extends (...args: any[]) => void>(func: F, wait: number): (...args: Parameters<F>) => void {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    return function(...args: Parameters<F>) {
        const later = () => {
            timeoutId = null;
            func(...args);
        }

        if (timeoutId !== null) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(later, wait);
    }
}