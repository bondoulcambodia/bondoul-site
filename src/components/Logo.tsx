function Logo() {
  return (
    <>
      <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-md rounded-full shadow-md px-4 py-2 flex flex-row items-center gap-3 whitespace-nowrap">
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="flex flex-row items-center gap-2"
        >
          <img
            src="./src/assets/circle-blue.png"
            alt="Bondoul Logo"
            className="h-7 sm:h-10 w-auto"
          />
          <span className="font-bold text-base sm:text-lg tracking-tight text-gray-900">
            Bondoul
          </span>
        </a>
      </div>
    </>
  );
}

export default Logo;
