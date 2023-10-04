    import React from 'react';
    import { faStar } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Body from './body';
    function Results({ data }) {
    return (
        <div className="max-w-7xl mx-auto mb-9 mt-9">
        <div className="grid grid-cols-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {data &&
            data.data.map((adata, index) => (
                <div
                className="bg-white rounded-lg shadow-md overflow-hidden"
                key={index}
                >
                <div className="relative">
                    <img
    src={adata.photos_sample && adata.photos_sample[0] ? adata.photos_sample[0].photo_url : ""}
    alt={adata.name}
                    className="w-full h-48 object-cover object-center"
                    />
                    <div className="absolute top-0 right-0 p-2 bg-gray-800 text-white text-sm rounded-bl-lg">
                    {adata.business_status === 'OPEN' ? 'Open Now' : 'Closed'}
                    </div>
                </div>
                <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                    {adata.name}
                    </h2>
                    <p className="text-gray-600 mt-2">{adata.type}</p>
                    <div className="mt-3 flex items-center">
                    <FontAwesomeIcon
                        icon={faStar}
                        className="text-yellow-500 w-5 h-5 mr-1"
                    />
                    <p className="text-gray-600">{adata.rating}</p>
                    </div>
                </div>
                </div>
            ))}
        </div>
    
           </div>
    );
    }

    export default Results;
