import { useState } from 'react'
import { motion } from 'framer-motion'

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      name: 'Basic',
      description: 'Perfect for Startups',
      price: {
        monthly: 10,
        yearly: 8, // ~20% discount
        promo: 2,
        promoText: 'First month only $2',
      },
      specs: {
        cpu: '1 Core CPU',
        ram: '2 GB RAM',
        storage: '20 GB Storage',
      },
      features: [
        '12 Extensions',
        'Unlimited Concurrent Calls',
        '2 VitXi Clients',
        'Basic Support',
      ],
      highlight: false,
      label: null,
      color: 'neon-cyan',
    },
    {
      name: 'Enterprise Cloud',
      description: 'For growing businesses',
      price: {
        monthly: 120,
        yearly: 96, // ~20% discount
        promo: 9,
        promoText: 'First month only $9',
      },
      specs: {
        cpu: '8 Cores CPU',
        ram: '8 GB RAM',
        storage: '200 GB Storage',
      },
      features: [
        'Unlimited Extensions',
        '50 VitXi Clients',
        'Switchboard Included',
        'Billing Module',
        'Call Recording',
        'Priority Support',
      ],
      highlight: false,
      label: 'Premium',
      color: 'neon-purple',
    },
    {
      name: 'Call Center Cloud',
      description: 'Full-featured call center',
      price: {
        monthly: 240,
        yearly: 192, // ~20% discount
        promo: 9,
        promoText: 'First month only $9',
      },
      specs: {
        cpu: '10 Cores CPU',
        ram: '16 GB RAM',
        storage: '500 GB Storage',
      },
      features: [
        'Unlimited Extensions',
        'Full Sonata Suite',
        'Auto Dialer',
        'Advanced Statistics',
        'Billing System',
        'Call Recording',
        'Real-time Monitoring',
        '24/7 Premium Support',
      ],
      highlight: true, // Best seller - highlighted
      label: 'Best Seller',
      color: 'neon-cyan',
    },
    {
      name: 'Multi-Tenant Cloud',
      description: 'For service providers',
      price: {
        monthly: 300,
        yearly: 240, // ~20% discount
        promo: 9,
        promoText: 'First month only $9',
      },
      specs: {
        cpu: '12 Cores CPU',
        ram: '32 GB RAM',
        storage: '500 GB Storage',
      },
      features: [
        'Multi-Tenant Architecture',
        'VitXi WebRTC',
        'Full Suite Access',
        'White-label Ready',
        'API Access',
        'Dedicated Support',
      ],
      highlight: false,
      label: 'Enterprise',
      color: 'neon-purple',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-800 via-navy-900 to-navy-800" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-neon-cyan font-mono text-sm tracking-wider">
            PRICING
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Choose Your <span className="gradient-text">Perfect Plan</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Flexible pricing for teams of all sizes. Start with a promotional rate
            and scale as you grow.
          </p>

          {/* Monthly/Yearly Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`font-medium transition-colors ${!isYearly ? 'text-white' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-16 h-8 rounded-full transition-colors ${
                isYearly ? 'bg-neon-cyan' : 'bg-navy-700'
              }`}
            >
              <motion.div
                className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg"
                animate={{ left: isYearly ? '34px' : '4px' }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`font-medium transition-colors ${isYearly ? 'text-white' : 'text-gray-500'}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="text-xs bg-neon-cyan/20 text-neon-cyan px-3 py-1 rounded-full font-mono">
                Save 20%
              </span>
            )}
          </div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: plan.highlight ? -12 : -8, 
                transition: { duration: 0.2 } 
              }}
              className={`relative rounded-2xl overflow-hidden ${
                plan.highlight
                  ? 'bg-gradient-to-b from-neon-cyan/20 to-navy-800 border-2 border-neon-cyan shadow-neon-cyan scale-105 z-10'
                  : 'glass-card border border-white/10 hover:border-white/20'
              }`}
            >
              {/* Label Badge */}
              {plan.label && (
                <div className={`absolute top-0 right-0 ${
                  plan.highlight 
                    ? 'bg-neon-cyan text-navy-900' 
                    : 'bg-neon-purple/80 text-white'
                } px-4 py-1 text-xs font-bold rounded-bl-lg`}>
                  {plan.label}
                </div>
              )}

              <div className="p-6">
                {/* Plan Name */}
                <h3 className={`text-xl font-bold mb-1 ${
                  plan.highlight ? 'text-neon-cyan' : 'text-white'
                }`}>
                  {plan.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">
                      ${isYearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className="text-gray-400">/{isYearly ? 'mo' : 'month'}</span>
                  </div>
                  {!isYearly && (
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-neon-cyan font-mono text-sm font-semibold">
                        🎉 {plan.price.promoText}
                      </span>
                    </div>
                  )}
                  {isYearly && (
                    <div className="mt-2 text-gray-500 text-sm">
                      <span className="line-through">${plan.price.monthly * 12}/year</span>
                      <span className="text-neon-cyan ml-2">${plan.price.yearly * 12}/year</span>
                    </div>
                  )}
                </div>

                {/* Specs */}
                <div className="bg-navy-900/50 rounded-lg p-4 mb-6">
                  <div className="grid grid-cols-1 gap-2 text-sm font-mono">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                      <span className="text-gray-300">{plan.specs.cpu}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      <span className="text-gray-300">{plan.specs.ram}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                      </svg>
                      <span className="text-gray-300">{plan.specs.storage}</span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <svg className={`w-5 h-5 flex-shrink-0 ${
                        plan.highlight ? 'text-neon-cyan' : 'text-status-green'
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    plan.highlight
                      ? 'bg-neon-cyan text-navy-900 hover:bg-neon-cyan-light hover:shadow-neon-cyan'
                      : 'bg-navy-700 text-white hover:bg-navy-600 border border-white/10 hover:border-neon-cyan/50'
                  }`}
                >
                  Buy Now
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            All plans include 24/7 monitoring, automatic backups, and free SSL certificates.
          </p>
          <p className="text-gray-400 mt-2">
            Need a custom solution?{' '}
            <a href="#" className="text-neon-cyan hover:underline font-medium">
              Contact our sales team →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
