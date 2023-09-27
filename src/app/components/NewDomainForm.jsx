const NewDomainForm = () => {
  return (
    <form className="flex gap-2 my-8">
      <input
        type="text"
        placeholder="newDomain.com"
        className="grow bg-white border border-b-4 border-blue-200 outline-none rounded-md px-4 py-2 text-xl"
      />
      <button className="bg-indigo-500 text-white px-8 rounded-lg border border-b-4 border-indigo-700">
        Add
      </button>
    </form>
  );
};

export default NewDomainForm;
