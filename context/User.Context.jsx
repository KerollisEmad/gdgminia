// import { createContext, useContext, useState } from "react";

// export const UsersContext = createContext();

// export function UsersProvider({ children }) {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // مثال: إضافة يوزر
//   function addUser(newUser) {
//     setUsers((prev) => [...prev, newUser]);
//   }


//   return (
//     <UsersContext.Provider
//       value={{
//         users,
//         loading,
//         addUser,
//         setUsers,
//         setLoading,
//       }}
//     >
//       {children}
//     </UsersContext.Provider>
//   );
// }

// // hook جاهز للاستخدام
// export function useUsersContext() {
//   return useContext(UsersContext);
// }
