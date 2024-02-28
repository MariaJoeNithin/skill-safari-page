import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { STORAGE } from "../../firebase/config";

const Adminhome = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    try {
      const GetData = async () => {
        const datum = await getDocs(
          collection(STORAGE, "skillsafari course request")
        );
        const data = datum.docs.map((target) => ({
          id: target.id,
          ...target.data(),
        }));
        console.log(data);
        setStudents(data);
      };
      GetData();
    } catch (error) {
      console.error("Error getting documents: ", error);
    }
  }, [students]);

    // const handleStatusChange = (userId, event) => {
    //   const { value } = event.target;

    //   firebase.firestore().collection("skillsafari course request").doc(userId).update({
    //     Status: value,
    //   });
    // };

  return (
    <>
      <h1 className="text-xl">Adminhome</h1>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Enquiry About</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students?.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user?.Name}</td>
              <td>{user?.Email}</td>
              <td>{user?.MobileNumber}</td>
              <td>{user?.EnquiryType}</td>
              <td>
                <select
                  value={user?.Status}
                    // onChange={(event) => handleStatusChange(user?.id, event)}
                >
                  <option value="Interested">Interested</option>
                  <option value="pending">Pending</option>
                  <option value="notInterested">Not Interested</option>
                  <option value="Joined">Joined</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Adminhome;
