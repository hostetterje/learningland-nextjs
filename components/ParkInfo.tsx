type ParkInfoProps = {
    name: string;
    description: string;
    hours: string;
}

export default function ParkInfo({ name, description, hours }: ParkInfoProps) {
    return (
        <div className="bg-yellow-100 p-6 rounded-lg shadow-md max-w-xl mx-auto mt-6">
            <h2 className="text-2xl font-bold mb-2">{name}</h2>
            <p className="mb-2">{description}</p>
            <p className="text-sm text-gray-700">Hours: {hours}</p>
        </div>
    )
}