const tl = gsap.timeline({repeat: 0, duration: 1, defaults: {
  duration: 0.5,
  ease: 'back',
  transformOrigin: '50% 50%'
}});

tl.to('.landing__logo__container', {scale: 0.75, duration: 1})

  .from('.h-left', {rotate: -90, x: '50%'})
  .from('.h-right', {rotate: 90, x: '-50%'}, '<')

  .from('.a-left', {rotate: -45}, '>-0.25')
  .from('.a-right', {rotate: 45}, '<')
  
  .from('.c-upper', {rotate: 45}, '>-0.25')
  .from('.c-lower', {rotate: -45}, '<')
  
  .from('.k-upper', {rotate: -45}, '>-0.25')
  .from('.k-lower', {rotate: 45}, '<')
  
  .from('.o-inner', {scale: 2.25}, '>-0.25')
  .from('.o-outer', {scale: 0.5}, '<')
  
  .from('.f-upper', {y: '75%'}, '>-0.25')
  .from('.f-lower', {scale: 0}, '<')
  .from('.f-left', {x: '90%'}, '<')
  
  .from('.i-main', {scale: 0}, '>-0.25')
  
  .from('.e-upper', {y: '50%'}, '>-0.25')
  .from('.e-mid', {scale: 0}, '<')
  .from('.e-lower', {y: '-50%'}, '<')
  
  .from('.s-upper', {y: '100%'}, '>-0.25')
  .from('.s-lower', {y: '-100%'}, '<')
  .from('.s-upper-circle', {scale: 0}, '<')
  .from('.s-lower-circle', {scale: 0}, '<')
  
  .from('.t-horizontal', {rotate: 90, x: '100%', transformOrigin: '0 0'}, '>-0.25')
  .from('.t-vertical', {rotate: 90, x: '-150%', transformOrigin: '100% 100%'}, '>-0.25')

  .from('.a2-left', {rotate: -45}, '>-0.25')
  .from('.a2-right', {rotate: 45}, '<')

// setTimeout(() => {
//   tl.reverse()
// }, 5000)