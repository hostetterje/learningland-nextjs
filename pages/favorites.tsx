import { useEffect, useState } from "react";

type Ride = {
    rideName: string;
    waitTime: number
}

export default function FavoritesPage() {
    const [rides, setRides] = useState<Ride[]>([])
    const [favorites, setFavorites] = useState<string[]>([])

  useEffect(() => {
    // Load ride data
    fetch("/data/rides.json")
      .then((res) => res.json())
      .then(setRides);

      // Load favorites from LocalStorage
      const stored = localStorage.getItem("favoriteRides")
      if (stored) setFavorites(JSON.parse(stored))
    }, [])

    const filtered = rides.filter((ride) =>
    favorites.includes(ride.rideName)
)

return (
    <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">⭐ Your Favorite Rides</h1>
        {filtered.length === 0 ? (
            <p>No favorites saved yet.</p>
        ) : (
            <ul>
                {filtered.map((ride, index) => (
                    <li key={index} className="mb-2">
                        <strong>{ride.rideName}</strong>: {ride.waitTime} min
                    </li>
                ))}
            </ul>
        )}
    </div>
)
}