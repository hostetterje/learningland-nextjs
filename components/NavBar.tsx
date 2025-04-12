import Link from 'next/link';

export default function NavBar() {
    return (
        <nav>
            <Link href="/" className='text-blue-600 hover:underline'>🏠 Home</Link>
            <Link href="/magic-kingdom" className='text-blue-600 hover:underline'>🏰 Magic Kingdom</Link>
            <Link href="/epcot" className='text-blue-600 hover:underline'>🌐 EPCOT</Link>
        </nav>
    )
}