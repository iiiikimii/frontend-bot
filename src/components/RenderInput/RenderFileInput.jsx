import { ImUpload2 } from "react-icons/im";
import { motion } from "motion/react";

const renderFileInput = (label, name, onChange, formData) => (
  <div className="flex flex-col gap-2 w-full">
    <div className="flex flex-col mb-12">
      <label className="text-base text-[#144067] font-bold">{label}</label>
      <div className="flex items-center justify-center w-full">
        <label className="flex flex-col items-center justify-center w-full h-40 bg-[#f2f6ff] border-3 border-blue-300 border-dashed rounded-md cursor-pointer">
          <motion.div
            animate={{ y: [0, 2, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ marginBottom: '10px' }}
          >
            {
              formData[name]?.name ? <img src="../../../public/icons/file.png" width={50} /> : <img src="../../../public/icons/upload.png" width={50} />
            }
          </motion.div>
          <p className="text-[#7494e3] text-sm min-[500px]:text-xl text-center font-semibold drop-shadow-md " >Click & Select File You Want</p>
          <input type="file" className="hidden" name={name} onChange={onChange} />
          {formData[name]?.name ? <p className="text-[#4256AC] font-semibold" >{formData[name].name}</p> : <p className="text-[#4256AC] text-sm font-semibold" >Upload File</p>}
        </label>
      </div>
    </div>
  </div>
);

{/* <label className="text-[#2B2B2B] text-base">{label}</label>
<input
  name={name}
  type="file"
  className="text-gray-400 h-12 px-4 py-2 text-left indent-4 placeholder:-translate-y-6 rounded-lg border border-[#2B2B2B] w-full"
  placeholder={placeholder}
  onChange={onChange}
  style={{lineHeight:"44px"}}
/> */}

export default renderFileInput;