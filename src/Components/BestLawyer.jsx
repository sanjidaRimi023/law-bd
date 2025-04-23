import React, { Suspense, useEffect, useState } from "react";
const LawyerCard = React.lazy(() => import("./LawyerCard"));
import LawyerCardSkeleton from "./LawyerCardSkeleton";

const BestLawyer = ({ profiles }) => {
  const [displayProfile, setdisplayProfile] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (showAll) {
      setdisplayProfile(profiles);
    } else {
      setdisplayProfile(profiles.slice(0, 6));
    }
  }, [profiles, showAll]);

  return (
    <div>
      <div className="flex flex-col items-center gap-4 my-10">
        <h1 className="text-[#0F0F0F] lg:text-5xl text-2xl font-bold">Our Best Lawyers</h1>
        <p className="text-[#0F0F0FCC] text-md lg:w-[800px] text-center">
          Meet our top-rated lawyers, trusted by hundreds for their expertise
          and commitment to justice. From corporate law to personal matters, our
          best lawyers bring clarity and confidence to your case.
          Recognized for excellence. Respected for results. Our finest legal
          minds at your service.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {displayProfile.map((profile) => (
          <Suspense key={profile.id} fallback={<LawyerCardSkeleton />}>
            <LawyerCard profile={profile} />
          </Suspense>
        ))}
      </div>

      <div className="my-10 flex justify-center items-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="relative px-6 py-3 font-medium text-white transition duration-300 bg-[#0EA106] rounded-4xl hover:bg-green-500 ease"
        >
          <span className="relative text-xl">
            {showAll ? "Show Less Lawyer" : "Show All Lawyer"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default BestLawyer;
