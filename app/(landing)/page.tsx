import ClientSatisfaction from '@/components/client-satisfaction/ClientSatisfaction';
import LandingHero from '@/components/landing-hero/LandingHero';
import AppTopNavigation from '@/components/layout-components/app-top-navigation';
import Projects from '@/components/projects/Projects';
import Reviews from '@/components/reviews/Reviews';
import Services from '@/components/services/Services';

import WhyChooseUs from '@/components/whyChooseUs/WhyChooseUs';

import Blog from '@/components/blogs/Blog';
import GetInTouch from '@/components/getInTouch/GetInTouch';
import Footer from '@/components/layout-components/Footer';

const LandingPage = async () => {
	const WO2b03Zdu4Q = 'WO2b03Zdu4Q';

	return (
		<div>
			<div className='gradient-01' />
			<AppTopNavigation />
			<LandingHero />
			<div>
				<div className='gradient-03' />
				<WhyChooseUs />
			</div>
			<Services />
			<div>
				{/* <div className='gradient-02' /> */}
				<ClientSatisfaction />
			</div>
			<div>
				<div className='gradient-03'></div>
				<Reviews />
			</div>
			<Projects videoId={WO2b03Zdu4Q} />
			<Blog limit={3} />
			<GetInTouch />
			<div>
				<div className='gradient-04'></div>
				<div className='gradient-05'></div>
				<Footer />
			</div>
		</div>
	);
};

export default LandingPage;
