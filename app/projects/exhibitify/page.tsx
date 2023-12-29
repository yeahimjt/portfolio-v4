import React from 'react';
import FullProjectSection from '../fullprojectsection';
import ExploreMore from '../exploremore';

const exhibitify_data = {
  title: 'Exhibitify',
  category: 'Full Stack Creative Feedback and Showcase Platform',
  skills: [
    'Next.js',
    'React.js',
    'Tailwind',
    'Firebase',
    'Zustand',
    'Shadcnui',
    'Puppeteer',
    'NextAuth',
  ],

  image_url: '/image/exhibitify.png',
  github_link: 'https://github.com/yeahimjt/exhibitify',
  live_link: 'https://exhibitify.vercel.app/explore',
  overview: [
    'A problem I found myself constantly being reintroduced with is when editing or creating my web portfolio is that the only resources often found from top google searches are blog posts often containing the same portfolios.',
    'However, this did make me realize something; people can create their own brand from their portfolio. Take Brittany Chiang’s website, there are plenty of portfolios that are recognizable to have taken inspiration from her.',
    'From this, I took it upon myself to create a platform where users can create a brand from their portfolios uploaded on the platform, and ultimately would also serve as a place for users who need inspiration for their portfolios to see real-working diverse examples.',
  ],
  features: [
    'Exhbitify utilizes Firebase for its authentication, database for data, and storage for storing images of the of the users portfolio website for their post. ',
    'Users can upload, or edit their posts and using Puppeteer can validate their URL so that a screenshot is taken of their portfolio at the given URL and stored so they can avoid having to manually take and upload a picture of their portfolio.',
    'Infinite scrolling for exploring posts also allows users to receive a shortened amount of posts at a time.',
    'Another important feature that was implemented for Harbor was cookie-based impressions. If a user (logged in or not) happened to visit a post for their first time that would count as one impression, if at anytime before that day ends they revisit the post it will not count as an impression. This helps users get a accurate number for their impressions on their posts.',
  ],
  challenges:
    'This project had no significant challenges. Developing the project was seamless as I took time in both brainstorming and wire-framing the entire application before doing any developing. This allowed me to have a solid foundation for how my website would look for each of its components and how it would ultimately flow for users.',
  results:
    'What I was left with at the end of development was a production ready platform for users to use. As of right now I am pushing this platform out via Linkedin, and also targeting specific users who meet the need-case for the application to grow its community.',
  last: '/projects/clinkz',
  next: '/projects/harbor',
  warning: null,
};

const page = () => {
  return (
    <main className='mt-[80px] grid grid-cols-6'>
      <FullProjectSection data={exhibitify_data} />
      <ExploreMore
        previous={exhibitify_data.last}
        next={exhibitify_data.next}
      />
    </main>
  );
};

export default page;
