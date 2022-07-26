import React from 'react'
import { RiAddLine, RiSubtractLine } from 'react-icons/ri'

export interface FaqProps {
  question: string
  answer: string
}

const Faq: React.FC<FaqProps> = ({ question, answer }) => {
  const [expanded, setExpanded] = React.useState(false)

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  return (
    <div className="my-4 rounded-2xl  bg-secondary-400 px-10 py-6">
      <div
        className="flex cursor-pointer items-center justify-between"
        onClick={toggleExpanded}
      >
        <h2 className="text-xl text-white md:text-2xl lg:text-3xl">
          {question}
        </h2>
        {expanded && <RiSubtractLine color="white" size={32} />}
        {!expanded && <RiAddLine color="white" size={32} />}
      </div>

      {expanded && (
        <div className="py-4">
          <p className="text-white">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default Faq
