import React from "react";
import { Link } from "react-router";

const SubjectForm = () => {
  return (
    <>
      <Link
        to={"/subject/createSubject"}
        className="block p-6 border rounded-xl shadow hover:shadow-lg hover:bg-green-50"
      >
        <h2 className="text-xl font-semibold">Add Subject</h2>
        <p className="text-gray-600">Add a subject you wanna read about </p>
      </Link>
    </>
  );
};

export default SubjectForm;
