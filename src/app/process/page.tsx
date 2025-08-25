const InvestmentProcess = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 font-serif">
      {/* Hero Section */}
      <section className="relative h-[65vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1590283626217-1901804f912e?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="A stately, grand hall with classic architecture"
          className="object-cover object-center brightness-[0.4]"
        />
        <div className="relative z-10 container mx-auto px-6 h-full flex items-end pb-24">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
              The Discipline of Capital Preservation
            </h1>
            <div className="w-24 h-0.5 bg-amber-400 mb-8" />
            <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl text-neutral-200">
              Our investment process is not built for the current cycle; it is built for the next century. We are custodians of wealth, applying a timeless methodology to Africa's most promising market.
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-24 bg-neutral-900 text-neutral-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              A Framework for Generational Wealth
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto font-light leading-relaxed">
              Our methodology is a testament to our core values: foresight, discipline, and uncompromising rigor. We do not chase trends; we build a foundation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                step: "01",
                title: "Curated Sourcing",
                description: "Identifying truly unique off-market opportunities through our exclusive network, bypassing competitive noise."
              },
              {
                step: "02",
                title: "Forensic Due Diligence",
                description: "An exhaustive, multi-layered examination of every asset by a consortium of global and local experts."
              },
              {
                step: "03",
                title: "The Committee Mandate",
                description: "Approval is never guaranteed. Every investment must earn the unanimous endorsement of our Investment Committee."
              },
              {
                step: "04",
                title: "Strategic Oversight",
                description: "Our commitment extends far beyond acquisition. We actively manage and enhance the value of each asset."
              }
            ].map((phase, index) => (
              <div key={index} className="text-center p-8 bg-neutral-950 rounded-lg border border-neutral-800">
                <div className="text-4xl text-amber-400 font-light mb-6">
                  {phase.step}
                </div>
                <h3 className="text-2xl font-light text-neutral-50 mb-4">
                  {phase.title}
                </h3>
                <p className="text-neutral-300 font-sans font-light leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      ---

      {/* The Due Diligence Framework */}
      <section className="py-24 bg-neutral-950 text-neutral-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1628126781255-a22675713437?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="A stately legal library"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl shadow-neutral-800/50"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-light mb-8">
                The Art of Mitigation
              </h2>
              <p className="text-xl text-neutral-300 font-light leading-relaxed mb-12 font-sans">
                We believe risk is not something to be avoided, but rather understood and managed. Our due diligence framework is a fortress of protection for your capital.
              </p>

              <div className="space-y-8">
                {[
                  {
                    category: "Legal & Fiduciary",
                    items: ["Verifiable chain of title and ownership", "Adherence to international compliance standards", "Robust legal structuring for asset protection"]
                  },
                  {
                    category: "Financial & Economic",
                    items: ["Conservative financial modeling and stress testing", "Independent, third-party valuations", "Hedging against currency and market volatility"]
                  },
                  {
                    category: "Physical & Technical",
                    items: ["Comprehensive structural and engineering reviews", "Capital expenditure and maintenance forecasting", "Regulatory compliance and environmental assessments"]
                  }
                ].map((section, index) => (
                  <div key={index} className="border-l-4 border-amber-400 pl-6">
                    <h3 className="text-xl font-light mb-4">
                      {section.category}
                    </h3>
                    <ul className="space-y-2 font-sans text-neutral-300">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2.5 mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      ---

      {/* The Investment Committee */}
      <section className="py-24 bg-neutral-900 text-neutral-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-8">
                The Final Judgment
              </h2>
              <p className="text-xl text-neutral-300 font-light leading-relaxed mb-8 font-sans">
                Our Investment Committee is the ultimate gatekeeper of quality. It is here that decades of expertise converge to provide an unequivocal approval or denial.
              </p>

              <div className="space-y-6 font-sans">
                {[
                  {
                    criterion: "Unassailable Thesis",
                    description: "The investment narrative must be clear, compelling, and impervious to market fluctuations."
                  },
                  {
                    criterion: "Conservative Projections",
                    description: "Returns are measured against a benchmark of absolute preservation and steady growth."
                  },
                  {
                    criterion: "Defined Exit",
                    description: "Every investment must have a clear, liquid, and feasible exit strategy."
                  }
                ].map((criterion, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-amber-400 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-light mb-2 text-neutral-50">
                        {criterion.criterion}
                      </h3>
                      <p className="text-neutral-300 font-light">
                        {criterion.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1662998342200-c089b09a7b64?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="A group of corporate executives reviewing documents"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl shadow-neutral-800/50"
              />
            </div>
          </div>
        </div>
      </section>

      ---

      {/* The Legacy of Trust */}
      <section className="py-24 bg-neutral-950 text-neutral-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-8">
              A Fiduciary Standard of Care
            </h2>
            <p className="text-xl text-neutral-300 font-light leading-relaxed mb-12 font-sans">
              Our mandate is to protect and grow your capital. We operate with a level of transparency and integrity befitting the world's most discerning families and institutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
              {[
                {
                  authority: "Capital Markets Authority (Kenya)",
                  status: "Licensed Fund Manager",
                  certification: "CMA/FM/001/2024"
                },
                {
                  authority: "Financial Conduct Authority (UK)",
                  status: "AIFM Authorized",
                  certification: "FCA/REF/789456"
                },
                {
                  authority: "Securities Exchange Commission (USA)",
                  status: "Investment Advisor",
                  certification: "SEC-IA-2024-001"
                },
                {
                  authority: "Mauritius Financial Services",
                  status: "Global Business License",
                  certification: "MFS/GBL/2024/789"
                }
              ].map((compliance, index) => (
                <div key={index} className="p-8 bg-neutral-900 rounded-lg border border-neutral-800">
                  <h3 className="text-lg font-light text-neutral-50 mb-2">
                    {compliance.authority}
                  </h3>
                  <div className="text-amber-400 font-normal mb-1">
                    {compliance.status}
                  </div>
                  <div className="text-sm text-neutral-400 font-light">
                    License: {compliance.certification}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      ---

      {/* Call to Action */}
      <section className="py-24 bg-neutral-900 text-neutral-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-amber-50">
            We Invite Your Scrutiny
          </h2>
          <p className="text-xl font-light text-neutral-200 max-w-3xl mx-auto mb-12 leading-relaxed font-sans">
            Our process is our promise. We welcome the opportunity to walk you through our methodology and demonstrate how our discipline can serve your capital.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-4 bg-amber-500 text-neutral-950 rounded-lg font-medium hover:bg-amber-400 transition-colors font-sans">
              Access Our Fiduciary Brief
            </button>
            <button className="px-10 py-4 border border-amber-400 text-amber-400 rounded-lg font-medium hover:bg-amber-400 hover:text-neutral-950 transition-colors font-sans">
              Schedule a Confidential Call
            </button>
        </div>
      </div>
    </section>
  </div>
  );
};

export default InvestmentProcess;