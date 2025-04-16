import { useState, useEffect } from "react"

type Ride = {
    rideName: string;
    waitTime: number;
}



export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/data/rides.json')
    const rides: Ride[] = await res.json()

    return { props: { rides } }
}

export default function RideTimes({ rides }: { rides: Ride[] }) {
    const [favorites, setFavorites] = useState<string[]>([]);
    const [search, setSearch] = useState("")
    const filteredRides = rides.filter(ride =>
        ride.rideName.toLowerCase().includes(search.toLowerCase())
    )

    // Load from LocalStorage
    useEffect(() => {
        const stored = localStorage.getItem("favoriteRides")
        if (stored) setFavorites(JSON.parse(stored))
    }, [])
    
    // Save to LocalStorage when favorites change
    useEffect(() => {
        localStorage.setItem("favoriteRides", JSON.stringify(favorites))
    }, [favorites])

    function toggleFavorite(rideName: string) {
        setFavorites((prev) =>
        prev.includes(rideName)
            ? prev.filter((r) => r !== rideName)
        : [...prev, rideName]
    )
    }

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">🎢 Ride Wait Times</h1>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search rides..."
                className="border px-4 py-2 mb-4 w-full max-w-md rounded"
            />
            <p className="text-sm mb-2">Favorites: {favorites.length}</p>
            <ul>
                {filteredRides.map((ride, index) => (
                    <li key={index} className="mb-2"><div>
                        <span className="font-medium">{ride.rideName}:</span>{' '}
                        <span>{ride.waitTime} min</span>
                        </div>
                        
                        <button
                        onClick={() => toggleFavorite(ride.rideName)}
                        className={`ml-4 px-2 py-1 rounded ${favorites.includes(ride.rideName)
                            ? "bg-yellow-300"
                            : "bg-gray-200 hover:bg-gray-300"
                        }`}>
                ⭐
                </button>
                    
                    </li>
                ))}

            </ul>
        </div>
    )
}