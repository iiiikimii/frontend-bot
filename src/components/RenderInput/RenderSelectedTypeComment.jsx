import { useState, useEffect, useRef} from "react";
import { motion, AnimatePresence } from "motion/react";
import { IoIosArrowDown } from "react-icons/io";


function RenderSelectedCommentType(name, onChange, value) {
  const [isOpen, setIsOpen] = useState(false)
  const [dataSelected, setDataSelected] = useState(false)
  const dropdownRef = useRef();

  const datas = ["Comment", "Reply"]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if(dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    if(isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleDropdown = () => {
    setIsOpen(!isOpen)
  }
  
  const handleSelect = (item) => {
    setDataSelected(item)
    setIsOpen(false)
    console.log('selected item: ', item)
    if(onChange) {
      onChange({ target: {name, value: item} })
    }
  }

  return (
    <div
      ref={dropdownRef}
      className="w-full relative"
    >
      <label className="text-[#144067] font-bold text-base capitalize">{name}</label>
      <button
        type="button"
        onClick={handleDropdown}
        className="flex items-center justify-between bg-netral-3 w-full tablet:w-80 h-14 rounded-xl py-4 px-3 bg-[#ffffff] border-3 border-[#e0e6f4]"
        style={{ padding: '8px 10px', marginTop: '6px' }}
      >
        <div className="w-full flex items-center gap-3">
          {/* cec8f7 */}
          <div className="flex items-center justify-center w-max h-max rounded-lg bg-[#e0e6f4]" style={{ padding: '4px' }}>
            <img
              src={'../../../public/icons/chat.png'}
              width={35}
              height={35}
              alt="post"
            />
          </div>
          <div className="flex items-center justify-between w-full" >
            <div className="w-full text-start">
              {dataSelected ? (
                <>
                  {dataSelected && <p className="font-normal text-md">{dataSelected}</p>}
                </>
              ) : (
                <p className="w-full font-normal text-md">Choose comment type...</p>
              )}
            </div>
            <div className="w-" >
              <IoIosArrowDown/>
            </div>
          </div>
        </div>
      </button>
      {/* ukuran smartphone tida usah pakai absolute */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, y: -10 }}
            className='border-3 border-[#e0e6f4] flex flex-col items-center justify-center absolute bg-white w-full h-max rounded-xl z-10 '
            style={{ marginTop: '4px' }} 
          >
            {datas && datas.length > 0 ? (
              datas.map((item, index) => (
                <li
                  onClick={() => handleSelect(item)}
                  key={index}
                  className={`${datas?.length - 1 === index ? '' : 'border-b border-[#153f67]'} ${index === 0 && 'hover:rounded-t-lg'} ${index === 2 && 'hover:rounded-b-lg'} flex justify-center items-center w-full h-12 cursor-pointer hover:bg-[#cbd0d4] `}
                  style={{ padding: '0px 4px' }}
                >
                  {item}
                </li>
              ))
            ) : (
              <p className="text-gray-500">No items available</p>
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )

}
export default RenderSelectedCommentType;


// const renderSelectedCommentType = (name, onChange, value) => (
//   <div className="flex flex-col gap-2 w-full">
//     <label className="text-[#144067] font-bold text-base">Comment Type</label>
//     <select
//       name={name}
//       className="h-12 px-4 py-2 text-left indent-4 rounded-lg border border-[#2B2B2B] w-full"
//       onChange={onChange}
//       value={value}
//     >
//       <option value="">Choose comment type...</option>
//       <option value="komentar">Comment</option>
//       <option value="balasan">Reply</option>
//       <option value="balasan">{name}</option>
//       <option value="balasan">{onChange}</option>
//     </select>
//   </div>
// );

// export default renderSelectedCommentType;