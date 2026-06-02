import { Link } from "react-router-dom";
import { Brain } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 h-16 bg-white/80 backdrop-blur-md border-b border-neutral-200"
    >
      {/* Logo */}
      <Link to="/">
        <motion.div
          className="flex items-center gap-2 group"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center shadow-sm group-hover:bg-yellow-500 transition-colors">
            <Brain className="w-5 h-5 text-black" />
          </div>
          <span className="text-xl font-black tracking-tight text-black">
            Second<span className="text-yellow-500">Brain</span>
          </span>
        </motion.div>
      </Link>

      {/* Buttons */}
      <div className="flex items-center gap-3">
        <Link to="/sign-in">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="px-5 py-2 text-sm font-bold text-black border-2 border-black rounded-lg hover:bg-black hover:text-white transition-colors duration-150"
          >
            Sign In
          </motion.button>
        </Link>
        <Link to="/sign-up">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="px-5 py-2 text-sm font-bold text-black bg-yellow-400 border-2 border-black rounded-lg hover:bg-yellow-500 transition-colors duration-150 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
          >
            Sign Up
          </motion.button>
        </Link>
      </div>
    </motion.nav>
  );
}