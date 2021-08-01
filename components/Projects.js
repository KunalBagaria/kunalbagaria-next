import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import sectionTwo from '../images/sectionTwo.png'
import { Flex } from '../components/StyleComponents'

export const projectsLinks = [
    {
        name: 'THREADROLL',
        link: 'https://threadroll.app'
    },
    {
        name: 'WWDC COMMUNITY WEEK 2021',
        link: 'https://wwdc.community'
    },
    {
        name: 'VACCINE18',
        link: 'https://vaccine18.com'
    },
    {
        name: 'SMORTBOT',
        link: 'https://dsc.gg/smort'
    }
]

export const Projects = () => (
    <Flex className={styles.projects}>
        <div className={styles.sectionTwoImage}>
            <Image src={sectionTwo} alt="sectionTwo" />
        </div>
        <div className={styles.projectsLinks}>
            <h1 className={styles.sectionHeading}>{'=> Projects'}</h1>
            {projectsLinks.map((project, index) => (
                <a id="button" className={styles.project} key={index} href={project.link} rel="noopener noreferrer" target="_blank">
                    <p>{project.name}</p>
                </a>
            ))}
        </div>
    </Flex>
)