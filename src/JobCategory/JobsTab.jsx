import { useEffect, useState } from "react";
// eslint-disable-next-line react/prop-types
const JobsTab = ({ category }) => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchJobsFromMongoDB = async () => {
      const response = await fetch(`http://localhost:5000/job/${category}`);
      const data = await response.json();
      console.log(data);
      setJobs(data);
    };

    fetchJobsFromMongoDB();
  }, [category]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ml-4 lg:ml-20">
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
              <div className="card-actions justify-evenly">
                <button className="btn btn-primary">Bid Now</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobsTab;
