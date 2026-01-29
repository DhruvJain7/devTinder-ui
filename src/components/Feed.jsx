import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./UserCard";
import FeedSkeleton from "./FeedSkeleton";
import { useNavigate } from "react-router";
import BackgroundEffect from "./BackgroundEffect";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data?.data));
    } catch (err) {
      console.error(err);
      navigate("/login");
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  // 1. Loading State
  if (!feed) return <FeedSkeleton />;

  // 2. Empty State
  if (feed.length <= 0)
    return (
      <h1 className="flex justify-center my-10 text-white">
        No new Users found!
      </h1>
    );

  // 3. Render Feed
  return (
    <div className="relative min-h-screen flex justify-center items-center overflow-hidden">
      {/* Background sits behind everything */}
      <BackgroundEffect />

      {/* Main Content (added z-10 to sit above background) */}
      <div className="flex flex-col justify-center items-center flex-grow w-full py-10 z-10">
        {/* The Card */}
        <UserCard key={feed[0]._id} user={feed[0]} />

        {/* Vim Status Line */}
        <div className="mt-10 flex items-center gap-6 font-mono text-[10px] text-gray-500 tracking-wider uppercase opacity-80 select-none">
          {/* Navigation Group */}
          <div className="flex items-center gap-2 group">
            <div className="flex gap-1">
              <kbd className="kbd kbd-sm min-h-6 h-6 bg-[#161B22] border-[#30363D] text-[#C9D1D9] text-xs font-sans rounded px-2 shadow-sm group-hover:border-[#58A6FF] transition-colors">
                ←
              </kbd>
              <kbd className="kbd kbd-sm min-h-6 h-6 bg-[#161B22] border-[#30363D] text-[#C9D1D9] text-xs font-sans rounded px-2 shadow-sm group-hover:border-[#58A6FF] transition-colors">
                →
              </kbd>
            </div>
            <span>to navigate</span>
          </div>

          <span className="text-[#30363D]">|</span>

          {/* Action Group */}
          <div className="flex items-center gap-2 group">
            <span className="text-lg leading-none animate-pulse">↔</span>
            <span>Swipe Card</span>
          </div>

          <span className="text-[#30363D]">|</span>

          {/* Spacebar Group */}
          <div className="flex items-center gap-2 group hidden md:flex">
            <kbd className="kbd kbd-sm min-h-6 h-6 bg-[#161B22] border-[#30363D] text-[#C9D1D9] text-[10px] font-sans rounded px-3 shadow-sm group-hover:border-[#58A6FF] transition-colors">
              SPACE
            </kbd>
            <span>to details</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
