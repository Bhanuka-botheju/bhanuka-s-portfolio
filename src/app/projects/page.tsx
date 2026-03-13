import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Tag,
  ArrowRight,
  Brain,
  Database,
  BarChart2,
  Bot,
  Globe,
  Cpu,
} from "lucide-react";

const projects = [
  {
    title: "Generatively Pretrained Transformer (nano-GPT)",
    date: "feb 2026",
    summary:
      "build a Generatively Pretrained Transformer (GPT), following the paper 'Attention is All You Need'and OpenAI's GPT-2 / GPT-3.",
    tags: ["Deep Learning", "Shekespeare", "PyTorch", "Python"],
    icon: Brain,
    accent: "from-teal-500 to-cyan-500",
    glow: "shadow-teal-500/20",
    link: "https://github.com/Bhanuka-botheju/nano_gpt"
  },
  {
    title: "AI Sales Assistant Chatbot",
    date: "Aug 2025",
    summary:
      "A smart AI sales assistant built with BERT and the DSTC8 dataset to handle complex, multi-turn customer conversations, integrated with MCP for real-time product data retrieval.",
    tags: ["NLP", "BERT", "DSTC8", "FastAPI", "PostgreSQL"],
    icon: BarChart2,
    accent: "from-green-500 to-emerald-500",
    glow: "shadow-green-500/20",
    link: "https://github.com/birunthabanr/AI-Sales-Assistant"
  },
  {
    title: "HRMS_Database_project",
    date: "Jun 2024",
    summary:
      "A full-stack Human Resource Management System (HRMS) designed to streamline administrative workflows like employee tracking and attendance. The platform features a dynamic React frontend powered by a high-performance FastAPI backend, with secure and scalable data storage handled by a MySQL database.",
    tags: ["Database", "SQL", "Python", "SQLite"],
    icon: Bot,
    accent: "from-purple-500 to-pink-500",
    glow: "shadow-purple-500/20",
    link: "https://github.com/dewminawijekoon/HRMS_DataBase_Project"
  },
  {
    title: "mythical mayhem game development using java",
    date: "Mar 2024",
    summary:
      "A collaborative Java-based game developed as a second-semester Computer Science and Engineering group project at the University of Moratuwa, demonstrating core object-oriented programming principles in action",
    tags: ["Game Development", "Java", "Swing"],
    icon: Globe,
    accent: "from-blue-500 to-indigo-500",
    glow: "shadow-blue-500/20",
    link: "https://github.com/Bhanuka-botheju/mythical-mayhem"
  },
  {
    title: "Price prediction model",
    date: "Jan 2026",
    summary:
      "This dynamic pricing model leverages a DeepAR neural network to accurately forecast upcoming user traffic and demand. Those time-series predictions are then fed into an XGBoost-powered core engine, which evaluates them alongside real-time competitor rates to recommend optimal, data-driven prices.",
    tags: ["Machine Learning", "Scikit-learn", "XGBoost", "Pandas"],
    icon: Database,
    accent: "from-orange-500 to-amber-500",
    glow: "shadow-orange-500/20",
    link: "https://github.com/Bhanuka-botheju/price_prediction_model"
  },
  {
    title: "AI vs Human Generated Image Classification",
    date: "Oct 2024",
    summary:
      "A machine learning project that classifies images as either AI-generated or human-created using deep learning models.",
    tags: ["Machine Learning", "Deep Learning", "Computer Vision"],
    icon: Cpu,
    accent: "from-rose-500 to-red-500",
    glow: "shadow-rose-500/20",
    link: "https://github.com/Bhanuka-botheju/ai-vs-human-generated-image-classification-"
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <Badge className="mb-4 bg-teal-500/10 text-teal-400 border-teal-500/30 px-4 py-1.5 text-xs">
            Data Science · ML · AI
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-white/50 max-w-2xl text-sm leading-relaxed">
            A collection of research projects, tools, and systems I&apos;ve built
            as a CS engineer specialising in Data Science and Machine Learning.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <article
                key={i}
                className="glass-card p-6 flex flex-col gap-4 group cursor-pointer"
              >
                {/* Top row */}
                <div className="flex items-start justify-between gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.accent} flex items-center justify-center shadow-lg ${project.glow} flex-shrink-0`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-white/40 mt-1 flex-shrink-0">
                    <Calendar className="w-3.5 h-3.5" />
                    {project.date}
                  </div>
                </div>

                {/* Title & summary */}
                <div>
                  <h2 className="font-semibold text-white mb-2 group-hover:text-teal-400 transition-colors leading-snug">
                    {project.title}
                  </h2>
                  <p className="text-sm text-white/55 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full bg-white/5 text-white/50 border border-white/10"
                    >
                      <Tag className="w-2.5 h-2.5" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read more */}
                {/* <div className="flex items-center gap-1.5 text-xs text-teal-400 font-medium group-hover:gap-3 transition-all duration-200 pt-1 border-t border-white/5">
                  Read more <ArrowRight className="w-3.5 h-3.5" />
                </div> */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-teal-400 font-medium group-hover:gap-3 transition-all duration-200 pt-1 border-t border-white/5"
                >
                  Read more <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
