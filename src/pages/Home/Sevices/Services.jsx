import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([])

    useEffect(()=>{
            fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    },[])
    return (
        <div className="py-8">
            <div className="text-center">
                <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
                <h3 className="text-5xl">Our Services Area</h3>
                <p className="w-1/2 ml-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sunt deleniti non omnis quis nesciunt suscipit repellendus mollitia voluptate eius.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {
                    services.map(service =><ServiceCard
                    key={services._id}
                    service = {service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;