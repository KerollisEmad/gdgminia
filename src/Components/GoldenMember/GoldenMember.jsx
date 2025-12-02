import { useEffect, useState } from "react";
import { getGoldenDetails } from "../../../services/golden";
import Person from "../../assets/images/person.jpg";
import { GoldenSkeleton } from "../Skeleton/GoldenSkeleton";

export default function GoldenMember({ idCommittee }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getGoldenMember() {
    try {
      const { data } = await getGoldenDetails();
      setData(data.golden_members);      
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }
  useEffect(() => {
    getGoldenMember();
  }, []);

  if (loading) {
    return <GoldenSkeleton />;
  }

  return (
    <>
      {" "}
      {data[idCommittee] && (
          <section>
            <div className="container py-16 lg:py-24 text-center">
              <h2 className="title-section-Committe">Golden Member</h2>
              <div
                className="card-golden group mx-auto bg-[#D2E1FA] text-center w-full max-w-96 border-2 border-borderCard rounded-2xl px-6 py-4
       hover:shadow-lg *:transition-colors duration-300 hover:bg-[#FAEECD] hover:border-[#EFBF3EDE] hover:cursor-pointer hover:scale-105 hover:ease-in-out"
              >
                <div className="image">
                  <img
                    src={data[idCommittee].image || Person}
                    alt="Golden Member"
                    className="w-[234px] h-[245px] rounded-full mx-auto border-4 border-[#069A52] group-hover:border-[#939393] object-cover duration-300 transition-colors"
                  />
                </div>
                <div className="mt-6">
                  <h3 className="text-4xl font-medium group-hover:text-[#376BD4] transition-colors duration-300">
                    {data[idCommittee].name}
                  </h3>
                  <div className="mt-3 text-2xl group-hover:text-[#727272] transition-colors duration-300">
                    <span className="block ">
                      {data[idCommittee].college}
                    </span>
                    <span>{data[idCommittee].year}rd</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
    </>
  );
}
