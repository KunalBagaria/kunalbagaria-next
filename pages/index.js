import Image from 'next/image'
import Meta from '../components/Meta'
import Nav from '../components/Nav'
import Heading from '../components/Heading'
import Socials from '../components/Socials'
import styles from '../styles/Home.module.scss'
import age from '../components/returnAge'
import sectionOne from '../images/sectionOne.png'
import { Grid } from '../components/StyleComponents'

const Home = () => {
  return (
    <>
      <Meta />

      {/* Main Frame */}
      <main className={styles.main}>
        <Nav />
        <Heading />

        <Grid className={styles.sectionOne}>
          <p className={styles.bio}>I’m a {age} years old full stack web developer who loves to make new and awesome projects.</p>
          <Socials />
          <a className={styles.contact} id="button" target="_blank" rel="noopener noreferrer" href="mailto://hi@kunalbagaria.com">CONTACT</a>
          <div className={styles.sectionOneImage}>
            <Image src={sectionOne} alt="Section One" />
          </div>
        </Grid>

      </main>

    </>
  )
}

export default Home