function CardImage() {
  return (
    <div>
      <img src="./img/photo1.png" alt="imagen habitacion" className="lg:w-[700px] lg:h[500px]" />
      <div className="flex flex-col place-content-center items-end">
        <div className="bg-[#181719] px-4 py-2 lg:py-5 absolute mt-10 lg:mt-0 right-7 lg:right-48 shadow-md shadow-gray-800 w-72 md:w-[410px] md:h-auto md:items-center">
          <div className="flex items-center gap-4">
            <img
              src="./img/photo2.png"
              alt="rostro mujer"
              className="rounded-full w-12 md:w-20"
            />
            <div className="flex flex-col">
              <h4>Aliza Webber</h4>
              <h4 className="text-gray-300 text-sm">Interior designer</h4>
            </div>
          </div>
          <div className="py-3">
            <p>Designed in 2020 by</p>
            <p>Aliza Webber</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardImage;
