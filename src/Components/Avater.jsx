

function Avater( {name} ) {
    
    const initial = name?.charAt(0).toUpperCase();

    
  return (
    <div className="h-15 w-15 flex items-center justify-center bg-blue-400 text-white text-2xl font-bold rounded-full m-2">
      {initial}
    </div>
  )
}

export default Avater
