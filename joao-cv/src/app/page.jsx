import AboutMe from '@/components/AboutMe'
import BasicInfo from '@/components/BasicInfo'
import Courses from '@/components/Courses'
import Education from '@/components/Education'
import Header from '@/components/Header'
import SoftSkills from '@/components/SoftSKills'
import Tecnologies from '@/components/Tecnologies'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
      <link rel="icon" href="/Avatar.png" />
      </Head>
      <main className='bg-myGray'>
        <Header />

        <div id='cv-body'>
          <AboutMe />
          <BasicInfo />
          
          <Tecnologies />

          <Courses />
          <SoftSkills />

          <Education />
        </div>


      </main>
    </>
  )
}
