import * as ec from "echarts";
import { useEffect, useRef } from "react";

export const ReactEchartsBar = () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const chart = ec.getInstanceByDom(ref.current!) ?? ec.init(ref.current);
        chart.setOption({
            xAxis: {
                type: "category",
                data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            },
            yAxis: {
                type: "value",
            },
            tooltip: {},
            series: [
                {
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: "bar",
                    showBackground: true,
                    backgroundStyle: {
                        color: "rgba(180, 180, 180, 0.2)",
                    },
                },
            ],
        });
    }, []);

    return <div ref={ref} style={{ width: "100%", height: "100%" }}></div>;
};
