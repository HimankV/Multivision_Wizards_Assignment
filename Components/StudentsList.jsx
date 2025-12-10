"use client";
import React from "react";
// import { findStudents } from "./create_user";
import { useState, useEffect } from "react";

export default function StudentsList({res}) {
//   useEffect(function () {
//     const res = findStudents();
//   }, []);
  return (
    <div
      style={{
        fontFamily: "Helvetica_Neue",
        border: "1px solid black",
        height: "100px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <h2
        style={{
          border: "1px solid pink",
          width: "25%",
          height: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        StudentsList
      </h2>

      <div>
        {res.map((task) => {
          <div>
            <p>{task.id}</p>
            <br />
            <p>{task.Name}</p>
            <br />
            <p>{task.Class}</p>
            <br />
            <p>{task.Section}</p>
            <br />
            <p>{task.Month_Enrolled}</p>
            <br />
          </div>;
        })}
      </div>
    </div>
  );
}
