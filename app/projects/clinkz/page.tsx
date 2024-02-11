import React from 'react';
import FullProjectSection from '../fullprojectsection';
import ExploreMore from '../exploremore';
import NavBar from '@/app/components/navbar/navbar';

const clinkz_data = {
  title: 'Clinkz',
  category: 'Full Stack Amazon Price Tracker With Subscriptions',
  skills: [
    'Next.js',
    'React.js',
    'Tailwind',
    'Firebase',
    'Zustand',
    'Shadcnui',
    'NextAuth',
  ],

  image_url: '/image/clinkz.png',
  github_link: 'https://github.com/yeahimjt/clinkz',
  live_link: 'https://clinkz.vercel.app/',
  overview: [
    'Typically when researching into purchasing products I often try my best to buy when the items price is at least not at its highest.',
    'When I believe a specific product will be bought eventually I throw it into my bookmarks, often leaving my bookmarks cluttered and finding it difficult to sometimes find that specific item I was planning to buy.',
    'This intiated the process of developing a price tracker, specifically with amazon in this case since it is my most used ecommerce platform. I knew I did not want this application to simply hold links to products in organized lists for me to manually check each items price when I happened to remember.',
    'In making this price tracker much more useful to general users I decided to dive into web scraping.',
  ],
  features: [
    'Clinkz utilizes Firebase for its data storage, and user authorization.',
    'The bread winning feature of Clinkz is its hands free data retrieval from dynamic amazon product links. This allows the user to simply enter an amazon product link, and in turn store important data like its current price, description, ratings, and reviews.',
    'Users can choose which list to add the new amazon product to help maintain the products they are looking to buy. For example if someone is remodeling their room they might have a list called "new room decor" which has several different amazon products attached to.',
    'They can then view all their lists and indivual amazon products within them when they are once again looking to purchase those items.',
    'Clinkz very importantly also schedually re-scrapes all amazon products listed in the Firestore database in the background to grab each amazons new current price and update other price categories accordingly',
    'With a subsription plan implemented, this allows users to scrape a select amount of amazon products, and a selected amount of items they can track to be notified of when an item is at its lowest price.',
  ],
  challenges:
    'Choosing which proxy provider for web scraping proved to be difficult as it was a world I was not familiar with. Eventually choosing one that was working and as I was pushing the application to production the proxy no longer worked. My application no longer working on production left me confused as to what the problem could be but after researching switching proxy providers was the right solution.',
  results:
    'Clinkz is a functional amazon product price tracker that efficiently implements subscription tiers for its users.',
  last: '/projects/harbor',
  next: '/projects/exhibitify',
  warning: null,
};

const page = () => {
  return (
    <>
      <NavBar />
      <main className='mt-[80px] grid grid-cols-6'>
        <FullProjectSection data={clinkz_data} />
        <ExploreMore previous={clinkz_data.last} next={clinkz_data.next} />
      </main>
    </>
  );
};

export default page;
