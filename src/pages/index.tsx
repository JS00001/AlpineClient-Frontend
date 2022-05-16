import Background from '@/components/Background'
import Navbar from '@/components/Navbar'
import type { NextPage } from 'next'
import Head from 'next/head'

import {
  RiSoundModuleLine,
  RiGroupLine,
  RiFoldersLine,
  RiAppsLine,
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
        <div className="my-32 flex flex-col items-center">
          <h1 className="text-[212px] font-extrabold text-white">Alpine</h1>
          <h2 className="text-2xl uppercase text-gray-300">
            From the Original Developers of Crystal Client
          </h2>
        </div>

        {/* Slider */}
        <div className="flex flex-col items-center">
          <div className="h-4 w-[600px] rounded-t-3xl bg-secondary-400 " />
          <div className="relative flex w-[700px] justify-center bg-secondary-400 pb-3 text-white">
            <p className="rounded-full bg-secondary-300 px-8 py-1 text-lg text-white">
              Test2
            </p>
            <p className="px-8 py-1 text-lg text-white">Test</p>
            <p className="px-8 py-1 text-lg text-white">Test</p>
            <p className="px-8 py-1 text-lg text-white">Test</p>
            <p className="px-8 py-1 text-lg text-white">Test</p>
            <div className="absolute bottom-0 right-0 h-12 w-[50px] rounded-bl-[30px] bg-main" />
            <div className="absolute left-0 bottom-0 h-12 w-[50px] rounded-br-[30px] bg-main" />
          </div>
        </div>

        {/* Slider Images */}
        <div className="flex justify-center">
          <div className="h-[600px] w-4/5 rounded-xl border-2 border-secondary-400 bg-main"></div>
        </div>

        {/* Features */}
        <div className="container mx-auto my-32 flex flex-col items-center">
          <h2 className="text-2xl uppercase text-primary-400">Features</h2>
          <h1 className="mt-10 w-1/2 text-center text-6xl font-semibold text-white">
            Alpine ships with core features{' '}
            <span className=" bg-gradient-to-r from-primary-400 to-teal-300 bg-clip-text text-transparent">
              Free
            </span>{' '}
            and no hidden fees
          </h1>

          <div className="mt-20 grid grid-cols-4 gap-8">
            <div className="bg-secondary-400 px-7 pt-20 pb-7">
              <RiSoundModuleLine className="text-primary-400" size={40} />
              <h1 className="mt-10 text-5xl font-medium text-white">
                Over 100 Mods
              </h1>
            </div>
            <div className="bg-secondary-400 px-7 pt-20 pb-7">
              <RiAppsLine className="text-primary-400" size={40} />
              <h1 className="mt-10 text-5xl font-medium text-white">
                Custom HUD
              </h1>
            </div>
            <div className="bg-secondary-400 px-7 pt-20 pb-7">
              <RiGroupLine className="text-primary-400" size={40} />
              <h1 className="mt-10 text-5xl font-medium text-white">
                Groups and Friends
              </h1>
            </div>
            <div className="bg-secondary-400 px-7 pt-20 pb-7">
              <RiFoldersLine className="text-primary-400" size={40} />
              <h1 className="mt-10 text-5xl font-medium text-white">
                5+ Mod Profiles
              </h1>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
