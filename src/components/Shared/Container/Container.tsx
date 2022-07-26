export type ContainerComponent = React.FC<
  React.HTMLAttributes<HTMLDivElement>
> & {
  Title: React.FC
  Description: React.FC
  Content: React.FC
  className?: string
}

const Container: ContainerComponent = ({ className = '', children }) => {
  return (
    <section
      className={'mx-auto px-2 md:container md:px-5 lg:px-20 ' + className}
    >
      {children}
    </section>
  )
}

const Title: React.FC = ({ children }) => {
  return (
    <h2 className="text-center text-2xl uppercase text-primary-400">
      {children}
    </h2>
  )
}

const Description: React.FC = ({ children }) => {
  return (
    <h1 className="mt-10 text-center text-4xl font-semibold text-white sm:text-5xl md:text-6xl xl:w-3/4">
      {children}
    </h1>
  )
}

const Content: React.FC = ({ children }) => {
  return <div className="mt-20 w-full">{children}</div>
}

Container.Title = Title
Container.Description = Description
Container.Content = Content

export default Container
