import React from "react";
import { Link } from "react-router";
import UserForm from "./User/UserForm";
import TeacherForm from "./teacher/TeacherForm";
import SubjectForm from "./subject/subjectForm";
import StudentForm from "./student/StudentForm";

const Home = () => {
  return (
    <div className="p-10">
      <p className="text-4xl mb-6">Hello World</p>

      <div className="grid gap-4 md:grid-cols-4">
        <UserForm />
        <TeacherForm />
        <SubjectForm />
        <StudentForm />
      </div>
    </div>
  );
};

export default Home;
