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
    <div>
      {jobs.map((job) => (
        <div key={job._id}>
          <h3>{job.title}</h3>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  );
};

export default JobsTab;
