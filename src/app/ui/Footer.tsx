import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className='bg-green-800 px-8 py-4 flex flex-col justify-center items-center'>
            <p className='text-white'>&copy; {new Date().getFullYear()} Save the Hoomans. All rights reserved.</p>
        </footer>
    );
};

export default Footer;