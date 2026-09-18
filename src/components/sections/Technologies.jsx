import { RiNodejsLine, RiReactjsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { TbBrandMongodb, TbBrandMysql, TbBrandPython } from "react-icons/tb";
import { FaJava } from "react-icons/fa6";

const technologyIcons = [
  { Icon: FaJava, className: "text-orange-400", label: "Java" },
  { Icon: TbBrandPython, className: "text-blue-900", label: "Python" },
  { Icon: TbBrandMongodb, className: "text-green-500", label: "MongoDB" },
  { Icon: SiExpress, className: "", label: "Express" },
  { Icon: RiReactjsLine, className: "text-cyan-400", label: "React" },
  { Icon: RiNodejsLine, className: "text-green-600", label: "Node.js" },
  { Icon: TbBrandMysql, className: "text-sky-700", label: "MySQL" },
];

const Technologies = () => {
  return (
    <div className="pb-24 border-b border-neutral-900">
      <h2 className="my-20 text-4xl text-center">
        TECHNOLOGIES
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {technologyIcons.map(({ Icon, className, label }) => (
          <div
            key={label}
            aria-label={label}
            className="p-4 border-4 rounded-2xl border-neutral-800"
          >
            <Icon className={`text-7xl ${className}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;