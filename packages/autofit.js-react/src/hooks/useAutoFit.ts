import { useEffect } from "react";
import autofit from "autofit.js";

type TOptions = {
    designWidth: number;
    designHeight: number;
    transition?: number;
    delay?: number;
};

export const useAutoFit = (id: string, options?: TOptions) => {
    useEffect(() => {
        autofit.init({
            el: `#${id}`,
            dw: options?.designWidth,
            dh: options?.designHeight,
            transition: options?.transition,
            delay: options?.delay,
        });
        return () => {
            autofit.off(id);
        };
    }, []);
};
