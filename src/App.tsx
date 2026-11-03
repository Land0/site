import { useEffect, useState } from "react"

type ServerStatus = "online" | "degraded" | "offline"

type Server = {
  name: string
  role: string
  status: ServerStatus
  latency: string
  address: string
  href: string
}

const servers: Server[] = [
  {
    name: "CORE-01",
    role: "Primary gateway",
    status: "online",
    latency: "12ms",
    address: "10.24.0.1",
    href: "https://github.com",
  },
  {
    name: "EDGE-02",
    role: "Global edge relay",
    status: "online",
    latency: "24ms",
    address: "10.24.2.8",
    href: "https://www.cloudflare.com",
  },
  {
    name: "VAULT-01",
    role: "Encrypted storage",
    status: "online",
    latency: "18ms",
    address: "10.24.4.2",
    href: "https://vercel.com",
  },
  {
    name: "AUTH-03",
    role: "Identity service",
    status: "degraded",
    latency: "86ms",
    address: "10.24.1.9",
    href: "https://sentry.io",
  },
  {
    name: "BUILD-07",
    role: "Deploy runner",
    status: "online",
    latency: "31ms",
    address: "10.24.7.4",
    href: "https://www.docker.com",
  },
  {
    name: "ARCHIVE-02",
    role: "Cold storage",
    status: "offline",
    latency: "—",
    address: "10.24.9.6",
    href: "https://grafana.com",
  },
]

const statusLabel: Record<ServerStatus, string> = {
  online: "Operational",
  degraded: "Degraded",
  offline: "Offline",
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M5 15 15 5M8 5h7v7" />
    </svg>
  )
}

function ServerTile({ server, index }: { server: Server index: number }) {
  return (
    <a
      className={`server-card status-${server.status}`}
      href={server.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${server.name}, ${statusLabel[server.status]}`}
      style={{ "--delay": `${index * 70}ms` } as React.CSSProperties}
    >
      <span className="card-index">/{String(index + 1).padStart(2, "0")}</span>
      <div className="card-top">
        <div className="server-icon" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span className="external-icon">
          <ArrowIcon />
        </span>
      </div>

      <div className="card-content">
        <p className="server-role">{server.role}</p>
        <h2>{server.name}</h2>
      </div>

      <div className="card-meta">
        <span className="status">
          <span className="status-dot" />
          {statusLabel[server.status]}
        </span>
        <span className="latency">{server.latency}</span>
      </div>

      <div className="card-footer">
        <span>{server.address}</span>
        <span>OPEN NODE</span>
      </div>
    </a>
  )
}

export default function App() {
  const [time, setTime] = useState(() => new Date())

  useEffect(() => {
    const timer = window.setInterval(() => setTime(new Date()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  const onlineCount = servers.filter(
    (server) => server.status === "online",
  ).length
  const currentTime = time.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })

  return (
    <main>
      <div className="grid-overlay" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="/" aria-label="Null Grid home">
          <span className="brand-mark">N_</span>
          <span>NULL GRID</span>
        </a>
        <div className="header-meta">
          <span className="system-status">
            <span className="pulse-dot" />
            SYSTEM ACTIVE
          </span>
          <time dateTime={time.toISOString()}>{currentTime} UTC</time>
        </div>
      </header>

      <section className="hero" aria-labelledby="page-title">
        <div className="eyebrow">
          <span>NETWORK / OVERVIEW</span>
          <span>NODE_DIRECTORY.V4</span>
        </div>
        <div className="hero-main">
          <h1 id="page-title">
            Server
            <br />
            <span>Directory.</span>
          </h1>
          <div className="hero-copy">
            <p>
              Secure access points for the distributed network. Select a node to
              establish connection.
            </p>
            <div className="summary">
              <div>
                <strong>{String(servers.length).padStart(2, "0")}</strong>
                <span>Total nodes</span>
              </div>
              <div>
                <strong>{String(onlineCount).padStart(2, "0")}</strong>
                <span>Operational</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="server-section" aria-labelledby="nodes-title">
        <div className="section-label">
          <h2 id="nodes-title">AVAILABLE NODES</h2>
          <span>SELECT TO REDIRECT</span>
        </div>
        <div className="server-grid">
          {servers.map((server, index) => (
            <ServerTile key={server.name} server={server} index={index} />
          ))}
        </div>
      </section>

      <footer>
        <span>© 2025 NULL GRID</span>
        <span>ENCRYPTION: AES-256</span>
        <span className="footer-command">
          root@nullgrid:~$ <i>monitor --live</i>
          <b>_</b>
        </span>
      </footer>
    </main>
  )
}
