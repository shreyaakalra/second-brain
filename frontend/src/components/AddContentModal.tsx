import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const contentTypes = ["article", "video", "tweet", "image", "audio"];

interface AddContentModalProps {
  open: boolean;
  onClose: () => void;
  onAdd: (data: { title: string; link: string; type: string; tags: string[] }) => void;
}

export default function AddContentModal({ open, onClose, onAdd }: AddContentModalProps) {
  const [form, setForm] = useState({ title: "", link: "", type: "article", tags: "" });

  function handleSubmit() {
    if (!form.title || !form.link) return;
    onAdd({
      title: form.title,
      link: form.link,
      type: form.type,
      tags: form.tags.split(",").map(t => t.trim()).filter(Boolean),
    });
    setForm({ title: "", link: "", type: "article", tags: "" });
    onClose();
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-40"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white border-2 border-black rounded-2xl p-6 w-full max-w-md shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-black text-xl">Add Content</h2>
              <button onClick={onClose} className="p-1.5 hover:bg-neutral-100 rounded-lg transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-black uppercase tracking-widest">Title</label>
                <input
                  value={form.title}
                  onChange={e => setForm({ ...form, title: e.target.value })}
                  placeholder="What is this about?"
                  className="px-4 py-3 border-2 border-black rounded-xl text-sm font-medium placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-black uppercase tracking-widest">Link</label>
                <input
                  value={form.link}
                  onChange={e => setForm({ ...form, link: e.target.value })}
                  placeholder="https://..."
                  className="px-4 py-3 border-2 border-black rounded-xl text-sm font-medium placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-black uppercase tracking-widest">Type</label>
                <select
                  value={form.type}
                  onChange={e => setForm({ ...form, type: e.target.value })}
                  className="px-4 py-3 border-2 border-black rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-white"
                >
                  {contentTypes.map(t => (
                    <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-black uppercase tracking-widest">Tags <span className="normal-case font-medium text-neutral-400">(comma separated)</span></label>
                <input
                  value={form.tags}
                  onChange={e => setForm({ ...form, tags: e.target.value })}
                  placeholder="react, learning, design"
                  className="px-4 py-3 border-2 border-black rounded-xl text-sm font-medium placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleSubmit}
                className="mt-2 w-full py-3 bg-yellow-400 border-2 border-black rounded-xl font-black text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-500 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                Add to Brain
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}