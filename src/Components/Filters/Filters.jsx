import FilterGroup from "./FilterGroup";

function Filters() {


  const filterData = [
    {
      title: "Type",
      options: [
        { label: "Apartment", checked: false },
        { label: "Hotel", checked: false },
      ],
    },
    {
      title: "Price",
      options: [
        { label: "Budget", checked: false },
        { label: "Midrange", checked: false },
        { label: "Luxury", checked: false },
      ],
    },
    {
      title: "Rating",
      options: [
        { label: "High rated", checked: false },
        { label: "Average", checked: false },
        { label: "Low", checked: false },
      ],
    },
    {
      title: "Availability",
      options: [
        { label: "Available", checked: false },
        { label: "Booked", checked: false },
      ],
    },
  ];

  return (
    <div className="w-full bg-white grid grid-cols-2 md:grid-cols-4 p-4 rounded shadow-md font-sans">
      {filterData.map((group, i) => (
        <FilterGroup key={i} title={group.title} options={group.options} />
      ))}
    </div>
  );
}

export default Filters