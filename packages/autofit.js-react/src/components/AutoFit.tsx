import { type FC, type PropsWithChildren } from "react";
import { useAutoFit } from "../hooks/useAutoFit";

const AutoFit: FC<PropsWithChildren<{ designWidth: any; designHeight: any; className?: any; id?: any }>> = (props) => {
    const { id, className = "", ...restProps } = props;

    useAutoFit(props.id, restProps);

    return (
        <div id={id} className={`autoFit-js-vue-container ${className}`} style={{ width: restProps.designWidth, height: restProps.designHeight }}>
            {props.children}
        </div>
    );
};

AutoFit.defaultProps = {
    designWidth: 1920,
    designHeight: 1080,
};

export { AutoFit };
