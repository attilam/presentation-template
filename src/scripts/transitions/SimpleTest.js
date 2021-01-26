import Highway from '@dogstudio/highway';
import Tween from 'gsap';

export default class SimpleTest extends Highway.Transition {
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

    const texts = to.querySelectorAll('h1,h2,h3,h4,h5,h6,p');
    if (texts.length > 0) {
      Tween.from(texts, {
        x: 100,
        duration: 1,
        stagger: 0.2,
        ease: 'Bounce.easeOut'
      });
    }

    const images = to.querySelectorAll('img');
    if (images.length > 0) {
      Tween.from(images, {
        x: 50,
        duration: 1,
        stagger: 0.05,
        ease: 'Power4.easeOut'
      });
    }
  }

  out({ from, done }) {
    Tween.to(from, { opacity: 0, duration: 1, onComplete: done });
  }
}
