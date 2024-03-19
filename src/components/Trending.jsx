import PauseIcon from "./Icons/PauseIcon";
import PlayListIcons from "./Icons/PlayListIcons";
function Trending({
  time2,
  urlTrack,
  setUrlTrack,
  isPlaying,
  handlePlayPause,
}) {
  return (
    <article className="min-h-96 h-96 xl:w-1/2 xl:min-h-full">
      <h1 className="text-3xl font-bold p-4 bg-slate-900">Trending</h1>
      <p className="px-4">
        La reproducción de las canciones sólo es un demo de 30 segundos.
      </p>
      <div className="flex items-center m-2 flex-col gap-3 overflow-y-auto h-[calc(100%-5rem)] xl:min-h-[calc(100%-5rem)]">
        {time2.map(
          (item) =>
            item.preview_url && (
              <div
                className="flex items-center justify-between gap-3 w-full p-2"
                key={item.id}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.album.images[0].url}
                    alt="album-cover"
                    className="w-24 rounded-lg"
                  />
                  <p className="text-nowrap overflow-hidden text-ellipsis min-w-8 max-w-52">
                    {item.name}
                    <span className="block text-sm text-gray-400 text-nowrap overflow-hidden text-ellipsis min-w-8 max-w-52">
                      {item.artists[0].name}
                    </span>
                  </p>
                </div>
                <p className="flex items-center gap-3 p-2">
                  {item.duration_ms.minutes}:{item.duration_ms.seconds}
                  <span
                    className="text-white cursor-pointer hover:text-blue-400"
                    onClick={() => {
                      setUrlTrack(item.preview_url);
                      handlePlayPause();
                    }}
                  >
                    {urlTrack === item.preview_url && isPlaying ? (
                      <PauseIcon />
                    ) : (
                      <PlayListIcons />
                    )}
                  </span>
                </p>
              </div>
            )
        )}
      </div>
    </article>
  );
}

export default Trending;
