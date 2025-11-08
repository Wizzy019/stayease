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
                const bookingsRes = await fetch("/bookings.json");
                const paymentsRes = await fetch("/payments.json");
                const accommodationsRes = await fetch("/accommodations.json");

                const bookingsData = await bookingsRes.json();
                const paymentsData = await paymentsRes.json();
                const accommodationsData = await accommodationsRes.json();

                setBookings(bookingsData.bookings);
                setPayments(paymentsData.payments);
                setAccommodations(accommodationsData.accommodations);
                
                
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