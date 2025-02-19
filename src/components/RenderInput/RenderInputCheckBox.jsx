import { useEffect, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import api from "../../axios/config";

const RenderSelectedDemografiCheckbox = ({ name, onChange, value }) => {
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

  const handleCheckboxChange = (id) => {
    let newValues = Array.isArray(value) ? [...value] : []; // Ensure value is an array
    if (newValues.includes(id)) {
      newValues = newValues.filter((item) => item !== id);
    } else {
      newValues.push(id);
    }
    onChange({ target: { name, value: newValues } });
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-[#2B2B2B] text-base">Demographics Target</label>
      <div className="flex gap-2">
        {demografiList.map((demografi) => (
          <label key={demografi.id_demografi} className="flex items-center gap-2">
            <input
              type="checkbox"
              name={name}
              value={demografi.id_demografi}
              checked={Array.isArray(value) && value.includes(demografi.id_demografi)}
              onChange={() => handleCheckboxChange(demografi.id_demografi)}
              className="mt-5"
            />
            {demografi.demografi}
          </label>
        ))}
      </div>
    </div>
  );
};

// ✅ PropTypes validation
RenderSelectedDemografiCheckbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
};

export default RenderSelectedDemografiCheckbox;
