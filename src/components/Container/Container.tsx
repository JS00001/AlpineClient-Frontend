export interface ContainerProps {
  children: React.ReactNode
  className?: string
}

const Container: React.FC<ContainerProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <section
      className={'mx-auto px-2 md:container md:px-5 lg:px-20 ' + className}
    >
      {children}
    </section>
  )
}

export default Container
