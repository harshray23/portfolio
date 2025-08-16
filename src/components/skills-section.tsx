
'use client';

import React from "react";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24">
        <div className="container">
            <h2 className="text-3xl font-headline font-bold text-center mb-12">My Skills</h2>
            <div className="flex flex-wrap gap-6 justify-center max-w-4xl mx-auto">
                {skills.map((skill, index) => (
                <div
                    key={index}
                    className="relative group w-28 h-28 flex items-center justify-center rounded-xl bg-card shadow-md overflow-hidden cursor-pointer border border-border/60"
                >
                    <motion.span
                    className="font-semibold absolute text-foreground"
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                    >
                    {skill.name}
                    </motion.span>

                    <motion.div
                        className="absolute w-12 h-12 text-foreground"
                        initial={{ y: 60, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        >
                        <skill.icon className="w-full h-full" />
                    </motion.div>
                </div>
                ))}
            </div>
        </div>
    </section>
  );
}
