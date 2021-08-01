import Image from 'next/image'
import Meta from '../components/Meta'
import Nav from '../components/Nav'
import Heading from '../components/Heading'
import Socials from '../components/Socials'
import styles from '../styles/Home.module.scss'
import age from '../components/returnAge'
import sectionOne from '../images/sectionOne.png'
import { Grid } from '../components/StyleComponents'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'

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
          <div className={styles.sectionOneImage} id="sectionImages">
            <Image src={sectionOne} alt="Section One" />
          </div>
        </Grid>
        <a className={styles.contact} id="button" target="_blank" rel="noopener noreferrer" href="mailto://hi@kunalbagaria.com">CONTACT</a>

        <section className={styles.sectionTwo}>
          <Projects />
        </section>

        {/* <section className={styles.sectionThree}>
          <Skills />
        </section> */}


        <section className={styles.footer}>
          <p className={styles.footerOne}>© KUNAL BAGARIA | {new Date().getFullYear()}</p>
          <p className={styles.footerTwo}>DEVELOPED USING <a target="_blank" rel="noopener noreferrer" href="https://nextjs.org">NEXT.JS</a> | DEPLOYED ON <a target="_blank" rel="noopener noreferrer" href="https://vercel.com">VERCEL</a></p>
        </section>

      </main>

    </>
  )
}

export default Home