import { type RefObject } from "react";
const noop = () => {};

export const resizeObserver = (ref: RefObject<HTMLElement>, callback = noop) => {
    const resizeCallback = () => {
        callback();
    };

    window.addEventListener("resize", resizeCallback);
    const ob = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.target === ref.current) {
                resizeCallback();
            }
        });
    });
    ob.observe(ref.current!);

    return () => {
        window.removeEventListener("resize", resizeCallback);
        ob.disconnect();
    };
};
