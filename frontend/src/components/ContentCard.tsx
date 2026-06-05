import { ExternalLink, Trash2, FileText, XIcon, RouteIcon, Image, Headphones } from "lucide-react";
import type { ContentCard as ContentCardType } from "../types/index";

const typeColors: Record<string, string> = {
  article: "bg-blue-100 text-blue-800",
  tweet: "bg-sky-100 text-sky-800",
  video: "bg-red-100 text-red-800",
  image: "bg-purple-100 text-purple-800",
  audio: "bg-green-100 text-green-800",
};

const typeIcons: Record<string, React.ReactNode> = {
  article: <FileText className="w-4 h-4" />,
  tweet: <XIcon className="w-4 h-4" />,
  video: <RouteIcon className="w-4 h-4" />,
  image: <Image className="w-4 h-4" />,
  audio: <Headphones className="w-4 h-4" />,
};

interface ContentCardProps {
  card: ContentCardType;
  onDelete: (id: string) => void;
}

export default function ContentCard({ card, onDelete }: ContentCardProps) {
  return (
    <div className="bg-white border-2 border-black rounded-2xl p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-3 group hover:-translate-y-1 transition-transform duration-200">
      {/* Type badge + actions */}
      <div className="flex items-center justify-between">
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-black border border-current ${typeColors[card.type]}`}>
          {typeIcons[card.type]}
          {card.type.charAt(0).toUpperCase() + card.type.slice(1)}
        </span>
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <a
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
          </a>
          <button
            onClick={() => onDelete(card._id)}
            className="p-1.5 rounded-lg hover:bg-red-50 transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5 text-red-500" />
          </button>
        </div>
      </div>

      {/* Title */}
      <p className="font-black text-black leading-snug">{card.title}</p>

      {/* Tags */}
      {card.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {card.tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 bg-neutral-100 text-neutral-600 text-xs font-bold rounded-full">
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}