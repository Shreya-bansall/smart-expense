import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Check,
  CircleDot,
  ClipboardList,
  FileText,
  Layers3,
  ReceiptText,
} from 'lucide-react'

const capabilities = [
  {
    number: '01',
    icon: ReceiptText,
    title: 'Record expenses',
    description: 'Keep expense details together in one digital place.',
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'Manage reimbursements',
    description: 'Organise and track reimbursement claims.',
  },
  {
    number: '03',
    icon: BarChart3,
    title: 'Generate reports',
    description: 'Turn expense information into organised reports.',
  },
]

export default function Page() {
  return (
    <main className="project-site" id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Project overview home">
          <span className="brand-mark"><Layers3 size={18} strokeWidth={2} /></span>
          <span>PROJECT OVERVIEW</span>
        </a>
        <a className="header-link" href="#about">About the project <ArrowDown size={14} /></a>
      </header>

      <section className="hero" aria-labelledby="project-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> DIGITAL EXPENSE MANAGEMENT</p>
          <h1 id="project-title">Smart Expense <span>&amp;</span><br />Reimbursement<br /><span className="title-accent">Management System</span></h1>
          <p className="github-status"><span aria-hidden="true" />Now on GitHub</p>
          <p className="hero-summary">A web-based application for recording, organising, and tracking expenses digitally—alongside reimbursement claims and organised reports.</p>
          <a className="primary-link" href="#about">Explore the project <ArrowRight size={16} /></a>
          <div className="availability"><span className="availability-dot" /> Not available yet</div>
        </div>

        <div className="visual-panel" aria-label="Expense management process: record expenses, manage reimbursement claims, and organise reports">
          <div className="visual-heading"><span>ONE PLACE TO STAY ORGANISED</span><span className="visual-heading-icon"><Layers3 size={16} /></span></div>
          <div className="process-stack">
            <div className="process-item">
              <span className="process-icon"><ReceiptText size={19} /></span>
              <span className="process-copy"><small>STEP 01</small><strong>Record expenses</strong></span>
              <span className="process-check"><Check size={14} /></span>
            </div>
            <div className="process-connector"><span /></div>
            <div className="process-item">
              <span className="process-icon"><ClipboardList size={19} /></span>
              <span className="process-copy"><small>STEP 02</small><strong>Track reimbursement claims</strong></span>
              <span className="process-check"><Check size={14} /></span>
            </div>
            <div className="process-connector"><span /></div>
            <div className="process-item">
              <span className="process-icon"><FileText size={19} /></span>
              <span className="process-copy"><small>STEP 03</small><strong>Generate organised reports</strong></span>
              <span className="process-check"><Check size={14} /></span>
            </div>
          </div>
          <div className="visual-footer"><span><CircleDot size={12} /> DIGITAL WORKFLOW</span><span>EXPENSES / CLAIMS / REPORTS</span></div>
          <div className="panel-decoration" aria-hidden="true" />
        </div>
        <span className="hero-index" aria-hidden="true">01 / 03</span>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="section-heading">
          <div><p className="eyebrow"><span className="eyebrow-dot" /> THE PROJECT</p><h2 id="about-title">Less paperwork.<br /><span>More clarity.</span></h2></div>
          <p className="section-intro">A digital way to manage expense details and reimbursement claims—without relying on manual paperwork.</p>
        </div>
        <div className="capability-grid">
          {capabilities.map(({ number, icon: Icon, title, description }) => (
            <article className="capability" key={number}>
              <div className="capability-top"><span>{number}</span><Icon size={19} strokeWidth={1.7} /></div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <div className="benefit-band">
          <span className="benefit-mark"><Check size={18} /></span>
          <p><strong>Why it matters</strong><span>Save time, reduce paperwork, and make expense and reimbursement management easier and more organised.</span></p>
          <span className="benefit-note">A SIMPLER WAY TO KEEP THINGS TOGETHER</span>
        </div>
      </section>

      <footer className="site-footer">
        <a className="footer-brand" href="#top"><span className="brand-mark"><Layers3 size={16} /></span>Smart Expense &amp; Reimbursement Management System</a>
        <p>Made by <strong>Shreya Bansal</strong></p>
      </footer>
    </main>
  )
}
