import NavBar from "@/components/NavBar"
import ParkInfo from "@/components/ParkInfo"

export default function Epcot() {
    return (
        <>
        <NavBar />
                <ParkInfo 
                    name="EPCOT"
                    description="Welcome to the future of Disney innovation."
                    hours="9:00 AM - 10:00 PM"
                />
        </>
    )
}