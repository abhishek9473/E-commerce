function Dropdown({ register, data }) {
  const option = data;

  return (
    <div className="relative inline-block text-left">
      <select
        {...register("categoryId")}
        className="block appearance-none w-full py-2 px-4 pr-8 rounded-md shadow-sm border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
      >
        <option value="">Select an option</option>
        {/* all option are map here and set the value by choosing one */}
        {option?.map((data, i) => (
          <option key={i} value={data.id}>
            {data.categoeryName}
          </option>
        ))}
        <option className="green-effect" value="">--Add a cetegory--</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.2929 13.2929C10.6834 13.6834 11.3166 13.6834 11.7071 13.2929L15.7071 9.29289C16.0976 8.90237 16.0976 8.26921 15.7071 7.87868C15.3166 7.48815 14.6834 7.48815 14.2929 7.87868L10 12.1716L5.70711 7.87868C5.31658 7.48815 4.68342 7.48815 4.29289 7.87868C3.90237 8.26921 3.90237 8.90237 4.29289 9.29289L8.29289 13.2929C8.68342 13.6834 9.31658 13.6834 9.70711 13.2929L9.29289 13.7071C9.48043 13.8946 9.73478 14 10 14C10.2652 14 10.5196 13.8946 10.7071 13.7071L10.2929 13.2929Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}

export default Dropdown;
