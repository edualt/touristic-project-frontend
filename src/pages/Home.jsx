import HomeBanner from "../components/HomeBanner/HomeBanner";
import Card from "../containers/Card/Card";
import NavBar from "../containers/NavBar/NavBar";
import StateSvg from "../assets/svg/stateIcon.svg";

function Home() {
  return (
    <>
      <NavBar />
      <HomeBanner />
      <div className="mx-10 my-5">
        <h1>Visita Chiapas ahora mismo</h1>
        <h3>
          Descubre la magia de Chiapas, un estado de México lleno de aventuras y
          experiencias únicas. Sumérgete en la belleza de su naturaleza
          exuberante, explora antiguas ruinas mayas y descubre la rica cultura
          indígena a través de su arte y festivales tradicionales. Chiapas es un
          destino turístico emocionante y hospitalario que dejará una huella
          imborrable en tu corazón.
        </h3>
        <div className="py-5 flex flex-wrap gap-12 justify-between">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex flex-row justify-between">
          <div className="w-2/3 h-full py-5">
            <h1 className="text-4xl font-bold pb-3">Viaja con nosotros</h1>
            <h3>
              En nuestra empresa ofrecemos tours turísticos personalizados para
              explorar los lugares más icónicos de Chiapas. Contamos con
              conductores experimentados y modernos vehículos para brindarte una
              experiencia turística única y segura. Puedes personalizar tu
              itinerario según tus intereses y necesidades, desde visitar
              lugares históricos hasta explorar la naturaleza y los pueblos
              indígenas. Estamos seguros de que encontrarás el tour turístico
              perfecto para ti.
              
              <br />
              <br />

              Contáctanos hoy mismo para obtener más
              información sobre nuestros tours turísticos personalizados y
              comienza a planificar tu aventura en Chiapas. Descubre la belleza
              de la selva tropical y los antiguos sitios arqueológicos mayas, y
              aprende sobre la rica cultura e historia de Chiapas en una
              experiencia turística inolvidable. Con nuestra empresa, podrás
              explorar Chiapas de una manera cómoda, segura y personalizada.
            </h3>
          </div>
          <div className="w-1/3 h-full justify-center">
            <img
              className="w-full h-full object-cover p-5 m-0"
              src={StateSvg}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
