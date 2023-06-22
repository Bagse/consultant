import CardImage from "./components/CardImage";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="py-8 px-3 lg:py-10 lg:px-36">
      <Menu />
      <div className="lg:flex lg:items-center lg:py-14  lg:justify-between">
        <div className="py-7 flex flex-col gap-5">
          <h1 className="text-4xl lg:text-5xl">Modern interior</h1>
          <ul className="text-gray-300">
            <li>A full-Service residential &</li>
            <li>commercial interior design and</li>
            <li>staging company offering</li>
            <li>professional organizing &</li>
            <li>eco-services.</li>
          </ul>
          <div className="flex items-center gap-3 hover:text-emerald-500 hover:underline cursor-pointer">
            <h3 >Read more</h3>
            <img src="./img/flecha.png" alt="icono flecha"></img>
          </div>
        </div>
        <CardImage />
      </div>

      <footer className="flex place-content-center text-center relative mt-40 text-gray-300 gap-1 text-md lg:text-sm">
        Created by{" "}
        <a
          href="https://github.com/Bagse"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-emerald-400"
        >
          Bagse
        </a>{" "}
        -{" "}
        <a
          href="https://devchallenges.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-emerald-400"
        >
          devChallenges.io
        </a>
      </footer>
    </div>
  );
}

export default App;
