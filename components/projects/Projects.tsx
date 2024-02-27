'use client';

import { styles } from '@/constants/styles/styles';
import { staggerContainer, zoomIn } from '@/lib/motion';
import { motion } from 'framer-motion';

interface ProjectProps {
	videoId: string;
}

const Projects: React.FC<ProjectProps> = ({ videoId }) => {
	return (
		<motion.div
			variants={staggerContainer as any}
			initial='hidden'
			whileInView='show'
			viewport={{ once: false, amount: 0.25 }}
			className='my-10 space-y-10'
		>
			<motion.div variants={zoomIn(0.2, 1)}>
				<div className='text-center space-y-5 mb-5'>
					<h1 className={`${styles.title}`}>Projects</h1>
					<h2 className={`${styles.subTitle}`}>
						Our recent projects
					</h2>
				</div>
				<div className='video-container'>
					<iframe
						width='100%'
						height='100%'
						src={`https://www.youtube.com/embed/${videoId}`}
						frameBorder='0'
						allowFullScreen
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					></iframe>
					<style jsx>{`
						.video-container {
							position: relative;
							overflow: hidden;
							width: 100%;
							padding-top: 56.25%; /* 16:9 Aspect Ratio */
							border-radius: 20px;
						}
						.video-container iframe {
							position: absolute;
							top: 0;
							left: 0;
							width: 100%;
							height: 100%;
						}
					`}</style>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default Projects;
