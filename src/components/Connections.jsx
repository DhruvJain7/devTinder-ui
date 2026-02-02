import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

// --- SUB-COMPONENT: ConnectionCard ---
// Manages its own "isExpanded" state so each card opens individually.
const ConnectionCard = ({ connection }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { _id, firstName, lastName, photoUrl, gender, about, age } = connection;

  return (
    <div className="flex rounded-lg bg-base-200 w-full md:w-1/2 mx-auto mb-4 overflow-hidden shadow-lg transition-transform hover:scale-[1.01] border border-transparent hover:border-[#58A6FF]">
      {/* IMAGE CONTAINER */}
      <div className="w-32 sm:w-40 flex-shrink-0">
        <img
          alt="photo"
          className="w-full h-full object-cover"
          src={photoUrl}
        />
      </div>

      {/* TEXT CONTAINER */}
      <div className="flex flex-col justify-center p-4 text-left w-full">
        <h2 className="font-bold text-xl text-primary">
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
            {about || "No bio available."}
          </p>

          {/* Only show 'Read more' if bio exists and is long enough */}
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
    </div>
  );
};

// --- MAIN COMPONENT: Connections ---
const Connections = () => {
  const connections = useSelector((store) => store.connection);
  const dispatch = useDispatch();

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res?.data?.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return null;

  if (connections.length === 0)
    return (
      <h1 className="text-bold text-2xl text-center mt-20 text-gray-400">
        No connections found.
      </h1>
    );

  return (
    <div className="flex flex-col items-center my-20 px-4">
      <h1 className="font-bold text-white text-3xl mb-2 mt-4">Connections</h1>
      <p className="text-sm text-base-content/70 font-body mb-6">
        Your stack, your people.
      </p>

      {connections.map((connection) => {
        if (!connection) return null;
        return <ConnectionCard key={connection._id} connection={connection} />;
      })}
    </div>
  );
};

export default Connections;
