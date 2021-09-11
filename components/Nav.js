import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import theme from '../images/icons/theme.svg'
import { useRouter } from 'next/router'

export default function Nav() {
    const router = useRouter();
    const switchTheme = () => { 
        localStorage.setItem('theme', localStorage.getItem('theme') === 'dark' ? 'light' : 'dark');
        router.reload();
    }
    return (
        <div className={styles.nav}>
            <h1>Bagaria.</h1>
            <div className={styles.themeSwitcher} onClick={switchTheme}>
                <Image src={theme} />
            </div>
        </div>
    )
}