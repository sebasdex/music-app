function TopPlayList({ topForYou }) {
  return (
    <article className="min-w-96 w-full xl:h-full mt-6 xl:mt-0">
      <header className="p-4 flex flex-col justify-between gap-3">
        <h1 className="text-3xl font-bold">Top listas para ti</h1>
        <a href="#">Ver más</a>
      </header>
      <div
        className="flex overflow-y-auto min-w-96 w-full 
      xl:h-[48rem] xl:flex-wrap
      xl:overflow-y-auto xl:p-4 "
      >
        {topForYou.map((item) => (
          <div className="p-4 xl:w-1/3" key={item.id}>
            <img
              src={item.images[0].url}
              alt="album-cover"
              className="min-w-52 h-[calc(100%-3rem)] xl:h-[calc(100%-4rem)] xl:min-w-full rounded-lg object-cover"
            />
            <p className="py-2 text-nowrap overflow-hidden text-ellipsis min-w-8 max-w-52">
              {item.name}
              <span className="block text-sm text-gray-400 text-nowrap overflow-hidden text-ellipsis min-w-8 max-w-52">
                {item.description}
              </span>
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}

export default TopPlayList;
