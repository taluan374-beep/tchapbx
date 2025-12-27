import { motion } from 'framer-motion'

const PerformanceGrid = () => {
  const metrics = [
    {
      value: '<30ms',
      label: 'Global Latency',
      desc: 'P99 latency across all regions',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'neon-cyan',
      gradient: 'from-neon-cyan/20 to-neon-cyan/5',
    },
    {
      value: '>4.2',
      label: 'MOS Score',
      desc: 'Mean Opinion Score for call quality',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: 'neon-purple',
      gradient: 'from-neon-purple/20 to-neon-purple/5',
    },
    {
      value: '15+',
      label: 'Global POPs',
      desc: 'Edge locations worldwide',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'neon-cyan',
      gradient: 'from-neon-cyan/20 to-neon-cyan/5',
    },
    {
      value: '99.99%',
      label: 'Uptime SLA',
      desc: 'Carrier-grade reliability',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'status-green',
      gradient: 'from-status-green/20 to-status-green/5',
    },
    {
      value: '10M+',
      label: 'Calls/Month',
      desc: 'Processed reliably at scale',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      color: 'neon-purple',
      gradient: 'from-neon-purple/20 to-neon-purple/5',
    },
    {
      value: '<0.1%',
      label: 'Packet Loss',
      desc: 'Crystal clear audio quality',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      color: 'neon-cyan',
      gradient: 'from-neon-cyan/20 to-neon-cyan/5',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="performance" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-neon-cyan font-mono text-sm tracking-wider">
            PERFORMANCE
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Built for <span className="gradient-text">Scale</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Enterprise-grade infrastructure that handles millions of calls while
            maintaining exceptional quality metrics.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`glass-card p-8 relative overflow-hidden group cursor-pointer`}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative z-10">
                <div className={`text-${metric.color} mb-4`}>{metric.icon}</div>
                <div className={`text-4xl md:text-5xl font-bold font-mono text-${metric.color} mb-2`}>
                  {metric.value}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {metric.label}
                </h3>
                <p className="text-gray-400 text-sm">{metric.desc}</p>
              </div>

              {/* Corner accent */}
              <div
                className={`absolute top-0 right-0 w-20 h-20 bg-${metric.color}/10 rounded-bl-full`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Live Status Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 glass-card p-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-status-green rounded-full animate-pulse" />
                <span className="font-semibold">All Systems Operational</span>
              </div>
              <span className="text-gray-500">|</span>
              <span className="text-gray-400 font-mono text-sm">
                Last updated: Just now
              </span>
            </div>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-sm text-gray-400">API</div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-status-green rounded-full" />
                  <span className="text-status-green font-mono text-sm">Operational</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-400">SIP Proxy</div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-status-green rounded-full" />
                  <span className="text-status-green font-mono text-sm">Operational</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-400">Media Servers</div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-status-green rounded-full" />
                  <span className="text-status-green font-mono text-sm">Operational</span>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="text-neon-cyan hover:underline font-mono text-sm flex items-center gap-2"
            >
              View Status Page
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PerformanceGrid
