import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skills } from './constants';

gsap.registerPlugin(ScrollTrigger);

// When spline is loaded, set spline loaded to true to allow other animations to initiate.
// This prevents Spline's loading in from seemingly freezing any animations occuring.
export function animateSplineIn() {
  let element = document.querySelector('.load-container');
  gsap.fromTo(
    element,
    {
      opacity: 0,
      scale: 0.7,
      translateX: '200px',
    },
    {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      delay: 0.5,
      translateX: '0px',
    }
  );
}

// Title animation for SELECTED PROJECTS
//  since this is above the fold this must only animate when spline has finished loading
export function handleTitleAnimation() {
  let element = document.querySelector('h1.above-fold');
  gsap.fromTo(
    element,
    {
      translateX: -100,
      opacity: 0,
    },
    {
      translateX: 0,
      opacity: 1,
      duration: 0.5,
      delay: 1.5,
    }
  );
}

// Image animation for SELECTED PROJECTS
export function handleImageAnimation() {
  let element = document.querySelectorAll('img.initial-clip-path-image');
  gsap.to(element, {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    delay: 1,
    duration: 1,
    stagger: 0.5,
  });
}

// Handle details of SELECTED PROJECTS below image after spline has finished loading
export function handleProjectDetailsAnimation() {
  let projectTitle = document.querySelectorAll('h2.project-title');
  let projectCategory = document.querySelectorAll('p.project-category');

  let projectRedirect = document.querySelectorAll('button.project-redirect');
  let projectGithub = document.querySelectorAll('a.project-github');
  let projectLive = document.querySelectorAll('a.project-live');
  let projectWarning = document.querySelectorAll('.project-warning');

  // Animate Project Title
  gsap.fromTo(
    projectTitle,
    {
      translateY: 40,
      opacity: 0,
    },
    {
      translateY: 0,
      opacity: 1,
      delay: 1,
      duration: 1,
      stagger: 0.5,
    }
  );

  // Animate Project Category
  gsap.fromTo(
    projectCategory,
    {
      translateY: 40,
      opacity: 0,
    },
    {
      translateY: 0,
      opacity: 1,
      delay: 1,
      duration: 1,
      stagger: 0.5,
    }
  );

  // Animate Project Redirect Button
  gsap.fromTo(
    projectRedirect,
    {
      translateX: 40,
      opacity: 0,
    },
    {
      translateX: 0,
      opacity: 1,
      delay: 1.5,
      duration: 1,
      stagger: 0.5,
    }
  );
  gsap.fromTo(
    [projectGithub, projectLive, projectWarning],
    {
      translateX: 40,
      opacity: 0,
    },
    {
      translateX: 0,
      opacity: 1,
      delay: 2,
      duration: 1,
      stagger: 0.5,
    }
  );
}

// The animations below do not depend on spline as they are below the fold

// Handle ALL project titles
export function handleTitleBelowAnimation() {
  let element = document.querySelectorAll('h1.below-fold');
  element.forEach((el) =>
    gsap.fromTo(
      el,
      {
        translateX: '-40px',
        opacity: 0,
      },
      {
        translateX: 0,
        opacity: 1,
        duration: 1,
        delay: 1,
        scrollTrigger: {
          trigger: el,
        },
      }
    )
  );
}

export function handleExperienceAnimation() {
  let experienceTitle = document.querySelectorAll('h2.experience-title');
  let experienceTimeframe = document.querySelectorAll('p.experience-timeframe');
  let experienceCompany = document.querySelectorAll('h3.experience-company');
  let experienceDescription = document.querySelectorAll(
    'p.experience-description'
  );

  experienceTitle.forEach((title, index) => {
    gsap.fromTo(
      title,
      {
        translateY: 40,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,

        delay: 0.1,
        scrollTrigger: {
          trigger: title,
          toggleActions: 'play none none none',
          stagger: {
            amount: 0.5, // Stagger each element
          },
        } as gsap.plugins.ScrollTrigger, // Cast as ScrollTriggerInstanceVars
      }
    );
  });
  experienceTimeframe.forEach((title, index) => {
    gsap.fromTo(
      title,
      {
        translateY: 40,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,

        delay: 0.2,
        scrollTrigger: {
          trigger: title,
          toggleActions: 'play none none none',
          stagger: {
            amount: 0.5, // Stagger each element
          },
        } as gsap.plugins.ScrollTrigger, // Cast as ScrollTriggerInstanceVars
      }
    );
  });
  experienceCompany.forEach((title, index) => {
    gsap.fromTo(
      title,
      {
        translateY: 40,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,

        delay: 0.3,
        scrollTrigger: {
          trigger: title,
          toggleActions: 'play none none none',
          stagger: {
            amount: 0.5, // Stagger each element
          },
        } as gsap.plugins.ScrollTrigger, // Cast as ScrollTriggerInstanceVars
      }
    );
  });
  experienceDescription.forEach((title, index) => {
    gsap.fromTo(
      title,
      {
        translateY: 40,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,

        delay: 0.4,
        scrollTrigger: {
          trigger: title,
          toggleActions: 'play none none none',
          stagger: {
            amount: 0.5, // Stagger each element
          },
        } as gsap.plugins.ScrollTrigger, // Cast as ScrollTriggerInstanceVars
      }
    );
  });
}

export async function handleSkillContainer() {
  let skillContainers = document.querySelectorAll('div.skill-container');

  skillContainers.forEach((skill, index) => {
    gsap.fromTo(
      skill,
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        delay: `${index / skills.length}`,
        scrollTrigger: {
          trigger: skill,
          toggleActions: 'play none none none',

          stagger: {
            amount: 1, // Stagger each element
          },
        } as gsap.plugins.ScrollTrigger, // Cast as ScrollTriggerInstanceVars
      }
    );
  });
}

export async function handleCtaContainer() {
  let ctaSmall = document.querySelector('p.cta-small');
  let ctaBig = document.querySelector('h5.cta-big');
  let ctaCta = document.querySelector('.cta-cta');

  gsap.fromTo(
    ctaSmall,
    {
      translateY: 40,
      scale: 0,
      opacity: 0,
    },
    {
      translateY: 0,
      scale: 1,
      opacity: 1,
      duration: 1,
      delay: 0.3,
      scrollTrigger: {
        trigger: ctaSmall,
        toggleActions: 'play none none none',
      } as gsap.plugins.ScrollTrigger, // Cast as ScrollTriggerInstanceVars
    }
  );

  gsap.fromTo(
    ctaBig,
    {
      translateY: 40,
      scale: 0,
      opacity: 0,
    },
    {
      translateY: 0,
      scale: 1,
      opacity: 1,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: ctaBig,
        toggleActions: 'play none none none',
      } as gsap.plugins.ScrollTrigger, // Cast as ScrollTriggerInstanceVars
    }
  );

  gsap.fromTo(
    ctaCta,
    {
      rotate: '135deg',
      scale: 0,
      opacity: 0,
    },
    {
      rotate: 0,
      scale: 1,
      opacity: 1,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: ctaCta,
        toggleActions: 'play none none none',
      } as gsap.plugins.ScrollTrigger, // Cast as ScrollTriggerInstanceVars
    }
  );
}

export async function handleWarningAnimation() {
  let element = document.querySelectorAll('.project-warning');
  gsap.fromTo(
    element,
    {
      translateX: 40,
      opacity: 0,
    },
    {
      translateX: 0,
      opacity: 1,
      delay: 2,
      duration: 1,
      stagger: 0.5,
    }
  );
}
