import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
const UpdateJobForm = () => {
  const { jobId } = useParams();
  console.log(jobId);
  const navigate = useNavigate();
  const [jobData, setJobData] = useState({
    jobTitle: "",
    deadline: "",
    description: "",
    category: "",
    minPrice: "",
    maxPrice: "",
  });
  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/job/new/details/${jobId}`
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setJobData(data);
        } else {
          console.error("Failed to fetch job details");
        }
      } catch (error) {
        console.error("Error fetching job details:", error);
        toast.error("Error fetching job details");
        navigate("/myPostedJobs");
      }
    };
    fetchJobData();
  }, [jobId, navigate]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/job/update/${jobId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(jobData),
        }
      );
      if (response.ok) {
        toast.success("Job updated successfully!");
        navigate("/myPostedJobs");
      } else {
        throw new Error("Failed to update job");
      }
    } catch (error) {
      console.error("Error updating job:", error);
      toast.error("An error occurred during job update.");
    }
  };
  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Helmet>
        <title>Job-Cloud | Update Job</title>
      </Helmet>
      <h1 className="my-8 text-center font-bold text-3xl text-[#86A789]">
        Update Job
      </h1>
      <form
        onSubmit={handleUpdate}
        className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md"
      >
        <div className="mb-4">
          <label className="block text-gray-700">Job Title:</label>
          <input
            className="input input-bordered w-full p-2 border rounded-md"
            type="text"
            name="jobTitle"
            value={jobData?.jobTitle}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Deadline:</label>
          <input
            className="input input-bordered w-full p-2 border rounded-md"
            type="text"
            name="deadline"
            value={jobData?.deadline}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description:</label>
          <textarea
            className="input input-bordered w-full p-2 border rounded-md"
            rows="4"
            name="description"
            value={jobData?.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Category:</label>
          <select
            className="input input-bordered w-full p-2 border rounded-md"
            name="category"
            value={jobData?.category}
            onChange={handleChange}
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
            className="input input-bordered w-full p-2 border rounded-md"
            type="text"
            name="minPrice"
            value={jobData?.minPrice}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Maximum Price:</label>
          <input
            className="input input-bordered w-full p-2 border rounded-md"
            type="text"
            name="maxPrice"
            value={jobData?.maxPrice}
            onChange={handleChange}
          />
        </div>
        <button
          className="btn mt-4 w-full bg-[#86A789] text-white p-2 rounded-md"
          type="submit"
        >
          Update Job
        </button>
      </form>
    </div>
  );
};

export default UpdateJobForm;
