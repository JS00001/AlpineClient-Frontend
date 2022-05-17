import type { NextPage } from 'next'
import Head from 'next/head'

import Navbar from '@/components/Navbar'
import Background from '@/components/Background'
import Container from '@/components/Container'

const Changelog: NextPage = () => {
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
        <Container className="my-32">
          <h1 className="text-[128px] font-extrabold text-white">Changelog</h1>
          <h2 className="mt-5 uppercase text-gray-300 md:text-[18px] lg:text-[24px]">
            View the Recent Changes to Alpine
          </h2>
        </Container>

        <Container className="grid cursor-pointer grid-cols-12 gap-x-20">
          <div className="col-span-5 h-96 rounded-xl bg-secondary-400" />
          <div className="col-span-7">
            <h1 className="text-2xl uppercase text-gray-300">May 26, 2021</h1>
            <h1 className="my-5 text-5xl font-extrabold text-white">
              Version 1.0.2
            </h1>
            <p className="text-2xl font-medium leading-9 text-gray-300">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </Container>

        <Container className="grid grid-cols-3 gap-x-10">
          <div>
            <div className=" my-10 h-72 rounded-xl bg-secondary-400" />
            <h1 className="text-2xl uppercase text-gray-300">May 26, 2021</h1>
            <h1 className="my-5 text-5xl font-extrabold text-white">
              Version 1.0.2
            </h1>
            <p className="text-2xl font-medium leading-9 text-gray-300">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div>
            <div className=" my-10 h-72 rounded-xl bg-secondary-400" />
            <h1 className="text-2xl uppercase text-gray-300">May 26, 2021</h1>
            <h1 className="my-5 text-5xl font-extrabold text-white">
              Version 1.0.2
            </h1>
            <p className="text-2xl font-medium leading-9 text-gray-300">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div>
            <div className=" my-10 h-72 rounded-xl bg-secondary-400" />
            <h1 className="text-2xl uppercase text-gray-300">May 26, 2021</h1>
            <h1 className="my-5 text-5xl font-extrabold text-white">
              Version 1.0.2
            </h1>
            <p className="text-2xl font-medium leading-9 text-gray-300">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </Container>
      </main>
    </>
  )
}

export default Changelog
