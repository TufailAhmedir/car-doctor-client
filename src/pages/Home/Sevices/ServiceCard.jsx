import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
    const { title, img, price,_id } = service;
    return (
        <div className="card w-100 bg-base-100 shadow-xl">
            <figure className="px-6 pt-6">
                <img src={img} alt="Shoes" className="rounded-xl h-[200px]" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-xl text-orange-500">${price}</p>
                <div className="card-actions">
                    <Link to={`/book/${_id}`}>
                        <button className="btn btn-primary">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;