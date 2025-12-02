import HR from "../../assets/images/HR.png";
import PR from "../../assets/images/PR.png";
import logistics from "../../assets/images/logistics.png";
import media from "../../assets/images/media.png";
import Tech from "../../assets/images/Tech.png";
import { Link } from "react-router-dom";
import { image } from "motion/react-client";
export default function OurCommittees() {
  return (
    <>
      <main>
        <section className="bg-white">
          <div className="container pt-16 md:pt-24">
            <h2 className="title-section">OUR COMMITTEES</h2>
            {/* ///^ */}
            <div className="flex flex-col pt-10 md:pt-16 lg:pt-24 gap-8 md:gap-12 lg:gap-16">
              {/* //^ rows */}
              <div className="grid grid-cols-6 gap-y-8 gap-8 lg:gap-x-30 xl:gap-x-4 justify-between ">
                {/* //^ HR Card */}

                <Link
                  to="committee"
                  className="col-span-6 sm:col-span-3 lg:col-span-2  h-80 flex flex-col items-center z-30  transition-colors duration-700 "
                  state={{
                    title: "HR",
                    description:
                      "Ensures the team runs smoothly by managing people-related processes. They maintain harmony, resolve conflicts, and ensure everyone understands their roles. Without HR, team efficiency and morale can drop.",
                    responsibilities: [
                      {
                        key: "Recruitment",
                        value: "Bring in new team members.",
                      },
                      {
                        key: "Attendance",
                        value: "Track presence and leaves.",
                      },
                      {
                        key: "Compliance",
                        value: "Ensure rules and policies are followed.",
                      },
                      {
                        key: "Conflict Resolution",
                        value: "Solve team disputes.",
                      },
                    ],

                    idCommittee: 1,
                    image: HR,
                  }}
                >
                  <div className="card-committee shadow-md bg-bgLight hover:bg-bgHover animate-card-hover  py-3 px-6 w-72 h-56 rounded-3xl flex flex-col items-center justify-end ">
                    <img
                      src={HR}
                      alt="HR Committee"
                      className="w-full object-contain"
                    />

                    <h3 className="text-4xl font-semibold mt-4 pb-1 text-center">
                      HR
                    </h3>
                  </div>
                </Link>

                {/* //^ Media Card */}
                <Link
                  to="committee"
                  className="col-span-6 sm:col-span-3 lg:col-span-2  h-80 flex flex-col items-center z-30  "
                  state={{
                    title: "Media",
                    description:
                      "Handles the team’s visual and digital representation, documents activities, and promotes events. Media ensures the team presents itself professionally and consistently, strengthening its brand and public presence.",
                    responsibilities: [
                      {
                        key: "Design",
                        value:
                          "Create graphics, visuals, and layouts for events and campaigns.",
                      },
                      {
                        key: "Branding",
                        value:
                          "Ensure all visual and digital content aligns with the team’s identity.",
                      },
                      {
                        key: "Social Media",
                        value:
                          "Manage accounts, post content, and engage with followers.",
                      },
                      {
                        key: "Photography/ Videography",
                        value: "Document events, workshops, and activities.",
                      },
                    ],

                    image: media,
                    idCommittee: 3,
                  }}
                >
                  <div className="card-committee shadow-md bg-bgLight py-3 px-6 w-72 h-56 rounded-3xl flex flex-col items-center justify-end ">
                    <img
                      src={media}
                      alt="Media Committee"
                      className="w-full object-contain "
                    />

                    <h3 className="text-4xl font-semibold mt-4 pb-1 text-center">
                      Media
                    </h3>
                  </div>
                </Link>
                {/* //^ PR Card */}
                <Link
                  to="committee"
                  className="col-span-6 sm:col-span-3 lg:col-span-2  h-80 flex flex-col items-center z-30  "
                  state={{
                    title: "PR",
                    description:
                      "Maintains relationships with external stakeholders. They ensure the team communicates effectively and professionally, which can attract support, partnerships, or sponsorships.",
                    responsibilities: [
                      {
                        key: "Networking",
                        value: "Maintain sponsor and partner relations.",
                      },
                      {
                        key: "Promotion",
                        value: "Promote events and activities.",
                      },
                      {
                        key: "Hostesses",
                        value: "Organize and welcome participants at events.",
                      },
                    ],
                    image: PR,
                    idCommittee: 4,
                  }}
                >
                  <div className="card-committee shadow-md bg-bgLight py-3 px-6 w-72 h-56 rounded-3xl flex flex-col items-center justify-end ">
                    <img
                      src={PR}
                      alt="PR Committee"
                      className="w-full object-contain "
                    />

                    <h3 className="text-4xl font-semibold mt-4 pb-1 text-center">
                      PR
                    </h3>
                  </div>
                </Link>
                {/* //^ Technical Card */}
                <Link
                  to="committee"
                  className="col-span-6 sm:col-span-3 h-80 flex flex-col items-center z-30 "
                  state={{
                    title: "Technical",
                    description:
                      "Provides technical expertise, ensures smooth operation of events, and develops innovative solutions to support the team’s goals. They make sure both the team and its activities run efficiently from a technical perspective.",
                    responsibilities: [
                      {
                        key: "Event Support",
                        value: "Set up and manage technical equipment.",
                      },
                      {
                        key: "Training",
                        value: "Conduct trainings for team members.",
                      },
                      {
                        key: "Support",
                        value: "Technical support during events.",
                      },
                      {
                        key: "Development",
                        value:
                          "Work on projects, tools, or systems for the team.",
                      },
                    ],
                    image: Tech,
                    idCommittee: 0,
                  }}
                >
                  <div className="card-committee shadow-md bg-bgLight py-3 px-6 w-72 h-56 rounded-3xl flex flex-col items-center justify-end ">
                    <img
                      src={Tech}
                      alt="Technical Committee"
                      className="w-full object-contain "
                    />
                    <h3 className="text-4xl font-semibold mt-4 pb-1 text-center">
                      Technical
                    </h3>
                  </div>
                </Link>
                {/* //^ Logistics Card */}
                <Link
                  to="committee"
                  className="col-span-6 sm:col-span-3 h-80 flex flex-col items-center z-30 "
                  state={{
                    title: "Logistics",
                    description:
                      "Organizes resources, schedules, and events so the team can operate efficiently. Logistics ensures that events run smoothly and that team members have the tools and support they need.",
                    responsibilities: [
                      {
                        key: "Planning",
                        value:
                          "Arrange events, workshops, and activities from start to finish.",
                      },
                      {
                        key: "Execution",
                        value:
                          "Ensure smooth implementation of events and team activities.",
                      },
                      {
                        key: "Inventory",
                        value:
                          "Maintain supplies, equipment, and materials needed for operations.",
                      },
                    ],
                    image: logistics,
                    idCommittee: 2,
                  }}
                >
                  <div className="card-committee shadow-md bg-bgLight py-3 px-6 w-72 h-56 rounded-3xl flex flex-col items-center justify-end ">
                    <img
                      src={logistics}
                      alt="Logistics Committee"
                      className="w-full object-contain "
                    />

                    <h3 className="text-4xl font-semibold mt-4 pb-1 text-center">
                      Logistics
                    </h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
