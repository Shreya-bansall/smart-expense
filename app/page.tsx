import { ArrowUpRight, AtSign, Code2, Layers3, MoveRight } from 'lucide-react'

export default function Page() {
  return (
    <main className="calling-card-page">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="topbar">
        <a className="monogram" href="#home" aria-label="Shreya Bansal home">SB<span>.</span></a>
        <span className="topbar-note"><span className="status-dot" /> Personal calling card</span>
      </header>

      <section className="card-layout" id="home" aria-labelledby="intro-title">
        <div className="intro-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> SOFTWARE DEVELOPER</p>
          <h1 id="intro-title">Shreya<br /><span>Bansal</span></h1>
          <p className="intro-description">Building thoughtful things<br className="desktop-break" /> for the digital world.</p>
          <a className="contact-link" href="mailto:shreyab2400@gmail.com">
            <span className="contact-icon"><AtSign size={18} strokeWidth={1.8} /></span>
            <span className="contact-label"><small>Say hello</small><strong>shreyab2400@gmail.com</strong></span>
            <ArrowUpRight className="contact-arrow" size={19} strokeWidth={1.8} />
          </a>
        </div>

        <aside className="profile-card" aria-label="About Shreya">
          <div className="card-topline"><span>HELLO, I&apos;M</span><Code2 size={17} strokeWidth={1.7} /></div>
          <div className="card-mark" aria-hidden="true"><span>S</span><i /></div>
          <div className="card-identity"><p>Shreya Bansal</p><span>Software Developer</span></div>
          <div className="card-divider" />
          <div className="focus-row"><span className="focus-icon"><Layers3 size={17} strokeWidth={1.7} /></span><div><small>FOCUS AREA</small><strong>Cloud &amp; DevOps</strong></div><MoveRight className="focus-arrow" size={18} /></div>
          <div className="card-index"><span>SB — 01</span><span>PERSONAL / 2026</span></div>
        </aside>
      </section>

      <footer className="page-footer"><span>SOFTWARE DEVELOPER</span><span className="footer-rule" /><a href="mailto:shreyab2400@gmail.com">LET&apos;S CONNECT <ArrowUpRight size={13} /></a></footer>
    </main>
  )
}
