import InViewAnimator from "../../../components/InViewAnimator";
import { useAuth } from "../../../Context/AuthContext";
import { useData } from "../../../Context/DataContext";

function UserPayment() {

  const { user } = useAuth();

   const { payments } = useData();
   
   const userPayments = payments.filter(p => p.userId === user.id); // for now
    
    const sortedPayments = userPayments.sort((a, b) => 
      new Date(b.date) - new Date(a.date));

    const paymentColors = {
      paid: "md:bg-green-100 text-green-700",
      pending: "md:bg-yellow-100 text-yellow-700",
      refunded: "md:bg-red-100 text-red-700",
    }

    const thisMonthTotal = userPayments.filter(p => new Date(p.date).getMonth() === new Date().getMonth())
    .reduce((sum, p) => sum + p.amount, 0)

  return (
   <>
    <h1 className='text-pretty font-bold text-2xl p-2'>Payments</h1>
    <InViewAnimator>
    <div className='flex flex-col text-pretty'>
      <div className='p-2 bg-blue-200 mx-5 my-3 rounded md:w-max md:px-8'>
        <p className='text-2xl font-bold'>₦{thisMonthTotal.toLocaleString()}</p>
        <p>Total spent this month</p>
      </div>
        <div className='md:hidden'>
        {sortedPayments.map((p) => {
        const readableDate = new Date(p.date).toDateString()
        const key = p.id;
        return(
          <div key={key} className='p-2 bg-blue-200 mx-5 my-3 rounded'>
            <p>{p.reference}</p>
            <p>{readableDate}</p>
            <p className='font-semibold text-2xl '>₦{p.amount.toLocaleString()}</p>
            <p className={`${paymentColors[p.status]}`}>{p.status}</p>
            <p>{p.paymentMethod}</p>
          </div>
        )
      })}
    </div>
    <div className='hidden md:block'>
      <table className='w-full bg-white rounded border-2 shadow overflow-hidden'>
        <thead className='bg-gray-50 font-semibold'>
        <tr className='text-start'>
        <th className='p-2'>Date</th>
        <th className='p-2'>Refrence</th>
        <th className='p-2'>Amount</th>
        <th className='p-2'>Status</th>
        <th className='p-2'>Method</th>
        </tr>
        </thead>
        <tbody>
          {sortedPayments.map((p) => {
            const readableDate = new Date(p.date).toDateString()
            const key = p.id;
            return(
              <tr key={key} className='border-b text-center'>
                <td className='p-2'>{readableDate}</td>
                <td className='p-2'>{p.reference}</td>
                <td className='p-2'>₦{p.amount.toLocaleString()}</td>
                <td className={`p-2 px-2 py-1 text-xs rounded ${paymentColors[p.status]}`}>{p.status}</td>
                <td className='p-2'>{p.paymentMethod}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
    </div> 
    </InViewAnimator>
   </>
  )
}

export default UserPayment
