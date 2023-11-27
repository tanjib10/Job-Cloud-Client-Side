/* eslint-disable react/prop-types */
const JobCard = ({ job, onUpdate, onDelete }) => {
  const { _id, jobTitle, deadline, description, category, minPrice, maxPrice } =
    job;

  return (
    <div className=" bg-white mx-auto p-6 rounded-md shadow-md mb-4 lg:w-1/2 md:w-full">
      <h3 className="text-xl font-bold mb-2 text-blue-600">{jobTitle}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-gray-700">Category: {category}</p>
        </div>
        <div>
          <p className="text-gray-700">Deadline: {deadline}</p>
        </div>
      </div>
      <p className="text-gray-700">
        Price Range: ${minPrice} - ${maxPrice}
      </p>

      <div className="mt-6 flex space-x-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
          onClick={() => onUpdate(_id)}
        >
          Update
        </button>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300 transition duration-300"
          onClick={() => onDelete(_id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default JobCard;
