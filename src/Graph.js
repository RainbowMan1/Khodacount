import { useRef, useEffect } from "react";
import renderGraph from "./GraphInternals"

export default function Graph() {
    const containerRef = useRef(null);
    useEffect(() => {
        renderGraph(containerRef.current);
    }, []);
    
    return <div id="cy" ref={containerRef}></div>;
}