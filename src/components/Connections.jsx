import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

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

  if (!connections) return;

  if (connections.length === 0)
    return (
      <h1 className="text-bold text-2xl text-center mt-20">
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
        const { _id, firstName, lastName, photoUrl, gender, about, age } =
          connection;

        return (
          <div
            key={_id}
            // 1. overflow-hidden: Ensures the image respects the rounded corners
            // 2. w-full md:w-1/2: Responsive width (full on mobile, half on desktop)
            className="flex rounded-lg bg-base-200 w-full md:w-1/2 mx-auto mb-4 overflow-hidden shadow-lg transition-transform hover:scale-[1.01]"
          >
            {/* IMAGE CONTAINER */}
            {/* w-32 or w-40 sets the fixed width. flex-shrink-0 prevents text from squishing image */}
            <div className="w-32 sm:w-40 flex-shrink-0">
              <img
                alt="photo"
                // h-full makes it stretch to match text height
                // object-cover prevents distortion (cropping instead of stretching)
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
              {/* This text dictates the height of the card. The image will stretch to match it. */}
              <p className="text-sm text-base-content/80 leading-relaxed">
                {about}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
