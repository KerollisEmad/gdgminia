import { Link, useNavigate } from "react-router-dom";
import AddUsers from "../../Components/Admin/AddUsers/AddUsers";
import UploadingDetailsGoldenMember from "../../Components/Admin/UploadingDetailsGoldenMember/UploadingDetailsGoldenMember";
import UploadingDetailsEvent from "../../Components/Admin/UploadingDetailsEvent/UploadingDetailsEvent";
import UploadingLinkesCommitte from "../../Components/Admin/UploadingLinkesCommitte/UploadingLinkesCommitte";
import UploadUpcomingEventDetailes from "../../Components/Admin/UploadUpcomingEventDetailes/UploadUpcomingEventDetailes";
import Board from "../../Components/Admin/Board/Board";
import Meta from "../../Components/Meta/Mata";

export default function Admin() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    localStorage.removeItem("role");
    sessionStorage.removeItem("role");
    navigate("/");
  };

  const role = localStorage.getItem("role") || sessionStorage.getItem("role");

  return (
    <>
       <Meta
        title="GDG Minya | Admin Panel" 
        description="Admin panel for managing GDG Minya website content and users." 
        keywords="GDG Minya, Admin, Management, Users, Content"
      /> 
      {" "}
      <main>
       
        {/* //^ Section Event  */}
        <UploadingDetailsEvent />
        {/* //^  Section committee */}
        <UploadingLinkesCommitte />
        {/* //^ Section Upcoming Event  */}
        <UploadUpcomingEventDetailes />

        {role === "admin" && (
          <>
            {/* //^ Section Golden Member */}
            <UploadingDetailsGoldenMember />
            {/* //^ Section Board  */}
            <Board />
            {/* //^ Section Add Users  */}
            <AddUsers />
          </>
        )}

        {/* //*!~^ Fixed Buttons Back Website... */}
        <div>
          <button>
            <Link to={"/"}>
              <div className="fixed text-sm animate-bounce bottom-15 right-4 bg-primary hover:bg-primary text-white py-2 px-5 rounded-full shadow-xl font-semibold">
                {" "}
                Back to Website
              </div>
            </Link>
          </button>
          <button onClick={handleLogout}>
            <div className="fixed text-sm animate-bounce bottom-4 right-4 bg-red-600 hover:bg-red-700 text-white py-2 px-5 rounded-full shadow-xl font-semibold">
              {" "}
              Logout
            </div>
          </button>
        </div>
      </main>
    </>
  );
}
