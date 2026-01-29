import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequest } from "../utils/requestSlice";
import { useEffect, useState } from "react"; // Added useState

// --- SUB-COMPONENT: Manages its own "Read More" state ---
const RequestCard = ({ request, reviewRequest }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { _id, firstName, lastName, photoUrl, age, gender, about } =
    request.fromUserId;

  return (
    <div className="flex rounded-lg bg-[#0D1117] border border-[#30363D] w-full md:w-2/3 lg:w-1/2 mx-auto mb-6 overflow-hidden shadow-xl hover:border-[#58A6FF] transition-all duration-300">
      {/* Image Section */}
      <div className="w-32 sm:w-40 min-h-[160px] flex-shrink-0 bg-base-300">
        <img
          alt="photo"
          className="w-full h-full object-cover"
          src={photoUrl}
        />
      </div>

      {/* Content Wrapper */}
      <div className="flex flex-col w-full">
        {/* User Info */}
        <div className="p-4 flex-grow text-left">
          <h2 className="font-bold text-xl text-white tracking-tight">
            {firstName + " " + lastName}
          </h2>

          {age && gender && (
            <p className="text-xs font-mono text-[#7EE787] mb-2 mt-1">
              [{age}, "{gender}"]
            </p>
          )}

          {/* BIO WITH READ MORE LOGIC */}
          <div className="relative">
            <p
              className={`text-sm text-gray-400 leading-relaxed transition-all duration-300 ${
                isExpanded ? "line-clamp-none" : "line-clamp-2"
              }`}
            >
              {about || "No bio provided."}
            </p>

            {/* Only show 'Read more' if bio exists */}
            {about && about.length > 80 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-xs text-[#58A6FF] hover:text-[#79C0FF] hover:underline mt-1 focus:outline-none"
              >
                {isExpanded ? "Show less" : "Read more"}
              </button>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 p-4 justify-end border-t border-[#30363D] bg-[#161B22]/50">
          <button
            className="btn btn-sm btn-reject px-4"
            onClick={() => reviewRequest("rejected", request._id)}
          >
            Reject
            <span className="hidden sm:inline text-[10px] font-normal text-white/60 lowercase ml-1">
              revert
            </span>
          </button>
          <button
            className="btn btn-sm btn-accept px-4"
            onClick={() => reviewRequest("accepted", request._id)}
          >
            Accept
            <span className="hidden sm:inline text-[10px] font-normal text-white/60 lowercase ml-1">
              merge
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---
const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();

  const reviewRequest = async (status, _id) => {
    try {
      await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true },
      );
      dispatch(removeRequest(_id));
    } catch (err) {
      console.error(err);
    }
  };

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequests(res?.data?.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) return null;

  if (requests.length === 0)
    return (
      <h1 className="flex justify-center my-10 text-gray-500">
        No Requests Found
      </h1>
    );

  return (
    <div className="flex flex-col items-center my-10 px-4">
      <h1 className="font-bold text-white text-3xl mb-2">Pull Requests</h1>
      <p className="text-sm text-base-content/70 font-body mb-8">
        Review incoming connection requests.
      </p>

      {requests.map((request) => (
        // Pass the request AND the handler to the sub-component
        <RequestCard
          key={request._id}
          request={request}
          reviewRequest={reviewRequest}
        />
      ))}
    </div>
  );
};

export default Requests;
