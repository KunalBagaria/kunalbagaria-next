import { Flex, Grid } from '../components/StyleComponents'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import sectionThree from '../images/sectionThree.png'

const skillsObj = [
    { name: 'React.js', level: '95%' },
    { name: 'Next.js', level: '90%' },
    { name: 'Node.js', level: '90%' },
    { name: 'Discord.js', level: '85%' },
    { name: 'TypeScript', level: '60%' },
    { name: 'Rust', level: '50%' },
    { name: 'Swift', level: '50%' }
]

export const Skills = () => (
    <Flex className={styles.skillsParent}>
        <div className={styles.skillSection}>
            <h1 className={styles.sectionHeading}>{'=> Skills'}</h1>
            <Grid className={styles.skillsGrid}>
                {skillsObj.map((skill, index) => (
                    <div key={index}>
                        <p>{`${skill.name} ->`}</p>
                        <div style={{ width: skill.level }} className={styles.skillLevel}></div>
                    </div>
                ))}
            </Grid>
        </div>
        <div className={styles.sectionThreeImage}>
            <Image src={sectionThree} alt="sectionThree" />
        </div>
    </Flex>
)