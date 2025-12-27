import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

const codeExamples = {
  curl: {
    language: 'bash',
    filename: 'terminal',
    code: `# Make an outbound call via TchaPBX API
curl -X POST https://api.tchapbx.io/v1/calls \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "+1234567890",
    "from": "+0987654321",
    "webhook_url": "https://your-app.com/call-events",
    "record": true,
    "transcribe": true,
    "timeout": 30
  }'

# Response
{
  "call_id": "call_abc123xyz",
  "status": "initiated",
  "direction": "outbound",
  "created_at": "2024-01-15T10:30:00Z"
}`,
  },
  nodejs: {
    language: 'javascript',
    filename: 'app.js',
    code: `import TchaPBX from '@tchapbx/sdk';

// Initialize the client
const client = new TchaPBX({
  apiKey: process.env.TCHAPBX_API_KEY,
  region: 'us-east-1' // Nearest POP
});

// Make an outbound call
const call = await client.calls.create({
  to: '+1234567890',
  from: '+0987654321',
  webhookUrl: 'https://your-app.com/call-events',
  record: true,
  transcribe: true
});

console.log(\`Call initiated: \${call.id}\`);
// Output: Call initiated: call_abc123xyz

// Listen for real-time events
call.on('answered', (event) => {
  console.log('Call answered at:', event.timestamp);
});

call.on('ended', (event) => {
  console.log('Call duration:', event.duration, 'seconds');
  console.log('MOS Score:', event.quality.mos);
});`,
  },
  python: {
    language: 'python',
    filename: 'main.py',
    code: `from tchapbx import Client
import asyncio

# Initialize the client
client = Client(
    api_key="YOUR_API_KEY",
    region="us-east-1"  # Nearest POP
)

async def make_call():
    # Make an outbound call
    call = await client.calls.create(
        to="+1234567890",
        from_="+0987654321",
        webhook_url="https://your-app.com/call-events",
        record=True,
        transcribe=True
    )
    
    print(f"Call initiated: {call.id}")
    # Output: Call initiated: call_abc123xyz
    
    # Get call details
    details = await client.calls.get(call.id)
    print(f"Status: {details.status}")
    print(f"MOS Score: {details.quality.mos}")
    
    return call

# Get call logs with filtering
async def get_call_logs():
    logs = await client.calls.list(
        start_date="2024-01-01",
        end_date="2024-01-31",
        status="completed",
        limit=100
    )
    
    for log in logs:
        print(f"{log.id}: {log.duration}s, MOS: {log.mos}")

asyncio.run(make_call())`,
  },
}

const ApiDemo = () => {
  const [activeTab, setActiveTab] = useState('curl')

  const tabs = [
    { id: 'curl', label: 'cURL', icon: '⌘' },
    { id: 'nodejs', label: 'Node.js', icon: '⬢' },
    { id: 'python', label: 'Python', icon: '🐍' },
  ]

  return (
    <section id="api" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-900" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 left-0 w-1/2 h-96 bg-neon-purple/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-neon-purple font-mono text-sm tracking-wider">
              DEVELOPER FIRST
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
              Build with our{' '}
              <span className="gradient-text">Powerful API</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Integrate enterprise telephony in minutes. Our REST API and SDKs
              handle the complexity so you can focus on building great products.
            </p>

            {/* Feature list */}
            <ul className="space-y-4 mb-8">
              {[
                'RESTful API with OpenAPI spec',
                'SDKs for Node.js, Python, Go, Ruby',
                'Real-time webhooks for all events',
                'GraphQL support (beta)',
              ].map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-5 h-5 rounded-full bg-neon-cyan/20 flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-neon-cyan"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-300">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-neon-cyan hover:underline font-mono"
            >
              <span>View Full API Reference</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>

          {/* Right: Macbook Code Window */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Macbook Frame */}
            <div className="relative">
              {/* Screen bezel */}
              <div className="bg-gray-800 rounded-t-xl p-2 pb-0">
                {/* Camera notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-700 rounded-full" />
                
                {/* Code window */}
                <div className="code-window">
                  {/* Window header */}
                  <div className="code-header">
                    <div className="flex items-center gap-2">
                      <span className="code-dot bg-red-500" />
                      <span className="code-dot bg-yellow-500" />
                      <span className="code-dot bg-green-500" />
                    </div>
                    
                    {/* Tabs */}
                    <div className="flex-1 flex justify-center">
                      <div className="flex items-center gap-1 bg-navy-900 rounded-lg p-1">
                        {tabs.map((tab) => (
                          <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 py-1.5 rounded-md text-sm font-mono transition-all ${
                              activeTab === tab.id
                                ? 'bg-neon-cyan/20 text-neon-cyan'
                                : 'text-gray-400 hover:text-white'
                            }`}
                          >
                            <span className="mr-2">{tab.icon}</span>
                            {tab.label}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {/* Filename */}
                    <span className="font-mono text-xs text-gray-500">
                      {codeExamples[activeTab].filename}
                    </span>
                  </div>

                  {/* Code content */}
                  <div className="relative overflow-hidden" style={{ minHeight: '400px' }}>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <SyntaxHighlighter
                          language={codeExamples[activeTab].language}
                          style={vscDarkPlus}
                          customStyle={{
                            margin: 0,
                            padding: '1.5rem',
                            background: 'transparent',
                            fontSize: '13px',
                            lineHeight: '1.6',
                          }}
                          showLineNumbers
                          lineNumberStyle={{
                            color: '#444',
                            paddingRight: '1rem',
                            minWidth: '2.5rem',
                          }}
                        >
                          {codeExamples[activeTab].code}
                        </SyntaxHighlighter>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
              
              {/* Macbook base */}
              <div className="bg-gray-700 h-4 rounded-b-xl" />
              <div className="bg-gray-600 h-1 mx-16 rounded-b-lg" />
            </div>

            {/* Response time badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-4 -right-4 glass-card px-4 py-2 border border-neon-cyan/30"
            >
              <span className="text-gray-400 text-sm">Avg Response:</span>
              <span className="text-neon-cyan font-mono font-bold ml-2">&lt;50ms</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ApiDemo
