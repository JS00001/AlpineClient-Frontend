import React from 'react'
import Content from '@/content'

const Showcase: React.FC = () => {
  const [active, setActive] = React.useState(0)

  const handleClick = (index: number) => {
    setActive(index)
  }

  return (
    <div className="flex flex-col items-center">
      <div className="hidden h-4 w-[600px] rounded-t-3xl bg-secondary-400 md:flex " />
      <div className="relative flex w-full justify-center bg-secondary-400 pb-3 pt-3 text-white md:w-[700px] md:pt-0">
        {Content.Showcase.map((showcase, index) => (
          <ShowcaseItem
            key={index}
            title={showcase.title}
            active={active === index}
            onClick={() => handleClick(index)}
          />
        ))}
        <div className="absolute bottom-0 right-0 hidden h-12 w-[50px] rounded-bl-[30px] bg-main md:flex" />
        <div className="absolute left-0 bottom-0 hidden h-12 w-[50px] rounded-br-[30px] bg-main md:flex" />
      </div>
    </div>
  )
}

export interface ShowcaseItemProps {
  title: string
  active: boolean
  onClick: () => void
}

const ShowcaseItem: React.FC<ShowcaseItemProps> = ({
  title,
  active,
  onClick,
}) => {
  if (active)
    return (
      <p className="cursor-pointer rounded-full bg-secondary-300 px-4 py-1 text-sm text-white hover:bg-secondary-200 md:px-8 md:text-lg">
        {title}
      </p>
    )
  else
    return (
      <p
        className="cursor-pointer px-4 py-1 text-sm text-white hover:rounded-full hover:bg-secondary-200 md:px-8 md:text-lg"
        onClick={onClick}
      >
        {title}
      </p>
    )
}

export default Showcase
