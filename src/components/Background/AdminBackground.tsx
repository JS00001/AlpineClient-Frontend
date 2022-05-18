const AdminBackground: React.FC = () => {
  return (
    <div className="animate-shimmer hidden sm:flex">
      <div>
        <div className="absolute top-0 right-0 z-10 h-[254px] w-[510px] rounded-bl-[150px] bg-main " />
        <div className="absolute top-0 right-0 h-[256px] w-[512px] rounded-bl-[150px] bg-gradient-to-br from-lime to-lemon opacity-20 " />
      </div>

      <div>
        <div className="absolute bottom-0 right-0 z-10 h-[398px] w-[648px] rounded-tl-[75px] bg-main" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[650px] rounded-tl-[75px]  bg-gradient-to-r from-primary-400 to-fuscia opacity-20" />
      </div>
    </div>
  )
}

export default AdminBackground
