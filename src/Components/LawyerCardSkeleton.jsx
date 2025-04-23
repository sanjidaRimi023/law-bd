import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LawyerCardSkeleton = () => {
  return (
    <div className="bg-[#ffffff] border border-[#C4C4C4] rounded-xl shadow-md flex justify-between gap-10 space-y-3 p-5 items-center">
      <Skeleton width={180} height={180} borderRadius={12} />

      <div className="flex-1 space-y-3">
        <div className="flex gap-3">
          <Skeleton width={80} height={30} borderRadius={20} />
          <Skeleton width={100} height={30} borderRadius={20} />
        </div>

        <Skeleton height={36} width="60%" />

        <Skeleton height={28} width="40%" />

        <Skeleton height={20} width="50%" />

        <Skeleton height={44} width="100%" borderRadius={999} />
      </div>
    </div>
  );
};

export default LawyerCardSkeleton;
