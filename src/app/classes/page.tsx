"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Download, BookOpen, Clock, FileText, GraduationCap } from "lucide-react";

/* ─── Data ─── */
type Session = { topic: string; date: string; pdf?: string };
type Batch = { label: string; year: string; desc: string; color: string; sessions: Session[] };

const batches: Batch[] = [
  {
    label: "2026 A/L",
    year: "2026",
    desc: "Current batch — final revision phase",
    color: "text-teal-400",
    sessions: [
      { topic: "Mechanics – Newton's Laws (Full Revision)", date: "2025-01-10", pdf: "/pdfs/2026-mechanics.pdf" },
      { topic: "Circular Motion & Gravitation", date: "2025-01-17", pdf: "/pdfs/2026-circular.pdf" },
      { topic: "Waves & Oscillations", date: "2025-01-24", pdf: "/pdfs/2026-waves.pdf" },
      { topic: "Thermal Physics", date: "2025-02-07", pdf: "/pdfs/2026-thermal.pdf" },
      { topic: "Electrostatics & Electric Fields", date: "2025-02-14", pdf: "/pdfs/2026-electro.pdf" },
      { topic: "Current Electricity", date: "2025-02-21", pdf: "/pdfs/2026-current.pdf" },
      { topic: "Optics – Full Chapter", date: "2025-02-28", pdf: "/pdfs/2026-optics.pdf" },
      { topic: "Past Paper Discussion 2024", date: "2025-03-07", pdf: "/pdfs/2026-pastpaper.pdf" },
    ],
  },
  {
    label: "2027 A/L",
    year: "2027",
    desc: "Ongoing — fundamentals & problem solving",
    color: "text-purple-400",
    sessions: [
      { topic: "Introduction to Physics & SI Units", date: "2025-01-05", pdf: "/pdfs/2027-intro.pdf" },
      { topic: "Kinematics – Linear Motion", date: "2025-01-12", pdf: "/pdfs/2027-kinematics.pdf" },
      { topic: "Newton's Laws of Motion", date: "2025-01-19", pdf: "/pdfs/2027-newton.pdf" },
      { topic: "Energy, Work & Power", date: "2025-01-26", pdf: "/pdfs/2027-energy.pdf" },
      { topic: "Momentum & Collisions", date: "2025-02-02", pdf: "/pdfs/2027-momentum.pdf" },
      { topic: "Circular Motion", date: "2025-02-16", pdf: "/pdfs/2027-circular.pdf" },
    ],
  },
  {
    label: "2028 A/L",
    year: "2028",
    desc: "New batch — starting from basics",
    color: "text-cyan-400",
    sessions: [
      { topic: "Welcome Session & Study Plan", date: "2025-01-08", pdf: "/pdfs/2028-welcome.pdf" },
      { topic: "Mathematics Refresher for Physics", date: "2025-01-15", pdf: "/pdfs/2028-math.pdf" },
      { topic: "Physical Quantities & Measurements", date: "2025-01-22", pdf: "/pdfs/2028-measurements.pdf" },
      { topic: "Introduction to Kinematics", date: "2025-02-05", pdf: "/pdfs/2028-kinematics.pdf" },
    ],
  },
];

/* ─── Session card ─── */
function SessionCard({ session, index }: { session: Session; index: number }) {
  const formattedDate = new Date(session.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="glass-card p-4 flex items-center justify-between gap-4 group">
      {/* Session number */}
      <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-xs font-bold text-white/40">
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-white group-hover:text-teal-400 transition-colors truncate">
          {session.topic}
        </p>
        <div className="flex items-center gap-1.5 mt-0.5 text-xs text-white/40">
          <Clock className="w-3 h-3" />
          {formattedDate}
        </div>
      </div>

      {/* Download button */}
      {session.pdf ? (
        <a
          href={session.pdf}
          download
          className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20 text-xs font-medium hover:bg-teal-500/20 hover:border-teal-500/40 transition-all duration-200 group/btn"
          onClick={(e) => e.stopPropagation()}
        >
          <Download className="w-3.5 h-3.5 group-hover/btn:translate-y-0.5 transition-transform" />
          PDF
        </a>
      ) : (
        <span className="flex-shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 text-white/30 border border-white/10 text-xs font-medium cursor-not-allowed">
          <FileText className="w-3.5 h-3.5" />
          Soon
        </span>
      )}
    </div>
  );
}

/* ─── Page ─── */
export default function ClassesPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Badge className="mb-4 bg-purple-500/10 text-purple-400 border-purple-500/30 px-4 py-1.5 text-xs">
            Physics · A/L · 2026 · 2027 · 2028
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Physics <span className="gradient-text">Classes</span>
          </h1>
          <p className="text-white/50 text-sm max-w-2xl leading-relaxed">
            Comprehensive A/L Physics theory and problem-solving sessions. Select your
            batch below to view session notes and download PDFs.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {batches.map((b) => (
            <div key={b.year} className="glass-card p-4 text-center">
              <GraduationCap className={`w-5 h-5 mx-auto mb-2 ${b.color}`} />
              <p className="font-bold text-white text-lg">{b.year}</p>
              <p className="text-xs text-white/40">{b.sessions.length} sessions</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <Tabs defaultValue="2026">
          <TabsList className="bg-white/5 border border-white/10 h-auto p-1 rounded-xl mb-8 flex flex-wrap gap-1">
            {batches.map((b) => (
              <TabsTrigger
                key={b.year}
                value={b.year}
                className="flex-1 rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-500 data-[state=active]:to-teal-600 data-[state=active]:text-white data-[state=active]:shadow-lg text-white/50 text-sm py-2.5"
              >
                {b.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {batches.map((batch) => (
            <TabsContent key={batch.year} value={batch.year}>
              {/* Batch info */}
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className={`w-5 h-5 ${batch.color}`} />
                <div>
                  <p className="font-semibold text-white">{batch.label} Batch</p>
                  <p className="text-xs text-white/40">{batch.desc}</p>
                </div>
                <Badge className="ml-auto bg-white/5 text-white/50 border-white/10 text-xs">
                  {batch.sessions.length} sessions
                </Badge>
              </div>

              {/* Sessions */}
              <div className="flex flex-col gap-3">
                {batch.sessions.map((session, i) => (
                  <SessionCard key={i} session={session} index={i} />
                ))}
              </div>

              {/* Subscribe prompt */}
              <div className="mt-8 glass-card p-5 text-center border-dashed">
                <p className="text-sm text-white/40 mb-1">More sessions coming soon</p>
                <p className="text-xs text-white/25">
                  New sessions are uploaded weekly. Contact via Telegram to enroll.
                </p>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </main>
  );
}
