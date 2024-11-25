import Link from 'next/link';

const NavBar = () => {
    return (
        <nav className='flex items-center justify-between px-8 py-4 text-lg'>
            <h3 className='text-xl font-bold'>Save Hoomans</h3>
            <ul className='flex gap-6'>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/ngo-list">
                        NGOs
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
            <button className='bg-green-400 text-white px-4 py-2 rounded-lg hover:bg-green-500 text-lg font-semibold'>Find Nearby NGOs</button>
        </nav>
    );
};

export default NavBar;