const Background: React.FC = () => {
  return (
    <div className="hidden md:flex">
      <div>
        <div className="absolute top-0 right-0 z-10 h-[254px] w-[410px] rounded-bl-[150px] bg-main " />
        <div className="absolute top-0 right-0 h-[256px] w-[412px] rounded-bl-[150px] bg-gradient-to-br from-lime to-lemon opacity-20 " />
      </div>

      <div>
        <div className="absolute top-[514px] right-0 z-10 h-[1026px] w-[498px] rounded-l-3xl bg-main" />
        <div className="absolute top-[512px] right-0 h-[1028px] w-[500px] rounded-l-3xl bg-gradient-to-r from-primary-400 to-fuscia opacity-20" />
      </div>

      <div>
        <div className="absolute top-[402px] left-0 z-10 h-[418px] w-[418px] rounded-tr-[100%] bg-main"></div>
        <div className="absolute top-[400px] left-0 h-[420px] w-[420px] rounded-tr-[100%] bg-gradient-to-br from-tangerine to-strawberry opacity-20"></div>
      </div>
    </div>
  )
}

export default Background
