import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-toastify";

const AddJob = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const email = user.email;
  const [jobData, setJobData] = useState({
    jobTitle: "",
    deadline: "",
    description: "",
    category: "",
    minPrice: "",
    maxPrice: "",
  });
  const handleAddJob = async (e) => {
    e.preventDefault();
    console.log("form submitted");

    try {
      if (user && email) {
        const response = await fetch("http://localhost:5000/job/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...jobData,
            ownerEmail: user.email,
          }),
        });
        //   const responseData = await response.json();
        if (!response.ok) {
          toast.success("Job added successfully!");
          navigate("/myPostedJobs");
        } else {
          console.error("error", response);
          toast.error("Job addition failed");
        }
      } else {
        console.error("error");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during job addition.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto my-8 text-center">
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl my-6 md:my-8 lg:my-12">
        Add Job
      </h1>

      <form
        onSubmit={handleAddJob}
        className="max-w-md mx-auto md:max-w-lg lg:max-w-2xl bg-white p-6 rounded-md shadow-md"
      >
        <div className="mb-4">
          <label className="block text-gray-700">Email of the Employer:</label>
          <input
            className="input input-bordered w-full max-w-xs"
            type="text"
            readOnly
            value={user?.email}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Job Title:</label>
          <input
            className="input input-bordered w-full max-w-xs"
            type="text"
            value={jobData.jobTitle}
            onChange={(e) =>
              setJobData({ ...jobData, jobTitle: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Deadline:</label>
          <input
            className="input input-bordered w-full max-w-xs"
            type="text"
            value={jobData.deadline}
            onChange={(e) =>
              setJobData({ ...jobData, deadline: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description:</label>
          <textarea
            className="input input-bordered w-full"
            rows="4"
            value={jobData.description}
            onChange={(e) =>
              setJobData({ ...jobData, description: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Category:</label>
          <select
            className="input input-bordered w-full max-w-xs"
            value={jobData.category}
            onChange={(e) =>
              setJobData({ ...jobData, category: e.target.value })
            }
          >
            <option value="">Select Category</option>
            <option value="web">Web Development</option>
            <option value="design">Graphics Design</option>
            <option value="marketing">Digital Marketing</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Minimum Price:</label>
          <input
            className="input input-bordered w-full max-w-xs"
            type="text"
            value={jobData.minPrice}
            onChange={(e) =>
              setJobData({ ...jobData, minPrice: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Maximum Price:</label>
          <input
            className="input input-bordered w-full max-w-xs"
            type="text"
            value={jobData.maxPrice}
            onChange={(e) =>
              setJobData({ ...jobData, maxPrice: e.target.value })
            }
          />
        </div>
        <button className="btn mt-4 w-full" type="submit">
          Add Job
        </button>
      </form>
    </div>
  );
};

export default AddJob;
