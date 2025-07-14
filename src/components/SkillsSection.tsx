import { motion } from "framer-motion";
import { FaDesktop, FaNetworkWired, FaCode, FaBrain } from "react-icons/fa";
import ScrollFloat from "./ScrollFloat";
import FuzzyText from "./FuzzyText";

const skills = [
  {
    icon: <FaDesktop className="text-primary text-2xl" />, // IT Support
    title: "IT Support & Systems",
    items: [
      "Windows Server & Desktop",
      "Linux (Ubuntu, CentOS)",
      "Active Directory",
      "Endpoint Protection",
      "Troubleshooting & Help Desk",
      "SLA Adherence",
      "Office 365 Admin",
    ],
  },
  {
    icon: <FaNetworkWired className="text-primary text-2xl" />, // Networking
    title: "Networking & Security",
    items: [
      "Wireshark, auditd",
      "VPNs, VLANs",
      "OSPF, Firewalls",
      "Basic AWS & Azure",
      "Vulnerability Management",
      "Network Diagnostics",
    ],
  },
  {
    icon: <FaCode className="text-primary text-2xl" />, // Programming
    title: "Programming & Tools",
    items: [
      "Python",
      "Bash",
      "Git",
      "Cisco Packet Tracer",
      "ServiceNow",
    ],
  },
  {
    icon: <FaBrain className="text-primary text-2xl" />, // Soft Skills
    title: "Soft Skills",
    items: [
      "Cross-functional Collaboration",
      "Clear Documentation",
      "Customer Service",
      "Problem-Solving",
      "Adaptability",
    ],
  },
];

const SkillsSection = () => (
  <motion.section
    id="skills"
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
      Skills
    </ScrollFloat>
    <div className="flex flex-col gap-8 p-6 md:p-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((group) => (
          <div
            key={group.title}
            className="flex flex-col gap-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 cursor-pointer border border-default"
            style={{ background: 'var(--card, #fff)', color: 'var(--text-dark, #18181b)' }}
            tabIndex={0}
          >
            <div className="flex items-center mb-1">
              {group.icon}
              <span className="font-semibold text-xl md:text-2xl text-primary-light -ml-10">
                <FuzzyText 
                  baseIntensity={0.04} 
                  hoverIntensity={0.10} 
                  enableHover={true}
                  fontSize="1.75rem"
                  fontWeight={600}
                >
                  {group.title}
                </FuzzyText>
              </span>
            </div>
            <ul className="list-disc list-inside ml-2 text-lg md:text-xl font-medium leading-relaxed text-[var(--text-dark)] space-y-1">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default SkillsSection; 