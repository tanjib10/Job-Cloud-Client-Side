import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import JobCard from "./JobCard";
import { Helmet } from "react-helmet";

const MyPostedJobs = () => {
  const navigate = useNavigate();
  const [myJobs, setMyJobs] = useState([]);

  useEffect(() => {
    const fetchUserJobs = async () => {
      try {
        const response = await fetch("http://localhost:5000/job/add", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setMyJobs(data);
        } else {
          toast.error("Failed to fetch user jobs");
        }
      } catch (error) {
        console.error("Error fetching user jobs:", error);
        toast.error("Error fetching user jobs");
      }
    };
    fetchUserJobs();
  }, []);

  const handleUpdate = (jobId) => {
    navigate(`/updateJob/${jobId}`);
  };

  const handleDelete = async (jobId) => {
    try {
      const isConfirmed = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (isConfirmed.isConfirmed) {
        const response = await fetch(
          `http://localhost:5000/job/delete/${jobId}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          setMyJobs((prevJobs) => prevJobs.filter((job) => job._id !== jobId));
          toast.success("Job deleted successfully!");
        } else {
          toast.error("Failed to delete job");
        }
      }
    } catch (error) {
      toast.error("An error occurred while deleting the job.");
    }
  };

  return (
    <div>
      <Helmet>
        <title>Job-Cloud | Posted Jobs</title>
      </Helmet>
      <h1 className="my-8 text-center font-bold text-3xl text-[#86A789]">
        My Posted Jobs
      </h1>
      {myJobs.map((job) => (
        <JobCard
          key={job._id}
          job={job}
          onUpdate={() => handleUpdate(job._id)}
          onDelete={() => handleDelete(job._id)}
        />
      ))}
    </div>
  );
};

export default MyPostedJobs;
