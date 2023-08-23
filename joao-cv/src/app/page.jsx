import AboutMe from '@/components/AboutMe'
import BasicInfo from '@/components/BasicInfo'
import Courses from '@/components/Courses'
import Header from '@/components/Header'
import SoftSkills from '@/components/SoftSKills'
import Tecnologies from '@/components/Tecnologies'

export default function Home() {
  return (
    <>
      <main className='bg-myGray'>
        <Header />

        <div id='cv-body'>
          <AboutMe />
          <BasicInfo />
          
          <Tecnologies />

          <Courses />
          <SoftSkills />
        </div>


      </main>
    </>
  )
}
