import Image from "next/image";

const keywords = [
  "github",
  "git",
  "copilot",
  "git share code",
  "free git repos",
];

const DomainRow = () => {
  return (
    <div className="flex items-center justify-between gap-2 my-4 bg-white border border-blue-200 border-b-4 p-4 rounded-lg">
      <div className="flex gap-2 items-center">
        <Image
          src={"/github-logo.png"}
          alt="github icon"
          height={42}
          width={42}
        />
        <div>
          <h2 className="font-bold text-xl ">Github.com</h2>

          {keywords.map((keyword) => (
            <span
              key={keyword}
              className="text-gray-500 text-xs bg-slate-100 inline-block mt-1 mr-1 p-1 rounded-md"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
      <div>
        <div className="bg-green-100 w-48 h-24"></div>
      </div>
    </div>
  );
};

export default DomainRow;
