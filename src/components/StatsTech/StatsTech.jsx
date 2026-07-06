import { Code2, Smartphone, Database, Cloud, Shield, Cpu, Blocks } from 'lucide-react';
import './StatsTech.css';
const stats=[['100%','CLIENT SATISFACTION'],['200+','PROJECTS DELIVERED'],['99.9%','UPTIME GUARANTEE'],['24/7','EXPERT SUPPORT']];
const tech=['Swift','Kotlin','Docker','AWS','React','React Native','Node.js','Python','Laravel','MongoDB','Figma','GSAP'];
export default function StatsTech(){return <section className="statsTech"><div className="statsGrid" data-reveal>{stats.map((s,i)=><div className="stat" key={i}><h2>{s[0]}</h2><p>{s[1]}</p></div>)}</div><div className="techMarquee"><div className="tech-track">{[...tech,...tech].map((t,i)=><span className="tech" key={i}>{icons[i%8]}<b>{t}</b></span>)}</div></div></section>}
const icons=[<Code2/>,<Smartphone/>,<Database/>,<Cloud/>,<Cpu/>,<Blocks/>,<Shield/>];
