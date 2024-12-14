
function Tracks({ tracks }) {
    return (
        <section className="text-white p-4">
            <article className="flex gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up w-5 h-5 mt-2 text-yellow-400"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                <div>
                    <h1 className="text-2xl font-bold">Trending Tracks</h1>
                    <p className="text-gray-400">Trending tracks this month</p>
                </div>
            </article>
            <section className="space-y-2 bg-white/5 rounded-t-lg backdrop-blur-sm mt-4">
                {
                    tracks.map((track, index) => (
                        <article className="flex items-center gap-4 p-4 border-b border-white/10 last:border-0" key={track.id}>
                            <p className="text-2xl font-bold text-gray-500">#{index + 1}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-music2 w-5 h-5 text-white/40"><circle cx="8" cy="18" r="4"></circle><path d="M12 18V2l7 4"></path></svg>
                            <div className="flex-1">
                                <h4 className="text-white font-medium">{track.name}</h4>
                                <p className="text-sm text-white/60">{track.artists[0].name}</p>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up w-4 h-4 text-purple-400"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                                <span className="text-sm text-purple-200">{track.popularity}</span>
                            </div>
                            <p className="text-white/40">
                                {Math.floor(track.duration_ms / 1000 / 60)}:
                                {(Math.floor(track.duration_ms / 1000) % 60).toString().padStart(2, '0')}
                            </p>
                        </article>
                    ))
                }
            </section>
        </section>
    )
}

export default Tracks