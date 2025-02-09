import MainWrapper from "../../../components/wrapper/MainWrapper";

const Profile = () => {
  return (
    <MainWrapper title={"Profile"} description={"Profile"}>
      <div className="p-4">
        <div className="mt-4">
          <table className="w-full border-collapse border border-gray-300 text-center">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">No</th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">Role</th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  1
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  example@example.com
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  Admin
                </td>
                <td className="border border-gray-300 px-4 py-2 flex justify-center gap-2">
                  <button className="bg-blue-600 text-white px-2 py-1 rounded">
                    ▉
                  </button>
                  <button className="bg-red-600 text-white px-2 py-1 rounded">
                    ▉
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </MainWrapper>
  );
};

export default Profile;
