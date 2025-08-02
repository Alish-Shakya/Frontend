import React from "react";
import { Link } from "react-router";
import UserForm from "./User/UserForm";
import TeacherForm from "./teacher/TeacherForm";
import SubjectForm from "./subject/subjectForm";

const Home = () => {
  return (
    <div className="p-10">
      <p className="text-4xl mb-6">Hello World</p>

      <div className="grid gap-4 md:grid-cols-4">
        <UserForm />
        <TeacherForm />
        <SubjectForm />
      </div>
    </div>
  );
};

export default Home;
