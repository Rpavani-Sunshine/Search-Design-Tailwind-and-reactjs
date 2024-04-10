import React from 'react';
import PayPalLogo from '../Assets/paypal-logo-full.png';

const Footer = () => {
    return (
        <footer className="text-gray-300 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* App Logo */}
                    <div className="mb-4 md:mb-0">
                        <img src={PayPalLogo} alt="App Logo" className="h-12" />
                    </div>

                    {/* Navigation */}
                    <nav className="mt-5 md:mt-0">
                        <ul className="flex flex-wrap">
                            <li className="mr-6 mb-2 md:mb-0">
                                <a href="#" className="text-sky-700 hover:text-black font-medium">Help</a>
                            </li>
                            <li className="mr-6 mb-2 md:mb-0">
                                <a href="#" className="text-sky-700 hover:text-black font-medium">Contact</a>
                            </li>
                            <li className="mr-6 mb-2 md:mb-0">
                                <a href="#" className="text-sky-700 hover:text-black font-medium">Fees</a>
                            </li>
                            <li className="mr-6 mb-2 md:mb-0">
                                <a href="#" className="text-sky-700 hover:text-black font-medium">Security</a>
                            </li>
                            <li className="mr-6 mb-2 md:mb-0">
                                <a href="#" className="text-sky-700 hover:text-black font-medium">Apps</a>
                            </li>
                            <li className="mr-6 mb-2 md:mb-0">
                                <a href="#" className="text-sky-700 hover:text-black font-medium">Shop</a>
                            </li>
                            <li className="mr-6 mb-2 md:mb-0">
                                <a href="#" className="text-sky-700 hover:text-black font-medium">Enterprise</a>
                            </li>
                            <li className="mr-6 mb-2 md:mb-0">
                                <a href="#" className="text-sky-700 hover:text-black font-medium">Partners</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* Horizontal line */}
                <hr className="my-4 border-gray-600" />
                {/* Secondary Navigation */}
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-4 md:mb-0">
                        <a href="#" className="hover:text-black mr-6 text-sky-700 font-medium">About</a>
                        <a href="#" className="hover:text-black mr-6 text-sky-700 font-medium">Newsroom</a>
                        <a href="#" className="hover:text-black mr-6 text-sky-700 font-medium">Jobs</a>
                        <a href="#" className="hover:text-black mr-6 text-sky-700 font-medium">Investors Relations</a>
                        <a href="#" className="hover:text-black mr-6 text-sky-700 font-medium">Values in Actions</a>
                        <a href="#" className="hover:text-black mr-6 text-sky-700 font-medium">Public Policy</a>
                    </div>
                    <div>
                        <a href="#" className="hover:text-black mr-6 text-sky-700 font-medium">Accessibility</a>
                        <a href="#" className="hover:text-black text-sky-700 font-medium">Privacy</a>
                        <a href="#" className="hover:text-black mr-6 text-sky-700 font-medium">Cookies</a>
                        <a href="#" className="hover:text-black mr-6 text-sky-700 font-medium">Legal</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;



// import React from 'react';
// import PayPalLogo from '../Assets/paypal-logo-full.png';

// const Footer = () => {
//     return (
//         <footer className="text-gray-300 py-8">
//             <div className="container mx-auto px-4">
//                 <div className="flex flex-col md:flex-row justify-between items-center">
//                     {/* App Logo */}
//                     <div className="mb-4 md:mb-0">
//                         <img src={PayPalLogo} alt="App Logo" className="h-12" />
//                     </div>
//                 </div>
//                 <div className='mt-5'>
//                     {/* Navigation */}
//                     <nav className="mb-4 md:mb-0">
//                         <ul className="flex flex-wrap">
//                             <li className="mr-6">
//                                 <a href="#" className="text-sky-700 hover:text-black font-medium">Help</a>
//                             </li>
//                             <li className="mr-6">
//                                 <a href="#" className="text-sky-700 hover:text-black font-medium">Contact</a>
//                             </li>
//                             <li className="mr-6">
//                                 <a href="#" className="text-sky-700 hover:text-black font-medium">Fees</a>
//                             </li>
//                             <li className="mr-6">
//                                 <a href="#" className="text-sky-700 hover:text-black font-medium">Security</a>
//                             </li>
//                             <li className="mr-6">
//                                 <a href="#" className="text-sky-700 hover:text-black font-medium">Apps</a>
//                             </li>
//                             <li className="mr-6">
//                                 <a href="#" className="text-sky-700 hover:text-black font-medium">Shop</a>
//                             </li>
//                             <li className="mr-6">
//                                 <a href="#" className="text-sky-700 hover:text-black font-medium">Enterprise</a>
//                             </li>
//                             <li className="mr-6">
//                                 <a href="#" className="text-sky-700 hover:text-black font-medium">Partners</a>
//                             </li>
//                         </ul>
//                     </nav>
//                 </div>
//                 {/* Horizontal line */}
//                 <hr className="my-4 border-gray-600" />
//                 {/* Secondary Navigation */}
//                 <div className="flex justify-between">
//                     <div className="mb-4 md:mb-0">
//                         <a href="#" className="hover:text-black mr-6 text-sky-700 font-medium">About</a>
//                         <a href="#" className="hover:text-black mr-6 text-sky-700 font-medium">Newsroom</a>
//                         <a href="#" className="hover:text-black mr-6 text-sky-700 font-medium">Jobs</a>
//                         <a href="#" className="hover:text-black mr-6 text-sky-700 font-medium">Investors Relations</a>
//                         <a href="#" className="hover:text-black mr-6 text-sky-700 font-medium">Values in Actions</a>
//                         <a href="#" className="hover:text-black mr-6 text-sky-700 font-medium">Public Policy</a>
//                     </div>
//                     <div>
//                         <a href="#" className="hover:text-black mr-6 text-sky-700 font-medium">Accessibility</a>
//                         <a href="#" className="hover:text-black text-sky-700 font-medium">Privacy</a>
//                         <a href="#" className="hover:text-black mr-6 text-sky-700 font-medium">Cookies</a>
//                         <a href="#" className="hover:text-black mr-6 text-sky-700 font-medium">Legal</a>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;
