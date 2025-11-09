import { createContext, useContext, useEffect, useState } from "react";


const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [bookings, setBookings] = useState([]);
    const [payments, setPayments] = useState([]);
    const [accommodations, setAccommodations] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const bookingsRes = await fetch("http://localhost:5000/bookings");
                const paymentsRes = await fetch("http://localhost:5000/payments");
                const accommodationsRes = await fetch("http://localhost:5000/accommodations");

                const bookingsData = await bookingsRes.json();
                const paymentsData = await paymentsRes.json();
                const accommodationsData = await accommodationsRes.json();

                setBookings(bookingsData);
                setPayments(paymentsData);
                setAccommodations(accommodationsData);
                
                
            } catch(error) {
                console.error(`failed to fetch Data ${error}`);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
         
    }, [])

    return(
        <DataContext.Provider value={{bookings, payments, accommodations, loading}}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);