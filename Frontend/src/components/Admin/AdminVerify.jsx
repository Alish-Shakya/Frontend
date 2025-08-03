import React from "react";
import { useSearchParams } from "react-router";
const AdminVerify = () => {
  let [searchParams] = useSearchParams();
  console.log(searchParams);
  return <div>AdminVerify</div>;
};
export default AdminVerify;
