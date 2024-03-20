import Footer from "./components/Footer";
import MenuAside from "./components/MenuAside";
import RecentPlay from "./components/RecentPlay";
import TopPlayList from "./components/TopPlayList";
import Trending from "./components/Trending";
import { useState, useEffect } from "react";

function App() {
  const [playList, setPlaylist] = useState([]);
  const [trending, setTrending] = useState([]);
  const [topForYou, setTopForYou] = useState([]);
  const [urlTrack, setUrlTrack] = useState([]);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    const getToken = async () => {
      try {
        const client_id = "a7ca6c3fe192433db936ede171f39e33";
        const client_secret = "a63f52a6685b43fa902dcb276c69a615";

        const response = await fetch("https://accounts.spotify.com/api/token", {
          method: "POST",
          body: new URLSearchParams({
            grant_type: "client_credentials",
          }),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: "Basic " + btoa(client_id + ":" + client_secret),
          },
        });
        return await response.json();
      } catch (error) {
        console.error("Error fetching token:", error);
      }
    };
    const getPlaylist = async (access_token) => {
      try {
        const response = await fetch(
          "https://api.spotify.com/v1/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA",
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + access_token,
            },
          }
        );
        const response2 = await fetch(
          "https://api.spotify.com/v1/browse/new-releases",
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + access_token,
            },
          }
        );

        const response3 = await fetch(
          "https://api.spotify.com/v1/browse/featured-playlists",
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + access_token,
            },
          }
        );
        return {
          playL: await response.json(),
          trend: await response2.json(),
          forYou: await response3.json(),
        };
      } catch (error) {
        console.log(error);
      }
    };

    const fetchData = async () => {
      try {
        const { access_token } = await getToken();
        const data = await getPlaylist(access_token);
        setTrending(data.playL.tracks);
        setPlaylist(data.trend.albums.items);
        setTopForYou(data.forYou.playlists.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const time2 = trending.map((item) => {
    return {
      ...item,
      duration_ms: {
        minutes: Math.floor(item.duration_ms / 1000 / 60),
        seconds: Math.floor((item.duration_ms / 1000) % 60)
          .toString()
          .padStart(2, "0"),
      },
    };
  });

  const handlePlayPause = async () => {
    if (!currentAudio) return;
    if (isPlaying) {
      currentAudio.pause();
    } else {
      currentAudio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <MenuAside />
      <main className="[grid-area:main] min-w-96 p-2 flex flex-col items-center justify-center w-full xl:justify-start">
        <RecentPlay playList={playList} />
        <section className="min-w-96 flex gap-2 flex-col xl:flex-row w-full xl:h-full">
          <Trending
            time2={time2}
            urlTrack={urlTrack}
            setUrlTrack={setUrlTrack}
            isPlaying={isPlaying}
            handlePlayPause={handlePlayPause}
          />
          <TopPlayList topForYou={topForYou} />
        </section>
      </main>
      <Footer
        urlTrack={urlTrack}
        setUrlTrack={setUrlTrack}
        currentAudio={currentAudio}
        setCurrentAudio={setCurrentAudio}
        time2={time2}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        handlePlayPause={handlePlayPause}
      />
    </>
  );
}

export default App;
