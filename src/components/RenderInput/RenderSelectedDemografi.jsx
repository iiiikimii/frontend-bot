import { useEffect, useState } from "react";
import api from "../../axios/config";

const RenderSelectedDemografi = ({ name, onChange, value }) => {
  const [demografiList, setDemografiList] = useState([]);

  useEffect(() => {
    const fetchDemografi = async () => {
      try {
        const response = await api.get("/demografis");
        setDemografiList(response.data.Data); 
      } catch (error) {
        console.error("Error fetching demografi:", error);
      }
    };

    fetchDemografi();
  }, []);

  return (
    <div className="flex flex-col gap-2 w-full">
    <label className="text-[#2B2B2B] text-base">Demographic</label>
    <select
        name={name}
        className="h-12 px-4 py-2 text-left indent-4 rounded-lg border border-[#2B2B2B] w-full"
        onChange={onChange}
        value={value}
      >
        <option value="">Choose demografi...</option>
        {demografiList.map((demografi) => (
          <option key={demografi.id_demografi} value={demografi.id_demografi}>
            {demografi.demografi}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RenderSelectedDemografi;
