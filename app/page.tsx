"use client"

import React, { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
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
  Award,
  Heart,
  Star,

  Send,
  Calendar,
  Clock,
  Quote,
  Zap,
  Target,
  BookOpen,
  Video,
  Headphones,
  Share2,
  ThumbsUp,
  MessageCircle,
  Settings,
  UserPlus,
  Bell,
  Search
} from "lucide-react"

export default function ProfessionalPortfolio() {
  const [scrolled, setScrolled] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [emailSubscribed, setEmailSubscribed] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const testimonials = [
    { name: "Dr. Sarah Wanjiku", role: "Political Science Professor, UoN", text: "Exceptional analytical skills and deep understanding of Kenya's political landscape. A must-read for anyone in public policy.", rating: 5, image: "/images/imge1.jpg" },
    { name: "James Mwangi", role: "CEO, Equity Group", text: "His insights on governance have directly influenced our corporate strategy. Brilliant mind with practical solutions.", rating: 5, image: "/images/me2.jpg" },
    { name: "Hon. Martha Karua", role: "Former Minister of Justice", text: "One of the most articulate political analysts I've encountered. His work on devolution is particularly impressive.", rating: 5, image: "/images/imge1.jpg" }
  ]

  const recentVideos = [
    { title: "Understanding the 2026 Budget", views: "12.5K", duration: "15:23", thumbnail: "/images/imge1.jpg" },
    { title: "Devolution Debate: Successes & Failures", views: "8.2K", duration: "22:45", thumbnail: "/images/me2.jpg" },
    { title: "Youth in Politics: The Rising Force", views: "15.7K", duration: "18:30", thumbnail: "/images/imge1.jpg" }
  ]

  const upcomingEvents = [
    { title: "Governance Summit 2026", date: "June 15-17, 2026", location: "Nairobi, Kenya", type: "Speaking" },
    { title: "Policy Brief Webinar", date: "May 28, 2026", location: "Virtual", type: "Hosting" },
    { title: "Public Admin Workshop", date: "July 5-7, 2026", location: "Mombasa, Kenya", type: "Keynote" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50/40 via-orange-50/30 to-rose-50/40 dark:from-slate-950 dark:via-slate-900 dark:to-amber-950/20 selection:bg-primary/10 transition-colors duration-300 relative overflow-x-hidden">
      
      {/* Custom Styles */}
      <style jsx global>{`
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
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 5px rgba(245,158,11,0.3); }
          50% { box-shadow: 0 0 20px rgba(245,158,11,0.6); }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInRight {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 5s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 12s linear infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .animate-twinkle { animation: twinkle 4s ease-in-out infinite; }
        .animate-shimmer { animation: shimmer 3s infinite linear; background-size: 1000px 100%; }
        .animate-glow { animation: glow-pulse 2s ease-in-out infinite; }
        .animate-slideLeft { animation: slideInLeft 0.6s ease-out; }
        .animate-slideRight { animation: slideInRight 0.6s ease-out; }
        .animate-scaleIn { animation: scaleIn 0.5s ease-out; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .glass-card { background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2); }
        .hover-lift { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .hover-lift:hover { transform: translateY(-5px) scale(1.02); box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
      `}</style>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-5 opacity-20 animate-float-slow">
          <Flower2 className="w-24 h-24 text-amber-500/40" strokeWidth={1.5} />
        </div>
        <div className="absolute top-32 left-20 opacity-15 animate-float-delayed">
          <Leaf className="w-16 h-16 text-emerald-600/30" strokeWidth={1.5} />
        </div>
        <div className="absolute top-20 right-10 opacity-25 animate-spin-slow">
          <Sun className="w-20 h-20 text-amber-400/30" strokeWidth={1.5} />
        </div>
        <div className="absolute bottom-32 left-8 opacity-20 animate-pulse-slow">
          <Flower2 className="w-28 h-28 text-rose-400/30" strokeWidth={1.5} />
        </div>
        <div className="absolute bottom-20 right-5 opacity-15 animate-bounce-slow">
          <Leaf className="w-20 h-20 text-emerald-500/30" strokeWidth={1.5} />
        </div>
        {[...Array(20)].map((_, i) => (
          <div key={i} className="absolute rounded-full bg-amber-300/20 dark:bg-amber-400/10 animate-twinkle" style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 3 + 2}s`
          }} />
        ))}
      </div>

     {/* Floating Social Media Bar */}
<div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">

  {/* WhatsApp */}
  <a 
    href="https://wa.me/25497245596" 
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-xl animate-bounce-slow"
    style={{ animationDelay: "0s" }}
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.032 2.001c-5.517 0-10 4.483-10 10 0 1.846.5 3.575 1.38 5.07l-1.464 4.419 4.565-1.358c1.415.815 3.052 1.285 4.79 1.285 5.517 0 10-4.483 10-10s-4.483-10-10-10zm0 18c-1.581 0-3.069-.432-4.366-1.18l-.313-.186-2.71.807.865-2.635-.204-.325c-.828-1.318-1.273-2.84-1.273-4.455 0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
      <path d="M15.979 13.652c-.188-.094-1.116-.552-1.289-.614-.173-.063-.299-.094-.425.094-.126.188-.488.598-.598.74-.11.126-.22.141-.408.047s-.799-.294-1.521-.939c-.562-.502-.942-1.122-1.052-1.312-.11-.188-.012-.29.083-.384.085-.085.188-.22.282-.329.094-.11.126-.188.188-.313.063-.125.031-.235-.016-.329-.047-.094-.425-1.025-.582-1.404-.153-.367-.309-.317-.425-.317-.11 0-.235-.016-.36-.016-.125 0-.329.047-.501.235-.173.188-.658.644-.658 1.571 0 .927.675 1.823.77 1.949.094.126 1.33 2.031 3.222 2.849.45.195.802.311 1.076.398.452.144.863.124 1.188.075.362-.057 1.116-.456 1.273-.896.157-.44.157-.817.11-.896-.047-.079-.172-.126-.36-.22z"/>
    </svg>
  </a>

  {/* Facebook */}
  <a 
    href="https://www.facebook.com/profile.php?id=100072182830183" 
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-xl animate-bounce-slow"
    style={{ animationDelay: "0.2s" }}
  >
    <FaFacebook className="w-5 h-5" />
  </a>

  {/* Twitter */}
  <a 
    href="https://twitter.com/yourusername" 
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-black dark:bg-white hover:bg-gray-800 text-white dark:text-black p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-xl animate-bounce-slow"
    style={{ animationDelay: "0.4s" }}
  >
    <FaTwitter className="w-5 h-5" />
  </a>

  {/* LinkedIn */}
  <a 
    href="https://linkedin.com/in/yourusername" 
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-xl animate-bounce-slow"
    style={{ animationDelay: "0.6s" }}
  >
    <FaLinkedin className="w-5 h-5" />
  </a>

</div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button onClick={scrollToTop} className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-amber-600 to-rose-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-glow">
          <ChevronDown className="w-6 h-6 rotate-180" />
        </button>
      )}

      {/* Navigation Bar */}
      <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'border-b border-amber-200/30 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-lg' : 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm'}`}>
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Compass className="w-6 h-6 text-amber-600 dark:text-amber-500 animate-pulse-slow" />
            <span className="text-xl font-serif font-bold tracking-tighter bg-gradient-to-r from-amber-800 to-rose-700 dark:from-amber-400 dark:to-rose-400 bg-clip-text text-transparent">
              Baariu Mukaria Elijah
            </span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
            {['Home', 'Analysis', 'Governance', 'Blog', 'Media', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-amber-600 transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-rose-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
          <div className="flex gap-2">
            <Button variant="default" size="sm" className="rounded-full shadow-md bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-700 hover:to-rose-700 text-white border-none transition-all duration-300 transform hover:scale-105">
              Book Consultation <Sparkles className="ml-2 w-3 h-3" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Profile Image */}
      <section className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
          <svg viewBox="0 0 800 600" className="w-full h-full object-cover">
            <path d="M400,50 C320,50 280,100 260,150 C240,200 230,250 240,300 C250,350 260,400 280,450 C300,500 320,550 400,550 C480,550 500,500 520,450 C540,400 550,350 540,300 C530,250 520,200 540,150 C560,100 480,50 400,50Z" fill="currentColor" />
            <path d="M400,80 C340,80 310,120 295,160 C280,200 275,240 285,280 C295,320 305,360 315,400 C325,440 330,480 400,480 C470,480 475,440 485,400 C495,360 505,320 515,280 C525,240 520,200 505,160 C490,120 460,80 400,80Z" fill="currentColor" />
          </svg>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Profile Image - Using your local image */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-slow"></div>
              <img 
                src="/images/me2.jpg" 
                alt="Baariu Mukaria Elijah"
                className="relative w-40 h-40 rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-xl transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-2 right-2 bg-green-500 rounded-full p-1.5 border-2 border-white dark:border-slate-800">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 mb-6 animate-slideLeft">
            <Badge variant="outline" className="px-4 py-1 border-amber-400/40 bg-amber-100/60 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-full backdrop-blur-sm">
              🇰🇪 Available for Consultation 2026
            </Badge>
            <Badge variant="outline" className="px-4 py-1 border-rose-400/40 bg-rose-100/60 dark:bg-rose-900/30 text-rose-800 dark:text-rose-300 rounded-full backdrop-blur-sm">
              Nairobi • Global
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tight mb-6 leading-tight animate-scaleIn">
            The Intersection of <span className="bg-gradient-to-r from-amber-700 to-rose-600 dark:from-amber-400 dark:to-rose-400 bg-clip-text text-transparent italic font-normal">Policy</span> <br /> 
            & <span className="relative inline-block">
              Public Administration
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full animate-pulse-slow"></div>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-light animate-slideRight">
            Providing expert political analysis and administrative strategy for a changing civic landscape. 
            Data-backed insights for leaders and the public across Kenya and beyond.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-scaleIn">
            <Button size="lg" className="rounded-full px-8 h-12 text-base shadow-lg shadow-amber-500/20 bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-700 hover:to-rose-700 transition-all duration-300 transform hover:scale-105">
              Read Briefings <ArrowUpRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base bg-white/80 dark:bg-transparent border-2 border-amber-300 hover:border-amber-500 hover:bg-amber-50 dark:hover:bg-amber-950/30 transition-all duration-300">
              Watch Latest Video <Video className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Social Proof Bar */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div><span>50K+ Newsletter Subscribers</span></div>
            <div className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div><span>150+ Published Articles</span></div>
            <div className="flex items-center gap-2"><div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div><span>Featured on CNN, BBC, Al Jazeera</span></div>
          </div>
        </div>

        {/* Wave Decoration */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-amber-100/50 dark:fill-amber-900/20"></path>
          </svg>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="analysis" className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300 animate-pulse">Core Competencies</Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-bold">Areas of Expertise</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Bridging analytical rigor with practical governance solutions</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: LineChart, title: "Political Analyst", color: "amber", description: "Specializing in electoral trends, polling data synthesis, and geopolitical risk assessment for East Africa.", tags: ["Data Science", "Geopolitics", "Forecasting"] },
            { icon: Building2, title: "Public Admin", color: "emerald", description: "Optimizing organizational performance and implementing ethical governance frameworks in public sector.", tags: ["Governance", "Ethics", "Leadership"] },
            { icon: PenTool, title: "Political Blogger", color: "rose", description: "Decoding the news cycle through daily columns and deep-dive newsletters for 50k+ readers globally.", tags: ["Journalism", "Commentary", "Newsletter"] }
          ].map((item, idx) => (
            <Card key={idx} className="group border-none shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden relative hover-lift">
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-${item.color}-400/10 to-${item.color}-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`}></div>
              <CardHeader>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl font-serif">{item.title}</CardTitle>
                <CardDescription className="text-base">{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className={`bg-${item.color}-50 dark:bg-${item.color}-950/50`}>{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats with Counters */}
      <section className="py-16 bg-gradient-to-r from-amber-900/5 to-rose-900/5 dark:from-amber-900/10 dark:to-rose-900/10 my-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50K+", label: "Newsletter Readers", icon: Users },
              { value: "150+", label: "Published Analyses", icon: Newspaper },
              { value: "12+", label: "Years Experience", icon: Award },
              { value: "47", label: "Counties Covered", icon: MapPin }
            ].map((stat, idx) => (
              <div key={idx} className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="flex justify-center mb-2">
                  <stat.icon className="w-8 h-8 text-amber-500" />
                </div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog/Publications Section with Tabs */}
      <section id="blog" className="py-24 relative">
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
              { title: "Why Administrative Transparency is the Key to Public Trust in 2026", badge: "Government Efficiency", category: "Analysis", readTime: "12 Min Read", likes: 234, comments: 45 },
              { title: "The Future of Devolution: Kenya's County Governments at a Crossroads", badge: "Devolution", category: "Policy Brief", readTime: "15 Min Read", likes: 189, comments: 32 },
              { title: "Electoral Integrity in the Digital Age: Challenges and Solutions", badge: "Elections", category: "Opinion", readTime: "10 Min Read", likes: 456, comments: 78 }
            ].map((item, i) => (
              <div key={i} className="group flex flex-col md:flex-row md:items-center justify-between p-8 rounded-3xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border border-amber-200/30 hover:border-amber-300/50 hover:shadow-xl transition-all duration-500 hover:-translate-x-1 hover-lift">
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
                    <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><Newspaper className="w-3 h-3" /> {item.category}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {item.readTime}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><ThumbsUp className="w-3 h-3" /> {item.likes}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><MessageCircle className="w-3 h-3" /> {item.comments}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 mt-6 md:mt-0">
                  <Button variant="ghost" size="sm" className="rounded-full">
                    <Share2 className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" className="rounded-full group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-rose-600 group-hover:text-white transition-all duration-300 group-hover:shadow-lg">
                    Read Full Piece <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="rounded-full border-2 border-amber-300 hover:border-amber-500 hover:bg-amber-50 dark:hover:bg-amber-950/30 transition-all duration-300">
              View All Articles <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Video Content Section - Using your images */}
      <section className="py-20 bg-gradient-to-r from-amber-600/5 to-rose-600/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300">Video Content</Badge>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Watch Latest Episodes</h2>
            <p className="text-muted-foreground mt-2">Weekly insights on governance and politics</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentVideos.map((video, idx) => (
              <Card key={idx} className="group overflow-hidden cursor-pointer hover-lift">
                <div className="relative">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">{video.duration}</div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{video.title}</CardTitle>
                  <CardDescription>{video.views} views</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" className="rounded-full">
              Watch More on YouTube <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Using your images */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">What People Say</h2>
            <p className="text-muted-foreground mt-2">Trusted by leaders and experts across Africa</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="p-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm hover-lift">
                <Quote className="w-8 h-8 text-amber-400 mb-4" />
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mt-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gradient-to-r from-amber-600/5 to-rose-600/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">Events</Badge>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Upcoming Appearances</h2>
            <p className="text-muted-foreground mt-2">Join me at these upcoming events and webinars</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {upcomingEvents.map((event, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 bg-white/90 dark:bg-slate-900/90 rounded-2xl border border-amber-200/30 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-rose-500 rounded-lg flex items-center justify-center text-white font-bold">
                    {event.date.split(',')[0].split(' ')[1]}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{event.title}</h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                      <Calendar className="w-3 h-3" /> {event.date} • <MapPin className="w-3 h-3" /> {event.location}
                    </p>
                  </div>
                </div>
                <Badge className="mt-3 sm:mt-0 bg-gradient-to-r from-amber-500 to-rose-500 text-white">{event.type}</Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section with Enhanced Design */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-rose-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm shadow-lg mb-6 animate-bounce-slow">
            <Mail className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Subscribe to The Policy Brief</h2>
          <p className="text-white/90 mb-8 text-lg">Weekly insights on governance, politics, and public administration delivered to your inbox.</p>
          
          {!emailSubscribed ? (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-6 py-3 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent w-full sm:w-96 text-white placeholder-white/70"
              />
              <Button 
                onClick={() => setEmailSubscribed(true)}
                className="rounded-full bg-white text-amber-600 hover:bg-gray-100 shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Subscribe <Send className="ml-2 w-4 h-4" />
              </Button>
            </div>
          ) : (
            <div className="animate-scaleIn">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 inline-flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white font-medium">Thanks for subscribing! Check your inbox.</span>
              </div>
            </div>
          )}
          
          <p className="text-white/70 text-sm mt-6">No spam, unsubscribe anytime. Read our <a href="#" className="underline hover:text-white">Privacy Policy</a>.</p>
        </div>
      </section>

      {/* Footer with Social Links */}
      <footer className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950 dark:from-black dark:to-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <svg viewBox="0 0 600 800" className="w-full h-full max-w-md mx-auto">
            <path d="M300,50 C250,50 220,80 200,120 C180,160 170,200 175,250 C180,300 190,350 200,400 C210,450 220,500 240,550 C260,600 280,650 300,700 C320,650 340,600 360,550 C380,500 390,450 400,400 C410,350 420,300 425,250 C430,200 420,160 400,120 C380,80 350,50 300,50Z" fill="currentColor" />
          </svg>
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
          
         {/* Social Media Row */}
<div className="flex justify-center gap-6 mb-12">

  {/* WhatsApp */}
  <a 
    href="https://wa.me/25497245596" 
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-xl"
  >
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.032 2.001c-5.517 0-10 4.483-10 10 0 1.846.5 3.575 1.38 5.07l-1.464 4.419 4.565-1.358c1.415.815 3.052 1.285 4.79 1.285 5.517 0 10-4.483 10-10s-4.483-10-10-10zm0 18c-1.581 0-3.069-.432-4.366-1.18l-.313-.186-2.71.807.865-2.635-.204-.325c-.828-1.318-1.273-2.84-1.273-4.455 0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
      <path d="M15.979 13.652c-.188-.094-1.116-.552-1.289-.614-.173-.063-.299-.094-.425.094-.126.188-.488.598-.598.74-.11.126-.22.141-.408.047s-.799-.294-1.521-.939c-.562-.502-.942-1.122-1.052-1.312-.110-.188-.012-.29.083-.384.085-.085.188-.22.282-.329.094-.110.126-.188.188-.313.063-.125.031-.235-.016-.329-.047-.094-.425-1.025-.582-1.404-.153-.367-.309-.317-.425-.317-.110 0-.235-.016-.36-.016-.125 0-.329.047-.501.235-.173.188-.658.644-.658 1.571 0 .927.675 1.823.77 1.949.094.126 1.33 2.031 3.222 2.849.45.195.802.311 1.076.398.452.144.863.124 1.188.075.362-.057 1.116-.456 1.273-.896.157-.44.157-.817.11-.896-.047-.079-.172-.126-.36-.22z"/>
    </svg>
  </a>

  {/* Facebook */}
  <a 
    href="https://www.facebook.com/profile.php?id=100072182830183"
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-xl"
  >
    <FaFacebook className="w-6 h-6" />
  </a>

  {/* Twitter */}
  <a 
    href="https://twitter.com/yourusername" 
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-black dark:bg-white hover:bg-gray-800 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-xl"
  >
    <FaTwitter className="w-6 h-6 text-white dark:text-black" />
  </a>

  {/* LinkedIn */}
  <a 
    href="https://linkedin.com/in/yourusername" 
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-blue-700 hover:bg-blue-800 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-xl"
  >
    <FaLinkedin className="w-6 h-6" />
  </a>

  {/* YouTube
  <a 
    href="https://youtube.com/yourusername" 
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-red-600 hover:bg-red-700 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-xl"
  >
    <FaYoutube className="w-6 h-6" />
  </a> */}

</div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400 italic">
            <p>© 2026 Baariu Mukaria Elijah. All rights reserved.</p>
            <p className="flex items-center gap-1">Built with <Heart className="w-4 h-4 text-rose-400 fill-rose-400 animate-pulse" /> for public interest • Sustainable governance ~ ART by Kimathi Pheneas Abuurua JR</p>
          </div>
        </div>
      </footer>
    </div>
  )
}