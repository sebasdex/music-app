function FeaturedAlbum({ albums }) {
  const next = () => {
    const sectionScroll = document.querySelector("#featured-album");
    if (sectionScroll.scrollWidth > sectionScroll.clientWidth) {
      sectionScroll.scrollLeft += sectionScroll.clientWidth;
    }
  };

  const previous = () => {
    const sectionScroll = document.querySelector("#featured-album");
    sectionScroll.scrollLeft -= sectionScroll.clientWidth;
  };

  return (
    <section className="text-white p-4 space-y-3 relative">
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-sparkles w-5 h-5 text-yellow-400"
        >
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1-1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
          <path d="M5 3v4"></path>
          <path d="M19 17v4"></path>
          <path d="M3 5h4"></path>
          <path d="M17 19h4"></path>
        </svg>
        <div>
          <h1 className="text-2xl font-bold">Featured Albums</h1>
          <p className="text-gray-400">New and noteworthy releases</p>
        </div>
      </div>
      {/* Botones ahora están fuera del contenedor con scroll */}
      <button
        className="bg-purple-800/50 rounded-full p-2 text-white absolute top-[50%] 
      left-2 hover:bg-purple-800 z-10"
        onClick={previous}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-left"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <button
        className="bg-purple-800/50 rounded-full p-2 text-white absolute top-[50%] 
      right-2 hover:bg-purple-800 z-10"
        onClick={next}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-right"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
      {/* Contenedor con scroll */}
      <section
        className="grid grid-flow-col gap-4 auto-cols-[minmax(380px,1fr)] overflow-hidden"
        id="featured-album"
      >
        {albums.map((artist) => (
          <article
            className="bg-gray-800 rounded-lg overflow-hidden min-h-96"
            key={artist.id}
          >
            <img
              src={artist.images[0].url}
              alt="artist-cover"
              className="w-full aspect-square object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold">{artist.artists[0].name}</h3>
              <p className="text-sm text-gray-400 capitalize truncate w-44 text-ellipsis">
                {artist.name}
              </p>
              <p className="text-xs text-purple-400 mt-2">
                Released {artist.release_date}
              </p>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
}

export default FeaturedAlbum;
