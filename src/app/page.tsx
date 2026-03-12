import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Award,
  Star,
  BookOpen,
  Trophy,
  Music,
  Users,
  Code,
  Database,
  Brain,
  ChevronDown,
} from "lucide-react";

/* ─────────────────── data ─────────────────── */

const educationTimeline = [
  {
    year: "2023 – Present",
    institution: "University of Mortuwa",
    degree: "B.Sc. (Eng) Hons Computer Science",
    specialization: "Specializing in Data Science",
    icon: GraduationCap,
  },
  {
    year: "2019 – 2022",
    institution: "St. Joseph's college",
    degree: "G.C.E. Advanced Level",
    specialization: "Combined Mathematics, Physics, Chemistry",
    icon: BookOpen,
  },
  {
    year: "2018",
    institution: "St. Joseph's college",
    degree: "G.C.E. Ordinary Level",
    specialization: "9 Subjects",
    icon: Award,
  },
];

const examResults = [
  {
    exam: "G.C.E. O/L (2018)",
    results: [
      { subject: "Mathematics", grade: "A" },
      { subject: "Science", grade: "A" },
      { subject: "Helth Science", grade: "A" },
      { subject: "History", grade: "A" },
      { subject: "Commerce", grade: "A" },
      { subject: "Sinhala", grade: "A" },
      { subject: "Religion", grade: "A" },
      { subject: "Art", grade: "B" },
      { subject: "English", grade: "C" },
    ],
  },
  {
    exam: "G.C.E. A/L (2021)",
    results: [
      { subject: "Combined Maths", grade: "A" },
      { subject: "Physics", grade: "A" },
      { subject: "Chemistry", grade: "A" },
      { subject: "Z-Score", grade: 2.23 },
      { subject: "District Rank", grade: 24 },
      { subject: "Island Rank", grade: 390 }
    ],
  },
];

const extraCurricular = [
  { icon: Trophy, title: "Science Olympiad", desc: "District-level gold medalist in Physics", color: "text-yellow-400" },
  { icon: Music, title: "School Band", desc: "Lead guitarist, performed at 10+ events", color: "text-pink-400" },
  { icon: Users, title: "Student Council", desc: "Vice president – 2022/23 term", color: "text-blue-400" },
  { icon: Code, title: "Coding Club", desc: "Founder & president, 40+ members", color: "text-teal-400" },
];

const favouriteWorks = [
  {
    title: "Rainfall Prediction ML Model",
    description: "Built an LSTM-based model to predict monsoon rainfall patterns across Sri Lanka using 20 years of meteorological data.",
    tags: ["Python", "TensorFlow", "Pandas"],
    icon: Brain,
    color: "from-teal-500/20 to-cyan-500/10",
    glow: "shadow-teal-500/20",
  },
  {
    title: "Student Performance Dashboard",
    description: "Interactive analytics dashboard for tracking A/L student progress with real-time visualizations and automated reports.",
    tags: ["React", "Recharts", "FastAPI"],
    icon: Database,
    color: "from-purple-500/20 to-pink-500/10",
    glow: "shadow-purple-500/20",
  },
  {
    title: "Physics Class Automation Bot",
    description: "Telegram bot that distributes class schedules, PDF notes, and sends assignment reminders to 200+ students automatically.",
    tags: ["Python", "Telegram API", "SQLite"],
    icon: Code,
    color: "from-blue-500/20 to-indigo-500/10",
    glow: "shadow-blue-500/20",
  },
];

/* ─────────────────── grade badge color ─────────────────── */
function GradeBadge({ grade }: { grade: string }) {
  const colors: Record<string, string> = {
    A: "bg-teal-500/20 text-teal-300 border-teal-500/30",
    B: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    C: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  };
  return (
    <span
      className={`inline-flex items-center justify-center w-8 h-8 rounded-lg text-sm font-bold border ${colors[grade] ?? "bg-white/10 text-white/60"
        }`}
    >
      {grade}
    </span>
  );
}

