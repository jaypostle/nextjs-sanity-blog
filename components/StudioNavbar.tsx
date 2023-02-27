import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <div className="text-[#e9ca79] flex items-center">
          <Link href="/">
            <ArrowUturnLeftIcon className="h-6 w-6 text-[#e9ca79] mr-2" />
            Go to website
          </Link>
        </div>
        <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#e9ca79]">
          <h1 className="font-bold text-white">
            Subscribe here for awesome hiking tips!
          </h1>
          <Link href="/subscribe" className="text-[#e9ca79] ml-2">
            Subscribe here...
          </Link>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
