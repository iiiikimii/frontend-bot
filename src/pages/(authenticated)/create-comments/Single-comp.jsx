
import renderInput from "./renderInput-comp";

const batchComp = () => {
  return (
    <div className="flex flex-col gap-14 text-left">

      {/* di sini update isi inputnya aja */}
      {/* langsung fungsikan */}

      <form className="flex flex-col gap-6 w-full">
        {renderInput("Name", "Name your batch comment...")}
        {renderInput("Content Link", "Place your CSV here or content link")}
        {renderInput("Comment", "Place your comment.txt here")}
        {renderInput("Count of Comment", "Type your count of comment")}
        <div className="text-sm text-[#0D9D00] italic">Successfully</div>
        <button
          type="submit"
          className="h-12 bg-[#1C8CF5] rounded-md text-white text-lg font-semibold border-none cursor-pointer"
        >
          Create Comments
        </button>
      </form>
    </div>
  );
};

export default batchComp;