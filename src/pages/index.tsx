import Background from '@/components/Background'
import Navbar from '@/components/Navbar'
import Container from '@/components/Container'
import type { NextPage } from 'next'
import Head from 'next/head'

import {
  RiSoundModuleLine,
  RiGroupLine,
  RiFoldersLine,
  RiAppsLine,
  RiAddLine,
  RiSubtractLine,
} from 'react-icons/ri'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Crystal Client</title>
      </Head>

      <nav className="relative z-50">
        <Navbar />
      </nav>

      <figure>
        <Background />
      </figure>

      <main className="relative z-50">
        {/* Hero */}
        <Container className="my-32 flex flex-col items-center">
          <h1 className="text-[96px] font-extrabold text-white md:text-[164px] lg:text-[212px]">
            Alpine
          </h1>
          <h2 className="text-center uppercase text-gray-300 md:text-[18px] lg:text-[24px]">
            From the Original Developers of Crystal Client
          </h2>
        </Container>

        <div className="flex flex-col items-center">
          <div className="hidden h-4 w-[600px] rounded-t-3xl bg-secondary-400 md:flex " />
          <div className="relative flex w-full justify-center bg-secondary-400 pb-3 pt-3 text-white md:w-[700px] md:pt-0">
            <p className="rounded-full bg-secondary-300 px-4 py-1 text-lg text-white md:px-8">
              Test2
            </p>
            <p className="px-4 py-1 text-lg text-white md:px-8">Test</p>
            <p className="px-4 py-1 text-lg text-white md:px-8">Test</p>
            <p className="px-4 py-1 text-lg text-white md:px-8">Test</p>
            <p className="px-4 py-1 text-lg text-white md:px-8">Test</p>
            <div className="absolute bottom-0 right-0 hidden h-12 w-[50px] rounded-bl-[30px] bg-main md:flex" />
            <div className="absolute left-0 bottom-0 hidden h-12 w-[50px] rounded-br-[30px] bg-main md:flex" />
          </div>
        </div>

        <Container className="flex justify-center ">
          <div className="h-[600px] w-full border-b-2 border-secondary-400 bg-main md:rounded-xl md:border-2"></div>
        </Container>

        <Container className="my-72 flex flex-col items-center ">
          <h2 className="text-2xl uppercase text-primary-400">Features</h2>
          <h1 className="mt-10 w-full text-center text-4xl font-semibold text-white sm:text-5xl md:text-6xl xl:w-3/4">
            Alpine ships with core features{' '}
            <span className=" bg-gradient-to-r from-primary-400 to-teal-300 bg-clip-text text-transparent">
              Free
            </span>{' '}
            and no hidden fees
          </h1>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="rounded-xl bg-secondary-400 px-7 pt-20 pb-7">
              <RiSoundModuleLine className="text-primary-400" size={40} />
              <h1 className="mt-10 text-5xl font-medium text-white">
                Over 100 Mods
              </h1>
            </div>
            <div className="rounded-xl bg-secondary-400 px-7 pt-20 pb-7">
              <RiAppsLine className="text-primary-400" size={40} />
              <h1 className="mt-10 text-5xl font-medium text-white">
                Custom HUD
              </h1>
            </div>
            <div className="rounded-xl bg-secondary-400 px-7 pt-20 pb-7">
              <RiGroupLine className="text-primary-400" size={40} />
              <h1 className="mt-10 text-5xl font-medium text-white">
                Groups and Friends
              </h1>
            </div>
            <div className="rounded-xl bg-secondary-400 px-7 pt-20 pb-7">
              <RiFoldersLine className="text-primary-400" size={40} />
              <h1 className="mt-10 text-5xl font-medium text-white">
                5+ Mod Profiles
              </h1>
            </div>
          </div>
        </Container>

        <Container className=" my-72 flex flex-col items-center">
          <h2 className="text-2xl uppercase text-primary-400">Faqs</h2>
          <h1 className="mt-10 text-center text-4xl font-semibold text-white sm:text-5xl md:text-6xl xl:w-3/4">
            Frequently Asked Questions
          </h1>

          <div className="mt-20 w-full">
            <div className="my-4 flex items-center justify-between rounded-2xl  bg-secondary-400 px-10 py-6">
              <h2 className="text-xl text-white md:text-2xl lg:text-3xl">
                Example Question
              </h2>
              <RiAddLine color="white" size={32} />
            </div>
          </div>
        </Container>
      </main>
    </>
  )
}

export default Home
