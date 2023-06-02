import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import "./Timeline.css";

gsap.registerPlugin(ScrollTrigger);

export function Timeline() {
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          // snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
        },
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div className="App" ref={component}>
      <div ref={slider} className="container">
        <div className="panel">
          <div className="section-one">
            <img src="/assets/images/space-timeline-1.png" alt="" />
          </div>
        </div>
        <div className="section-two panel">
        <img src="/assets/images/space-timeline-2.png" alt="" />
        </div>
        <div className="section-three panel">
        <img src="/assets/images/space-timeline-3.png" alt="" />
        </div>
      </div>
    </div>
  );
}
