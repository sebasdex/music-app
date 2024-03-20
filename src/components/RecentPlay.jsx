function RecentPlay({ playList }) {
  return (
    <>
      <p className="text-sm bg-red-900 px-4 py-1 font-semibold w-full">
        Esta app sólo es un demo de reproducción de canciones, usando la API de
        spotify, la interacción con el usuario es limitada para la reproducción
        y navegación.
      </p>
      <div className="flex items-center justify-between p-4 min-w-96 w-full">
        <h1 className="text-3xl font-bold">Recientes</h1>
        <a href="#">Ver más</a>
      </div>
      <section className="p-4 min-w-96 flex gap-4 overflow-x-auto w-full h-full xl:h-2/6">
        {playList.map((item) => (
          <article
            className="flex flex-col items-center justify-center gap-2"
            key={item.id}
          >
            <img
              src={item.images[0].url}
              alt="album-cover"
              className="min-w-52 min-h-52 object-cover"
            />
            <p className="text-nowrap text-ellipsis w-44 overflow-hidden">
              {item.name}
              <span className="block text-sm text-gray-400">
                {item.artists[0].name}
              </span>
            </p>
          </article>
        ))}
      </section>
    </>
  );
}

export default RecentPlay;
