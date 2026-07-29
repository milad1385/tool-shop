declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

// swiper.d.ts یا globals.d.ts
declare module 'swiper/css' {
  const content: any;
  export default content;
}

declare module 'swiper/css/navigation' {
  const content: any;
  export default content;
}

declare module 'swiper/css/pagination' {
  const content: any;
  export default content;
}

declare module 'swiper/css/scrollbar' {
  const content: any;
  export default content;
}

declare module 'swiper/css/effect-fade' {
  const content: any;
  export default content;
}

declare module 'swiper/css/effect-coverflow' {
  const content: any;
  export default content;
}

declare module 'swiper/css/effect-flip' {
  const content: any;
  export default content;
}

declare module 'swiper/css/effect-cube' {
  const content: any;
  export default content;
}

declare module 'swiper/css/thumbs' {
  const content: any;
  export default content;
}

declare module 'swiper/css/free-mode' {
  const content: any;
  export default content;
}

declare module 'swiper/css/autoplay' {
  const content: any;
  export default content;
}