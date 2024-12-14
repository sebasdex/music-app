
function Header() {
    return (
        <header className="p-4 flex flex-col items-center gap-8 mt-4">
            <article className="flex items-center gap-4">
                <div className="bg-purple-500/20 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-music w-8 h-8 text-purple-400"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
                </div>
                <div>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">Music Explorer</h1>
                    <p className="text-sm text-gray-400">
                        Discover your next favorite track
                    </p>
                </div>
            </article>
            {/* <article className="relative w-full max-w-xl">
                <div className="text-white text-opacity-50 rounded-full p-2 absolute top-0 left-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
                <input type="text"
                    className="w-full px-4 py-2 pl-10 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-gray-100"
                    placeholder="Search for artists, albums, or genres..." />
            </article> */}
        </header>
    )
}

export default Header