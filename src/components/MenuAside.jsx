import AddIcon from "./Icons/AddIcon";
import AlbumIcon from "./Icons/AlbumIcon";
import ArtistIcons from "./Icons/ArtistIcons";
import FavoriteIcon from "./Icons/FavoriteIcon";
import GenresIcon from "./Icons/GenresIcon";
import HomeIcon from "./Icons/HomeIcon";
import PlayListIcons from "./Icons/PlayListIcons";
import RecentPlayIcon from "./Icons/RecentPlayIcon";

function MenuAside() {
  return (
    <aside className="[grid-area:aside] text-white hidden xl:block xl:overflow-y-auto bg-slate-950 overflow-y-auto">
      <h1 className="text-3xl font-bold p-4 cursor-pointer">Music App</h1>
      <article className="mt-12 p-2">
        <ul className="flex flex-col h-full">
          <li className="p-4 m-2 hover:text-blue-400 cursor-pointer flex gap-3">
            <HomeIcon />
            Inicio
          </li>
          <li className="p-4 m-2 hover:text-blue-400 cursor-pointer flex gap-3">
            <GenresIcon />
            Géneros
          </li>
          <li className=" p-4 m-2 hover:text-blue-400 cursor-pointer flex gap-3">
            <ArtistIcons />
            Artistas
          </li>
          <li className=" p-4 m-2 hover:text-blue-400 cursor-pointer flex gap-3">
            <AlbumIcon />
            Albums
          </li>
          <li className=" p-4 m-2 hover:text-blue-400 cursor-pointer flex gap-3 mt-14">
            <FavoriteIcon />
            Favoritos
          </li>
          <li className=" p-4 m-2 hover:text-blue-400 cursor-pointer flex gap-3 mb-14">
            <RecentPlayIcon />
            Recientes
          </li>
        </ul>
      </article>
      <article className="p-2">
        <p className="text-gray-400 p-2 m-2 ">
          Playlists
          <span className="float-right text-lg border-2 text-blue-400 border-blue-400 h-6 w-6 flex justify-center items-center cursor-pointer rounded-md">
            <AddIcon />
          </span>
        </p>
        <ul className="flex flex-col h-full ">
          <li className=" p-4 m-2 hover:text-blue-400 cursor-pointer flex gap-3">
            <PlayListIcons />
            Rock & Roll
          </li>
          <li className="p-4 m-2 hover:text-blue-400 cursor-pointer flex gap-3">
            <PlayListIcons />
            Lo mejor de los 90s
          </li>
          <li className="p-4 m-2 hover:text-blue-400 cursor-pointer flex gap-3">
            <PlayListIcons />
            Pop
          </li>
          <li className="p-4 m-2 hover:text-blue-400 cursor-pointer flex gap-3">
            <PlayListIcons />
            Modo ejercicio
          </li>
        </ul>
      </article>
      <footer className="absolute bottom-0 left-8 text-center my-4">
        <p className="px-4 flex flex-col items-center">
          Esta aplicacion usa la API de Spotify
          <a
            className="text-blue-400"
            href="https://developer.spotify.com/documentation/web-api/reference/"
          >
            Spotify Web API
          </a>
        </p>
      </footer>
    </aside>
  );
}

export default MenuAside;
