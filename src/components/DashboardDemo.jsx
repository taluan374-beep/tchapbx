import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const DashboardDemo = () => {
  const [activeVideo, setActiveVideo] = useState(null)

  const demos = [
    {
      id: 1,
      title: 'Real-time Call Monitoring',
      description: 'Monitor all active calls with live MOS scores, duration, and participant details.',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      videoId: 'dQw4w9WgXcQ', // Placeholder YouTube ID
      features: ['Live call status', 'Quality metrics', 'Agent performance'],
    },
    {
      id: 2,
      title: 'Drag & Drop Call Flow Editor',
      description: 'Build complex IVR trees visually without writing a single line of code.',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      videoId: 'dQw4w9WgXcQ',
      features: ['Visual builder', 'Instant preview', 'Version control'],
    },
    {
      id: 3,
      title: 'Detailed Analytics Report',
      description: 'Comprehensive reports on call volume, peak hours, and customer satisfaction.',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      videoId: 'dQw4w9WgXcQ',
      features: ['Custom dashboards', 'Export to PDF', 'Scheduled reports'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="dashboard-demo" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-900" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-neon-purple font-mono text-sm tracking-wider">
            DASHBOARD DEMO
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            See <span className="gradient-text">TchaPBX</span> in Action
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience our powerful admin interface. Watch how easy it is to manage
            enterprise telephony at scale.
          </p>
        </motion.div>

        {/* Video Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {demos.map((demo) => (
            <motion.div
              key={demo.id}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group cursor-pointer"
              onClick={() => setActiveVideo(demo)}
            >
              {/* Video Thumbnail */}
              <div className="relative rounded-xl overflow-hidden mb-4 border border-white/10 group-hover:border-neon-cyan/50 transition-all">
                {/* Thumbnail Image with lazy loading */}
                <img
                  src={demo.thumbnail}
                  alt={demo.title}
                  loading="lazy"
                  className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-navy-900/60 flex items-center justify-center group-hover:bg-navy-900/40 transition-all">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-full bg-neon-cyan/90 flex items-center justify-center shadow-neon-cyan"
                  >
                    <svg
                      className="w-6 h-6 text-navy-900 ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-navy-900/80 px-2 py-1 rounded text-xs font-mono text-white">
                  2:30
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-2 group-hover:text-neon-cyan transition-colors">
                {demo.title}
              </h3>
              <p className="text-gray-400 text-sm mb-3">{demo.description}</p>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-2">
                {demo.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 rounded-full bg-navy-800 text-gray-400 border border-white/5"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-neon-cyan hover:underline font-medium"
          >
            <span>View All Demo Videos</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/95 backdrop-blur-sm"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl bg-navy-800 rounded-2xl overflow-hidden border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-navy-900/80 flex items-center justify-center text-gray-400 hover:text-white hover:bg-navy-900 transition-all"
                aria-label="Close video"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Video Player (YouTube Embed with lazy loading) */}
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.videoId}?autoplay=1&rel=0`}
                  title={activeVideo.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{activeVideo.title}</h3>
                <p className="text-gray-400">{activeVideo.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default DashboardDemo
