import React from 'react'
import { motion } from 'framer-motion'
import { AnimatedText } from '../../components/ui/animated-text'
import AceternityProjectShowcase from './AceternityProjectShowcase'

export default function ProjectsSection() {
  const projectCards = [
  { 
    title: 'Surearth – Full E-Commerce Platform', 
    description: 'Complete full-stack e-commerce platform with product catalog, secure checkout, payment gateway integration, automated email receipts, and advanced admin dashboard with stock tracking and sales analytics.',
    image: '/images/surearth.png', 
    link: '#',
    category: 'fullstack',
    tags: ['Node.js', 'Next.js', 'Prisma', 'MySQL', 'Payment Integration'],
    featured: true
  },
  { 
    title: 'QR Review Generator System', 
    description: 'Custom QR generation platform with logo-centered customization and backend API architecture for review tracking and business growth solutions.',
    image: '/images/qr-review.png', 
    link: '#',
    category: 'product',
    tags: ['React.js', 'Flask', 'Tailwind CSS', 'REST API'],
    featured: true
  },
  { 
    title: 'Nehru Garden Island – Ticket Booking Platform', 
    description: 'Online ticket booking system with unique QR generation for each booking, automated email confirmations, and admin dashboard for ticket validation and tracking.',
    image: '/images/nehrugarden.png', 
    link: '#',
    category: 'fullstack',
    tags: ['Python Flask', 'JavaScript', 'QR System', 'Admin Dashboard'],
    featured: true
  },
  { 
    title: 'Bayan Group – Hospitality Booking Website', 
    description: 'Multi-property hospitality website with modern responsive UI, structured frontend architecture, and optimized cross-device performance.',
    image: '/images/bayan.png', 
    link: '#',
    category: 'frontend',
    tags: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
    featured: false
  },
  { 
    title: 'IIA – Influencer Registration & Certificate Portal', 
    description: 'Secure influencer registration portal with backend validation and automated certificate generation using dynamic rendering system.',
    image: 'public/images/iia.png', 
    link: '#',
    category: 'backend',
    tags: ['Spring Boot', 'Java', 'Backend Validation'],
    featured: false
  }
];

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header - left-aligned */}
        <div className="mb-16 md:mb-12 text-left">
          <motion.span 
            className="block mb-3 text-sm font-medium tracking-wider"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            PROJECTS
          </motion.span>
          <AnimatedText 
            text="Selected work"
            className="text-3xl md:text-5xl font-bold"
            once={true}
            delay={0.1}
          />
        </div>

        {/* Website Showcase Section - Only keeping this part */}
        <AceternityProjectShowcase projects={projectCards} />
        
        {/* View all button */}
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.a
            href="/projects"
            whileHover={{ scale: 1.05, backgroundColor: "#000000", color: "#ffffff" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="inline-block px-8 py-3 border-2 border-black text-black font-medium rounded-full transition-colors"
          >
            View all projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}