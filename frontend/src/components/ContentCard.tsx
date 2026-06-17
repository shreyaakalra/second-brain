import { ExternalLink, Trash2 } from "lucide-react";

export default function ContentCard(){
  return(
    <div className="bg-white border-2 border-black rounded-2xl p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-3 group hover:-translate-y-1 transition-transform duration-200 ">

      <div className="flex items-center justify-between">

        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-black border border-current">
          card types
        </span>

        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">

          <a href="https://www.google.com/" className="p-1.5 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
          </a>
          <button className="p-1.5 rounded-lg hover:bg-red-50 transition-colors" >
            <Trash2 className="w-3.5 h-3.5 text-red-500" />
          </button>
        </div>

      </div>


    </div>
  )
}