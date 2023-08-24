import AboutMe from '@/components/AboutMe'
import BasicInfo from '@/components/BasicInfo'
import Courses from '@/components/Courses'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Header from '@/components/Header'
import Hobbies from '@/components/Hobbies'
import SoftSkills from '@/components/SoftSKills'
import Tecnologies from '@/components/Tecnologies'
import Languages from '@/components/languages'
import Head from 'next/head'
import Image from 'next/image'

const imgSize = 150

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
          <Experience />

          <Languages />
          <Hobbies />

          <hr className='h-1 m-0 w-full bg-myBlack' />

          <section id='qrcode-section' className='m-auto flex flex-col items-center gap-5'>
            <p className='text-myWhite font-semibold bg-myBlack p-4 w-fit rounded-md'>Github, Linkedin e certificados:</p>
            <Image 
              width={imgSize}
              height={imgSize}
              src='/qrcode.png'
              alt="QR image for other links"
            />
            <span>
              <p className='text-center'>Ou pelo link:</p>
              <a href="https://linktr.ee/joaoeduardogomes" className='text-myBlack hover:underline'>
                https://linktr.ee/joaoeduardogomes
              </a>
            </span>
          </section>
        </div>


      </main>
    </>
  )
}