/* ─────────────────── page ─────────────────── */
export default function HomePage() {
  return (
    <main>
      {/* ══ HERO ══ */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        id="hero"
      >
        {/* Background image */}
        {/* <div className="absolute inset-0 z-0">
          <Image
            src="/images/background.jpg"
            alt="Hero background"
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e]/40 via-transparent to-[#0a0f1e]" />
        </div> */}
        {/* <div className="absolute inset-0 z-0">
          <Image
            src="/images/background.jpg"
            alt="Hero background"
            fill
            priority
            className="object-cover object-top opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e]/40 via-transparent to-[#0a0f1e]" />
        </div> */}

        <div className="absolute inset-0 z-0">
          <Image
            src="/images/background.jpg"
            alt="Hero background"
            fill
            priority
            style={{ objectPosition: '50% 27.5%' }}
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e]/40 via-transparent to-[#0a0f1e]" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-20">
          {/* Circular profile image */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-40 h-40 rounded-full p-1 bg-gradient-to-br from-teal-500 via-cyan-400 to-purple-500 shadow-2xl shadow-teal-500/30 animate-fade-up">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#0a0f1e]">
                  <Image
                    src="/images/profile.JPG"
                    alt="Bhanuka"
                    width={160}
                    height={160}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
              {/* Online indicator */}
              <span className="absolute bottom-2 right-2 w-5 h-5 bg-teal-500 rounded-full border-2 border-[#0a0f1e] shadow-lg shadow-teal-500/50" />
            </div>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <Badge className="mb-4 bg-teal-500/10 text-teal-400 border-teal-500/30 px-4 py-1.5 text-xs font-medium">
              Available for opportunities
            </Badge>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
              Hi, I&apos;m{" "}
              <span className="gradient-text">Bhanuka</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-6 leading-relaxed">
              CS Engineer · Data Scientist · Physics Educator
            </p>
            <p className="text-sm md:text-base text-white/50 max-w-xl mx-auto leading-relaxed">
              Passionate about turning data into insights, building intelligent systems, and
              helping the next generation of A/L students master Physics.
            </p>
          </div>

          {/* Scroll cue */}
          <div className="mt-14 flex justify-center animate-bounce opacity-50">
            <ChevronDown className="w-6 h-6 text-teal-400" />
          </div>
        </div>
      </section>

      {/* ══ EDUCATION ══ */}
      <section id="education" className="section-pad max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">
          <span className="gradient-text">Education</span>
        </h2>
        <p className="text-white/50 mb-12 text-sm">Academic journey &amp; qualifications</p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500 via-purple-500 to-transparent hidden md:block" />

          <div className="flex flex-col gap-8">
            {educationTimeline.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="glass-card p-6 md:ml-16 relative">
                  {/* Icon on line */}
                  <div className="absolute -left-[2.6rem] top-6 w-[1.3rem] h-[1.3rem] rounded-full bg-gradient-to-br from-teal-500 to-purple-500 hidden md:flex items-center justify-center ring-4 ring-[#0a0f1e]">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500/20 to-purple-500/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-teal-400" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-teal-400 font-medium mb-1">{item.year}</div>
                      <h3 className="text-base font-semibold text-white">{item.degree}</h3>
                      <p className="text-sm text-white/60">{item.institution}</p>
                      <p className="text-xs text-white/40 mt-1">{item.specialization}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ EXAM RESULTS ══ */}
      <section id="results" className="section-pad bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">
            <span className="gradient-text">Exam Results</span>
          </h2>
          <p className="text-white/50 mb-12 text-sm">Academic achievements</p>

          <div className="grid md:grid-cols-2 gap-8">
            {examResults.map((block, bi) => (
              <div key={bi} className="glass-card p-6">
                <h3 className="font-semibold text-white mb-5 flex items-center gap-2">
                  <Award className="w-4 h-4 text-yellow-400" />
                  {block.exam}
                </h3>
                <div className="space-y-3">
                  {block.results.map((r, ri) => (
                    <div key={ri} className="flex items-center justify-between">
                      <span className="text-sm text-white/70">{r.subject}</span>
                      <GradeBadge grade={r.grade} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ EXTRA-CURRICULAR ══ */}
      <section id="extracurricular" className="section-pad max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">
          <span className="gradient-text">Extra-Curricular</span>
        </h2>
        <p className="text-white/50 mb-12 text-sm">Beyond the classroom</p>

        <div className="grid sm:grid-cols-2 gap-6">
          {extraCurricular.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="glass-card p-6 flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                  <Icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-white/55">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ══ FAVOURITE WORKS ══ */}
      <section id="works" className="section-pad bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">
            <span className="gradient-text">Favourite Works</span>
          </h2>
          <p className="text-white/50 mb-12 text-sm">Projects I&apos;m most proud of</p>

          <div className="grid md:grid-cols-3 gap-6">
            {favouriteWorks.map((work, i) => {
              const Icon = work.icon;
              return (
                <div
                  key={i}
                  className={`glass-card p-6 bg-gradient-to-br ${work.color} shadow-xl ${work.glow}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-sm leading-snug">
                    {work.title}
                  </h3>
                  <p className="text-xs text-white/55 mb-4 leading-relaxed">
                    {work.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/60 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="border-t border-white/5 py-8 text-center text-white/30 text-sm">
        <p>© {new Date().getFullYear()} Bhanuka. Built with Next.js & shadcn/ui</p>
      </footer>
    </main>
  );
}
