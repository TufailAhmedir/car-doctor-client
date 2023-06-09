import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import BookedData from "./BookedData";


const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);


    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url])

    const handleDeleteBookedData = id => {
        const proceed = confirm ('Do you really want to delete');
        if(proceed){
            fetch(`http://localhost:5000/bookings/${id}`, {
                method:'DELETE',

            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert ('Deleted successful');
                    const remaining = bookings.filter ( booking => booking._id !== id);
                    setBookings(remaining);
                }
            })
        }
    }

    const handleBookingConfirm = id =>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method:'PATCH', 
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify({status:'cofirm'})
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount > 0){
                //update state
                const remaining = bookings.filter(booking => booking._id !== id);
                const updated = bookings.find(booking => booking._id === id);
                updated.status = 'confirm';
                const newBookings = [updated, ...remaining];
                setBookings(newBookings);

            }
        })
    }

    return(
        <div>
            <h2 className="text-3xl">Your Bookings: {bookings.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookedData
                            key={booking._id}
                            booking = {booking}
                            handleDeleteBookedData = {handleDeleteBookedData}
                            handleBookingConfirm={handleBookingConfirm}
                            ></BookedData>)
                        }
                    </tbody>

                    
                </table>
            </div>
        </div>
    );
};

export default Bookings;