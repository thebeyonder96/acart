import BestSeller from '../components/BestSeller';
import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection';
import NewsLetter from '../components/NewsLetter';
import OurPolicy from '../components/OurPolicy';

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <hr />
      <OurPolicy />
      <hr className='mb-4'/>
      <NewsLetter />
    </div>
  )
}

export default Home
