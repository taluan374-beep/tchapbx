import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PerformanceGrid = () => {
  const [activeModal, setActiveModal] = useState(null)

  const metrics = [
    {
      id: 'latency',
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
      modalTitle: 'Ultra-Low Latency Infrastructure',
      modalContent: {
        summary: 'Our <30ms latency is achieved through strategic infrastructure placement and optimized routing.',
        details: [
          {
            title: 'Edge Locations',
            desc: '15+ Points of Presence (POPs) strategically located near major internet exchanges worldwide.',
          },
          {
            title: 'Direct Peering',
            desc: 'Direct peering agreements with 200+ carriers and ISPs, bypassing public internet congestion.',
          },
          {
            title: 'Anycast Routing',
            desc: 'Intelligent anycast routing automatically directs traffic to the nearest healthy server.',
          },
          {
            title: 'Optimized Protocols',
            desc: 'Custom UDP-based protocols for signaling, reducing TCP overhead and handshake delays.',
          },
        ],
      },
    },
    {
      id: 'mos',
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
      modalTitle: 'Crystal Clear Audio Quality',
      modalContent: {
        summary: 'MOS (Mean Opinion Score) above 4.2 indicates excellent voice quality, comparable to HD audio.',
        details: [
          {
            title: 'Opus Codec',
            desc: 'Advanced Opus codec with adaptive bitrate (8-128 kbps) ensures optimal quality at any bandwidth.',
          },
          {
            title: 'Jitter Buffer',
            desc: 'Intelligent adaptive jitter buffer compensates for network irregularities without adding latency.',
          },
          {
            title: 'Packet Loss Concealment',
            desc: 'AI-powered PLC algorithms reconstruct lost packets, maintaining quality even at 5% packet loss.',
          },
          {
            title: 'Echo Cancellation',
            desc: 'Hardware-accelerated AEC with 128ms tail length eliminates acoustic echo in any environment.',
          },
        ],
      },
    },
    {
      id: 'pops',
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
      modalTitle: 'Global Infrastructure Network',
      modalContent: {
        summary: 'Our worldwide presence ensures low latency and high availability for users everywhere.',
        details: [
          {
            title: 'North America',
            desc: 'POPs in Virginia, Oregon, California, and Toronto covering US and Canada.',
          },
          {
            title: 'Europe',
            desc: 'Frankfurt, London, Amsterdam, and Paris for comprehensive EU coverage.',
          },
          {
            title: 'Asia Pacific',
            desc: 'Singapore, Tokyo, Sydney, and Mumbai serving the fastest-growing markets.',
          },
          {
            title: 'Expansion',
            desc: 'New POPs in São Paulo, Dubai, and Seoul coming Q2 2024.',
          },
        ],
      },
    },
    {
      id: 'uptime',
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
      modalTitle: 'Redundant Server Clusters & Automatic Failover',
      modalContent: {
        summary: '99.99% uptime means less than 52 minutes of downtime per year. Here\'s how we achieve it.',
        details: [
          {
            title: 'Active-Active Clusters',
            desc: 'All servers run in active-active mode. No single point of failure. Traffic is load-balanced across multiple nodes.',
          },
          {
            title: 'Automatic Failover',
            desc: 'Health checks every 5 seconds. Failed servers are removed from rotation in <100ms with zero dropped calls.',
          },
          {
            title: 'Database Replication',
            desc: 'Synchronous replication across 3 availability zones with automatic leader election.',
          },
          {
            title: 'DDoS Protection',
            desc: 'Enterprise-grade DDoS mitigation absorbs attacks up to 10 Tbps without service degradation.',
          },
        ],
      },
    },
    {
      id: 'calls',
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
      modalTitle: 'Scalable Architecture',
      modalContent: {
        summary: 'Our platform handles millions of concurrent calls with horizontal auto-scaling.',
        details: [
          {
            title: 'Horizontal Scaling',
            desc: 'Kubernetes-orchestrated microservices scale automatically based on call volume.',
          },
          {
            title: 'Media Server Pools',
            desc: 'Dedicated media server clusters handle RTP streams independently of signaling.',
          },
          {
            title: 'Queue Management',
            desc: 'Apache Kafka-based event streaming handles peak loads with zero message loss.',
          },
          {
            title: 'Resource Isolation',
            desc: 'Per-tenant resource quotas ensure one customer\'s traffic spike doesn\'t affect others.',
          },
        ],
      },
    },
    {
      id: 'packetloss',
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
      modalTitle: 'Network Quality Optimization',
      modalContent: {
        summary: 'Sub-0.1% packet loss ensures every word is heard clearly, even on challenging networks.',
        details: [
          {
            title: 'Premium Transit',
            desc: 'We use only Tier-1 transit providers with SLA-guaranteed packet delivery.',
          },
          {
            title: 'QoS Marking',
            desc: 'DSCP/ToS marking ensures voice packets get priority treatment across networks.',
          },
          {
            title: 'FEC (Forward Error Correction)',
            desc: 'Redundant data allows reconstruction of lost packets without retransmission.',
          },
          {
            title: 'Path Optimization',
            desc: 'Real-time path analysis routes around congested or lossy network segments.',
          },
        ],
      },
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
            maintaining exceptional quality metrics.{' '}
            <span className="text-neon-cyan">Click any card to learn more.</span>
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
          {metrics.map((metric) => (
            <motion.button
              key={metric.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              onClick={() => setActiveModal(metric)}
              className={`glass-card p-8 relative overflow-hidden group cursor-pointer text-left w-full`}
              aria-label={`Learn more about ${metric.label}`}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Click indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs text-neon-cyan font-mono flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Details
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className={`text-${metric.color} mb-4 group-hover:scale-110 transition-transform`}>
                  {metric.icon}
                </div>
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
            </motion.button>
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
                <span className="w-3 h-3 bg-status-green rounded-full animate-pulse" aria-hidden="true" />
                <span className="font-semibold">All Systems Operational</span>
              </div>
              <span className="text-gray-500" aria-hidden="true">|</span>
              <span className="text-gray-400 font-mono text-sm">
                Last updated: Just now
              </span>
            </div>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-sm text-gray-400">API</div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-status-green rounded-full" aria-hidden="true" />
                  <span className="text-status-green font-mono text-sm">Operational</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-400">SIP Proxy</div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-status-green rounded-full" aria-hidden="true" />
                  <span className="text-status-green font-mono text-sm">Operational</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-400">Media Servers</div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-status-green rounded-full" aria-hidden="true" />
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

      {/* Modal */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/95 backdrop-blur-sm"
            onClick={() => setActiveModal(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-2xl bg-navy-800 rounded-2xl overflow-hidden border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={`bg-gradient-to-r ${activeModal.gradient} p-6 border-b border-white/10`}>
                <button
                  onClick={() => setActiveModal(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-navy-900/50 flex items-center justify-center text-gray-400 hover:text-white hover:bg-navy-900 transition-all"
                  aria-label="Close modal"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="flex items-center gap-4">
                  <div className={`text-${activeModal.color}`}>{activeModal.icon}</div>
                  <div>
                    <div className={`text-3xl font-bold font-mono text-${activeModal.color}`}>
                      {activeModal.value}
                    </div>
                    <div className="text-white font-semibold">{activeModal.label}</div>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <h3 id="modal-title" className="text-xl font-bold mb-4">
                  {activeModal.modalTitle}
                </h3>
                <p className="text-gray-400 mb-6">{activeModal.modalContent.summary}</p>

                <div className="space-y-4">
                  {activeModal.modalContent.details.map((detail, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className={`w-8 h-8 rounded-lg bg-${activeModal.color}/20 flex items-center justify-center flex-shrink-0`}>
                        <svg className={`w-4 h-4 text-${activeModal.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{detail.title}</h4>
                        <p className="text-gray-400 text-sm">{detail.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-white/10 flex justify-end gap-4">
                <button
                  onClick={() => setActiveModal(null)}
                  className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
                >
                  Close
                </button>
                <a
                  href="#"
                  className={`px-4 py-2 bg-${activeModal.color} text-navy-900 rounded-lg font-semibold hover:opacity-90 transition-opacity`}
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default PerformanceGrid
