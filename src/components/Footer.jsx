import PlayIcons from "../components/Icons/PlayIcons";
import VolumeOn from "../components/Icons/VolumeOn";
import HomeIcon from "./Icons/HomeIcon";
import LibraryIcons from "./Icons/LibraryIcons";
import SearchIcon from "./Icons/SearchIcon";
import UserIcon from "./Icons/UserIcon";
import PauseIcon from "./Icons/PauseIcon";
import { useEffect, useState } from "react";
import RecentPlayIcon from "./Icons/RecentPlayIcon";
function Footer({ urlTrack, currentAudio, setCurrentAudio, time2 }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [dataSong, setDataSong] = useState({});
  const [trackDuration, setTrackDuration] = useState(0);

  if (dataSong) {
    if (currentAudio) {
      currentAudio.addEventListener("timeupdate", () => {
        setTrackDuration(currentAudio.currentTime);
      });
    }
  }

  useEffect(() => {
    if (urlTrack) {
      if (currentAudio) {
        currentAudio.pause();
      }
      const audio = new Audio(urlTrack);
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          setCurrentAudio(audio);
        })
        .catch((e) => console.error("Error playing the track:", e));
      audio.volume = 0.1;
      audio.addEventListener("ended", () => setIsPlaying(false));
      return () => {
        audio.pause();
        setIsPlaying(false);
      };
    }
  }, [urlTrack]);

  useEffect(() => {
    if (urlTrack) {
      const currentDataSong = time2.find(
        (item) => item.preview_url === urlTrack
      );
      setDataSong(currentDataSong);
    }
  }, [urlTrack]);

  const handleClick = async () => {
    if (!currentAudio) return;
    if (isPlaying) {
      currentAudio.pause();
    } else {
      currentAudio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <footer className="[grid-area:footer] min-w-96 sticky bottom-0 bg-slate-700 flex flex-col">
      <section className="flex flex-col items-center justify-between xl:p-4">
        <article className="flex items-center justify-between w-full min-w-96 h-full p-2 gap-1 ">
          <div className="min-w-36 md:w-1/4 flex items-center gap-2">
            {dataSong?.album?.images?.[0]?.url ? (
              <img
                src={dataSong?.album?.images[0].url}
                alt="album-cover"
                className="w-10 h-10 object-cover"
              />
            ) : (
              <RecentPlayIcon />
            )}
            <p className="text-nowrap overflow-hidden text-ellipsis min-w-8 max-w-52">
              {dataSong?.name}
              <span className="block text-sm text-gray-400">
                {dataSong?.artists?.[0]?.name || "No artist"}
              </span>
            </p>
          </div>
          <div className="min-w-24 w-full flex flex-col items-center justify-center gap-2">
            <button onClick={handleClick}>
              {isPlaying ? <PauseIcon /> : <PlayIcons />}
            </button>
            <div className="flex items-center justify-between w-[calc(100%-2rem)] gap-1 text-xs">
              <span>{formatTime(trackDuration)}</span>
              <input
                type="range"
                name="range"
                id="range"
                className="w-full h-1 md:block hidden cursor-pointer"
                min="0"
                max={Math.round(currentAudio?.duration) || 100}
                value={trackDuration || 0}
                onChange={(e) => {
                  setTrackDuration(
                    (currentAudio.currentTime = Number(e.target.value))
                  );
                }}
              />
              <span>{formatTime(currentAudio?.duration)}</span>
            </div>
          </div>
          <div className="w-1/5 min-w-24 md:flex items-center justify-center gap-1 hidden">
            <VolumeOn />
            <input
              type="range"
              name="range"
              id="range"
              className="min-w-11 w-full h-1"
              min="0"
              max="100"
              defaultValue={70}
            />
          </div>
        </article>
        <ul className="flex gap-3 w-full p-4 justify-around items-center xl:hidden">
          <li>
            <HomeIcon />
          </li>
          <li>
            <SearchIcon />
          </li>
          <li>
            <LibraryIcons />
          </li>
          <li>
            <UserIcon />
          </li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
