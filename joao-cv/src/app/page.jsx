import AboutMe from '@/components/AboutMe/page'
import BasicInfo from '@/components/BasicInfo/page'
import Header from '@/components/Header/page'

export default function Home() {
  return (
    <>
      <main className='bg-myGray'>
        <Header />

        <div className='flex flex-wrap justify-evenly gap-12 mx-6 md:flex-nowrap h-fit print:flex-nowrap'>
          <AboutMe />
          <BasicInfo />
        </div>


      </main>
    </>
  )
}
