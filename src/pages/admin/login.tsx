import type { NextPage } from 'next'
import Head from 'next/head'

import Navbar from '@/components/Navbar'
import Background from '@/components/Background'
import Container from '@/components/Container'
import Button from '@/components/Button'

const LoginPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Crystal Client</title>
      </Head>

      <nav className="relative z-50">
        <Navbar />
      </nav>

      <figure>
        <Background.LoginBackground />
      </figure>

      <main className="relative z-50">
        <Container className="mt-32 flex justify-center">
          <div className="flex w-full flex-col items-center rounded-lg bg-secondary-400 py-16 md:w-10/12 lg:w-3/5 xl:w-1/2">
            <h1 className="text-4xl font-semibold text-white lg:text-6xl">
              Alpine Admin
            </h1>
            <Button className="my-10">Login with Discord</Button>
          </div>
        </Container>
      </main>
    </>
  )
}

export default LoginPage
