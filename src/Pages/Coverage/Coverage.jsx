import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import { useLoaderData } from "react-router";
import { useRef } from "react";

const Coverage = () => {

    

    const position = [23.8103, 90.4125]
    const Services = useLoaderData();
    // console.log(Services);
    const mapRef = useRef(null)


    const handleSearch =(e) =>{
        e.preventDefault();
        const location = e.target.location.value;
        const district = Services.find(c => c.district.toLowerCase().includes(location.toLowerCase()))

        console.log(district)

        if(district){
            const coord = [district.latitude, district.longitude]
            mapRef.current.flyTo(coord,13)
        }
    }

    return (
        <div>
            <h1 className="text-5xl font-bold m-5 text-center">
                Our WareHouses
            </h1>

            <div className="m-5">
                <h1 className="text-xl font-semibold p-1">Search Now</h1>
                <form onSubmit={handleSearch}>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" className="grow" placeholder="Search" name="location" />
                    </label>
                    <button className="btn bg-black text-white ml-1.5">Search</button>
                </form>
            </div>

            <div className="w-fill h-[600px]">
                <MapContainer className="h-[600px]" center={position} zoom={8} scrollWheelZoom={false} ref={mapRef}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        Services.map(center =>
                            <Marker position={[center.latitude, center.longitude]}>
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker>
                        )
                    }
                </MapContainer>
            </div>
        </div>
    );
};

export default Coverage;