import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Target, Zap, BarChart3, ShieldCheck, Users, CheckCircle2, ArrowRight, MessageSquare, AlertCircle, DollarSign, ShoppingCart, Star } from "lucide-react";
import { IMAGES } from "@/assets/images";
import { packages, caseStudies, faqs, FormData } from "@/lib/index";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Header from "@/components/Header";
import PopupForm from "@/components/PopupForm";
const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid work email required"),
  websiteUrl: z.string().url("Valid website URL required"),
  monthlyRevenue: z.string().min(1, "Please select revenue range")
});
const Home: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });
  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    alert("Thank you! We will contact you shortly to schedule your session.");
  };
  const openPopup = () => {
    setIsPopupOpen(true);
  };
  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const scrollToForm = () => {
    const element = document.getElementById("booking-form");
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <>
      <Header />
      <PopupForm isOpen={isPopupOpen} onClose={closePopup} />
      <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 pt-16 overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
            <motion.div initial={{
              opacity: 0,
              x: -30
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.6
            }} className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm border border-primary/20">
                <ShoppingCart size={16} />
                <span>Ecommerce Growth Specialists</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold leading-tight text-foreground">
                Struggling to Scale Your Ecommerce Revenue <span className="text-primary">Profitably?</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                We help ecommerce brands make more money from their ads. Get higher returns, lower costs, and predictable growth.
              </p>
              <div className="space-y-4">
                {["Higher & More Consistent Returns", "Lower Cost to Get New Customers", "Predictable, Profitable Growth"].map((point, idx) => <div key={idx} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <CheckCircle2 className="text-primary" size={16} />
                    </div>
                    <span className="font-semibold text-base md:text-lg">{point}</span>
                  </div>)}
              </div>
              <Button size="lg" className="text-sm md:text-base lg:text-lg px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-7 rounded-xl shadow-lg shadow-primary/25 hover:scale-105 transition-transform bg-primary hover:bg-primary/90 w-full sm:w-auto" onClick={openPopup}>
                <span className="text-center">Book My Free Growth Strategy Call</span>
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </motion.div>

            <motion.div initial={{
              opacity: 0,
              scale: 0.9
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }} className="relative">
              <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
              <div className="relative rounded-2xl border border-border bg-card/50 backdrop-blur overflow-hidden shadow-2xl">
                <div className="w-full h-80 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-8">
                  <svg width="100%" height="100%" viewBox="0 0 400 250" className="max-w-md">
                    {/* Grid lines */}
                    <defs>
                      <pattern id="grid" width="40" height="25" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 25" fill="none" stroke="#e5e7eb" strokeWidth="0.5" opacity="0.3"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    
                    {/* Animated growth line */}
                    <path
                      d="M 50 200 Q 100 180 150 120 T 250 80 T 350 40"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                    >
                      <animate
                        attributeName="stroke-dasharray"
                        values="0 1000;400 0;400 0"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </path>
                    
                    {/* Gradient definition */}
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#00165B" />
                        <stop offset="100%" stopColor="#00AFF4" />
                      </linearGradient>
                    </defs>
                    
                    {/* Data points */}
                    <circle cx="50" cy="200" r="4" fill="#00165B">
                      <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" begin="1s"/>
                    </circle>
                    <circle cx="150" cy="120" r="4" fill="#00AFF4">
                      <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" begin="1.5s"/>
                    </circle>
                    <circle cx="250" cy="80" r="4" fill="#00165B">
                      <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" begin="2s"/>
                    </circle>
                    <circle cx="350" cy="40" r="4" fill="#00AFF4">
                      <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" begin="2.5s"/>
                    </circle>
                    
                    {/* Labels */}
                    <text x="50" y="230" textAnchor="middle" className="fill-muted-foreground text-xs">Month 1</text>
                    <text x="150" y="230" textAnchor="middle" className="fill-muted-foreground text-xs">Month 3</text>
                    <text x="250" y="230" textAnchor="middle" className="fill-muted-foreground text-xs">Month 6</text>
                    <text x="350" y="230" textAnchor="middle" className="fill-muted-foreground text-xs">Month 12</text>
                    
                    {/* Y-axis labels */}
                    <text x="30" y="205" textAnchor="end" className="fill-muted-foreground text-xs">1x</text>
                    <text x="30" y="125" textAnchor="end" className="fill-muted-foreground text-xs">3x</text>
                    <text x="30" y="85" textAnchor="end" className="fill-muted-foreground text-xs">5x</text>
                    <text x="30" y="45" textAnchor="end" className="fill-muted-foreground text-xs">8x</text>
                    
                    {/* Title */}
                    <text x="200" y="25" textAnchor="middle" className="fill-foreground text-sm font-bold">Revenue Growth</text>
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. PROOF & CREDIBILITY */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-4">The Results Speak for Themselves</h2>
            <p className="text-xl text-muted-foreground">Real brands. Real results. Real growth.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <img 
                src={IMAGES.SUCCESS_METRICS_1} 
                alt="Business Success Growth Metrics" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />

              <div className="absolute -bottom-8 -left-8 p-6 bg-primary text-primary-foreground rounded-2xl hidden lg:block shadow-xl">
                <p className="text-3xl font-black mb-2">5.2X</p>
                <p className="text-sm opacity-90 uppercase tracking-widest font-bold">ROAS</p>
              </div>
            </div>
            <Card className="overflow-hidden border-l-4 border-l-primary bg-card shadow-lg h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">DTC Ecommerce Book Brand</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-primary/10 border border-primary/20 text-center flex items-center justify-center min-h-[4rem]">
                    <span className="text-lg font-bold text-primary text-center leading-tight">10X More Monthly Orders</span>
                  </div>
                  <div className="p-4 rounded-lg bg-primary/10 border border-primary/20 text-center flex items-center justify-center min-h-[4rem]">
                    <span className="text-lg font-bold text-primary text-center leading-tight">30X Revenue Growth</span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  This book brand was struggling with low conversion rates and high customer acquisition costs. We restructured their entire funnel, optimized their product pages, and created targeted campaigns for different reader segments. The result? A complete transformation of their business with consistent, profitable growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. WHO THIS IS FOR */}
      <section className="py-8 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Built for Ambitious Ecommerce Brands Who Are…</h2>
          </div>
          {/* Mobile: Auto-sliding carousel */}
          <div className="md:hidden relative overflow-hidden px-4">
            <div className="flex transition-transform duration-1000 ease-in-out auto-slide">
              {[{
                icon: <BarChart3 className="text-destructive" />,
                text: "Hitting a revenue ceiling despite spending more on ads"
              }, {
                icon: <TrendingUp className="text-destructive" />,
                text: "Getting inconsistent results that make planning impossible"
              }, {
                icon: <DollarSign className="text-destructive" />,
                text: "Spending more but profits aren't growing"
              }].map((item, idx) => <div key={idx} className="w-full flex-shrink-0 px-2">
                  <Card className="border-none shadow-md bg-card h-full">
                    <CardContent className="pt-8 pb-8 px-6 flex flex-col items-center text-center h-full justify-center">
                      <div className="p-4 rounded-2xl bg-destructive/10 mb-6">
                        {React.cloneElement(item.icon as React.ReactElement, {
                        size: 32
                      })}
                      </div>
                      <p className="text-lg font-semibold leading-relaxed">{item.text}</p>
                    </CardContent>
                  </Card>
                </div>)}
            </div>
            {/* Slide indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {[0, 1, 2].map((index) => (
                <div 
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    currentSlide === index ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Desktop: Grid layout */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 md:gap-8">
            {[{
              icon: <BarChart3 className="text-destructive" />,
              text: "Hitting a revenue ceiling despite spending more on ads"
            }, {
              icon: <TrendingUp className="text-destructive" />,
              text: "Getting inconsistent results that make planning impossible"
            }, {
              icon: <DollarSign className="text-destructive" />,
              text: "Spending more but profits aren't growing"
            }].map((item, idx) => <Card key={idx} className="border-none shadow-md hover:shadow-xl transition-shadow bg-card">
                <CardContent className="pt-6 pb-6 flex flex-col items-center text-center">
                  <div className="p-4 rounded-2xl bg-destructive/10 mb-6">
                    {React.cloneElement(item.icon as React.ReactElement, {
                    size: 32
                  })}
                  </div>
                  <p className="text-base md:text-lg font-semibold px-4">{item.text}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* 4. CORE BUSINESS PROBLEMS */}
      <section className="py-8 md:py-12 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="space-y-12 md:space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="order-2 lg:order-1">
                <img src={IMAGES.ECOMMERCE_MARKETING_1} alt="Ecommerce Marketing Dashboard Analytics" className="rounded-2xl shadow-2xl border border-border w-full h-auto" />
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <div className="p-3 w-fit rounded-lg bg-destructive/10 text-destructive">
                  <AlertCircle size={28} />
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Is Your Ad Budget Disappearing Without Real Growth?</h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  You're spending money on ads but your revenue isn't growing. 
                  Your cost to get new customers keeps going up. 
                  You don't know which ads actually work.
                </p>
                <p className="text-base md:text-lg font-semibold text-foreground">
                  Sound familiar? You're not alone.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="space-y-6">
                <div className="p-3 w-fit rounded-lg bg-destructive/10 text-destructive">
                  <Target size={28} />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold">Scaling Spend, But Not Scaling Profit?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  You increase your ad budget hoping for more sales. 
                  But your profit margins get thinner. 
                  You're just paying more for the same customers.
                </p>
                <p className="text-lg font-semibold text-foreground">
                  We fix this exact problem.
                </p>
              </div>
              <div>
                <img src={IMAGES.DECLINING_PROFIT_CHART_4} alt="Ad Spend vs Declining Profit Margins" className="rounded-2xl shadow-2xl border border-border" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PACKAGES SECTION */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold mb-4">Choose Your Growth Package</h2>
            <p className="text-lg md:text-xl text-muted-foreground">Transparent monthly plans. No hidden fees. Cancel anytime.</p>
          </div>
          {/* Mobile: Horizontal Slider */}
          <div className="md:hidden">
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              {packages.map(pkg => <Card key={pkg.id} className={`relative flex flex-col border-2 transition-all duration-300 min-w-[280px] snap-center ${pkg.popular ? "border-primary shadow-2xl z-10" : "border-border"}`}>
                  {pkg.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full">
                      Most Popular
                    </div>}
                  <CardHeader>
                    <CardTitle className="text-lg md:text-xl font-bold">{pkg.name}</CardTitle>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-3xl md:text-4xl font-extrabold">{pkg.price}</span>
                      <span className="text-muted-foreground">/ month</span>
                    </div>
                    <CardDescription className="mt-4 text-base">{pkg.bestFor}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Ad Spend:</span>
                        <span className="font-semibold">{pkg.spendRange}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Channels:</span>
                        <span className="font-semibold text-right">{pkg.channels}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Focus:</span>
                        <span className="font-semibold text-right">{pkg.funnel}</span>
                      </div>
                    </div>
                    <div className="pt-6 border-t border-border">
                      <p className="text-sm font-bold mb-4">What We'll Do For You:</p>
                      <ul className="space-y-3">
                        {pkg.features.map((feature, i) => <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="text-primary shrink-0" size={16} />
                            <span>{feature}</span>
                          </li>)}
                      </ul>
                    </div>
                    <div className="mt-6 p-3 rounded-lg bg-primary/5 text-center">
                      <span className="text-sm font-bold text-primary">Expected Target: {pkg.targetRoas}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant={pkg.popular ? "default" : "secondary"} onClick={openPopup}>
                      {pkg.cta}
                    </Button>
                  </CardFooter>
                </Card>)}
            </div>
            <div className="flex justify-center mt-4">
              <p className="text-xs text-muted-foreground">← Swipe to see all packages →</p>
            </div>
          </div>
          
          {/* Desktop: Grid Layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {packages.map(pkg => <Card key={pkg.id} className={`relative flex flex-col border-2 transition-all duration-300 ${pkg.popular ? "border-primary shadow-2xl md:scale-105 z-10" : "border-border"}`}>
                {pkg.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full">
                    Most Popular
                  </div>}
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl font-bold">{pkg.name}</CardTitle>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-3xl md:text-4xl font-extrabold">{pkg.price}</span>
                    <span className="text-muted-foreground">/ month</span>
                  </div>
                  <CardDescription className="mt-4 text-base">{pkg.bestFor}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Ad Spend:</span>
                      <span className="font-semibold">{pkg.spendRange}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Channels:</span>
                      <span className="font-semibold text-right">{pkg.channels}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Focus:</span>
                      <span className="font-semibold text-right">{pkg.funnel}</span>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-border">
                    <p className="text-sm font-bold mb-4">What We'll Do For You:</p>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, i) => <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="text-primary shrink-0" size={16} />
                          <span>{feature}</span>
                        </li>)}
                    </ul>
                  </div>
                  <div className="mt-6 p-3 rounded-lg bg-primary/5 text-center">
                    <span className="text-sm font-bold text-primary">Expected Target: {pkg.targetRoas}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={pkg.popular ? "default" : "secondary"} onClick={openPopup}>
                    {pkg.cta}
                  </Button>
                </CardFooter>
              </Card>)}
          </div>
        </div>
      </section>

      {/* 6. OUR SOLUTION */}
      <section className="py-8 md:py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Your Predictable Path to Profitable Growth</h2>
            <p className="text-lg md:text-xl opacity-90">Here's exactly how we turn your ads into a profit machine</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
            {[{
              step: "01",
              title: "Audit & Strategy Blueprint",
              desc: "We understand your business inside and out, map it with your ideal target audience, and create a winning strategy."
            }, {
              step: "02",
              title: "Execute & Optimize",
              desc: "We build profitable campaigns and constantly improve them to get better results."
            }, {
              step: "03",
              title: "Scale What Works",
              desc: "Once we find what's working, we scale it up without destroying your profit margins."
            }].map((step, idx) => <div key={idx} className="p-6 md:p-8 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20">
                <span className="text-accent font-mono text-2xl font-bold block mb-4">{step.step}</span>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="opacity-90 leading-relaxed">{step.desc}</p>
              </div>)}
          </div>
          <div className="text-center">
            <Button variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground hover:text-primary text-sm md:text-base lg:text-lg px-4 md:px-6 lg:px-8 py-4 md:py-6" size="lg" onClick={openPopup}>
              <span className="text-center">Book My Free Growth Strategy Call</span>
            </Button>
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE GROWTH STRATS */}
      <section className="py-8 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Why Ecommerce Brands Choose Growth Strats</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[{
              icon: <ShoppingCart className="text-primary" />,
              title: "✓ Ecommerce Specialists",
              desc: "We only work with online stores. We understand your business inside and out."
            }, {
              icon: <BarChart3 className="text-primary" />,
              title: "✓ Data-Driven Results",
              desc: "No guessing games. Every decision is based on real data from your campaigns."
            }, {
              icon: <ShieldCheck className="text-primary" />,
              title: "✓ Complete Transparency",
              desc: "You see exactly where your money goes and what results you're getting."
            }, {
              icon: <Zap className="text-primary" />,
              title: "✓ True Growth Partner",
              desc: "We treat your business like our own. Your success is our success."
            }].map((item, idx) => <div key={idx} className="space-y-4 text-center">
                <div className="p-4 w-fit mx-auto rounded-xl bg-primary/10 border border-primary/20">
                  {React.cloneElement(item.icon as React.ReactElement, {
                  size: 28
                })}
                </div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>)}
          </div>
        </div>
      </section>


      {/* 8. FINAL CTA SECTION */}
      <section id="booking-form" className="py-12 bg-primary/5 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                Ready to Build Your Growth Engine?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Stop wasting money on ads that don't work. Let's build you a profit machine.
              </p>
              <div className="space-y-4">
                {["Free, No Obligation", "Custom Growth Plan for Your Business", "Find Out Exactly What's Costing You Money"].map((item, idx) => <div key={idx} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <CheckCircle2 className="text-primary" size={16} />
                    </div>
                    <span className="font-semibold text-base md:text-lg">{item}</span>
                  </div>)}
              </div>
              <div className="p-6 rounded-xl bg-card border border-border shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="text-primary" />
                  </div>
                  <div>
                    <p className="font-bold">Direct Call with Our Growth Team</p>
                    <p className="text-sm text-muted-foreground">We usually respond within 12 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="shadow-2xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" {...register("name")} />
                    {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email</Label>
                    <Input id="email" type="email" placeholder="john@yourbrand.com" {...register("email")} />
                    {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="websiteUrl">Website URL</Label>
                    <Input id="websiteUrl" placeholder="https://yourbrand.com" {...register("websiteUrl")} />
                    {errors.websiteUrl && <p className="text-xs text-destructive">{errors.websiteUrl.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="monthlyRevenue">Monthly Revenue</Label>
                    <select id="monthlyRevenue" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" {...register("monthlyRevenue")}>
                      <option value="">Select Range</option>
                      <option value="0-50k">Under ₹50,000</option>
                      <option value="50k-200k">₹50,000 - ₹2,00,000</option>
                      <option value="200k-500k">₹2,00,000 - ₹5,00,000</option>
                      <option value="500k+">₹5,00,000+</option>
                    </select>
                    {errors.monthlyRevenue && <p className="text-xs text-destructive">{errors.monthlyRevenue.message}</p>}
                  </div>
                  <Button type="submit" className="w-full py-4 md:py-6 text-sm md:text-base lg:text-lg bg-primary hover:bg-primary/90 px-4" size="lg">
                    <span className="text-center leading-tight">Book My Free Growth Strategy Call</span>
                  </Button>
                  <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest">
                    Your data is secure. No spam, ever.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      </div>  {/* closes min-h-screen wrapper */}

      <footer className="border-t border-border py-10">
        <div className="container mx-auto px-4 text-center">

          <div className="py-6">
            <img 
              src="/logo.png" 
              alt="Growth Strats Digital" 
              className="h-16 mx-auto"
            />
          </div>

          <p className="text-muted-foreground text-sm mb-4">
            Performance Marketing Agency for Ecommerce Brands
          </p>

          <p className="text-muted-foreground text-xs">
            © 2026 Growth Strats. All rights reserved.
          </p>

        </div>
      </footer>

    </>
   );
};

export default Home;
