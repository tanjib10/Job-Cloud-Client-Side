import { AuthContext } from "../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  console.log(user);

  const fetchJobDetailsById = async (jobId) => {
    const response = await fetch(`http://localhost:5000/job/details/${jobId}`);
    const data = await response.json();
    return data;
  };

  const [jobDetails, setJobDetails] = useState({});
  const [bidData, setBidData] = useState({
    price: "",
    deadline: "",
  });

  const handleBidSubmit = async () => {
    const response = await fetch(`http://localhost:5000/bid/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...bidData,
        bidderEmail: user.email,
      }),
    });

    // eslint-disable-next-line no-unused-vars
    const result = await response.json();
    toast("Bid placed successfully!");
    navigate.push("/my-bids");
  };

  useEffect(() => {
    const getJobDetails = async () => {
      const data = await fetchJobDetailsById(id);
      setJobDetails(data);
    };

    getJobDetails();
  }, [id]);

  return (
    <div className="max-w-5xl mx-auto my-8 text-center">
      <div className="text-[#86A789]">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl my-6 md:my-8 lg:my-12">
          Job Details
        </h1>
        <div className="mb-6 md:mb-8 lg:mb-12">
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold">
            {jobDetails.jobTitle}
          </h3>
          <p className="text-base md:text-lg lg:text-xl font-medium">
            Deadline: {jobDetails.deadline}
          </p>
          <p className="text-base md:text-lg lg:text-xl font-semibold">
            Salary Range: {jobDetails.priceRange}
          </p>
          <p className="text-sm md:text-base lg:text-lg mt-2">
            {jobDetails.shortDescription}
          </p>
        </div>
        <div className="mb-6 md:mb-8 lg:mb-12">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold">
            Place your bid
          </h2>
        </div>
      </div>

      <form
        onSubmit={handleBidSubmit}
        className="max-w-md mx-auto md:max-w-lg lg:max-w-2xl bg-white p-6 rounded-md shadow-md"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700">Price:</label>
            <input
              className="input input-bordered w-full max-w-xs"
              type="text"
              value={bidData.price}
              onChange={(e) =>
                setBidData({ ...bidData, price: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Deadline:</label>
            <input
              className="input input-bordered w-full max-w-xs"
              type="text"
              value={bidData.deadline}
              onChange={(e) =>
                setBidData({ ...bidData, deadline: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Your Email:</label>
            <input
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              type="text"
              readOnly
              value={user.email}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Buyer Email:</label>
            <input
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              type="text"
              readOnly
              value={jobDetails.ownerEmail}
            />
          </div>
        </div>
        <button
          className="btn mt-4 w-full"
          type="submit"
          disabled={user.email === jobDetails.ownerEmail}
        >
          Bid on the project
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default JobDetails;
