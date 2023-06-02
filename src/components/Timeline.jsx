// import "./Timeline.css";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/all";

// gsap.registerPlugin(ScrollTrigger);

// export function Timeline () {
// return (
//     <>

//     </>
// );
// }

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
          snap: 1 / (panels.length - 1),
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
          <div>
            <h1>SCROLL DOWN</h1>
          </div>
        </div>
        <div className="panel">
          <h1>ONE</h1>
        </div>
        <div className="panel">
          <h1>TWO</h1>
        </div>
      </div>
    </div>
  );
}
