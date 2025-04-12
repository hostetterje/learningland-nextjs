import { useState } from "react";
import NavBar from "@/components/NavBar"
import ParkInfo from "@/components/ParkInfo";

type ParkName = 'Magic Kingdom' | 'EPCOT' | 'Animal Kingdom'

export default function Home() {
  const [selectedPark, setSelectedPark] = useState<ParkName>('Magic Kingdom');

  const parks = {
    'Magic Kingdom': {
      description: 'Classic Disney magic with castles and fireworks.',
      hours: '9:00 AM - 10:00 PM',
    },
    EPCOT: {
      description: 'Explore the future and international culture.',
      hours: '9:00 AM - 9:00 PM',
    },
    'Animal Kingdom': {
      description: 'A wild adventure through nature and animals.',
      hours: '8:00 AM - 8:00 PM',
    },
  }

  return (
    <>
    <NavBar />
    <div className="flex justify-center gap-4 mt-4">
      {(Object.keys(parks) as ParkName[]).map((park) => (
        <button
          key={park}
          onClick={() => setSelectedPark(park)}
          className={`px-4 py-2 rounded ${
            selectedPark === park ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          >
            {park}
          </button>
                ))}
          </div>
          <ParkInfo 
            name={selectedPark}
            description={parks[selectedPark].description}
            hours={parks[selectedPark].hours}
          />
    </>
  );
}
