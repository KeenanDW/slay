'use client'

import { Card, CardBody, Link } from "@heroui/react"
import { motion } from "framer-motion"
import Image from "next/image"
import HeroBackground from "@/components/HeroBackground"

export default function About() {
  const stats = [
    { value: "3x", label: "Venture Backed Founder", delay: 0.1 },
    { value: "11+", label: "Years as a Founder", delay: 0.2 },
    { value: "13+", label: "Years as an Operator", delay: 0.3 },
    { value: "$225M+", label: "Debt & Equity Raised", delay: 0.4 },
    { value: "150+", label: "Founders Coached", delay: 0.5 },
    { value: "6", label: "Accelerators Serviced", delay: 0.6 },
  ]

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-neutral-02">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/slai.svg"
                  alt="StratumLab Logo"
                  width={150}
                  height={150}
                  className="h-12 w-auto object-contain"
                />
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-neutral-07 hover:text-shade-02 transition-colors">Home</Link>
              <Link href="/about" className="text-shade-02 font-medium">About</Link>
              <Link href="/#services" className="text-neutral-07 hover:text-shade-02 transition-colors">Services</Link>
              <Link href="/#results" className="text-neutral-07 hover:text-shade-02 transition-colors">Results</Link>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] pt-20 flex items-center bg-gradient-to-b from-primary-01 via-white to-white overflow-hidden">
          <HeroBackground />
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-6"
              >
                <span className="text-sm font-medium text-primary-06 tracking-wider uppercase">Biography</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold text-shade-02 leading-tight mb-4">
                Keenan D. Williams
              </h1>
              <p className="text-2xl text-neutral-07">
                Founding Partner -
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-05 to-primary-07 font-semibold"> Stratum Growth</span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="py-20 bg-neutral-01">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: stat.delay, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-white/80 backdrop-blur-sm border border-neutral-02 hover:shadow-lg transition-shadow">
                      <CardBody className="text-center p-6">
                        <p className="text-3xl font-bold text-primary-05 mb-2">{stat.value}</p>
                        <p className="text-sm text-neutral-07">{stat.label}</p>
                      </CardBody>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Biography Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <div className="bg-white border border-neutral-03 p-8 rounded-2xl mb-12">
                <h2 className="text-3xl font-bold text-shade-02 mb-6">The Journey</h2>
                <div className="space-y-6 text-neutral-07 leading-relaxed">
                  <p>
                    Keenan is a <span className="font-semibold text-shade-02">3x AI/FinTech Founder</span>, a <span className="font-semibold text-shade-02">2x Y-Combinator alumni</span>, current Angel Investor, Founder Coach and Board Advisor. In early 2024 - as a CoFounder - he exited his last venture backed startup: <span className="font-semibold text-primary-06">RYSE</span>, a spin out from REZI which was a growth equity stage Prop-Tech company in the alternative assets space.
                  </p>

                  <p>
                    His team was <span className="font-semibold text-shade-02">the first ever to sell securitizations of residential lease cashflows</span> to Banks and Hedge Funds. The platform stemmed from his 7 year career in commercial real estate finance, focusing on institutional debt origination and trading credit products while at Investment Banks and Hedge Funds in NYC, Chicago and London.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="bg-white border border-neutral-02 hover:shadow-xl transition-all">
                  <CardBody className="p-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-04 to-primary-06 rounded-lg mb-6"></div>
                    <h3 className="text-2xl font-semibold text-shade-02 mb-4">Fundraising Excellence</h3>
                    <p className="text-neutral-07 leading-relaxed">
                      Over his career as an entrepreneur, Keenan has raised <span className="font-semibold text-primary-06">$225M+</span> in VC Equity, Venture Debt and Credit Facilities, demonstrating exceptional ability to secure funding across different stages and instruments.
                    </p>
                  </CardBody>
                </Card>

                <Card className="bg-white border border-neutral-02 hover:shadow-xl transition-all">
                  <CardBody className="p-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary-04 to-secondary-06 rounded-lg mb-6"></div>
                    <h3 className="text-2xl font-semibold text-shade-02 mb-4">Mentorship & Advisory</h3>
                    <p className="text-neutral-07 leading-relaxed">
                      Keenan has been an EIR for <span className="font-semibold">TechStars</span> in NYC/ATL/NOLA, an OIR for 43 North in Buffalo, Series A mentor at <span className="font-semibold">Google</span> and a Coach at <span className="font-semibold">Morgan Stanley</span> Inclusive Venture Labs in NYC.
                    </p>
                  </CardBody>
                </Card>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-shade-02 to-shade-02-5 text-white p-12 rounded-2xl"
              >
                <h3 className="text-3xl font-bold mb-6">Stratum Growth</h3>
                <p className="text-lg leading-relaxed text-neutral-01">
                  In 2020, Keenan launched <span className="font-semibold">Stratum Growth</span>, a strategic advisory platform for both early to mid-stage startups. The firm specializes in servicing first-time startup founders and operators, guiding them to reach product-market fit through data-driven strategies, AI-powered automation, and revenue optimization frameworks.
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-px h-12 bg-neutral-03"></div>
                  <p className="text-sm text-neutral-02">
                    My Early Founder Journey • 6 Accelerators Serviced • 150+ Founders Coached
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-white to-primary-01">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-shade-02 mb-6">
                Ready to Scale Your Startup?
              </h2>
              <p className="text-xl text-neutral-07 mb-8">
                Leverage decades of founder experience and proven growth strategies.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link
                  href="https://cal.com/keenan-williams-xltqya/30min"
                  target="_blank"
                  className="inline-flex items-center px-8 py-4 bg-shade-02 text-shade-01 font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all"
                >
                  Book a Call
                </Link>
              </motion.div>
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
                  <li><Link href="/about">About</Link></li>
                  <li><Link href="#">Blog</Link></li>
                  <li><Link href="#">Careers</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Contact</h4>
                <ul className="space-y-2 text-sm text-neutral-03">
                  <li>hello@stratumlab.ai</li>
                  <li>1-800-STRATUM</li>
                  <li>San Francisco, CA</li>
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