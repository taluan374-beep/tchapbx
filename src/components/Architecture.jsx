import { motion } from 'framer-motion'

const Architecture = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  // Animation for the flow lines
  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.5, ease: 'easeInOut' },
    },
  }

  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      transition: { duration: 2, repeat: Infinity },
    },
  }

  return (
    <section id="architecture" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-800 to-navy-900" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-neon-cyan font-mono text-sm tracking-wider">
            ARCHITECTURE
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            How <span className="gradient-text">TchaPBX</span> Works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Enterprise-grade infrastructure with carrier-grade reliability.
            Built on proven SIP standards with modern security.
          </p>
        </motion.div>

        {/* Interactive Architecture Diagram */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* SVG Diagram */}
          <div className="glass-card p-8 md:p-12">
            <svg
              viewBox="0 0 1000 400"
              className="w-full h-auto"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Gradient definitions */}
              <defs>
                <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00f5ff" stopOpacity="0" />
                  <stop offset="50%" stopColor="#00f5ff" stopOpacity="1" />
                  <stop offset="100%" stopColor="#00f5ff" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
                  <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
                  <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Connection Lines */}
              <motion.path
                variants={lineVariants}
                d="M 200 200 L 400 200"
                stroke="url(#cyanGradient)"
                strokeWidth="3"
                strokeDasharray="10 5"
                filter="url(#glow)"
              />
              <motion.path
                variants={lineVariants}
                d="M 600 200 L 800 200"
                stroke="url(#purpleGradient)"
                strokeWidth="3"
                strokeDasharray="10 5"
                filter="url(#glow)"
              />

              {/* Node 1: Your App */}
              <motion.g variants={itemVariants}>
                <rect
                  x="50"
                  y="150"
                  width="150"
                  height="100"
                  rx="12"
                  fill="#151d35"
                  stroke="#00f5ff"
                  strokeWidth="2"
                  filter="url(#glow)"
                />
                <text x="125" y="190" textAnchor="middle" fill="#00f5ff" fontSize="14" fontFamily="JetBrains Mono">
                  Your App
                </text>
                <text x="125" y="220" textAnchor="middle" fill="#666" fontSize="12" fontFamily="JetBrains Mono">
                  WebRTC / SDK
                </text>
                {/* Pulse indicator */}
                <motion.circle
                  variants={pulseVariants}
                  animate="animate"
                  cx="185"
                  cy="165"
                  r="6"
                  fill="#22c55e"
                />
              </motion.g>

              {/* Protocol Label 1 */}
              <motion.g variants={itemVariants}>
                <rect x="250" y="160" width="100" height="30" rx="6" fill="#0a0e1a" stroke="#00f5ff" strokeWidth="1" />
                <text x="300" y="180" textAnchor="middle" fill="#00f5ff" fontSize="11" fontFamily="JetBrains Mono">
                  SIP/TLS
                </text>
                <rect x="250" y="200" width="100" height="30" rx="6" fill="#0a0e1a" stroke="#a855f7" strokeWidth="1" />
                <text x="300" y="220" textAnchor="middle" fill="#a855f7" fontSize="11" fontFamily="JetBrains Mono">
                  SRTP
                </text>
              </motion.g>

              {/* Node 2: TchaPBX Core */}
              <motion.g variants={itemVariants}>
                <rect
                  x="400"
                  y="120"
                  width="200"
                  height="160"
                  rx="16"
                  fill="#151d35"
                  stroke="url(#cyanGradient)"
                  strokeWidth="3"
                  filter="url(#glow)"
                />
                {/* Inner glow */}
                <rect
                  x="410"
                  y="130"
                  width="180"
                  height="140"
                  rx="12"
                  fill="none"
                  stroke="#00f5ff"
                  strokeWidth="1"
                  opacity="0.3"
                />
                <text x="500" y="165" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold" fontFamily="Inter">
                  TchaPBX Core
                </text>
                <text x="500" y="190" textAnchor="middle" fill="#00f5ff" fontSize="12" fontFamily="JetBrains Mono">
                  SIP Proxy
                </text>
                <text x="500" y="210" textAnchor="middle" fill="#666" fontSize="11" fontFamily="JetBrains Mono">
                  Load Balancer
                </text>
                <text x="500" y="230" textAnchor="middle" fill="#666" fontSize="11" fontFamily="JetBrains Mono">
                  Media Server
                </text>
                <text x="500" y="250" textAnchor="middle" fill="#666" fontSize="11" fontFamily="JetBrains Mono">
                  Recording Engine
                </text>
                {/* Status indicator */}
                <motion.circle
                  variants={pulseVariants}
                  animate="animate"
                  cx="585"
                  cy="135"
                  r="8"
                  fill="#22c55e"
                />
              </motion.g>

              {/* Protocol Label 2 */}
              <motion.g variants={itemVariants}>
                <rect x="650" y="160" width="100" height="30" rx="6" fill="#0a0e1a" stroke="#00f5ff" strokeWidth="1" />
                <text x="700" y="180" textAnchor="middle" fill="#00f5ff" fontSize="11" fontFamily="JetBrains Mono">
                  SIP/TLS
                </text>
                <rect x="650" y="200" width="100" height="30" rx="6" fill="#0a0e1a" stroke="#a855f7" strokeWidth="1" />
                <text x="700" y="220" textAnchor="middle" fill="#a855f7" fontSize="11" fontFamily="JetBrains Mono">
                  SRTP
                </text>
              </motion.g>

              {/* Node 3: Carrier */}
              <motion.g variants={itemVariants}>
                <rect
                  x="800"
                  y="150"
                  width="150"
                  height="100"
                  rx="12"
                  fill="#151d35"
                  stroke="#a855f7"
                  strokeWidth="2"
                  filter="url(#glow)"
                />
                <text x="875" y="190" textAnchor="middle" fill="#a855f7" fontSize="14" fontFamily="JetBrains Mono">
                  PSTN / Carrier
                </text>
                <text x="875" y="220" textAnchor="middle" fill="#666" fontSize="12" fontFamily="JetBrains Mono">
                  SIP Trunk
                </text>
                <motion.circle
                  variants={pulseVariants}
                  animate="animate"
                  cx="935"
                  cy="165"
                  r="6"
                  fill="#22c55e"
                />
              </motion.g>

              {/* Data flow animation dots */}
              <motion.circle
                cx="0"
                cy="200"
                r="4"
                fill="#00f5ff"
                filter="url(#glow)"
                animate={{
                  cx: [200, 400],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              <motion.circle
                cx="0"
                cy="200"
                r="4"
                fill="#a855f7"
                filter="url(#glow)"
                animate={{
                  cx: [600, 800],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: 1,
                }}
              />
            </svg>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: '🔐',
                title: 'End-to-End Encryption',
                desc: 'TLS 1.3 for signaling, SRTP for media. Your calls are always secure.',
                color: 'neon-cyan',
              },
              {
                icon: '🌍',
                title: 'Global POPs',
                desc: 'Edge servers in 15+ regions. Route calls via the nearest POP automatically.',
                color: 'neon-purple',
              },
              {
                icon: '📊',
                title: 'Real-time Analytics',
                desc: 'Live MOS scores, jitter, packet loss. Debug issues before users notice.',
                color: 'neon-cyan',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`glass-card p-6 border-t-2 border-${feature.color} hover:shadow-${feature.color} transition-all`}
              >
                <span className="text-3xl mb-4 block">{feature.icon}</span>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Architecture
