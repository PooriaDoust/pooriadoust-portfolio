import { motion } from "framer-motion";
import ScrollFloat from "./ScrollFloat";

const AboutSection = () => (
  <motion.section
    id="about"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.1 }}
    viewport={{ once: true }}
    className="py-12 md:py-16 w-full"
  >
    {/* Section divider */}
    <div className="w-full h-px bg-gradient-accent mb-12"></div>
    <ScrollFloat
      animationDuration={1}
      ease="back.inOut(2)"
      scrollStart="center bottom+=50%"
      scrollEnd="bottom bottom-=40%"
      stagger={0.03}
      textClassName="text-gradient-heading"
    >
      About Me
    </ScrollFloat>
    <div className="flex flex-col gap-4 p-6 md:p-8 w-full">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        viewport={{ once: true }}
        className="rounded-xl shadow-lg p-6 md:p-8 transition-shadow border border-default"
        style={{ background: 'var(--card, #fff)', color: 'var(--text-dark, #18181b)' }}
      >
        <p className="text-lg md:text-xl font-semibold leading-relaxed text-[var(--text-dark)] mb-6">
          Hi, I&apos;m Pooria Mohammad Doust, an IT Support Technician with over five years of hands-on experience keeping systems running smoothly and users productive. I thrive on solving technical challenges, from troubleshooting critical network issues to automating routine tasks with Python for efficient IT operations.
        </p>
        <p className="text-lg md:text-xl font-semibold leading-relaxed text-[var(--text-dark)] mb-6">
          With a Master&apos;s in Cybersecurity and Networking from Murdoch University, I&apos;ve deepened my expertise in endpoint security, network diagnostics (Wireshark, auditd), and proactive risk management. My background spans Windows and Linux environments, supporting digital transformation projects and reducing downtime to keep teams connected securely.
        </p>
        <p className="text-lg md:text-xl font-semibold leading-relaxed text-[var(--text-dark)] mb-6">
          I bridge the gap between technology and people by delivering practical, user-focused solutions. Whether deploying new systems, securing endpoints, or resolving urgent tickets under pressure, I approach every challenge with calm, curiosity, and a commitment to continuous learning.
        </p>
        <p className="text-lg md:text-xl font-semibold leading-relaxed text-[var(--text-dark)]">
          Outside of work, you&apos;ll find me exploring new cybersecurity tools, optimising my home lab, or enjoying good coffee while refining Python projects.
        </p>
      </motion.div>
    </div>
  </motion.section>
);

export default AboutSection; 