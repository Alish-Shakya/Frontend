import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const CreateSubject = () => {
  let [subjectName, setSubjectName] = useState("");
  let [code, setCode] = useState("");
  let [creditHrs, setCreditHrs] = useState("");

  const handelSubmit = async (e) => {
    e.preventDefault();

    let data = {
      subjectName: subjectName,
      code: code,
      creditHrs: creditHrs,
    };
    try {
      let result = await axios({
        url: "http://localhost:3000/subject/createSubject",
        method: "POST",
        data: data,
      });
      console.log(result);
      toast.success(result.data.message);
      setSubjectName("");
      setCode("");
      setCreditHrs("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ToastContainer />
      <h1>Create subject Form </h1>

      <form onSubmit={handelSubmit}>
        <div>
          <label htmlFor="subjectName">Subject:</label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={subjectName}
            onChange={(e) => {
              setSubjectName(e.target.value);
            }}
          ></input>
        </div>
        <br />
        <br />

        <div>
          <label htmlFor="code">Code:</label>
          <input
            type="number"
            name="code"
            id="code"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
            }}
          ></input>
        </div>
        <br />
        <br />

        <div>
          <label htmlFor="creditHrs">Credit hours:</label>
          <input
            type="number"
            name="credit"
            id="Credit"
            value={creditHrs}
            onChange={(e) => {
              setCreditHrs(e.target.value);
            }}
          ></input>
        </div>
        <br />
        <button type="submit"> Submit </button>
      </form>
    </>
  );
};

export default CreateSubject;

// import axios from "axios";
// import React, { useState } from "react";
// import { toast, ToastContainer } from "react-toastify";

// const CreateSubject = () => {
//   let [subjectName, setSubjectName] = useState("");
//   let [code, setCode] = useState("");
//   let [creditHrs, setCreditHrs] = useState("");

//   const handelSubmit = async (e) => {
//     e.preventDefault();

//     let data = {
//       subjectName: subjectName,
//       code: code,
//       creditHrs: creditHrs,
//     };
//     try {
//       let result = await axios({
//         url: "http://localhost:3000/subject/createSubject",
//         method: "POST",
//         data: data,
//       });
//       console.log(result);
//       toast.success(result.data.message);
//       setSubjectName("");
//       setCode("");
//       setCreditHrs("");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       <ToastContainer />
//       <h1 className="text-2xl font-bold text-center mb-6">
//         Create Subject Form
//       </h1>

//       <form
//         onSubmit={handelSubmit}
//         className="max-w-md mx-auto bg-white p-6 rounded shadow-md space-y-4"
//       >
//         <div>
//           <label
//             htmlFor="subjectName"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Subject:
//           </label>
//           <input
//             type="text"
//             name="subject"
//             id="subject"
//             value={subjectName}
//             onChange={(e) => {
//               setSubjectName(e.target.value);
//             }}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
//           />
//         </div>

//         <div>
//           <label
//             htmlFor="code"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Code:
//           </label>
//           <input
//             type="number"
//             name="code"
//             id="code"
//             value={code}
//             onChange={(e) => {
//               setCode(e.target.value);
//             }}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
//           />
//         </div>

//         <div>
//           <label
//             htmlFor="creditHrs"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Credit hours:
//           </label>
//           <input
//             type="number"
//             name="credit"
//             id="Credit"
//             value={creditHrs}
//             onChange={(e) => {
//               setCreditHrs(e.target.value);
//             }}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
//         >
//           Submit
//         </button>
//       </form>
//     </>
//   );
// };

// export default CreateSubject;
