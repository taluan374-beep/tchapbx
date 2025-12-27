import { motion } from 'framer-motion'

const HAArchitecture = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Zero Downtime',
      subtitle: 'Active-Active Cluster Architecture',
      description: 'Both servers actively handle traffic simultaneously. No standby waste. Instant load distribution with health-aware routing.',
      color: 'neon-cyan',
      stats: { value: '0ms', label: 'Failover Time' },
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: 'Automatic Failover',
      subtitle: 'Self-Healing Infrastructure',
      description: 'Continuous health monitoring every 5 seconds. Automatic traffic rerouting in milliseconds when issues are detected. Zero dropped calls.',
      color: 'neon-purple',
      stats: { value: '<100ms', label: 'Detection Time' },
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Geo-Redundancy',
      subtitle: 'Multi-Region Data Sync',
      description: 'Data synchronously replicated across 3+ geographic regions. Automatic DNS failover routes users to the nearest healthy datacenter.',
      color: 'neon-cyan',
      stats: { value: '3+', label: 'Regions' },
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="ha-architecture" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-800 to-navy-900" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-neon-cyan font-mono text-sm tracking-wider">
              HIGH AVAILABILITY
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
              Built for <span className="gradient-text">99.999%</span> Uptime
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Our High Availability architecture ensures your business communications
              never go down. Every component is redundant, every failure is anticipated,
              and recovery is automatic.
            </p>

            {/* Features List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="flex gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-${feature.color}/20 flex items-center justify-center flex-shrink-0 group-hover:bg-${feature.color}/30 transition-colors`}>
                      <span className={`text-${feature.color}`}>{feature.icon}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-lg font-semibold">{feature.title}</h3>
                        <span className={`text-xs font-mono px-2 py-0.5 rounded bg-${feature.color}/20 text-${feature.color}`}>
                          {feature.stats.value} {feature.stats.label}
                        </span>
                      </div>
                      <p className="text-sm text-neon-cyan/80 mb-2">{feature.subtitle}</p>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="#"
                className="inline-flex items-center gap-2 btn-primary"
              >
                <span>Read HA Documentation</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right: Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* HA Diagram SVG */}
            <div className="glass-card p-8 relative">
              <svg
                viewBox="0 0 400 500"
                className="w-full h-auto"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Gradient definitions */}
                <defs>
                  <linearGradient id="haGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00f5ff" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                  <filter id="haGlow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* User/Client */}
                <g>
                  <rect x="150" y="20" width="100" height="50" rx="8" fill="#151d35" stroke="#00f5ff" strokeWidth="2" />
                  <text x="200" y="50" textAnchor="middle" fill="#fff" fontSize="12" fontFamily="Inter">Users</text>
                  <circle cx="200" cy="35" r="8" fill="#00f5ff" opacity="0.3" />
                </g>

                {/* Load Balancer */}
                <motion.g
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <rect x="125" y="100" width="150" height="50" rx="8" fill="#151d35" stroke="url(#haGradient)" strokeWidth="2" filter="url(#haGlow)" />
                  <text x="200" y="130" textAnchor="middle" fill="#00f5ff" fontSize="11" fontFamily="JetBrains Mono">Load Balancer</text>
                </motion.g>

                {/* Connection lines from user to LB */}
                <motion.line
                  x1="200" y1="70" x2="200" y2="100"
                  stroke="#00f5ff"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  animate={{ strokeDashoffset: [0, -16] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />

                {/* Primary Server */}
                <g>
                  <rect x="50" y="200" width="120" height="80" rx="8" fill="#151d35" stroke="#22c55e" strokeWidth="2" />
                  <text x="110" y="230" textAnchor="middle" fill="#22c55e" fontSize="11" fontFamily="JetBrains Mono">Primary</text>
                  <text x="110" y="250" textAnchor="middle" fill="#fff" fontSize="10">Active</text>
                  <circle cx="60" cy="215" r="5" fill="#22c55e">
                    <animate attributeName="opacity" values="1;0.5;1" dur="1s" repeatCount="indefinite" />
                  </circle>
                </g>

                {/* Secondary Server */}
                <g>
                  <rect x="230" y="200" width="120" height="80" rx="8" fill="#151d35" stroke="#22c55e" strokeWidth="2" />
                  <text x="290" y="230" textAnchor="middle" fill="#22c55e" fontSize="11" fontFamily="JetBrains Mono">Secondary</text>
                  <text x="290" y="250" textAnchor="middle" fill="#fff" fontSize="10">Active</text>
                  <circle cx="240" cy="215" r="5" fill="#22c55e">
                    <animate attributeName="opacity" values="1;0.5;1" dur="1s" repeatCount="indefinite" begin="0.5s" />
                  </circle>
                </g>

                {/* Connections from LB to servers */}
                <motion.path
                  d="M 175 150 L 110 200"
                  stroke="#00f5ff"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  animate={{ strokeDashoffset: [0, -16] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <motion.path
                  d="M 225 150 L 290 200"
                  stroke="#a855f7"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  animate={{ strokeDashoffset: [0, -16] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear", delay: 0.5 }}
                />

                {/* Sync arrow between servers */}
                <g>
                  <line x1="170" y1="240" x2="230" y2="240" stroke="#a855f7" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  <line x1="230" y1="250" x2="170" y2="250" stroke="#a855f7" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  <text x="200" y="270" textAnchor="middle" fill="#a855f7" fontSize="9" fontFamily="JetBrains Mono">Real-time Sync</text>
                </g>

                {/* Database Cluster */}
                <g>
                  <rect x="100" y="330" width="200" height="60" rx="8" fill="#151d35" stroke="#00f5ff" strokeWidth="2" />
                  <text x="200" y="355" textAnchor="middle" fill="#00f5ff" fontSize="11" fontFamily="JetBrains Mono">Database Cluster</text>
                  <text x="200" y="375" textAnchor="middle" fill="#666" fontSize="10">3x Replicas | Auto Failover</text>
                </g>

                {/* Connections to DB */}
                <line x1="110" y1="280" x2="150" y2="330" stroke="#666" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="290" y1="280" x2="250" y2="330" stroke="#666" strokeWidth="1" strokeDasharray="4 4" />

                {/* Region Labels */}
                <g>
                  <rect x="25" y="420" width="80" height="30" rx="4" fill="#151d35" stroke="#00f5ff" strokeWidth="1" />
                  <text x="65" y="440" textAnchor="middle" fill="#00f5ff" fontSize="9" fontFamily="JetBrains Mono">US-East</text>
                </g>
                <g>
                  <rect x="160" y="420" width="80" height="30" rx="4" fill="#151d35" stroke="#a855f7" strokeWidth="1" />
                  <text x="200" y="440" textAnchor="middle" fill="#a855f7" fontSize="9" fontFamily="JetBrains Mono">EU-West</text>
                </g>
                <g>
                  <rect x="295" y="420" width="80" height="30" rx="4" fill="#151d35" stroke="#00f5ff" strokeWidth="1" />
                  <text x="335" y="440" textAnchor="middle" fill="#00f5ff" fontSize="9" fontFamily="JetBrains Mono">AP-South</text>
                </g>

                {/* Connection lines to regions */}
                <line x1="150" y1="390" x2="65" y2="420" stroke="#00f5ff" strokeWidth="1" opacity="0.5" />
                <line x1="200" y1="390" x2="200" y2="420" stroke="#a855f7" strokeWidth="1" opacity="0.5" />
                <line x1="250" y1="390" x2="335" y2="420" stroke="#00f5ff" strokeWidth="1" opacity="0.5" />

                {/* Arrowhead marker */}
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#a855f7" />
                  </marker>
                </defs>
              </svg>

              {/* Legend */}
              <div className="flex items-center justify-center gap-6 mt-4 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-status-green" />
                  <span className="text-gray-400">Active Server</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-neon-cyan" />
                  <span className="text-gray-400">Data Flow</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-neon-purple" />
                  <span className="text-gray-400">Sync</span>
                </div>
              </div>
            </div>

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -top-4 -right-4 glass-card px-4 py-2 border border-neon-cyan/30"
            >
              <span className="text-gray-400 text-sm">Recovery Time:</span>
              <span className="text-neon-cyan font-mono font-bold ml-2">&lt;100ms</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="absolute -bottom-4 -left-4 glass-card px-4 py-2 border border-neon-purple/30"
            >
              <span className="text-gray-400 text-sm">Data Loss:</span>
              <span className="text-neon-purple font-mono font-bold ml-2">0 bytes</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HAArchitecture
