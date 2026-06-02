import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Brain, ArrowRight } from "lucide-react";
 
export default function SignUp() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
 
  return (
    <div className="flex h-screen bg-white overflow-hidden">
 
      {/* Left - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 sm:px-16 relative z-10">
 
        {/* Logo */}
        <Link to="/">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 mb-12"
          >
            <div className="w-7 h-7 bg-yellow-400 rounded-md flex items-center justify-center border-2 border-black">
              <Brain className="w-4 h-4 text-black" />
            </div>
            <span className="font-black text-lg tracking-tight">
              Second<span className="text-yellow-500">Brain</span>
            </span>
          </motion.div>
        </Link>
 
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-4xl font-black tracking-tight text-black leading-tight">
            Create your<br />
            <span className="relative inline-block">
              <span className="relative z-10">account.</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-yellow-400 -z-10 rounded-sm" />
            </span>
          </h1>
          <p className="mt-3 text-sm text-neutral-500 font-medium">
            Already have one?{" "}
            <Link to="/sign-in" className="text-black font-bold underline underline-offset-2 hover:text-yellow-600 transition-colors">
              Sign in instead
            </Link>
          </p>
        </motion.div>
 
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-col gap-4 max-w-sm"
        >
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-black uppercase tracking-widest text-black">Name</label>
            <input
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="px-4 py-3 border-2 border-black rounded-xl text-sm font-medium placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-shadow"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-black uppercase tracking-widest text-black">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              className="px-4 py-3 border-2 border-black rounded-xl text-sm font-medium placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-shadow"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-black uppercase tracking-widest text-black">Password</label>
            <input
              type="password"
              placeholder="Min 8 characters"
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
              className="px-4 py-3 border-2 border-black rounded-xl text-sm font-medium placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-shadow"
            />
          </div>
 
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="mt-2 flex items-center justify-center gap-2 w-full py-3 bg-yellow-400 border-2 border-black rounded-xl font-black text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-500 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            Create Account
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
 
      {/* Divider */}
      <div className="hidden md:block w-px bg-neutral-200" />
 
      {/* Right - Image + overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="hidden md:block md:w-1/2 relative overflow-hidden"
      >
        <img src="/yellow.jpg" className="w-full h-full object-cover" />
        {/* Dark overlay with text */}
        <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-white font-black text-3xl leading-tight drop-shadow-lg"
          >
            "I never lose a<br />good idea anymore."
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-3 text-white/70 text-sm font-medium"
          >
            — SecondBrain user
          </motion.p>
        </div>
      </motion.div>
 
    </div>
  );
}
 