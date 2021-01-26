import ScrollTrigger from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger);

export function scrollTrigger(node, options) {
  const vars = {
    alpha: 0,
    paused: true,
    immediateRender: false,
    duration: 1,
    ...options
  };
  if (vars.hasOwnProperty('func')) delete(vars.func);
  if (vars.hasOwnProperty('reset')) delete(vars.reset);

  const anim = options.func === 'to' ? gsap.to(node, vars) : gsap.from(node, vars);

  ScrollTrigger.create({
    trigger: node,
    start: () => 'top 101%',
    onEnter: () => anim.play()
  })

  if (options.reset) {
    ScrollTrigger.create({
      trigger: node,
      start: () => 'top 110%',
      onLeaveBack: () => anim.pause(0)
    });
  }
}


// Add Scroll Triggers here
//
//
const hs = document.querySelectorAll('h1,h2,h3,h4,h5');
[...hs].map(h => {
  scrollTrigger(h, {
    x: -100,
    ease: 'Bounce.easeOut',
    reset: true
  });
});

const ps = document.querySelectorAll('p');
[...ps].map(p => {
  scrollTrigger(p, {
    y: 100,
    reset: true
  });
});
