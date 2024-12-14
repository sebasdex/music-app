import { useState, useEffect } from "react";
import Header from "./components/Header";
import TopArtist from "./components/TopArtist";
import FeaturedAlbum from "./components/FeaturedAlbum";
import Tracks from "./components/Tracks";
import Footer from "./components/Footer";

function App() {
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [tracks, setTracks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const clientId = import.meta.env.VITE_CLIENT_ID_API;
        const clientSecret = import.meta.env.VITE_CLIENT_SECRET_API;
        const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
          method: "POST",
          body: new URLSearchParams({
            grant_type: "client_credentials",
          }),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
          },
        })
        if (!tokenResponse.ok) {
          throw new Error("Error fetching token");
        }
        const { access_token } = await tokenResponse.json();
        const getAlbums = await fetch(
          "https://api.spotify.com/v1/browse/new-releases",
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + access_token,
            },
          }
        );
        if (!getAlbums.ok) {
          throw new Error("Error fetching token");
        }
        const albums = await getAlbums.json();
        setAlbums(albums.albums.items);
        console.log(albums);
        const getArtists = await fetch(
          "https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6",
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + access_token,
            },
          }
        );
        if (!getArtists.ok) {
          throw new Error("Error fetching token");
        }
        const artists = await getArtists.json();
        setArtists(artists.artists);
        console.log(artists.artists);
        const getTracks = await fetch(
          "https://api.spotify.com/v1/tracks?ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B",
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + access_token,
            },
          }
        );
        if (!getTracks.ok) {
          throw new Error("Error fetching token");
        }
        const tracks = await getTracks.json();
        setTracks(tracks.tracks);
        console.log(tracks);
      } catch (error) {
        console.log("Error fetching token:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <main className="space-y-8">
        <Header />
        <FeaturedAlbum albums={albums} />
        <TopArtist artists={artists} />
        <Tracks tracks={tracks} />
      </main>
      <Footer />
    </>
  );
}

export default App;
