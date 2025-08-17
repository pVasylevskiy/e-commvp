'use client';

import { motion } from 'framer-motion';
import { GithubIcon, MailIcon } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border/20">
      <div className="glass-card mx-4 xs:mx-6 lg:mx-8 rounded-2xl mb-8">
        <div className="section-padding">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-display font-bold text-gradient mb-2">
                Moonlight
              </h3>
              <p className="text-muted-foreground">
                Luxury fragrances reimagined for the everyday
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Visit our GitHub repository"
              >
                <GithubIcon className="w-5 h-5" />
                <span className="hidden sm:inline">GitHub</span>
              </motion.a>
              
              <motion.a
                href="mailto:hello@moonlight.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Send us an email"
              >
                <MailIcon className="w-5 h-5" />
                <span className="hidden sm:inline">Email</span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center pb-8">
        <p className="text-sm text-muted-foreground">
          © 2024 Moonlight Perfume. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
