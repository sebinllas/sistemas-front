import styles from '../styles/Hero.module.css';
import { HeroText } from './HeroText';
//import { Navbar } from './Navbar';

interface Props {
	img: string;
}

export const Hero = ({ img }: Props) => {
	return (
		<div className={styles.Hero}>
			
			<img
				className="w-full h-full object-cover absolute top-0 left-0 -z-50"
				src={img}
				alt=""
			/>
			<div className="bg-[#0B6938] bg-opacity-80 absolute top-0 left-0 w-full h-full -z-40" />
			<HeroText />
		</div>
	);
};
