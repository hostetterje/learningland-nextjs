import NavBar from "@/components/NavBar"
import ParkInfo from "@/components/ParkInfo"

export default function MagicKingdom() {
    return (
        <>
        <NavBar />
        <ParkInfo 
            name="Magic Kingdom"
            description="Classic Disney magic with castles, rides, and fireworks."
            hours="9:00 AM - 10:00 PM"
        />

        </>
    )
}