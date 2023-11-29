const UpdatePassPage = () => {
  return (
    <div className="relative bg-white h-full max-w-[700px] mx-auto my-4 py-3 px-4">
      <h1 className="py-7">Update Password</h1>
      <div className="flex-column space-y-5">
        <label>New Password</label>
        <input
          className="w-full p-2 rounded-sm mt-2 border-2 focus:outline-none"
          type="Password"
          placeholder="Password"
        />
        <label>Confirm Password</label>
        <input
          className="w-full p-2 rounded-sm mt-2 border-2 focus:outline-none"
          type="Password"
          placeholder="Confirm Password"
        />
      </div>
      <button className="uppercase my-5 text-white text-xs bg-[#f64e60] px-5 py-2 hover:bg-[#e1505e] duration-300">
        update password
      </button>
    </div>
  );
};

export default UpdatePassPage;
