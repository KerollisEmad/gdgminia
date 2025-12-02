import { useLocation } from "react-router-dom";
import ImageCommittee from "../../assets/images/imageCommitte.png";
import ImageResponsibilities from "../../assets/images/Responsibilities.png";
import GoldenMember from "../../Components/GoldenMember/GoldenMember";
import Meta from "../../Components/Meta/Mata";

export default function Committee() {
  const { state } = useLocation();
  const { title, description, responsibilities, idCommittee, image } =
    state || {};

  return (
    <>
      <Meta
        title={`GDG Minya | ${title} Committee`}
        description={`Learn more about the ${title} Committee, their roles, responsibilities, and contributions to GDG Minya.`}
        keywords={`GDG Minya, ${title} Committee, Responsibilities, Team`}
      />
      <main className="relative overflow-hidden">
        {/* //*^ section Committees Committees */}
        <section className="text-center pt-20 p-5">
          <div className="container py-16 lg:py-24">
            <h2 className="title-section-lg mb-12">{title} Committee</h2>
            <div className="image max-w-[550px]  mx-auto">
              <img src={image} alt={`${title} Committee`} className="w-full" />
            </div>
          </div>
        </section>

        {/* //^ Description Committees */}
        <section className="bg-bgSection">
          <div className="container text-center py-16 lg:py-24">
            <h2 className="title-section-Committe">
              Why is the {title} role essential?
            </h2>
            <p className="text-xl md:text-3xl xl:text-4xl xl:px-14 mx-auto ">
              {description}
            </p>
          </div>
        </section>

        {/* //^ Responsibilities */}
        <section>
          <div className="container w-11/12 md:w-9/12 py-16 lg:py-24 mx-auto">
            <h2 className="title-section-Committe text-center text-4xl md:text-5xl font-bold mb-12 text-primary">
              Responsibilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 place-items-center">
              {responsibilities.map((responsibility, index) => (
                <div
                  key={index}
                  className="bg-bgCard py-6 px-6 rounded-3xl w-full max-w-[420px] min-h-[210px] border-2 border-primary
           shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-102
           flex flex-col justify-between items-center hover:border-secondary"
                >
                  <div className="flex items-center gap-5 mb-4">
                    <img
                      className="w-16 h-16 md:w-20 md:h-20 object-contain shrink-0"
                      src={ImageResponsibilities}
                      alt="Responsibilities Icon"
                    />
                    <h3 className="text-2xl md:text-3xl font-semibold text-center">
                      {responsibility.key}
                    </h3>
                  </div>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
                    {responsibility.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* //^ Golden Member */}
        <GoldenMember idCommittee={idCommittee} />

        {/* //! background page */}

        <div
          className="absolute -right-[260px] -top-[115px] 
           w-[529px] h-[542px] bg-[#488DF5]/25 rounded-full  blur-2xl -z-10"
        ></div>

        <div
          className="absolute -left-[260px] top-[220px] 
           w-[546px] h-[505px] bg-[#D8423840] rounded-full  blur-2xl -z-10"
        ></div>
        <div
          className="absolute -right-80 top-[720px] 
           w-[611px] h-[652px] bg-[#079C544D] rounded-full  blur-2xl -z-10"
        ></div>
        <div
          className="absolute -right-[270px] top-[1720px] 
           w-[531px] h-[552px] bg-[#488DF540] rounded-full  blur-2xl -z-10"
        ></div>
        <div
          className="absolute -right-[350px]  top-[2830px] 
           w-[620px] h-[592px] bg-[#F8C53C40] rounded-full  blur-2xl -z-10"
        ></div>
        <div
          className="absolute -left-[330px]  top-[2330px]
           w-[620px] h-[592px] bg-[#F8C53C40] rounded-full  blur-2xl -z-10"
        ></div>
      </main>
    </>
  );
}
