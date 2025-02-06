import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Home = () => (
  <div className="text-white bg-black min-h-screen p-6 text-center">
    <h1 className="text-4xl font-bold text-neon">New Token AI</h1>
    <p className="mt-4 text-lg">AI-powered Blockchain Innovation</p>
    <motion.div className="mt-10 flex justify-center" whileHover={{ scale: 1.05 }}>
      <Button className="bg-neon p-4 rounded-lg">Explore More</Button>
    </motion.div>
  </div>
);

export default Home;