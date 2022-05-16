import Background from '@/components/Background'
import Navbar from '@/components/Navbar'
import type { NextPage } from 'next'
import Head from 'next/head'

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
        <div className="my-32 flex flex-col items-center">
          <h1 className="text-[212px] font-extrabold text-white">Alpine</h1>
          <h2 className="text-2xl uppercase text-gray-300">
            From the Original Developers of Crystal Client
          </h2>
        </div>

        <div className="flex flex-col items-center">
          <div className="h-4 w-[600px] rounded-t-3xl bg-secondary-400 " />
          <div className="relative flex w-[700px] justify-center bg-secondary-400 pb-3 text-white">
            <p className="rounded-full bg-secondary-300 px-8 py-1 text-lg text-white">
              Test
            </p>
            <p className="px-8 text-lg text-white">Test</p>
            <p className="px-8 text-lg text-white">Test</p>
            <p className="px-8 text-lg text-white">Test</p>
            <p className="px-8 text-lg text-white">Test</p>
            <div className="absolute bottom-0 right-0 h-12 w-[50px] rounded-bl-[30px] bg-main" />
            <div className="absolute left-0 bottom-0 h-12 w-[50px] rounded-br-[30px] bg-main" />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="h-[600px] w-4/5 rounded-xl border-2 border-secondary-400 bg-main"></div>
        </div>
      </main>
    </>
  )
}

export default Home
