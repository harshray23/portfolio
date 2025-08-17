
'use client';

import React from "react";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import Image from "next/image";

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24">
        <div className="container">
            <h2 className="text-3xl font-headline font-bold text-center mb-12">My Skills</h2>
            <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
                {skills.map((skill, index) => (
                    <div key={index} className="relative group">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1}}
                        >
                            <Image 
                                src={skill.icon} 
                                alt={`${skill.name} icon`} 
                                width={80} 
                                height={80}
                                className="w-20 h-20 rounded-lg shadow-2xl absolute bottom-full mb-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                            />
                            <div className="px-5 py-2 rounded-full bg-card border border-border/60 cursor-pointer shadow-sm">
                                <span className="font-medium text-foreground">{skill.name}</span>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
