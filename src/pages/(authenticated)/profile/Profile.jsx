import MainWrapper from "../../../components/wrapper/MainWrapper";

const Profile = () => {
  return (
    <MainWrapper title={"Profile"} description={"Profile"}>
      <div className="p-4">
        <div className="mt-4">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">No</th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">1</td>
                <td className="border border-gray-300 px-4 py-2">example@example.com</td>
                <td className="border border-gray-300 px-4 py-2">Admin</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </MainWrapper>
  );
};

export default Profile;