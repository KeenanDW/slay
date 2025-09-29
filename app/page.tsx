'use client'

import { Button, Card, CardBody, Chip, Link } from "@heroui/react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import HeroBackground from "@/components/HeroBackground"

export default function Home() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, 50])

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-neutral-02">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image
                src="/slai.svg"
                alt="StratumLab Logo"
                width={150}
                height={150}
                className="h-12 w-auto object-contain"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-neutral-07 hover:text-shade-02 transition-colors">About</Link>
              <Link href="#services" className="text-neutral-07 hover:text-shade-02 transition-colors">Services</Link>
              <Link href="#process" className="text-neutral-07 hover:text-shade-02 transition-colors">Process</Link>
              <Button
                as="a"
                href="https://cal.com/keenan-williams-xltqya/30min"
                target="_blank"
                className="bg-shade-02 text-shade-01 font-medium"
                radius="sm"
                size="md"
              >
                Book a Call
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] pt-20 flex items-center bg-gradient-to-b from-primary-01 via-white to-white overflow-hidden">
          <HeroBackground />
          <motion.div
            className="relative z-10 max-w-7xl mx-auto px-6 py-20"
            style={{ y }}
          >
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Chip
                    className="mb-6 bg-primary-01/80 backdrop-blur-sm text-primary-07 border-primary-02 shadow-lg shadow-primary-05/20"
                    variant="bordered"
                    radius="sm"
                  >
                    <motion.span
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 bg-primary-05 rounded-full mr-2 inline-block"
                    />
                    AI-Powered Revenue Growth
                  </Chip>
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-bold text-shade-02 leading-tight mb-6">
                  Services That Help You
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-05 to-primary-07"> Scale</span>
                </h1>

                <p className="text-xl text-neutral-07 mb-8 max-w-2xl leading-relaxed">
                  Expert founder coaching, strategic growth advisory, and custom AI solutions designed to help startups and scale-ups achieve sustainable growth.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      as="a"
                      href="https://cal.com/keenan-williams-xltqya/30min"
                      target="_blank"
                      size="lg"
                      className="bg-shade-02 text-shade-01 font-semibold px-8 shadow-xl shadow-primary-05/20 hover:shadow-primary-05/30 transition-all"
                      radius="sm"
                    >
                      <span className="relative">
                        Book a Call
                        <motion.span
                          className="absolute inset-0 bg-white opacity-25 rounded"
                          animate={{ x: [-100, 100] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          style={{ clipPath: 'polygon(0 0, 20% 0, 30% 100%, 0% 100%)' }}
                        />
                      </span>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-neutral-01">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-shade-02 mb-4">
                  How We Drive Your Growth
                </h2>
                <p className="text-lg text-neutral-07 max-w-2xl mx-auto">
                  Three core pillars designed to transform your startup's trajectory
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-white border border-neutral-02 shadow-sm hover:shadow-lg transition-shadow">
                  <CardBody className="p-8">
                    <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-lg bg-primary-01">
                      <svg className="w-7 h-7 text-primary-06" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-shade-02 mb-3">
                      Founder Coaching
                    </h3>
                    <p className="text-neutral-07 mb-4 leading-relaxed">
                      Founder coaching focuses on resolving cofounder conflict, CEO maturity curve, and leading a company that is built to scale.
                    </p>
                    <Link href="https://cal.com/keenan-williams-xltqya/30min" target="_blank" className="text-primary-05 font-medium flex items-center gap-1">
                      Learn more →
                    </Link>
                  </CardBody>
                </Card>

                <Card className="bg-white border border-neutral-02 shadow-sm hover:shadow-lg transition-shadow">
                  <CardBody className="p-8">
                    <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-lg bg-secondary-01">
                      <svg className="w-7 h-7 text-secondary-06" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-shade-02 mb-3">
                      Growth Advisory
                    </h3>
                    <p className="text-neutral-07 mb-4 leading-relaxed">
                      Growth advisory focuses on cash management, building toward profitability, and sustainable growth tactics.
                    </p>
                    <Link href="https://cal.com/keenan-williams-xltqya/30min" target="_blank" className="text-primary-05 font-medium flex items-center gap-1">
                      Learn more →
                    </Link>
                  </CardBody>
                </Card>

                <Card className="bg-white border border-neutral-02 shadow-sm hover:shadow-lg transition-shadow">
                  <CardBody className="p-8">
                    <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-lg bg-tertiary-01">
                      <svg className="w-7 h-7 text-tertiary-06" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-shade-02 mb-3">
                      Vertically Integrated AI
                    </h3>
                    <p className="text-neutral-07 mb-4 leading-relaxed">
                      Let us build custom AI products and agents personalized to your business, tech stack, and logic with no long-term subscriptions or licensing fees.
                    </p>
                    <Link href="https://cal.com/keenan-williams-xltqya/30min" target="_blank" className="text-primary-05 font-medium flex items-center gap-1">
                      Learn more →
                    </Link>
                  </CardBody>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Value Props Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-shade-02 mb-6">
                    Why Founders Choose StratumLab
                  </h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-primary-05 flex-shrink-0 mt-1"></div>
                      <div>
                        <h4 className="text-lg font-semibold text-shade-02 mb-2">Expert-Led Implementation</h4>
                        <p className="text-neutral-07">Former operators from Google, Stripe, and Salesforce who&apos;ve built and scaled revenue teams from $0 to $100M+</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-primary-05 flex-shrink-0 mt-1"></div>
                      <div>
                        <h4 className="text-lg font-semibold text-shade-02 mb-2">Enhanced ROI</h4>
                        <p className="text-neutral-07">We will tirelessly test GTM strategies to achieve 2-3x revenue growth within 90 days to hit your targets</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-primary-05 flex-shrink-0 mt-1"></div>
                      <div>
                        <h4 className="text-lg font-semibold text-shade-02 mb-2">White-Glove Service</h4>
                        <p className="text-neutral-07">Dedicated success team, weekly strategy calls, and 24/7 support to ensure continuous optimization</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-neutral-01 to-neutral-02 rounded-2xl p-8">
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-neutral-06 uppercase tracking-wider mb-2">Client Growth Trajectory</h3>
                      <p className="text-2xl font-bold text-shade-02">Average 3-5x Revenue Growth</p>
                    </div>

                    <div className="flex-1 flex items-end justify-between gap-2 min-h-[200px]">
                      <div className="flex flex-col items-center flex-1">
                        <motion.div
                          className="w-full bg-primary-04 rounded-t"
                          initial={{ height: 0 }}
                          whileInView={{ height: "40px" }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                          viewport={{ once: true }}
                        ></motion.div>
                        <span className="text-xs text-neutral-06 mt-2">Month 1</span>
                      </div>

                      <div className="flex flex-col items-center flex-1">
                        <motion.div
                          className="w-full bg-primary-04 rounded-t"
                          initial={{ height: 0 }}
                          whileInView={{ height: "60px" }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          viewport={{ once: true }}
                        ></motion.div>
                        <span className="text-xs text-neutral-06 mt-2">Month 2</span>
                      </div>

                      <div className="flex flex-col items-center flex-1">
                        <motion.div
                          className="w-full bg-primary-05 rounded-t"
                          initial={{ height: 0 }}
                          whileInView={{ height: "90px" }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          viewport={{ once: true }}
                        ></motion.div>
                        <span className="text-xs text-neutral-06 mt-2">Month 3</span>
                      </div>

                      <div className="flex flex-col items-center flex-1">
                        <motion.div
                          className="w-full bg-primary-05 rounded-t"
                          initial={{ height: 0 }}
                          whileInView={{ height: "120px" }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          viewport={{ once: true }}
                        ></motion.div>
                        <span className="text-xs text-neutral-06 mt-2">Month 6</span>
                      </div>

                      <div className="flex flex-col items-center flex-1">
                        <motion.div
                          className="w-full bg-primary-06 rounded-t"
                          initial={{ height: 0 }}
                          whileInView={{ height: "160px" }}
                          transition={{ duration: 0.6, delay: 0.5 }}
                          viewport={{ once: true }}
                        ></motion.div>
                        <span className="text-xs text-neutral-06 mt-2">Month 9</span>
                      </div>

                      <div className="flex flex-col items-center flex-1">
                        <motion.div
                          className="w-full bg-primary-07 rounded-t"
                          initial={{ height: 0 }}
                          whileInView={{ height: "200px" }}
                          transition={{ duration: 0.6, delay: 0.6 }}
                          viewport={{ once: true }}
                        ></motion.div>
                        <span className="text-xs text-neutral-06 mt-2">Month 12</span>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between text-sm">
                      <span className="text-neutral-06">Baseline</span>
                      <span className="text-primary-06 font-semibold">+300% Growth</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-20 bg-gradient-to-b from-primary-01 to-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-shade-02 mb-4">
                  Your Path to Predictable Revenue
                </h2>
                <p className="text-lg text-neutral-07 max-w-2xl mx-auto">
                  A proven 4-step process that transforms your sales operations
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { step: "01", title: "Revenue Audit", desc: "Deep dive into your current sales process, tech stack, and growth blockers" },
                  { step: "02", title: "Strategy Design", desc: "Custom playbook with AI integration points and automation workflows" },
                  { step: "03", title: "Rapid Implementation", desc: "Deploy and train AI agents, set up automation, integrate systems" },
                  { step: "04", title: "Scale & Optimize", desc: "Continuous improvement with weekly reviews and real-time adjustments" }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="mb-4">
                      <span className="text-6xl font-bold text-primary-05">{item.step}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-shade-02 mb-2">{item.title}</h3>
                    <p className="text-neutral-07 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-shade-02 to-shade-02-5">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-shade-01 mb-6">
                Ready to Transform Your Revenue?
              </h2>
              <p className="text-xl text-neutral-02 mb-8">
                Get a custom growth plan and see exactly how we&apos;ll help you hit your revenue targets.
              </p>
              <div className="flex justify-center">
                <Button
                  as="a"
                  href="https://cal.com/keenan-williams-xltqya/30min"
                  target="_blank"
                  size="lg"
                  className="bg-shade-01 text-shade-02 font-semibold px-8 hover:bg-neutral-01"
                  radius="sm"
                >
                  Book a Call
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-shade-02 text-shade-01 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center mb-4">
                  <Image
                    src="/slai.svg"
                    alt="StratumLab Logo"
                    width={150}
                    height={150}
                    className="h-12 w-auto object-contain opacity-80"
                  />
                </div>
                <p className="text-neutral-03 text-sm">
                  Services that help you scale.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Services</h4>
                <ul className="space-y-2 text-sm text-neutral-03">
                  <li><Link href="#">AI Sales Agents</Link></li>
                  <li><Link href="#">Inbound Automation</Link></li>
                  <li><Link href="#">Revenue Intelligence</Link></li>
                  <li><Link href="#">Growth Consulting</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Company</h4>
                <ul className="space-y-2 text-sm text-neutral-03">
                  <li><Link href="#">About</Link></li>
                  <li><Link href="#">Blog</Link></li>
                  <li><Link href="#">Careers</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Contact</h4>
                <ul className="space-y-2 text-sm text-neutral-03">
                  <li>keenan@stratumlab.ai</li>
                  <li>New York, NY</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-neutral-07 pt-8 text-center text-sm text-neutral-04">
              <p>© 2024 StratumLab AI. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}