import styles from '../styles/Home.module.scss'
import { Grid } from '../components/StyleComponents'

const socialIcons = [
    {
        src: '/icons/github.svg',
        alt: 'github',
        link: 'https://github.com/kb24x7'
    },
    {
        src: '/icons/discord.svg',
        alt: 'discord',
        link: 'https://discord.gg/eBaFj2ytTU'
    },
    {
        src: '/icons/twitter.svg',
        alt: 'twitter',
        link: 'https://twitter.com/kb24x7'
    }
]

const Socials = () => (
    <Grid className={styles.socials}>
        {socialIcons.map((social, index) => (
            <a key={index} className={styles.socialIcons} href={social.link} target="_blank" rel="noopener noreferrer">
                <img id={social.alt} src={social.src} alt={social.alt} />
            </a>
        ))}
    </Grid>
)

export default Socials