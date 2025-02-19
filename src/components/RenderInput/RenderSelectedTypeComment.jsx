const renderSelectedCommentType = (name, onChange, value) => (
  <div className="flex flex-col gap-2 w-full">
    <label className="text-[#2B2B2B] text-base">Comment Type</label>
    <select
      name={name}
      className="h-12 px-4 py-2 text-left indent-4 rounded-lg border border-[#2B2B2B] w-full"
      onChange={onChange}
      value={value}
    >
      <option value="">Choose comment type...</option>
      <option value="komentar">Comment</option>
      <option value="balasan">Reply</option>
    </select>
  </div>
);

export default renderSelectedCommentType;