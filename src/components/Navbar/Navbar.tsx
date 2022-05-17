import Content from '@/content'
import React from 'react'
import { RiMenuFill } from 'react-icons/ri'

const Navbar: React.FC = () => {
  const [collapsed, setCollapsed] = React.useState(true)

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return (
    <>
      <div className="container mx-auto py-8 px-2 md:px-5 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between px-6">
            <img src="/logo.png" />
            <RiMenuFill
              color="#fff"
              size={32}
              className="md:hidden"
              onClick={toggleCollapsed}
            />
          </div>
          <div
            className={`mt-5 flex flex-col ${
              collapsed && 'hidden'
            } md:flex md:flex-row `}
          >
            {Content.NavItems.map((item, index) => {
              return <NavItem key={index} {...item} />
            })}
          </div>
        </div>
      </div>
    </>
  )
}

interface NavItemProps {
  text: string
  url: string
}
const NavItem: React.FC<NavItemProps> = ({ text, url }) => {
  return (
    <div className="cursor-pointer rounded-full px-6 py-3 hover:bg-secondary-300">
      <a className="text-xl uppercase text-white" href={url}>
        {text}
      </a>
    </div>
  )
}

export default Navbar
