// "use client";
// import React from "react";
// // import { findStudents } from "./create_user";
// import { useState, useEffect } from "react";
// import { deleteAllStudents } from "./create_user";

// export default function StudentsList({ StudentsList_ }) {
//   return (
//     <>
//       <div
//         style={{
//           fontFamily: "Helvetica_Neue",
//           // border: "1px solid black",
//           height: "100px",
//           display: "flex",
//           justifyContent: "center",
//         }}
//       >
//         <h2
//           style={{
//             // border: "1px solid pink",
//             width: "25%",
//             height: "100%",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           StudentsList
//         </h2>
//       </div>
//       <div
//         style={{
//           // border: "1px solid red",
//           fontFamily: "Helvetica_Neue",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           marginBottom: "50px",
//         }}
//       >
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "1fr 1fr 1fr 1fr", // 4 columns
//             gap: "8px",
//             width: "80%",
//             margin: "auto",
//             border: "1px solid #ccc",
//             padding: "8px",
//           }}
//         >
//           {/* Header Row */}
//           <div style={{ fontWeight: "bold" }}>Name</div>
//           <div style={{ fontWeight: "bold" }}>Class</div>
//           <div style={{ fontWeight: "bold" }}>Section</div>
//           <div style={{ fontWeight: "bold" }}>Month Enrolled</div>

//           {/* Data Rows */}
//           {StudentsList_.map((task) => (
//             <div key={task.id} style={{ display: "contents" }}>
//               <div>{task.Name}</div>
//               <div>{task.Class}</div>
//               <div>{task.Section}</div>
//               <div>{task.Month_Enrolled}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div
//         style={{
//           height: "50px",
//           // backgroundColor: "azure",
//           display: "flex",
//           justifyContent: "center",
//           marginBottom: "500px",
//         }}
//       >
//         <button
//           style={{
//             fontFamily: "Helvetica_Neue",
//             fontSize: "18px",
//             backgroundColor: "black",
//             color: "white",
//             width: "100px",
//             padding: "2px",
//             borderRadius: "2px",
//             cursor: "pointer",
//           }}
//           onClick={deleteAllStudents}
//         >
//           Reset
//         </button>
//       </div>
//     </>
//   );
// }
