import AddContentModal from "@/components/AddContentModal";
import AppSidebar from "@/components/AppSidebar";
import ContentCard from "@/components/ContentCard";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import type { ContentCardType } from "@/types";
import { motion } from "framer-motion";
import { Brain, Plus, Search } from "lucide-react";
import { useState } from "react";

const placeholderCards: ContentCardType[] = [
  { _id: "1", title: "How to build a second brain", type: "article", link: "https://example.com", tags: ["productivity", "learning"] },
  { _id: "2", title: "The best tweet I ever saved", type: "tweet", link: "https://twitter.com", tags: ["inspiration"] },
  { _id: "3", title: "React 19 full course", type: "video", link: "https://youtube.com", tags: ["react", "dev"] },
  { _id: "4", title: "Design systems explained", type: "article", link: "https://example.com", tags: ["design"] },
  { _id: "5", title: "Lo-fi beats to code to", type: "audio", link: "https://example.com", tags: ["music", "focus"] },
];

export default function Dashboard(){

  const [activeFilter, setActiveFilter] = useState("all");
  const [search, setSearch] = useState(" ");
  const [cards, setCards] = useState<ContentCardType[]>(placeholderCards);

  const filtered = cards.filter((c) => {
    const matchesType = activeFilter === "all" || c.type === activeFilter;
    const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase());
    return matchesType && matchesSearch;
  });

  const handleDelete = (id: string) => {
    setCards(prev => prev.filter(c => c._id !== id))
  }

  

  return(
    <SidebarProvider>

      <div className="flex h-screen w-full bg-neutral-50 overflow-hidden">

        {/* left sidebar div */}
        <AppSidebar />

        {/* Header + content grid */}
        <div className="flex flex-col flex-1 min-w-0">

          {/* Header - sidebar opener + search bar + Add content button */}
          <header className="flex items-center gap-4 px-6 py-4 bg-white">

            <SidebarTrigger className="border-2 border-black rounded-lg p-1.5 hover:bg-yellow-400 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />

            {/* contains Search Icon and Search Bar */}
            <div className="flex-1 relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                placeholder="Search your brain..."
                value={search}
                onChange={(e) => {setSearch(e.target.value)}}
                className="w-full pl-9 pr-4 py-2 border-2 border-black rounded-xl text-sm font-medium placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              />
            </div>

            {/* Add Content Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="ml-auto flex flex-row items-center gap-2 border-2 border-black rounded-xl px-4 py-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] bg-yellow-400 hover:bg-yellow-500 transition-all font-black text-sm "
            >
              <Plus className="w-4 h-4" />
              Add Content
            </motion.button>

          </header>

          {/* Content grid div */}
          <main className="flex-1 overflow-y-auto p-6 ">
            
            <p className="text-sm font-bold text-neutral-500 mb-4">
              {filtered.length} {filtered.length===1 ? "item" : "items"}
            </p>

            {filtered.length === 0 ? (
              <div>
                <div>
                  <Brain className="w-8 h-8 text-yellow-600" />
                </div>
              </div>
            ): (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filtered.map(card => (
                  <ContentCard key={card._id} card={card} onDelete={handleDelete} />
                ))}
              </div>
            )}

          </main>

        </div>

          <AddContentModal

          />

      </div>

    </SidebarProvider>
  )
}