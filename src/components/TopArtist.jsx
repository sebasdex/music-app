
function TopArtist({ artists }) {
    return (
        <section className="text-white p-4 space-y-3">
            <article className="flex gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-crown w-5 h-5 mt-2 text-yellow-400"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"></path></svg>
                <div>
                    <h1 className="text-2xl font-bold">Top Artists</h1>
                    <p className="text-gray-400">Trending artists this month</p>
                </div>
            </article>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {artists.map((artist) => (
                    <article className="bg-gray-800 rounded-lg p-4 flex items-center space-x-4" key={artist.id}>
                        <img src={artist.images[0].url} alt="artist-cover" className="w-16 h-16 rounded-full object-cover" />
                        <div className="flex flex-col items-start justify-between gap-2 ml-4">
                            <p className="text-sm capitalize truncate w-44 text-ellipsis">{artist.name}</p>
                            <p className="text-sm text-gray-400">{(artist.followers.total).toLocaleString()} followers</p>
                        </div>
                    </article>
                ))}
            </section>
        </section>
    )
}

export default TopArtist