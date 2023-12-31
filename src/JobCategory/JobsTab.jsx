import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const JobsTab = ({ category }) => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchJobsFromMongoDB = async () => {
      const response = await fetch(
        `https://job-cloud-server.vercel.app/job/${category}`
      );
      const data = await response.json();
      console.log(data);
      setJobs(data);
    };

    fetchJobsFromMongoDB();
  }, [category]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 ml-4 md:ml-52 lg:ml-20">
      {jobs.map((job) => (
        <div className="" key={job._id}>
          <div className="card w-96 h-80 border-b-2">
            <div className="card-body">
              <h2 className="card-title text-center text-[#86A789]">
                {job.jobTitle}
              </h2>
              <p className="text-center">Deadline: {job.deadline}</p>
              <p className="text-center">Salary: {job.priceRange}</p>
              <p className="text-ellipsis text-sm">{job.shortDescription}</p>
              <Link to={`/job/details/${job._id}`}>
                <button className="btn text-white bg-[#B2C8BA]">Bid Now</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobsTab;
