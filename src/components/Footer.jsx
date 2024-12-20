function Footer() {
  return (
    <footer className="py-8 mt-20 border-t border-white/10 text-white text-sm">
      <p className="text-center text-gray-400">
        This site uses the Spotify API. All content, including songs and albums,
        is owned by Spotify and the respective artists.
      </p>
      <section className="flex justify-center gap-8 text-gray-400">
        <p className="flex items-center">
          Made with
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
            className="lucide lucide-heart w-4 h-4 mx-1 text-red-500"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
          </svg>
          by
          <a href="https://github.com/sebasdex" className="ml-1">
            SebastianDC
          </a>
        </p>
      </section>
    </footer>
  );
}

export default Footer;
