import { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../Providers/AuthProvider";
import { Helmet } from "react-helmet";

const MyBids = () => {
  const [myBids, setMyBids] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchMyBids = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/bids/${user.email}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setMyBids(data);
        } else {
          console.error("Failed to fetch user bids");
        }
      } catch (error) {
        console.error("Error fetching user bids:", error);
        toast.error("Error fetching user bids");
      }
    };
    fetchMyBids();
  }, [user]);
  console.log(myBids);
  const handleComplete = async (bidId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/bid/complete/${bidId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        setMyBids((prevBids) => prevBids.filter((bid) => bid._id !== bidId));
        toast.success("Bid completed successfully!");
      } else {
        console.error("Failed to complete bid");
      }
    } catch (error) {
      console.error("Error completing bid:", error);
      toast.error("An error occurred during bid completion.");
    }
  };

  return (
    <div>
      <Helmet>
        <title>Job-Cloud | My Bids</title>
      </Helmet>
      <h1 className="my-8 text-center font-bold text-3xl text-[#86A789]">
        My Bids
      </h1>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-[#86A789] text-white">
            <th className="py-2 px-4">Job Title</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Deadline</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {myBids.map((bid) => (
            <tr key={bid._id} className="border-b border-gray-300">
              <td className="py-2 px-4">{bid.jobTitle}</td>
              <td className="py-2 px-4">{bid.bidderEmail}</td>
              <td className="py-2 px-4">{bid.deadline}</td>
              <td className="py-2 px-4">pending</td>
              <td className="py-2 px-4">
                {bid.status === "in progress" && (
                  <button
                    onClick={() => handleComplete(bid._id)}
                    className="bg-[#86A789] text-white px-2 py-1 rounded-md"
                  >
                    Complete
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBids;
