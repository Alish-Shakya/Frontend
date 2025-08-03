import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";

const UpdateUser = () => {
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const result = await axios.get(
        `http://localhost:3000/user/single/${params.id}`
      );
      const user = result.data.data;
      setFullName(user.fullName);
      setAge(user.age);
      setAddress(user.address);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.patch(`http://localhost:3000/user/update/${params.id}`, {
            fullName,
            age,
            address,
          });
          Swal.fire("Saved!", "", "success");
          navigate(`/user/${params.id}`);
        } catch (error) {
          console.log(error);
          Swal.fire("Error!", "Failed to update user", "error");
        }
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Update User
        </h1>

        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-gray-700 font-medium mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="age" className="block text-gray-700 font-medium mb-2">
            Age
          </label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="address"
            className="block text-gray-700 font-medium mb-2"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors duration-300"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router";

// const UpdateUser = () => {
//   let [fullName, setFullName] = useState();
//   let [age, setAge] = useState();
//   let [address, setAddress] = useState();

//   let params = useParams();

//   let navigate = useNavigate();

//   const getUser = async () => {
//     try {
//       let result = await axios({
//         url: `http://localhost:3000/user/single/${params.id}`,
//         method: "get",
//       });
//       let user = result.data.data;
//       setFullName(user.fullName);
//       setAge(user.age);
//       setAddress(user.address);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getUser();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = {
//       fullName: fullName,
//       age: age,
//       address: address,
//     };

//     try {
//       let result = await axios({
//         url: `http://localhost:3000/user/update/${params.id}`,
//         method: "patch",
//         data: data,
//       });
//       //       console.log(result);
//       navigate(`/user/${params.id}`);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <h1>User upadate form</h1>
//         <div>
//           <label htmlFor="fullname">FullName:</label>
//           <input
//             type="text"
//             name="fullName"
//             id="fullName"
//             value={fullName}
//             onChange={(e) => {
//               setFullName(e.target.value);
//             }}
//           />
//         </div>
//         <br />
//         <div>
//           <label htmlFor="age">Age:</label>
//           <input
//             type="number"
//             name="age"
//             id="age"
//             value={age}
//             onChange={(e) => {
//               setAge(e.target.value);
//             }}
//           />
//         </div>
//         <br />
//         <div>
//           <label htmlFor="address">Address:</label>
//           <input
//             type="text"
//             name="address"
//             id="address"
//             value={address}
//             onChange={(e) => {
//               setAddress(e.target.value);
//             }}
//           />
//         </div>
//         <br />
//         <div>
//           <button type="submit"> Update </button>
//         </div>
//       </form>
//     </>
//   );
// };

// export default UpdateUser;
