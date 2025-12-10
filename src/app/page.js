import Form from "../../Components/Form";
import BarGraph from "../../Components/BarGraph";
import { findStudents, deleteAllStudents } from "../../Components/create_user";


export default async function Home() {
  const StudentsList = await findStudents();
  console.log(StudentsList);
  return (
    <div>
      <div
        style={{
          width: "100%",
          // border: "1px solid black",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Form />
      </div>
      <div
        style={{
          width: "100%",
          // border: "1px solid purple",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <BarGraph StudentsList={StudentsList} />
      </div>

      <div
        style={{
          fontFamily: "Helvetica_Neue",
          // border: "1px solid black",
          height: "100px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h2
          style={{
            // border: "1px solid pink",
            width: "25%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          StudentsList
        </h2>
      </div>
      <div
        style={{
          // border: "1px solid red",
          fontFamily: "Helvetica_Neue",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "50px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr", // 4 columns
            gap: "8px",
            width: "80%",
            margin: "auto",
            border: "1px solid #ccc",
            padding: "8px",
          }}
        >
          {/* Header Row */}
          <div style={{ fontWeight: "bold" }}>Name</div>
          <div style={{ fontWeight: "bold" }}>Class</div>
          <div style={{ fontWeight: "bold" }}>Section</div>
          <div style={{ fontWeight: "bold" }}>Month Enrolled</div>

          {/* Data Rows */}
          {StudentsList.map((task) => (
            <div key={task.id} style={{ display: "contents" }}>
              <div>{task.Name}</div>
              <div>{task.Class}</div>
              <div>{task.Section}</div>
              <div>{task.Month_Enrolled}</div>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          height: "50px",
          // backgroundColor: "azure",
          display: "flex",
          justifyContent: "center",
          marginBottom: "500px",
        }}
      >
        <button
          style={{
            fontFamily: "Helvetica_Neue",
            fontSize: "18px",
            backgroundColor: "black",
            color: "white",
            width: "100px",
            padding: "2px",
            borderRadius: "2px",
            cursor: "pointer",
          }}
          onClick={deleteAllStudents}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
