const FeedSkeleton = () => {
  return (
    <div className="flex flex-col justify-center items-center my-20 animate-pulse">
      {/* CARD SKELETON */}
      <div className="card bg-base-100 w-96 shadow-xl border border-base-300 h-150">
        {/* Image Placeholder */}
        <div className="px-4 pt-4">
          <div className="rounded-xl w-full h-64 bg-[#161B22] flex justify-center items-center">
            <span className="loading loading-spinner text-primary"></span>
          </div>
        </div>

        <div className="card-body items-center text-center p-6 space-y-4">
          {/* Name & Age */}
          <div className="h-8 w-3/4 bg-[#161B22] rounded"></div>
          <div className="h-4 w-1/4 bg-[#161B22] rounded"></div>

          {/* Bio Block */}
          <div className="w-full h-24 bg-[#0D1117] rounded-lg border border-[#30363D] p-4 space-y-2">
            <div className="h-2 w-1/2 bg-[#30363D] rounded"></div>
            <div className="h-2 w-3/4 bg-[#30363D] rounded"></div>
            <div className="h-2 w-1/4 bg-[#30363D] rounded"></div>
          </div>

          {/* Git Graph Skeleton */}
          <div className="w-full flex justify-between mt-4">
            {[...Array(14)].map((_, i) => (
              <div key={i} className="w-4 h-4 rounded-xs bg-[#161B22]"></div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 w-full justify-center mt-6">
            <div className="w-32 h-12 bg-[#161B22] rounded-lg"></div>
            <div className="w-36 h-12 bg-[#161B22] rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* Loading Text */}
      <div className="mt-8 font-mono text-xs text-gray-500 flex items-center gap-2">
        <span className="loading loading-dots loading-xs"></span>
        <span>Compiling potential matches...</span>
      </div>
    </div>
  );
};
export default FeedSkeleton;
