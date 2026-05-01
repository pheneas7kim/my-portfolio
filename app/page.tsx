"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Building2, 
  LineChart, 
  PenTool, 
  ArrowUpRight, 
  Newspaper, 
  Mail, 
  Globe, 
  MessageSquare,
  ExternalLink,
  ChevronRight,
  MapPin,
  Coffee,
  Users,
  TrendingUp,
  Shield,
  ChevronDown,
  Sparkles,
  Flower2,
  Leaf,
  Sun,
  Compass,
  Eye,
  BarChart3,
  Mic2,
  Award
} from "lucide-react"

export default function ProfessionalPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50/40 via-orange-50/30 to-rose-50/40 dark:from-slate-950 dark:via-slate-900 dark:to-amber-950/20 selection:bg-primary/10 transition-colors duration-300 relative overflow-x-hidden">
      
      {/* Custom animation keyframes */}
      <style>
        {`
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(10deg); }
          }
          @keyframes float-delayed {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(15px) rotate(-10deg); }
          }
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.05); }
          }
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          @keyframes twinkle {
            0%, 100% { opacity: 0; }
            50% { opacity: 0.5; }
          }
          .animate-float-slow {
            animation: float-slow 6s ease-in-out infinite;
          }
          .animate-float-delayed {
            animation: float-delayed 5s ease-in-out infinite;
          }
          .animate-spin-slow {
            animation: spin-slow 12s linear infinite;
          }
          .animate-pulse-slow {
            animation: pulse-slow 3s ease-in-out infinite;
          }
          .animate-bounce-slow {
            animation: bounce-slow 2s ease-in-out infinite;
          }
          .animate-twinkle {
            animation: twinkle 4s ease-in-out infinite;
          }
        `}
      </style>

      {/* --- ANIMATED FLORAL DECORATIONS --- */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Top left corner flowers */}
        <div className="absolute top-10 left-5 opacity-20 animate-float-slow">
          <Flower2 className="w-24 h-24 text-amber-500/40" strokeWidth={1.5} />
        </div>
        <div className="absolute top-32 left-20 opacity-15 animate-float-delayed">
          <Leaf className="w-16 h-16 text-emerald-600/30" strokeWidth={1.5} />
        </div>
        {/* Top right corner */}
        <div className="absolute top-20 right-10 opacity-25 animate-spin-slow">
          <Sun className="w-20 h-20 text-amber-400/30" strokeWidth={1.5} />
        </div>
        {/* Bottom left */}
        <div className="absolute bottom-32 left-8 opacity-20 animate-pulse-slow">
          <Flower2 className="w-28 h-28 text-rose-400/30" strokeWidth={1.5} />
        </div>
        {/* Bottom right */}
        <div className="absolute bottom-20 right-5 opacity-15 animate-bounce-slow">
          <Leaf className="w-20 h-20 text-emerald-500/30" strokeWidth={1.5} />
        </div>
        {/* Scattered dots */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-amber-300/20 dark:bg-amber-400/10 animate-twinkle"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      {/* --- NAVIGATION --- */}
      <nav className="sticky top-0 z-50 w-full border-b border-amber-200/30 dark:border-amber-800/30 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Compass className="w-6 h-6 text-amber-600 dark:text-amber-500 animate-pulse-slow" />
            <span className="text-xl font-serif font-bold tracking-tighter bg-gradient-to-r from-amber-800 to-rose-700 dark:from-amber-400 dark:to-rose-400 bg-clip-text text-transparent">
              Elijah M. Mukaria
            </span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
            <a href="#analysis" className="hover:text-amber-600 transition-colors relative group">Analysis <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span></a>
            <a href="#admin" className="hover:text-amber-600 transition-colors relative group">Governance <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span></a>
            <a href="#blog" className="hover:text-amber-600 transition-colors relative group">Blog <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span></a>
          </div>
          <Button variant="default" size="sm" className="rounded-full shadow-md bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-700 hover:to-rose-700 text-white border-none transition-all duration-300 transform hover:scale-105">
            Contact Office <Sparkles className="ml-2 w-3 h-3" />
          </Button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24">
        {/* Kenyan map silhouette background */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
          <svg viewBox="0 0 800 600" className="w-full h-full object-cover">
            <path d="M400,50 C320,50 280,100 260,150 C240,200 230,250 240,300 C250,350 260,400 280,450 C300,500 320,550 400,550 C480,550 500,500 520,450 C540,400 550,350 540,300 C530,250 520,200 540,150 C560,100 480,50 400,50Z" fill="currentColor" />
            <path d="M400,80 C340,80 310,120 295,160 C280,200 275,240 285,280 C295,320 305,360 315,400 C325,440 330,480 400,480 C470,480 475,440 485,400 C495,360 505,320 515,280 C525,240 520,200 505,160 C490,120 460,80 400,80Z" fill="currentColor" />
            <path d="M370,150 L430,150 L440,200 L360,200 Z" fill="currentColor" />
          </svg>
        </div>

        {/* Floral decorations around hero */}
        <div className="absolute top-20 left-10 opacity-30 animate-float-slow">
          <Flower2 className="w-16 h-16 text-amber-500" strokeWidth={1.2} />
        </div>
        <div className="absolute bottom-10 right-20 opacity-25 animate-float-delayed">
          <Flower2 className="w-20 h-20 text-rose-400" strokeWidth={1.2} />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 animate-in fade-in slide-in-from-bottom-3 duration-700">
            <Badge variant="outline" className="px-4 py-1 border-amber-400/40 bg-amber-100/60 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-full backdrop-blur-sm">
              🇰🇪 Available for Consultation 2026
            </Badge>
            <Badge variant="outline" className="px-4 py-1 border-rose-400/40 bg-rose-100/60 dark:bg-rose-900/30 text-rose-800 dark:text-rose-300 rounded-full backdrop-blur-sm">
              Nairobi • Global
            </Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tight mb-6 leading-tight">
            The Intersection of <span className="bg-gradient-to-r from-amber-700 to-rose-600 dark:from-amber-400 dark:to-rose-400 bg-clip-text text-transparent italic font-normal">Policy</span> <br /> 
            & <span className="relative inline-block">
              Public Administration
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full animate-pulse-slow"></div>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Providing expert political analysis and administrative strategy for a changing civic landscape. 
            Data-backed insights for leaders and the public across Kenya and beyond.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="rounded-full px-8 h-12 text-base shadow-lg shadow-amber-500/20 bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-700 hover:to-rose-700 transition-all duration-300 transform hover:scale-105">
              Read Briefings <ArrowUpRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base bg-white/80 dark:bg-transparent border-2 border-amber-300 hover:border-amber-500 hover:bg-amber-50 dark:hover:bg-amber-950/30 transition-all duration-300">
              View Case Studies
            </Button>
          </div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-amber-100/50 dark:fill-amber-900/20"></path>
          </svg>
        </div>
      </section>

      {/* --- EXPERTISE GRID --- */}
      <section id="analysis" className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300">Core Competencies</Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-bold">Areas of Expertise</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Bridging analytical rigor with practical governance solutions</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="group border-none shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400/10 to-rose-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            <CardHeader>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <LineChart className="w-7 h-7 text-white" />
              </div>
              <CardTitle className="text-2xl font-serif">Political Analyst</CardTitle>
              <CardDescription className="text-base">Specializing in electoral trends, polling data synthesis, and geopolitical risk assessment for East Africa.</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-amber-50 dark:bg-amber-950/50">Data Science</Badge>
                <Badge variant="secondary" className="bg-amber-50 dark:bg-amber-950/50">Geopolitics</Badge>
                <Badge variant="secondary" className="bg-amber-50 dark:bg-amber-950/50">Forecasting</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="group border-none shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            <CardHeader>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <CardTitle className="text-2xl font-serif">Public Admin</CardTitle>
              <CardDescription className="text-base">Optimizing organizational performance and implementing ethical governance frameworks in public sector.</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-emerald-50 dark:bg-emerald-950/50">Governance</Badge>
                <Badge variant="secondary" className="bg-emerald-50 dark:bg-emerald-950/50">Ethics</Badge>
                <Badge variant="secondary" className="bg-emerald-50 dark:bg-emerald-950/50">Leadership</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="group border-none shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-400/10 to-pink-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            <CardHeader>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-rose-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <PenTool className="w-7 h-7 text-white" />
              </div>
              <CardTitle className="text-2xl font-serif">Political Blogger</CardTitle>
              <CardDescription className="text-base">Decoding the news cycle through daily columns and deep-dive newsletters for 50k+ readers globally.</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-rose-50 dark:bg-rose-950/50">Journalism</Badge>
                <Badge variant="secondary" className="bg-rose-50 dark:bg-rose-950/50">Commentary</Badge>
                <Badge variant="secondary" className="bg-rose-50 dark:bg-rose-950/50">Newsletter</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-16 bg-gradient-to-r from-amber-900/5 to-rose-900/5 dark:from-amber-900/10 dark:to-rose-900/10 my-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">50K+</div>
              <p className="text-sm text-muted-foreground">Newsletter Readers</p>
            </div>
            <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">150+</div>
              <p className="text-sm text-muted-foreground">Published Analyses</p>
            </div>
            <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">12+</div>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">47</div>
              <p className="text-sm text-muted-foreground">Counties Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTENT TABS --- */}
      <section id="blog" className="py-24 relative">
        {/* Background floral pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-20 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl text-left">
              <Badge className="mb-4 bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300">Latest Writings</Badge>
              <h2 className="text-4xl font-serif font-bold mb-4 tracking-tight">Recent Publications</h2>
              <p className="text-muted-foreground text-lg italic font-light border-l-4 border-amber-400 pl-4">"Insight is the first step toward effective action."</p>
            </div>
            <Tabs defaultValue="all" className="w-full md:w-auto">
              <TabsList className="grid w-full grid-cols-3 md:w-[400px] bg-amber-100/50 dark:bg-amber-900/30">
                <TabsTrigger value="all" className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800">All</TabsTrigger>
                <TabsTrigger value="policy" className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800">Policy</TabsTrigger>
                <TabsTrigger value="opinion" className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800">Opinion</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="space-y-4">
            {[
              { title: "Why Administrative Transparency is the Key to Public Trust in 2026", badge: "Government Efficiency", category: "Analysis", readTime: "12 Min Read" },
              { title: "The Future of Devolution: Kenya's County Governments at a Crossroads", badge: "Devolution", category: "Policy Brief", readTime: "15 Min Read" },
              { title: "Electoral Integrity in the Digital Age: Challenges and Solutions", badge: "Elections", category: "Opinion", readTime: "10 Min Read" }
            ].map((item, i) => (
              <div key={i} className="group flex flex-col md:flex-row md:items-center justify-between p-8 rounded-3xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border border-amber-200/30 hover:border-amber-300/50 hover:shadow-xl transition-all duration-500 hover:-translate-x-1">
                <div className="flex items-start gap-6">
                  <div className="hidden sm:flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-amber-100 to-rose-100 dark:from-amber-900/30 dark:to-rose-900/30 text-amber-700 font-serif italic text-xl font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <Badge className="mb-2 font-mono text-[10px] px-3 py-1 bg-gradient-to-r from-amber-100 to-rose-100 dark:from-amber-900/50 dark:to-rose-900/50 text-amber-800 dark:text-amber-300">
                      {item.badge}
                    </Badge>
                    <h3 className="text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex gap-4 mt-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><Newspaper className="w-3 h-3" /> {item.category}</span>
                      <span>•</span>
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" className="mt-6 md:mt-0 rounded-full group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-rose-600 group-hover:text-white transition-all duration-300 group-hover:shadow-lg">
                  Read Full Piece <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="rounded-full border-2 border-amber-300 hover:border-amber-500 hover:bg-amber-50 dark:hover:bg-amber-950/30">
              View All Articles <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* --- NEWSLETTER SECTION --- */}
      <section className="py-20 bg-gradient-to-r from-amber-600/10 to-rose-600/10 dark:from-amber-800/20 dark:to-rose-800/20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-rose-500 shadow-lg mb-6 animate-bounce-slow">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Subscribe to The Policy Brief</h2>
          <p className="text-muted-foreground mb-8">Weekly insights on governance, politics, and public administration delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-6 py-3 rounded-full border border-amber-300 bg-white/80 dark:bg-slate-900/80 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent w-full sm:w-96"
            />
            <Button className="rounded-full bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-700 hover:to-rose-700 shadow-lg transform hover:scale-105 transition-all duration-300">
              Subscribe <Sparkles className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* --- FOOTER WITH KENYA MAP BACKGROUND --- */}
      <footer className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950 dark:from-black dark:to-slate-950 text-white overflow-hidden">
        {/* Kenya Map Silhouette Background */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none flex items-center justify-center">
          <svg viewBox="0 0 600 800" className="w-full h-full max-w-md mx-auto">
            <path d="M300,50 C250,50 220,80 200,120 C180,160 170,200 175,250 C180,300 190,350 200,400 C210,450 220,500 240,550 C260,600 280,650 300,700 C320,650 340,600 360,550 C380,500 390,450 400,400 C410,350 420,300 425,250 C430,200 420,160 400,120 C380,80 350,50 300,50Z" fill="currentColor" />
            <path d="M280,100 L320,100 L330,160 L270,160 Z" fill="currentColor" />
            <circle cx="300" cy="300" r="30" fill="currentColor" />
            <path d="M260,380 L340,380 L350,420 L250,420 Z" fill="currentColor" />
            <path d="M270,480 L330,480 L340,540 L260,540 Z" fill="currentColor" />
          </svg>
        </div>

        {/* Floral decorations in footer */}
        <div className="absolute bottom-10 left-5 opacity-20 animate-float-slow">
          <Flower2 className="w-20 h-20 text-amber-400" strokeWidth={1.2} />
        </div>
        <div className="absolute top-20 right-10 opacity-15 animate-float-delayed">
          <Leaf className="w-16 h-16 text-emerald-400" strokeWidth={1.2} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div className="max-w-sm">
              <div className="flex items-center gap-2 mb-4">
                <Compass className="w-8 h-8 text-amber-400" />
                <h3 className="font-serif font-bold text-3xl tracking-tighter bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent">ELIJAH M. MUKARIA</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                A bridge between complex political realities and clear, actionable administrative solutions. 
                Join the conversation on the future of governance in Kenya and beyond.
              </p>
              <div className="flex items-center gap-2 mt-4 text-amber-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Nairobi, Kenya</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-12 sm:gap-16">
              <div className="space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-widest text-amber-400">Connect</h4>
                <ul className="space-y-2 text-slate-300">
                  <li><a href="#" className="hover:text-amber-400 flex items-center gap-2 transition-colors"><Globe className="w-4 h-4"/> LinkedIn</a></li>
                  <li><a href="#" className="hover:text-amber-400 flex items-center gap-2 transition-colors"><MessageSquare className="w-4 h-4"/> Substack</a></li>
                  <li><a href="#" className="hover:text-amber-400 flex items-center gap-2 transition-colors"><Mail className="w-4 h-4"/> Contact</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-widest text-amber-400">Resources</h4>
                <ul className="space-y-2 text-slate-300">
                  <li><a href="#" className="hover:text-amber-400 transition-colors">Press Kit</a></li>
                  <li><a href="#" className="hover:text-amber-400 transition-colors">Consulting</a></li>
                  <li><a href="#" className="hover:text-amber-400 transition-colors">Legal</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-widest text-amber-400">Follow</h4>
                <ul className="space-y-2 text-slate-300">
                  <li><a href="#" className="hover:text-amber-400 transition-colors">Twitter/X</a></li>
                  <li><a href="#" className="hover:text-amber-400 transition-colors">YouTube</a></li>
                  <li><a href="#" className="hover:text-amber-400 transition-colors">Podcast</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400 italic">
            <p>© 2026 Elijah M. Mukaria. All rights reserved.</p>
            <p className="flex items-center gap-1">Built with <span className="text-rose-400">❤️</span> for public interest • <span className="flex items-center gap-1"><Leaf className="w-3 h-3" /> Sustainable governance</span></p>
          </div>
        </div>
      </footer>
    </div>
  )
}