import AboutMe from '@/components/AboutMe'
import BasicInfo from '@/components/BasicInfo'
import Header from '@/components/Header'
import Tecnologies from '@/components/Tecnologies'

export default function Home() {
  return (
    <>
      <main className='bg-myGray'>
        <Header />

        <div className='flex flex-wrap justify-evenly gap-12 mx-6 md:flex-nowrap h-fit print:flex-nowrap'>
          <AboutMe />
          <BasicInfo />
        </div>

        <Tecnologies />

      </main>
    </>
  )
}
