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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ml-4 lg:ml-10">
      {jobs.map((job) => (
        <div className="" key={job._id}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobsTab;
