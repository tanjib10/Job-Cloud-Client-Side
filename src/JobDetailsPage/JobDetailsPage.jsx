// import { useParams, useHistory } from "react-router-dom";
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
    <div className="max-w-5xl mx-auto text-center">
      <h1 className="text-[#86A789] font-bold text-3xl my-12">Job Details</h1>
      <h3 className="text-xl font-bold">{jobDetails.jobTitle}</h3>
      <p className="text-lg font-medium">Deadline: {jobDetails.deadline}</p>
      <p className="font-semibold">Salary Range: {jobDetails.priceRange}</p>
      <p className="mb-16">{jobDetails.shortDescription}</p>
      <h3 className="text-2xl mb-8 font-bold">Place your bid</h3>
      <form onSubmit={handleBidSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <label className="">
            Price:
            <input
              className="input input-bordered w-full max-w-xs"
              type="text"
              value={bidData.price}
              onChange={(e) =>
                setBidData({ ...bidData, price: e.target.value })
              }
            />
          </label>
          <br />
          <label>
            Deadline:
            <input
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              type="text"
              value={bidData.deadline}
              onChange={(e) =>
                setBidData({ ...bidData, deadline: e.target.value })
              }
            />
          </label>
          <br />
          <label>
            Email:
            <input
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              type="text"
              readOnly
              value={user.email}
            />
          </label>
          <br />
          <label>
            Buyer Email:
            <input
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              type="text"
              readOnly
              value={jobDetails.ownerEmail}
            />
          </label>
        </div>
        <br />
        <button
          className="btn"
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
