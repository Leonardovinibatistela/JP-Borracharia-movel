import { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import vanHeroImg from './assets/van-hero.jpg';
import tireServiceImg from './assets/tire-service.jpg';
import {
  Phone,
  Clock,
  MapPin,
  Truck,
  Car,
  Bike,
  Wrench,
  CircleDot,
  Shield,
  Zap,
  CheckCircle2,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  MessageSquare,
  Award,
  Users,
  Timer,
  ThumbsUp,
  PhoneCall,
  Sparkles,
  Disc,
  Navigation,
  MessageCircle,
} from 'lucide-react';

// ============ ANIMATION PRESETS ============
const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: easeOut } },
};

// Scroll reveal wrapper
function Reveal({ children, className = '', delay = 0, variants = fadeInUp }: { children: React.ReactNode; className?: string; delay?: number; variants?: any }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Inline SVG for social icons (lucide doesn't export brand icons in all versions)
function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}
function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}
function WhatsAppBrandIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

// ============ NAVBAR ============
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Vantagens', href: '#vantagens' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: easeOut }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center font-display font-black text-white text-xl shadow-lg shadow-brand-500/30 group-hover:shadow-brand-500/50 transition-shadow">
                  JP
                </div>
                <div className="absolute -inset-1 rounded-xl bg-brand-500/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </div>
              <div className="hidden sm:block">
                <div className="font-display font-bold text-white text-lg leading-tight">Borracharia</div>
                <div className="text-brand-400 text-xs font-semibold tracking-widest uppercase">Móvel 24h</div>
              </div>
            </a>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-zinc-300 hover:text-white text-sm font-medium transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+5566992122415"
                className="flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors"
              >
                <Phone size={16} />
                (66) 99212-2415
              </a>
              <a
                href="https://wa.me/5566992754284"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 transition-all"
              >
                <PhoneCall size={16} />
                Chamar agora
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2 rounded-lg glass"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 lg:hidden pt-24 px-4"
          >
            <div className="glass rounded-2xl p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-zinc-200 hover:text-white text-lg font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <a
                  href="tel:+5566992122415"
                  className="flex items-center justify-center gap-2 text-white/80 text-sm font-medium py-2"
                >
                  <Phone size={16} /> (66) 99212-2415
                </a>
                <a
                  href="https://wa.me/5566992754284"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-brand-500 to-brand-600 text-white px-5 py-3 rounded-xl font-semibold w-full"
                >
                  <PhoneCall size={18} /> Chamar agora
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ============ HERO ============
function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark-950 noise">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-950/95 to-dark-950" />
        <motion.div style={{ y, opacity }} className="absolute inset-0">
          <img
            src={vanHeroImg}
            alt="JP Borracharia Móvel Van"
            className="w-full h-full object-cover opacity-40"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/80 to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-50" />
        
        {/* Ambient glows */}
        <div className="ambient-glow bg-brand-500 w-[500px] h-[500px] -top-40 -left-40" />
        <div className="ambient-glow bg-brand-600 w-[400px] h-[400px] bottom-0 right-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-2"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-sm text-zinc-300 font-medium">Atendimento 24 horas em Matupá e região</span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-4"
            >
              <motion.h1
                variants={fadeInUp}
                className="font-display font-bold text-white text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight"
              >
                Pneu furou? <br />
                <span className="gradient-text">Nós vamos até você.</span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-lg sm:text-xl text-zinc-400 max-w-xl leading-relaxed"
              >
                Borracharia móvel especializada em <strong className="text-zinc-200">caminhões, carros e motos</strong>. Conserto e troca de pneus no local, em até 30 minutos. Sem reboque. Sem stress.
              </motion.p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: easeOut }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://wa.me/5566992754284"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group flex items-center justify-center gap-2 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-white px-8 py-4 rounded-2xl text-base font-semibold shadow-xl shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-[1.02] transition-all"
              >
                <PhoneCall size={20} />
                Chamar socorro agora
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#servicos"
                className="flex items-center justify-center gap-2 glass hover:bg-white/10 text-white px-8 py-4 rounded-2xl text-base font-semibold transition-all"
              >
                Ver todos os serviços
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              {[
                { icon: Clock, label: '24h / 7 dias' },
                { icon: MapPin, label: 'Até 30min' },
                { icon: Shield, label: 'Garantia total' },
                { icon: Award, label: '10+ anos experiência' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-zinc-400">
                  <item.icon size={18} className="text-brand-500" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right side - floating card */}
          <div className="lg:col-span-5 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
              className="relative"
            >
              <div className="float relative glass rounded-3xl p-8 shadow-2xl shadow-black/50">
                <div className="absolute -top-4 -right-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-lg shadow-brand-500/30">
                    <Zap size={28} className="text-white" />
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="text-sm text-brand-400 font-semibold tracking-widest uppercase mb-2">Status do atendimento</div>
                    <div className="text-white font-display font-bold text-2xl">Sempre pronto</div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: 'Caminhões & Carretas', value: '24h', icon: Truck },
                      { label: 'Carros & Utilitários', value: '24h', icon: Car },
                      { label: 'Motos', value: '24h', icon: Bike },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                        <div className="flex items-center gap-3">
                          <item.icon size={18} className="text-brand-500" />
                          <span className="text-zinc-300 text-sm font-medium">{item.label}</span>
                        </div>
                        <span className="text-green-400 text-xs font-bold px-2 py-1 rounded-md bg-green-500/10">{item.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-2">
                    <a
                      href="https://wa.me/5566992754284"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-400 text-white py-3 rounded-xl font-semibold transition-all shadow-lg shadow-green-500/20"
                    >
                      <WhatsAppBrandIcon size={20} />
                      WhatsApp direto
                    </a>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 -inset-4 bg-brand-500/20 blur-3xl rounded-full" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom wave / fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

// ============ SOCIAL PROOF / STATS ============
function Stats() {
  const stats = [
    { number: '5.000+', label: 'Pneus consertados', icon: Disc },
    { number: '30min', label: 'Tempo médio de chegada', icon: Timer },
    { number: '2.500+', label: 'Clientes satisfeitos', icon: Users },
    { number: '10+', label: 'Anos de estrada', icon: Award },
  ];

  return (
    <section className="relative bg-white py-16 border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: easeOut }}
                className="text-center lg:text-left flex lg:items-center gap-4 flex-col lg:flex-row items-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center flex-shrink-0">
                  <stat.icon size={26} className="text-brand-600" />
                </div>
                <div>
                  <div className="font-display font-bold text-3xl lg:text-4xl text-dark-900">{stat.number}</div>
                  <div className="text-zinc-500 text-sm font-medium mt-1">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ============ VEHICLE TYPES BAR ============
function VehicleTypes() {
  const vehicles = [
    { icon: Truck, label: 'Caminhões', desc: 'Pesados e carretas' },
    { icon: Car, label: 'Carros', desc: 'Passeio e utilitários' },
    { icon: Bike, label: 'Motos', desc: 'Todas as cilindradas' },
  ];

  return (
    <section className="relative bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-10">
          <p className="text-sm font-semibold text-brand-600 tracking-widest uppercase mb-2">Atendimento especializado</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-dark-900">Qualquer veículo, qualquer horário</h2>
        </Reveal>
        <Reveal variants={staggerContainer}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {vehicles.map((v, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="card-hover group relative bg-white border border-zinc-100 rounded-2xl p-6 text-center hover:border-brand-200 cursor-default"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-zinc-50 to-zinc-100 group-hover:from-brand-50 group-hover:to-brand-100 flex items-center justify-center transition-all mb-4">
                  <v.icon size={30} className="text-zinc-600 group-hover:text-brand-600 transition-colors" />
                </div>
                <div className="font-display font-bold text-lg text-dark-900">{v.label}</div>
                <div className="text-zinc-500 text-sm mt-1">{v.desc}</div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ============ SERVICES / FEATURES ============
function Services() {
  const services = [
    {
      icon: Wrench,
      title: 'Conserto de pneus',
      desc: 'Reparo profissional de furos e rasgos com materiais de primeira qualidade. Serviço durável e garantido.',
    },
    {
      icon: CircleDot,
      title: 'Troca de pneus',
      desc: 'Troca rápida e segura no local do problema. Não precisa se deslocar ou chamar reboque.',
    },
    {
      icon: Navigation,
      title: 'Rodas e cubos',
      desc: 'Desempeno, solda e manutenção de rodas e cubos. Serviço completo para evitar problemas futuros.',
    },
    {
      icon: Sparkles,
      title: 'Câmaras de ar',
      desc: 'Substituição e conserto de câmaras para todos os tipos de veículos, incluindo os pesados.',
    },
    {
      icon: Shield,
      title: 'Atendimento em estradas',
      desc: 'Socorro na rodovia ou estradas rurais. Atendemos em qualquer ponto de Matupá e região.',
    },
  ];

  return (
    <section id="servicos" className="relative py-24 bg-gradient-to-b from-white to-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal>
            <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <Wrench size={14} />
              Nossos serviços
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-dark-900 mb-4 leading-tight">
              Solução completa <br className="hidden sm:block" />
              em pneus, <span className="gradient-text">no local</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Desde um furo simples até a troca completa de pneus da sua frota. Nossa unidade móvel chega equipada com tudo que você precisa.
            </p>
          </Reveal>
        </div>

        <Reveal variants={staggerContainer}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="card-hover group relative bg-white rounded-2xl p-8 border border-zinc-100 hover:border-brand-200"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-50 to-transparent rounded-bl-[64px] rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center mb-6 shadow-lg shadow-brand-500/20 group-hover:shadow-brand-500/40 transition-shadow">
                    <service.icon size={26} className="text-white" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-dark-900 mb-3">{service.title}</h3>
                  <p className="text-zinc-600 leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ============ SHOWCASE / IMAGE SPLIT ============
function Showcase() {
  const features = [
    'Equipamentos profissionais de última geração',
    'Técnico experiente com mais de 10 anos de estrada',
    'Atendimento para frotas e veículos particulares',
    'Garantia em todos os serviços realizados',
    'Pagamento facilitado: Pix, cartão ou dinheiro',
  ];

  return (
    <section className="relative py-24 bg-dark-950 overflow-hidden noise">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="ambient-glow bg-brand-600 w-[600px] h-[600px] top-1/2 -left-20 -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
                <img
                  src={tireServiceImg}
                  alt="Serviço móvel de pneus"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              {/* Floating stat */}
              <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-500 flex items-center justify-center">
                    <ThumbsUp size={22} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-display font-bold text-2xl">98%</div>
                    <div className="text-zinc-400 text-xs">Clientes retornam</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="space-y-8">
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-white/5 text-brand-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-white/10">
                <Sparkles size={14} />
                Por que escolher a JP?
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-white leading-tight mb-6">
                Atendimento móvel <br />
                <span className="gradient-text">sem enrolação</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                Não perca tempo esperando reboque ou procurando borracharia aberta. Nossa unidade móvel vai até você, com toda a estrutura de uma oficina, a qualquer hora do dia ou da noite.
              </p>
            </Reveal>

            <Reveal variants={staggerContainer} delay={0.3} className="space-y-4">
              {features.map((feat, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex items-start gap-3">
                  <CheckCircle2 size={22} className="text-brand-500 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300 text-base leading-relaxed">{feat}</span>
                </motion.div>
              ))}
            </Reveal>

            <Reveal delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://wa.me/5566992754284"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center gap-2 bg-gradient-to-r from-brand-500 to-brand-600 text-white px-6 py-3.5 rounded-xl font-semibold shadow-lg shadow-brand-500/25"
                >
                  <MessageSquare size={18} />
                  Fale conosco agora
                </a>
                <a
                  href="tel:+5566992122415"
                  className="flex items-center justify-center gap-2 glass text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-white/10 transition-all"
                >
                  <Phone size={18} />
                  (66) 99212-2415
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ HOW IT WORKS ============
function HowItWorks() {
  const steps = [
    {
      num: '01',
      icon: PhoneCall,
      title: 'Ligue ou chame no WhatsApp',
      desc: 'Entre em contato 24h por dia. Informe sua localização e o problema que estamos a caminho.',
    },
    {
      num: '02',
      icon: Navigation,
      title: 'Vamos até o local',
      desc: 'Nossa equipe chega em até 30 minutos em Matupá e região, equipada para resolver qualquer problema.',
    },
    {
      num: '03',
      icon: Wrench,
      title: 'Resolvemos na hora',
      desc: 'Consertamos ou trocamos o pneu no próprio local, com garantia e segurança. Você segue viagem!',
    },
  ];

  return (
    <section id="vantagens" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal>
            <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <Timer size={14} />
              Como funciona
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-dark-900 mb-4 leading-tight">
              Em 3 passos simples, <br className="hidden sm:block" />
              <span className="gradient-text">você segue viagem</span>
            </h2>
          </Reveal>
        </div>

        <Reveal variants={staggerContainer}>
          <div className="relative grid md:grid-cols-3 gap-8">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-20 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-brand-200 to-transparent" />

            {steps.map((step, i) => (
              <motion.div key={i} variants={scaleIn} className="relative text-center">
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="absolute w-24 h-24 rounded-full bg-brand-50" />
                  <div className="relative w-20 h-20 rounded-2xl bg-white border-2 border-brand-200 flex items-center justify-center shadow-xl shadow-brand-500/10">
                    <step.icon size={32} className="text-brand-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center text-white text-xs font-bold shadow-lg">
                    {step.num}
                  </div>
                </div>
                <h3 className="font-display font-bold text-xl text-dark-900 mb-3">{step.title}</h3>
                <p className="text-zinc-600 leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ============ FAQ ============
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    {
      q: 'Vocês atendem 24 horas mesmo?',
      a: 'Sim! Atendemos 24 horas por dia, 7 dias por semana, incluindo feriados. Não importa a hora ou o clima, se precisar, é só ligar.',
    },
    {
      q: 'Qual a área de atendimento de vocês?',
      a: 'Atendemos Matupá e toda a região, incluindo estradas rurais e trechos da BR-163 e BR-242 nas proximidades. O deslocamento é calculado conforme a distância.',
    },
    {
      q: 'Quanto tempo demora para chegar?',
      a: 'Em média, chegamos em até 30 minutos dentro do município e um pouco mais em estradas, dependendo da distância. Sempre informamos o tempo estimado no momento da chamada.',
    },
    {
      q: 'Vocês consertam pneu de caminhão na hora?',
      a: 'Sim! Nossa unidade móvel está equipada com ferramentas adequadas para caminhões, carretas, ônibus, além de carros e motos. O conserto ou troca é feito no próprio local.',
    },
    {
      q: 'Os serviços têm garantia?',
      a: 'Total. Todos os consertos e vendas têm garantia. Trabalhamos com materiais de qualidade e técnica correta para garantir sua segurança na estrada.',
    },
    {
      q: 'Quais formas de pagamento vocês aceitam?',
      a: 'Aceitamos PIX, cartão de crédito e débito, e dinheiro. Para frotas, também emitimos nota fiscal e facilitamos o pagamento mensal.',
    },
  ];

  return (
    <section id="faq" className="relative py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal>
            <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <MessageSquare size={14} />
              Perguntas frequentes
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-dark-900 mb-4 leading-tight">
              Ainda tem dúvidas?
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-zinc-600">Respostas para as perguntas mais comuns dos nossos clientes.</p>
          </Reveal>
        </div>

        <Reveal variants={staggerContainer} className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className={`border rounded-2xl overflow-hidden transition-all ${
                open === i ? 'border-brand-200 bg-brand-50/50 shadow-lg shadow-brand-500/5' : 'border-zinc-200 bg-white hover:border-zinc-300'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
              >
                <span className={`font-semibold text-base sm:text-lg ${open === i ? 'text-brand-700' : 'text-dark-900'}`}>
                  {faq.q}
                </span>
                <ChevronDown
                  size={22}
                  className={`flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180 text-brand-600' : 'text-zinc-400'}`}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-zinc-600 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

// ============ FINAL CTA ============
function FinalCTA() {
  return (
    <section className="relative py-24 bg-dark-950 overflow-hidden noise">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/40 via-dark-950 to-brand-900/40" />
        <div className="ambient-glow bg-brand-500 w-[600px] h-[600px] top-0 left-0" />
        <div className="ambient-glow bg-brand-600 w-[600px] h-[600px] bottom-0 right-0" />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal variants={staggerContainer}>
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="text-sm text-zinc-200 font-medium">Disponível 24h, agora mesmo</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight"
          >
            Pneu furou? <br />
            <span className="gradient-text">Chama a JP.</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Não importa onde você esteja. Nossa equipe vai até você, resolve o problema e você segue viagem.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+5566992122415"
              className="btn-primary group flex items-center justify-center gap-3 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-white px-8 py-5 rounded-2xl text-lg font-semibold shadow-2xl shadow-brand-500/30 hover:shadow-brand-500/50 hover:scale-[1.02] transition-all"
            >
              <Phone size={22} />
              (66) 99212-2415
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/5566992754284"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white px-8 py-5 rounded-2xl text-lg font-semibold shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 hover:scale-[1.02] transition-all"
            >
              <WhatsAppBrandIcon size={22} />
              (66) 99275-4284
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap justify-center gap-6 text-zinc-400 text-sm">
            <div className="flex items-center gap-2"><MapPin size={16} className="text-brand-500" /> Matupá e região</div>
            <div className="flex items-center gap-2"><Clock size={16} className="text-brand-500" /> 24h / 7 dias</div>
            <div className="flex items-center gap-2"><Shield size={16} className="text-brand-500" /> Serviço garantido</div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

// ============ FOOTER ============
function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center font-display font-black text-white text-xl shadow-lg shadow-brand-500/30">
                JP
              </div>
              <div>
                <div className="font-display font-bold text-white text-xl leading-tight">Borracharia Móvel</div>
                <div className="text-brand-400 text-xs font-semibold tracking-widest uppercase">Atendimento 24h</div>
              </div>
            </div>
            <p className="text-zinc-400 max-w-md leading-relaxed mb-6">
              Especializada em conserto e troca de pneus no local para caminhões, carros e motos em Matupá e região.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all">
                <FacebookIcon size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all">
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://wa.me/5566992754284"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-green-400 hover:bg-white/10 transition-all"
              >
                <WhatsAppBrandIcon size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Serviços</h4>
            <ul className="space-y-2">
              {['Conserto de pneus', 'Troca de pneus', 'Rodas e cubos', 'Câmaras de ar', 'Atendimento em estradas'].map((item, i) => (
                <li key={i}>
                  <a href="#servicos" className="text-zinc-400 hover:text-brand-400 text-sm transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+5566992122415" className="flex items-center gap-2 text-zinc-400 hover:text-white text-sm transition-colors">
                  <Phone size={16} className="text-brand-500" />
                  (66) 99212-2415
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5566992754284"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-zinc-400 hover:text-white text-sm transition-colors"
                >
                  <MessageCircle size={16} className="text-brand-500" />
                  (66) 99275-4284
                </a>
              </li>
              <li className="flex items-start gap-2 text-zinc-400 text-sm">
                <MapPin size={16} className="text-brand-500 flex-shrink-0 mt-0.5" />
                <span>Matupá - MT <br /> Atendemos toda a região</span>
              </li>
              <li className="flex items-center gap-2 text-zinc-400 text-sm">
                <Clock size={16} className="text-brand-500" />
                <span>24 horas, todos os dias</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} JP Borracharia Móvel. Todos os direitos reservados.
          </p>
          <p className="text-zinc-500 text-sm">
            Feito com <span className="text-brand-500">♦</span> para quem vive na estrada.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ============ FLOATING WHATSAPP BUTTON ============
function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="https://wa.me/5566992754284"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          className="fixed bottom-6 right-6 z-[100] w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-2xl shadow-green-500/30 hover:bg-green-400 transition-colors"
          aria-label="Chamar no WhatsApp"
        >
          <span className="absolute inset-0 rounded-full bg-green-400 pulse-ring" />
          <WhatsAppBrandIcon size={26} />
        </motion.a>
      )}
    </AnimatePresence>
  );
}

// ============ MAIN APP ============
export default function App() {
  return (
    <div className="min-h-screen bg-white text-dark-900 antialiased">
      <Navbar />
      <Hero />
      <Stats />
      <VehicleTypes />
      <Services />
      <Showcase />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
