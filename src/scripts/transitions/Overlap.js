import Highway from '@dogstudio/highway';
import Tween from 'gsap';

export default class Overlap extends Highway.Transition {
  in({ from, to, done }) {
    if (from) {
      Tween.to(from,
        { opacity: 0, duration: 1, onComplete: () => from.remove() }
      );
    }

    Tween.fromTo(to,
      { opacity: 0, duration: 1 },
      { opacity: 1, onComplete: done }
    );
  }

  out({ done }) {
    done();
  }
}