import BannerImage from "../../assets/img/background-image.jpg";

function HomeBanner() {
  return(
    <div className="w-full flex flex-col justify-center items-center">
    <div className="w-full h-[500px] relative">
      <img
        src={BannerImage}
        alt="Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50"></div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-8xl text-white font-black">VISITA CHIAPAS</h1>
        <p className="text-2xl text-white">
          Descubre los mejores lugares y la belleza del estado
        </p>
      </div>
    </div>
  </div>
  )
};

export default HomeBanner;
