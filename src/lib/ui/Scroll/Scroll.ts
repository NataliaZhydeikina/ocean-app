import { RefObject, useRef } from "react";

export default class Scroll {
    private scrollable: RefObject<HTMLDivElement>;
    private documentScroll: number;
    public scrollToRender: number;
    private current: number;
    private speed: number;
    private speedTarget: number;
    private ease: number;
    private callbacks: Array<()=>void>

    constructor() {
        this.scrollable = useRef(null);
        this.documentScroll = 0;
        this.ease = 0.1;
        this.scrollToRender = 0;
        this.current = 0;
        this.speed = 0;
        this.speedTarget = 0;
        this.callbacks = [];
    }
    init() {
        this.setSize();
        this.current = this.scrollToRender = this.scrolled();
        this.setPosition();
        window.onbeforeunload = function() {
            window.scrollTo(0, 0);
        };
        window.addEventListener("resize", this.setSize);
        window.addEventListener("scroll", this.scrolled);
        return requestAnimationFrame(() => this.render());
    }
    destroy(ref: number) {
        window.removeEventListener('resize', this.setSize);
        window.removeEventListener("scroll", this.scrolled);
        cancelAnimationFrame(ref);
    }
    setSize() {
        document.body.style.height = `${this.scrollable.current?.scrollHeight}px`;
    }
    scrolled() {
        this.documentScroll = window.pageYOffset || document.documentElement.scrollTop;
        return this.documentScroll;
    }
    setPosition() {
        if (this.scrollable.current !== null && 
            (this.scrollToRender !== this.current || this.scrollToRender < 10)) {
            this.scrollable.current.style.transform = `translate3d(0,${-1 * this.scrollToRender}px,0)`;
        }
    }
    lerp(a: number, b: number, n: number){
        return (1 - n) * a + n * b;
    }
    render() {
        this.speed = Math.min(Math.abs(this.current - this.scrollToRender), 200)/200;
        this.speedTarget +=(this.speed - this.speedTarget)*0.2;
        this.current = Math.round(this.scrolled()*100)/100;
        this.scrollToRender = Math.round(this.lerp(
            this.scrollToRender,
            this.current,
            this.ease
        )*100)/100;
        this.setPosition();
        this.callbacks.forEach(callback=>callback());
        requestAnimationFrame(() => this.render());
    }
    getRef() {
        return this.scrollable;
    }
}