import Highway from '@dogstudio/highway';
import Tween from 'gsap';

export default class Fade extends Highway.Transition {
  in({ from, to, done }) {
    from.remove();

    Tween.fromTo(to,
      { opacity: 0, duration: 1 },
      { opacity: 1, onComplete: done }
    );
  }

  out({ from, done }) {
    Tween.to(from, { opacity: 0, duration: 1, onComplete: done });
  }
}
