import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const BidRequests = () => {
  const [bidRequests, setBidRequests] = useState([]);

  useEffect(() => {
    const fetchBidRequests = async () => {
      try {
        // Make a GET request to fetch bid requests for the logged-in job owner
        const response = await fetch("http://localhost:5000/bid-requests", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // Include any authentication headers if needed
          },
        });

        if (response.ok) {
          const data = await response.json();
          setBidRequests(data);
        } else {
          console.error("Failed to fetch bid requests");
        }
      } catch (error) {
        console.error("Error fetching bid requests:", error);
        toast.error("Error fetching bid requests");
      }
    };

    fetchBidRequests();
  }, []);

  const handleAccept = async (bidId) => {
    try {
      // Make a PUT request to the server to accept the bid
      const response = await fetch(
        `http://localhost:5000/bid-requests/accept/${bidId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        setBidRequests((prevRequests) =>
          prevRequests.map((bid) =>
            bid._id === bidId ? { ...bid, status: "in progress" } : bid
          )
        );
        toast.success("Bid accepted successfully!");
      } else {
        console.error("Failed to accept bid");
      }
    } catch (error) {
      console.error("Error accepting bid:", error);
      toast.error("An error occurred while accepting the bid.");
    }
  };

  const handleReject = async (bidId) => {
    try {
      // Make a PUT request to the server to reject the bid
      const response = await fetch(
        `http://localhost:5000/bid-requests/reject/${bidId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        setBidRequests((prevRequests) =>
          prevRequests.map((bid) =>
            bid._id === bidId ? { ...bid, status: "rejected" } : bid
          )
        );
        toast.success("Bid rejected successfully!");
      } else {
        console.error("Failed to reject bid");
      }
    } catch (error) {
      console.error("Error rejecting bid:", error);
      toast.error("An error occurred while rejecting the bid.");
    }
  };

  return (
    <div>
      <h1 className="my-8 text-center font-bold text-3xl text-[#86A789]">
        Bid Requests
      </h1>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-[#86A789] text-white">
            <th className="py-2 px-4">Job Title</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Deadline</th>
            <th className="py-2 px-4">Price</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bidRequests.map((bid) => (
            <tr key={bid._id} className="border-b border-gray-300">
              <td className="py-2 px-4">{bid.jobTitle}</td>
              <td className="py-2 px-4">{bid.email}</td>
              <td className="py-2 px-4">{bid.deadline}</td>
              <td className="py-2 px-4">{bid.price}</td>
              <td className="py-2 px-4">{bid.status}</td>
              <td className="py-2 px-4">
                {bid.status === "pending" && (
                  <>
                    <button
                      onClick={() => handleAccept(bid._id)}
                      className="bg-[#86A789] text-white px-2 py-1 rounded-md mr-2"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleReject(bid._id)}
                      className="bg-red-500 text-white px-2 py-1 rounded-md"
                    >
                      Reject
                    </button>
                  </>
                )}
                {bid.status === "in progress" && (
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                          In Progress
                        </span>
                      </div>
                    </div>
                    <div className="flex h-2 mb-4 overflow-hidden text-xs bg-teal-200 rounded">
                      <div
                        style={{ width: "50%" }}
                        className="flex flex-col whitespace-nowrap text-white justify-center bg-teal-500"
                      ></div>
                    </div>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BidRequests;
