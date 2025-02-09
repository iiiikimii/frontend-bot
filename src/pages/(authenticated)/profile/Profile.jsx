import MainWrapper from "../../../components/wrapper/MainWrapper";
import { FaEdit, FaTrash } from "react-icons/fa";

const Profile = () => {
  const users = [
    { id: 1, email: "example@example.com", role: "Admin" },
    { id: 2, email: "user1@example.com", role: "User" },
    { id: 3, email: "user2@example.com", role: "Moderator" },
    { id: 4, email: "user3@example.com", role: "User" },
    { id: 5, email: "user4@example.com", role: "Admin" },
  ];

  return (
    <MainWrapper title={"Profile"} description={"Profile"}>
      <div className="p-4">
        <div className="mt-4">
          <table className="w-full border-collapse border border-gray-300 text-center">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">No</th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">Role</th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {index + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {user.email}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {user.role}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 flex justify-center gap-2">
                    <button
                      className="text-gray-500 px-2 py-1 rounded"
                      onClick={() => alert("Edit Clicked")}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="text-gray-500 px-2 py-1 rounded"
                      onClick={() => alert("Delete Clicked")}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MainWrapper>
  );
};

export default Profile;
