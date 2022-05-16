import type { IconType } from 'react-icons'

export interface FeatureProps {
  icon: IconType
  description: string
}

const Feature: React.FC<FeatureProps> = ({ icon, description }) => {
  const Icon = icon

  return (
    <div className="rounded-xl bg-secondary-400 px-7 pt-20 pb-7">
      <Icon className="text-primary-400" size={40} />
      <h1 className="mt-10 text-5xl font-medium text-white">{description}</h1>
    </div>
  )
}

export default Feature
