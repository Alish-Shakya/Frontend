import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
const AdminVerify = () => {
  let [searchParams] = useSearchParams();
  let navigate = useNavigate();

  // console.log(searchParams);
  let token = searchParams.get("token");

  let verifyAdmin = async () => {
    try {
      let result = await axios({
        url: "http://localhost:3000/webUser/verifyEmail",
        method: "post",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/admin/login");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    verifyAdmin();
  }, []);
  return <div>AdminVerify</div>;
};
export default AdminVerify;
