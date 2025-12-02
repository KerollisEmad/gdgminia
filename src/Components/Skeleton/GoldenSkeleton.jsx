export function GoldenSkeleton() {
  return (
    <section>
      <div className="container py-16 lg:py-24 text-center">
        <h2 className="title-section-Committe">Golden Member</h2>

        <div className="card-golden mx-auto bg-[#D2E1FA] text-center w-96 border-[1.5px] border-borderCard rounded-2xl p-8 animate-pulse">
          
          <div className="image">
            <div className="w-[234px] h-[245px] rounded-full mx-auto bg-gray-300"></div>
          </div>

          <div className="mt-6">
            <div className="h-6 w-40 bg-gray-300 mx-auto rounded mb-4"></div>

            <div className="mt-4 text-2xl">
              <div className="h-5 w-52 bg-gray-300 mx-auto rounded mb-2"></div>
              <div className="h-5 w-20 bg-gray-300 mx-auto rounded"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}