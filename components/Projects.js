import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import sectionTwo from '../images/sectionTwo.png'
import { Flex } from '../components/StyleComponents'

export const projectsLinks = [
    {
        name: 'RUSTYVIBES',
        link: 'https://github.com/kb24x7/rustyvibes'
    },
    {
        name: 'REDOCK',
        link: 'https://github.com/kb24x7/redock'
    },
    {
        name: 'THREADROLL',
        link: 'https://threadroll.app'
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
            <h1 className={styles.sectionHeading}>{'=> Popular Projects'}</h1>
            {projectsLinks.map((project, index) => (
                <a id="button" className={styles.project} key={index} href={project.link} rel="noopener noreferrer" target="_blank">
                    <p>{project.name}</p>
                </a>
            ))}
        </div>
    </Flex>
)
