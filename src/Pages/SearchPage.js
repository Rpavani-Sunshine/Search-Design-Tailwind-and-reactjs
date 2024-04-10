import React, { useState } from 'react';
import { FaSearch, FaTimes, FaHandshake } from 'react-icons/fa';
import { IoMdPeople } from 'react-icons/io';
import { searchResults } from '../Content';

const SearchPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);

    const Categories = ["Help articles", "Technical support articles", "Business resources", "Developer resources", "PayPal product information", "Community posts"];

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        const filteredResults = searchResults.filter(result =>
            result.title.toLowerCase().includes(query) || result.content.toLowerCase().includes(query)
        );
        setFilteredResults(filteredResults);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        const filterResults = searchResults.filter(result => result.title === category);
        setFilteredResults(filterResults);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredResults.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <h1 className="ml-36 text-xl text-sky-600 mt-4">Help Center</h1>
            <div className="flex flex-col lg:flex-row justify-between px-4 lg:px-32">
                {/* Sidebar */}
                <div className="lg:w-1/4 p-4 lg:ml-24">
                    <div className="border border-gray-300 rounded-lg p-4 lg:mt-28">
                        <h5 className="text-lg font-semibold mb-4">Document Type</h5>
                        {Categories.map((category, index) => (
                            <label className="block mb-2" key={index}>
                                <input
                                    type="radio"
                                    value={category}
                                    checked={selectedCategory === category}
                                    onChange={() => handleCategoryChange(category)}
                                />
                                {category}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div className="lg:w-3/4 p-4 lg:mr-24">
                    <h1 className='text-center text-2xl mb-4 font-semibold'>How can I help?</h1>
                    <div className="relative mb-4">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearch}
                            placeholder="Search by keyword"
                            className="border border-gray-300 rounded-full px-10 py-2 w-full pr-12 focus:outline-none"
                        />
                        {/* Search icon */}
                        <FaSearch className="absolute left-4 top-4 text-gray-400" />
                        {/* Cancel icon */}
                        {searchQuery && (
                            <FaTimes
                                className="absolute right-8 top-4 text-gray-400 cursor-pointer"
                                onClick={() => setSearchQuery('')}
                            />
                        )}
                    </div>
                    {/* Search results count */}
                    <div className="text-right mt-2 text-sm text-gray-500">
                        {filteredResults.length > 0 && `${filteredResults.length} results`}
                    </div>

                    {currentItems.map((item, index) => (
                        <div className='ps-4 lg:ps-10 mb-5' key={index}>
                            {item.content}
                        </div>
                    ))}

                    {/* Pagination */}
                    <div className="flex justify-center mt-4">
                        {[...Array(Math.ceil(filteredResults.length / itemsPerPage)).keys()].map((number) => (
                            <button
                                key={number}
                                className="mx-1 px-3 py-1 bg-gray-200 text-gray-700 hover:bg-gray-300"
                                onClick={() => paginate(number + 1)}
                            >
                                {number + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className='lg:w-3/5 mx-auto mt-5' >
                 <p className='text-xl text-slate-400 text-center'>More ways to get help</p>
                 <div className='flex justify-between p-3'>
                     <div>
                         <div>
                             <IoMdPeople className="mx-auto text-3xl" />
                         </div>
                         <div className='text-center'>
                             <p className='text-xl text-sky-800'>community forum</p>
                             <p>find the answer or join the conversation</p>
                         </div>
                     </div>
                     <div>
                         <div>
                             <FaHandshake className="mx-auto text-3xl" />
                         </div>
                         <div className='text-center'>
                             <p className='text-xl text-sky-800'>Resolution center</p>
                             <p>Resolve transaction or account issues</p>
                         </div>
                     </div>
                     <div>
                         <div className='text-center'>
                             <i className="fa-solid fa-shop text-lg"></i>
                         </div>
                         <div className='text-center'>
                             <p className='text-xl text-sky-800'>Business Resources</p>
                             <p>Get tips on starting or growing your business</p>
                         </div>
                     </div>
                     <div>
                         <div className='text-center'>
                             <i class="fa-solid fa-comment text-lg"></i>
                         </div>
                         <div className='text-center'>
                             <p className='text-xl text-sky-800'>Contact Us</p>
                             <p>Contact Customer Service</p>
                         </div>
                     </div>
                 </div>
             </div>
             <div className='flex justify-between lg:w-2/4 mx-auto mt-5 bg-slate-200 py-5 px-9 '>
                 <div className='lg:w-96'>
                     <h4>How are we doing?</h4>
                     <p>Help Improve the <strong>PayPal Help Center experience</strong> with some quick feedback</p>
                 </div>
                 <div>
                     <button className="text-white bg-blue-800 hover:bg-blue-600 px-4 py-2 mt-3 rounded-full">Take the survey</button>
                 </div>
             </div>
        </>
    );
};

export default SearchPage;
 
// import React, { useState } from 'react';
// import { FaSearch, FaTimes, FaHandshake } from 'react-icons/fa';
// import { IoMdPeople } from 'react-icons/io';
// import { searchResults } from '../Content';


// const SearchPage = () => {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [selectedCategory, setSelectedCategory] = useState('');
//     const [filteredResults, setFilteredResults] = useState('');
//     const [currentPage, setCurrentPage] = useState(1);
//     const [itemsPerPage] = useState(5);

//     const Categories = ["Help articles", "Technical support articles", "Business resources", "Developer resources", "PayPal product information", "Community posts"];

//     const handleSearch = (e) => {
//         const query = e.target.value.toLowerCase();
//         setSearchQuery(query);
//         const filteredResults = searchResults.filter(result =>
//             result.title.toLowerCase().includes(query) || result.content.toLowerCase().includes(query)
//         );
//         setFilteredResults(filteredResults);
//     };


//     const handleCategoryChange = (category) => {
//         setSelectedCategory(category);
//         const filterResults = searchResults.filter(result => result.title === category);
//         setFilteredResults(filterResults);
//         console.log("filteredResults", filteredResults);
//     };


//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);

//     const paginate = (pageNumber) => setCurrentPage(pageNumber);

//     return (
//         <>
//             <h1 className="ms-64 mt-2 text-sky-500">Help center</h1>
//             <div className="flex justify-between px-64">
//                 {/* Sidebar */}
//                 <div className="ms-5 p-4">
//                     <div className="ms-5 p-4" style={{ border: "1px outset gray", marginTop: "40%" }}>
//                         <h5 className="text-lg font-semibold mb-4">Document type</h5>
//                         {Categories.map((category, index) => (
//                             <label className="block mb-2" key={index}>
//                                 <input
//                                     type="radio"
//                                     value={category}
//                                     checked={selectedCategory === category}
//                                     onChange={() => handleCategoryChange(category)}
//                                 />
//                                 {category}
//                             </label>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Main Content */}
//                 <div className="w-3/4 p-4">
//                     <h1 className='text-center text-xl mb-2 font-semibold'>How can i help?</h1>
//                     <div className="relative">
//                         <input
//                             type="text"
//                             value={searchQuery}
//                             onChange={handleSearch}
//                             placeholder="Search by keyword"
//                             className="border border-gray-300 rounded-full px-10 py-2 w-full pr-12 focus:outline-none"
//                         />
//                         {/* Search icon */}
//                         <FaSearch className="absolute left-4 top-4 text-gray-400" />
//                         {/* Cancel icon */}
//                         {searchQuery && (
//                             <FaTimes
//                                 className="absolute right-8 top-4 text-gray-400 cursor-pointer"
//                                 onClick={() => setSearchQuery('')}
//                             />
//                         )}
//                     </div>
//                     {/* Search results count */}
//                     <div className="text-right mt-2 text-sm text-gray-500">
//                         {filteredResults && filteredResults.length > 0 && `${filteredResults.length} results`}
//                     </div>

//                     {currentItems.map((item, index) => (
//                         <div className='ps-10 mb-5' key={index}>
//                             {item.content}
//                         </div>
//                     ))}

//                     {/* Pagination */}
//                     <div className="flex justify-center mt-4">
//                         {[...Array(Math.ceil(searchResults.length / itemsPerPage)).keys()].map((number) => (
//                             <button
//                                 key={number}
//                                 className="mx-1 px-3 py-1 bg-gray-200 text-gray-700 hover:bg-gray-300"
//                                 onClick={() => paginate(number + 1)}
//                             >
//                                 {number + 1}
//                             </button>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//             <div className='w-3/5 mx-auto mt-5' >
//                 <p className='text-xl text-slate-400 text-center'>More ways to get help</p>
//                 <div className='flex justify-between p-3'>
//                     <div>
//                         <div>
//                             <IoMdPeople className="mx-auto text-lg" />
//                         </div>
//                         <div className='text-center'>
//                             <p className='text-xl text-sky-800'>community forum</p>
//                             <p>find the answer or join the conversation</p>
//                         </div>
//                     </div>
//                     <div>
//                         <div>
//                             <FaHandshake className="mx-auto text-lg" />
//                         </div>
//                         <div className='text-center'>
//                             <p className='text-xl text-sky-800'>Resolution center</p>
//                             <p>Resolve transaction or account issues</p>
//                         </div>
//                     </div>
//                     <div>
//                         <div className='text-center'>
//                             <i className="fa-solid fa-shop text-lg"></i>
//                         </div>
//                         <div className='text-center'>
//                             <p className='text-xl text-sky-800'>Business Resources</p>
//                             <p>Get tips on starting or growing your business</p>
//                         </div>
//                     </div>
//                     <div>
//                         <div className='text-center'>
//                             <i class="fa-solid fa-comment text-lg"></i>
//                         </div>
//                         <div className='text-center'>
//                             <p className='text-xl text-sky-800'>Contact Us</p>
//                             <p>Contact Customer Service</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className='flex justify-between w-2/4 mx-auto mt-5 bg-slate-200 py-5 px-9 '>
//                 <div className='w-96'>
//                     <h4>How are we doing?</h4>
//                     <p>Help Improve the <strong>PayPal Help Center experience</strong> with some quick feedback</p>
//                 </div>
//                 <div>
//                     <button className="text-white bg-blue-800 hover:bg-blue-600 px-4 py-2 mt-3 rounded-full">Take the survey</button>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default SearchPage;
