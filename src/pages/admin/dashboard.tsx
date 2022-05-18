import type { NextPage } from 'next'
import Head from 'next/head'

import Button from '@/components/Button'
import Background from '@/components/Background'
import AdminSidebar from '@/components/AdminSidebar'

const Dashboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>Crystal Client - Admin</title>
      </Head>

      <nav className="fixed z-[60]">
        <AdminSidebar />
      </nav>

      <figure>
        <Background.AdminBackground />
      </figure>

      <main className="relative z-50">
        <div className="ml-96 px-14 pt-28">
          {/* Page when viewing an old changelog */}
          <div className="hidden">
            <h2 className="text-xl font-medium uppercase text-gray-300">
              May 21, 2021
            </h2>
            <h1 className=" my-3 text-6xl font-semibold text-white">
              Version 1.0.2
            </h1>
            <div className="w-[550px]">
              <img src="/Image.png" className="h-full w-full" />
            </div>

            <div className="flex flex-col gap-y-4 py-10 text-2xl text-gray-300">
              <p>+ Added Something</p>
              <p>+ Added Something</p>
              <p>+ Added Something</p>
              <p>+ Added Something</p>
              <p>+ Added Something</p>
              <p>+ Added Something</p>
              <p>- Removed Something</p>
              <p>- Removed Something</p>
              <p>- Removed Something</p>
              <p>- Removed Something</p>
            </div>
          </div>

          {/* Page when adding new changelog */}
          <div className="">
            <h1 className=" my-3 text-6xl font-semibold text-white">
              New Changelog
            </h1>
            <Button className="mt-10 block" color="secondary" size="small">
              Select Image
            </Button>
            <input
              placeholder="Version"
              className="my-5 block w-96 rounded-md border border-secondary-300 bg-secondary-400 p-4 text-white focus:outline-none focus:ring-4 focus:ring-navy"
            />
            <textarea
              placeholder="Items Added"
              className="my-5 block w-[600px] rounded-md border border-secondary-300 bg-secondary-400 p-4 text-white focus:outline-none focus:ring-4 focus:ring-navy"
            />
            <textarea
              placeholder="Items Removed"
              className="my-5 block w-[600px] rounded-md border border-secondary-300 bg-secondary-400 p-4 text-white focus:outline-none focus:ring-4 focus:ring-navy"
            />
            <textarea
              placeholder="Items Changed"
              className="my-5 block w-[600px] rounded-md border border-secondary-300 bg-secondary-400 p-4 text-white focus:outline-none focus:ring-4 focus:ring-navy"
            />
            <Button size="small" className=" w-[600px]">
              Post Changelog
            </Button>
          </div>
        </div>
      </main>
    </>
  )
}

export default Dashboard