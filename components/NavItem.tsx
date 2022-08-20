import styles from '../styles/NavItem.module.css';

interface Props {
	text: string;
}

export const NavItem = ({ text }: Props) => {
	return (
		<div className={styles.NavItem}>
			{text}
		</div>
	);
};
