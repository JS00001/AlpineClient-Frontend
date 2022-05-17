const LoginBackground: React.FC = () => {
  return (
    <div className="animate-shimmer hidden sm:flex">
      <div className="hidden lg:flex">
        <div className="absolute top-[32px] right-0 z-10 h-[518px] w-[718px] rounded-tl-[100%] bg-main"></div>
        <div className="absolute top-[30px] right-0 h-[520px] w-[720px] rounded-tl-[100%] bg-gradient-to-br from-tangerine to-strawberry opacity-20"></div>
      </div>

      <div className=""></div>
    </div>
  )
}

export default LoginBackground
