import { createContext, ReactNode, useEffect, useRef, useState } from "react";
import ScrollObject from "../../lib/ui/Scroll";

interface Props {
    children?: ReactNode
}
export const ScrollContext = createContext<number>(0);

function Scroll({children}: Props) {
    const scroll = new ScrollObject();
    const scrollRef = useRef(0);
    const [mainStyle, setMainStyle] = useState({});
    const [scrollToRender, setScrollToRender] = useState(0);

    useEffect(() => {
        scroll.init();
        setMainStyle({
            position: "fixed",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            overflow: "hidden"
        });
        window.onbeforeunload = function() {
            window.scrollTo(0, 0);
        };
        scrollRef.current = requestAnimationFrame(() => scroll.render());
        window.addEventListener("resize", scroll.setSize);
        window.addEventListener("scroll", scroll.scrolled);

        return () => {
            window.removeEventListener('resize', scroll.setSize);
            window.removeEventListener("scroll", scroll.scrolled);
            cancelAnimationFrame(scrollRef.current);
        }
    }, []);

    return <ScrollContext.Provider value={scrollToRender}>
        <main style={mainStyle}>
            <div data-scroll ref={scroll.getRef()}>
                {children}
            </div>
        </main>
    </ScrollContext.Provider>;
}


export default Scroll;