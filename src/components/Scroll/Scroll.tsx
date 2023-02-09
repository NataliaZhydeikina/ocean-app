import { createContext, ReactNode, useEffect, useRef, useState } from "react";
import ScrollObject from "../../lib/ui/Scroll";

interface Props {
    layout: ReactNode,
    canvas: ReactNode
}
export const ScrollContext = createContext({} as ScrollObject);

function Scroll({ layout, canvas }: Props) {
    const scroll = new ScrollObject();
    const scrollRef = useRef(0);
    const [mainStyle, setMainStyle] = useState({});
 
    useEffect(() => {
        scrollRef.current = scroll.init();
        setMainStyle({
            position: "fixed",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            overflow: "hidden"
        });

        return () => scroll.destroy(scrollRef.current)
    }, []);

    useEffect(()=>{
        scroll.setSize()
    }, [scroll.scrollable.current?.scrollHeight]);

    return <ScrollContext.Provider value={scroll}>
        <main style={mainStyle}>
            <div data-scroll ref={scroll.getRef()}>
                {layout}
            </div>
        </main>
        {canvas}
    </ScrollContext.Provider>;
}


export default Scroll;