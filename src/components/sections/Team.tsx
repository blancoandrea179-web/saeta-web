import styles from './Team.module.css'

const team = [
  { name: 'Daniela Nebel',    role: 'Fundadora & CEO',                img: '/images/Foto dani (1).png' },
  { name: 'Maritza Cantú',    role: 'CFO, Treasury & Billing Manager', img: '/images/Maritza Cantú - CFO, Treasury & Billing Manager.png' },
  { name: 'Edith Chávez',     role: 'CAO Human Resources Manager',    img: '/images/Edith Chávez - CAO Human Resources Manager.png' },
  { name: 'Eduardo López',    role: 'Foreign Trade Manager',          img: '/images/Eduardo López - Foreign Trade Manager.png' },
  { name: 'Leslie Soto',      role: 'Marketing Manager',              img: '/images/Leslie Soto - Marketing Manager.png' },
  { name: 'Alfredo Galindo',  role: 'Accountant Manager',             img: '/images/Alfredo Galindo - Accountant Manager.png' },
]

function Card({ name, role, img }: { name: string; role: string; img: string }) {
  return (
    <div className={styles.card}>
      <div className={styles.photo}>
        <img
          src={img}
          alt={name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
        />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.role}>{role}</p>
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

        <div className={styles.grid}>
          {team.map((m, i) => (
            <Card key={i} name={m.name} role={m.role} img={m.img} />
          ))}
        </div>

        <div className={styles.cta}>
          <p className={styles.ctaText}>¿Quieres ser parte del equipo?</p>
          
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