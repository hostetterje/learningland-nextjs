import { useState } from "react"

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
    const [search, setSearch] = useState("")
    const filteredRides = rides.filter(ride =>
        ride.rideName.toLowerCase().includes(search.toLocaleLowerCase())
    )
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
            <ul>
                {filteredRides.map((ride, index) => (
                    <li key={index} className="mb-2">
                        <span className="font-medium">{ride.rideName}:</span>{' '}
                        <span>{ride.waitTime} min</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}