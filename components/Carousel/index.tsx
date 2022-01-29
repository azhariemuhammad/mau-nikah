import Glide from '@glidejs/glide';
import {
  useImperativeHandle,
  useEffect,
  useRef,
  forwardRef,
  PropsWithChildren,
} from 'react';

import '@glidejs/glide/dist/css/glide.core.css';

export const Carousel = forwardRef<
  HTMLInputElement,
  PropsWithChildren<{ options: object }>
>((props, ref) => {
  const { options, children } = props;
  const sliderRef = useRef<HTMLInputElement>(null);

  // TODO:
  // @ts-ignore
  useImperativeHandle(ref, () => sliderRef.current);

  useEffect(() => {
    // TODO:
    // @ts-ignore
    const slider = new Glide(sliderRef.current, options);

    slider.mount();

    // TODO:
    // @ts-ignore
    return () => slider.destroy();
  }, [options]);

  return (
    <div className="glide" ref={sliderRef}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">{children}</ul>
      </div>
    </div>
  );
});

export const Slide = forwardRef<HTMLInputElement, PropsWithChildren<unknown>>(
  ({ children }, ref) => {
    return (
      // TODO:
      // @ts-ignore
      <li className="glide__slide" ref={ref}>
        {children}
      </li>
    );
  }
);
