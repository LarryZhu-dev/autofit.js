import { onMounted, onUnmounted } from "vue";
import autofit from "autofit.js";

type TOptions = {
    designWidth: number;
    designHeight: number;
    transition?: number;
    delay?: number;
};

export const useAutoFit = (id: string, options?: TOptions) => {
    onMounted(() => {
        autofit.init({
            el: `#${id}`,
            dw: options?.designWidth,
            dh: options?.designHeight,
            transition: options?.transition,
            delay: options?.delay,
        });
    });

    onUnmounted(() => {
        autofit.off(id);
    });
};
