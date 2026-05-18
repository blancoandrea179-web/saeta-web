import styles from './Team.module.css'

const team = [
  { name: 'Daniela Nebel',   role: 'Fundadora & CEO',                office: 'Puebla' },
  { name: 'Nombre Apellido', role: 'Consultor Fiscal',               office: 'Puebla' },
  { name: 'Nombre Apellido', role: 'Consultor Legal',                office: 'Puebla' },
  { name: 'Nombre Apellido', role: 'Especialista Comercio Exterior', office: 'Puebla' },
  { name: 'Nombre Apellido', role: 'Auditor',                        office: 'CDMX'   },
  { name: 'Nombre Apellido', role: 'Consultor Financiero',           office: 'CDMX'   },
  { name: 'Nombre Apellido', role: 'Softlanding Specialist',         office: 'CDMX'   },
  { name: 'Nombre Apellido', role: 'Asistente Ejecutivo',            office: 'CDMX'   },
]

const puebla = team.filter((m) => m.office === 'Puebla')
const cdmx = team.filter((m) => m.office === 'CDMX')

function Card({ name, role, office }: { name: string; role: string; office: string }) {
  const initials = name.split(' ').map((n) => n[0]).join('').slice(0, 2)
  return (
    <div className={styles.card}>
      <div className={styles.photo}>
        <div className={styles.photoPlaceholder}>
          <span>{initials}</span>
        </div>
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.role}>{role}</p>
        <span className={styles.officeBadge}>{office}</span>
      </div>
    </div>
  )
}

export default function Team() {
  return (
    <section id="team" className={styles.team}>
      <div className="container">

        <div className={styles.header}>
          <span className="eyebrow">Conoce al equipo</span>
          <div className="lime-bar" />
          <h2 className={styles.title}>Team SAETA</h2>
          <p className={styles.sub}>
            Profesionales apasionados comprometidos con descomplicar tu empresa,
            presentes en Puebla y Ciudad de México.
          </p>
        </div>

        <div className={styles.officeBlock}>
          <div className={styles.officeLabel}>
            <span className={styles.officeDot} />
            Oficina Puebla
          </div>
          <div className={styles.grid}>
            {puebla.map((m, i) => (
              <Card key={i} name={m.name} role={m.role} office={m.office} />
            ))}
          </div>
        </div>

        <div className={styles.officeBlock}>
          <div className={styles.officeLabel}>
            <span className={styles.officeDot} />
            Oficina CDMX — German Centre
          </div>
          <div className={styles.grid}>
            {cdmx.map((m, i) => (
              <Card key={i} name={m.name} role={m.role} office={m.office} />
            ))}
          </div>
        </div>

        <div className={styles.cta}>
          <p className={styles.ctaText}>¿Quieres ser parte del equipo?</p>
          <a
            href="https://www.linkedin.com/company/saeta-orientaci%C3%B3n-corporativa-s-c/jobs/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--dark"
          >
            Ver vacantes en LinkedIn
          </a>
        </div>

      </div>
    </section>
  )
}