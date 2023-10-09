import { useEffect, createRef } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { resizeObserver } from "./utils";
import "leaflet/dist/leaflet.css";

const ResizeMap = () => {
    const ctx = useMap();
    useEffect(() => {
        const ref: any = createRef();
        ref.current = ctx.getContainer();
        resizeObserver(ref, () => {
            ctx.invalidateSize();
        });
    }, [ctx]);
    return null;
};

export const ReactLeafletMap = () => {
    return (
        <MapContainer style={{ width: "100%", height: "100%" }} center={[39.92401, 116.394495]} zoom={13}>
            <ResizeMap />
            <TileLayer url="//webrd{s}.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&style=8&size=1&scale=1" subdomains={["01", "02", "03", "04"]} />
            <Marker position={[39.92401, 116.394495]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
};
