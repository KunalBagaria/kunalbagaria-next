import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import github from '../images/icons/github.svg'
import discord from '../images/icons/discord.svg'
import twitter from '../images/icons/twitter.svg'
import { Grid } from '../components/StyleComponents'

const socialIcons = [
    {
        src: github,
        alt: 'Github',
        link: 'https://github.com/kb24x7'
    },
    {
        src: discord,
        alt: 'Discord',
        link: 'https://discord.gg/0Zc5ZD9X9Zb9Xb5b'
    },
    {
        src: twitter,
        alt: 'Twitter',
        link: 'https://twitter.com/kb24x7'
    }
]

const Socials = () => (
    <Grid className={styles.socials}>
        {socialIcons.map((social, index) => (
            <a key={index} className={styles.socialIcons} href={social.link} target="_blank" rel="noopener noreferrer">
                <Image src={social.src} alt={social.alt} />
            </a>
        ))}
    </Grid>
)

export default Socials