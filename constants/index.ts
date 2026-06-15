import { NavItem, Speaker, ScheduleItem, GalleryImage, Testimonial, Sponsor, PricingTier, FAQItem, Hotel, Benefit, Highlight, EventInfo } from '@/types';

export const SITE_CONFIG = {
  name: 'Business Guide 2026',
  url: 'https://techsummit2026.com',
  email: 'info@techsummit2026.com',
  phone: '+1 (555) 123-4567',
  whatsapp: '+1 (555) 123-4567',
  address: 'Downtown Cairo, 747 Howard St, San Francisco, CA 94103',
  social: {
    twitter: 'https://twitter.com/techsummit',
    linkedin: 'https://linkedin.com/company/techsummit',
    instagram: 'https://instagram.com/techsummit',
    facebook: 'https://facebook.com/techsummit',
    tiktok: 'https://tiktok.com/@techsummit',
  },
};

export const EVENT_INFO: EventInfo = {
  name: 'Business Guide 2026',
  tagline: 'Where Innovation Meets Inspiration',
  date: 'June 26, 2026',
  time: '10:00 AM - 8:00 PM PST',
  venue: 'Downtown Cairo',
  location: 'New Cairooooo, Madinaty',
  description: 'Join us for three transformative days of keynotes, workshops, and networking with the world\'s leading tech innovators.',
};

export const EVENT_DATE = new Date('2026-06-26T09:00:00-08:00');

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const STATISTICS = [
  { value: 50, suffix: '+', label: 'Speakers' },
  { value: 5000, suffix: '+', label: 'Attendees' },
  { value: 100, suffix: '+', label: 'Sessions' },
  { value: 75, suffix: '+', label: 'Sponsors' },
];

export const BENEFITS: Benefit[] = [
  {
    icon: 'Users',
    title: 'Network & Connect',
    description: 'Meet industry leaders, potential partners, and like-minded innovators from around the globe.',
  },
  {
    icon: 'GraduationCap',
    title: 'Learn & Grow',
    description: 'Gain insights from expert-led workshops, keynotes, and hands-on sessions covering the latest trends.',
  },
  {
    icon: 'TrendingUp',
    title: 'Business Growth',
    description: 'Discover new opportunities, find investors, and accelerate your business growth trajectory.',
  },
  {
    icon: 'Heart',
    title: 'Community Building',
    description: 'Join a thriving community of tech enthusiasts and become part of something bigger.',
  },
];

export const HIGHLIGHTS: Highlight[] = [
  {
    icon: 'Mic',
    title: 'Expert Keynotes',
    description: 'Hear from industry titans sharing their vision for the future.',
  },
  {
    icon: 'Users',
    title: 'Networking Sessions',
    description: 'Structured networking events to connect with the right people.',
  },
  {
    icon: 'Wrench',
    title: 'Live Workshops',
    description: 'Hands-on workshops with real-world applications and takeaways.',
  },
  {
    icon: 'MessageCircle',
    title: 'Q&A Sessions',
    description: 'Interactive sessions where your questions get answered.',
  },
  {
    icon: 'LayoutGrid',
    title: 'Panel Discussions',
    description: 'Expert panels debating the hottest topics in tech.',
  },
  {
    icon: 'Rocket',
    title: 'Startup Showcase',
    description: 'Discover the next big thing from emerging startups.',
  },
  {
    icon: 'FileText',
    title: 'Exclusive Resources',
    description: 'Access to presentation slides, whitepapers, and recordings.',
  },
  {
    icon: 'Award',
    title: 'Certification',
    description: 'Earn certificates for completed workshops and sessions.',
  },
  {
    icon: 'Crown',
    title: 'VIP Experience',
    description: 'Exclusive access to VIP lounges and speaker meet & greets.',
  },
];

export const SPEAKERS: Speaker[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    position: 'Chief Technology Officer',
    company: 'TechCorp Global',
    bio: 'Pioneering AI researcher with 15+ years in machine learning. Led the development of industry-transforming AI solutions.',
    session: 'The Future of AI: Beyond the Hype',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    social: {
      linkedin: 'https://linkedin.com/in/sarahchen',
      twitter: 'https://twitter.com/sarahchen',
      website: 'https://sarahchen.com',
    },
  },
  {
    id: '2',
    name: 'Michael Roberts',
    position: 'VP of Engineering',
    company: 'CloudScale Inc',
    bio: 'Cloud architecture expert who has scaled systems to billions of users. Author of "Cloud Native Patterns".',
    session: 'Building Resilient Cloud Infrastructure',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
    social: {
      linkedin: 'https://linkedin.com/in/michaelroberts',
      twitter: 'https://twitter.com/michaelroberts',
    },
  },
  {
    id: '3',
    name: 'Emily Zhang',
    position: 'Director of Data Science',
    company: 'DataDriven AI',
    bio: 'Data science leader transforming how companies leverage data. Speaker at major tech conferences worldwide.',
    session: 'Data Strategy: From Collection to Insight',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    social: {
      linkedin: 'https://linkedin.com/in/emilyzhang',
      twitter: 'https://twitter.com/emilyzhang',
      website: 'https://emilyzhang.io',
    },
  },
  {
    id: '4',
    name: 'David Kim',
    position: 'Founder & CEO',
    company: 'StartupVenture Labs',
    bio: 'Serial entrepreneur with 3 successful exits. Angel investor and mentor to tech startups globally.',
    session: 'From Idea to Exit: The Startup Journey',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    social: {
      linkedin: 'https://linkedin.com/in/davidkim',
      twitter: 'https://twitter.com/davidkim',
      website: 'https://davidkim.ventures',
    },
  },
  {
    id: '5',
    name: 'Jennifer Martinez',
    position: 'Head of Security',
    company: 'SecureTech Solutions',
    bio: 'Cybersecurity expert with experience protecting Fortune 500 companies. Certified CISSP and ethical hacker.',
    session: 'Zero Trust Security in Practice',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    social: {
      linkedin: 'https://linkedin.com/in/jennifermartinez',
      twitter: 'https://twitter.com/jennifermartinez',
    },
  },
  {
    id: '6',
    name: 'Alex Thompson',
    position: 'Principal Engineer',
    company: 'Quantum Computing Corp',
    bio: 'Quantum computing pioneer working at the frontier of next-gen computation. PhD from MIT.',
    session: 'Quantum Computing: From Theory to Practice',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    social: {
      linkedin: 'https://linkedin.com/in/alexthompson',
      website: 'https://alexthompson.dev',
    },
  },
  {
    id: '7',
    name: 'Lisa Wang',
    position: 'Chief Product Officer',
    company: 'ProductLabs',
    bio: 'Product visionary who has launched products used by millions. Expert in product-market fit strategies.',
    session: 'Building Products Users Love',
    image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
    social: {
      linkedin: 'https://linkedin.com/in/lisawang',
      twitter: 'https://twitter.com/lisawang',
    },
  },
  {
    id: '8',
    name: 'James Wilson',
    position: 'CTO',
    company: 'Blockchain Technologies',
    bio: 'Web3 innovator building the decentralized future. Early contributor to major blockchain protocols.',
    session: 'Web3: The Next Internet Revolution',
    image: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=400',
    social: {
      linkedin: 'https://linkedin.com/in/jameswilson',
      twitter: 'https://twitter.com/jameswilson',
      website: 'https://jameswilson.eth',
    },
  },
];

export const SCHEDULE: ScheduleItem[] = [
  // Day 1
  {
    id: '1',
    time: '09:00 AM',
    endTime: '09:30 AM',
    title: 'Registration & Welcome Coffee',
    category: 'networking',
    duration: '30 min',
    description: 'Network with fellow attendees and enjoy premium coffee.',
    stage: 'Main Hall',
  },
  {
    id: '2',
    time: '09:30 AM',
    endTime: '10:30 AM',
    title: 'Opening Keynote: The Future of Tech',
    speaker: 'Sarah Chen',
    category: 'talk',
    duration: '60 min',
    description: 'Sarah unveils her vision for the next decade of technology innovation.',
    stage: 'Main Stage',
  },
  {
    id: '3',
    time: '11:00 AM',
    endTime: '12:30 PM',
    title: 'Workshop: Building AI-Powered Applications',
    speaker: 'Emily Zhang',
    category: 'workshop',
    duration: '90 min',
    description: 'Hands-on workshop building practical AI applications from scratch.',
    stage: 'Workshop Hall A',
  },
  {
    id: '4',
    time: '12:30 PM',
    endTime: '02:00 PM',
    title: 'Networking Lunch & Startup Showcase',
    category: 'networking',
    duration: '90 min',
    description: 'Connect with startups and investors over gourmet lunch.',
    stage: 'Exhibition Hall',
  },
  {
    id: '5',
    time: '02:00 PM',
    endTime: '03:00 PM',
    title: 'Panel: Scaling Your Infrastructure',
    speaker: 'Michael Roberts',
    category: 'panel',
    duration: '60 min',
    description: 'Industry experts discuss best practices for scaling systems.',
    stage: 'Main Stage',
  },
  {
    id: '6',
    time: '03:30 PM',
    endTime: '04:30 PM',
    title: 'Talk: Zero Trust Security Architecture',
    speaker: 'Jennifer Martinez',
    category: 'talk',
    duration: '60 min',
    description: 'Deep dive into implementing zero trust in enterprise environments.',
    stage: 'Stage B',
  },
  {
    id: '7',
    time: '05:00 PM',
    endTime: '06:00 PM',
    title: 'Evening Networking Reception',
    category: 'networking',
    duration: '60 min',
    description: 'Wine and hors d\'oeuvres with tech community leaders.',
    stage: 'Rooftop Lounge',
  },
  // Day 2
  {
    id: '8',
    time: '09:00 AM',
    endTime: '10:00 AM',
    title: 'Keynote: Quantum Computing Revolution',
    speaker: 'Alex Thompson',
    category: 'talk',
    duration: '60 min',
    description: 'Explore the cutting edge of quantum computing applications.',
    stage: 'Main Stage',
  },
  {
    id: '9',
    time: '10:30 AM',
    endTime: '12:00 PM',
    title: 'Workshop: Product Strategy Mastery',
    speaker: 'Lisa Wang',
    category: 'workshop',
    duration: '90 min',
    description: 'Learn to build products that resonate with users.',
    stage: 'Workshop Hall B',
  },
  {
    id: '10',
    time: '02:00 PM',
    endTime: '03:30 PM',
    title: 'Panel: The Future of Web3',
    speaker: 'James Wilson',
    category: 'panel',
    duration: '90 min',
    description: 'Industry leaders debate the future of decentralized technologies.',
    stage: 'Main Stage',
  },
  {
    id: '11',
    time: '04:00 PM',
    endTime: '05:00 PM',
    title: 'Talk: Startup Success Stories',
    speaker: 'David Kim',
    category: 'talk',
    duration: '60 min',
    description: 'Lessons learned from building and selling successful startups.',
    stage: 'Stage B',
  },
  // Day 3
  {
    id: '12',
    time: '09:00 AM',
    endTime: '10:30 AM',
    title: 'Workshop: Cloud Architecture Deep Dive',
    speaker: 'Michael Roberts',
    category: 'workshop',
    duration: '90 min',
    description: 'Advanced cloud patterns for modern applications.',
    stage: 'Workshop Hall A',
  },
  {
    id: '13',
    time: '11:00 AM',
    endTime: '12:00 PM',
    title: 'Closing Keynote: Building the Future Together',
    speaker: 'Sarah Chen',
    category: 'talk',
    duration: '60 min',
    description: 'Inspiring close with vision for collaborative innovation.',
    stage: 'Main Stage',
  },
  {
    id: '14',
    time: '12:00 PM',
    endTime: '01:00 PM',
    title: 'Closing Ceremony & Awards',
    category: 'networking',
    duration: '60 min',
    description: 'Recognition of best startups and networking achievements.',
    stage: 'Main Stage',
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: '1', src: 'https://images.pexels.com/photos/1540576/pexels-photo-1540576.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Main conference hall', category: 'conference' },
  { id: '2', src: 'https://images.pexels.com/photos/2774534/pexels-photo-2774534.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Workshop session', category: 'workshop' },
  { id: '3', src: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Networking event', category: 'networking' },
  { id: '4', src: 'https://images.pexels.com/photos/1181678/pexels-photo-1181678.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Speaker presentation', category: 'speaker' },
  { id: '5', src: 'https://images.pexels.com/photos/2388736/pexels-photo-2388736.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Tech showcase', category: 'conference' },
  { id: '6', src: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Hands-on workshop', category: 'workshop' },
  { id: '7', src: 'https://images.pexels.com/photos/1367169/pexels-photo-1367169.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Networking dinner', category: 'networking' },
  { id: '8', src: 'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Panel discussion', category: 'speaker' },
  { id: '9', src: 'https://images.pexels.com/photos/260206/pexels-photo-260206.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Innovation stage', category: 'conference' },
  { id: '10', src: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Breakout session', category: 'workshop' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'John Peterson',
    company: 'TechStart Inc',
    position: 'CEO',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
    review: 'TechSummit 2025 was transformative for our startup. We connected with investors and left with 3 partnerships that changed our trajectory.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Amanda Chen',
    company: 'DataFlow Systems',
    position: 'VP of Engineering',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
    review: 'The workshops were incredibly practical. I implemented 3 new technologies within a month of returning. Best tech conference experience.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Marcus Williams',
    company: 'CloudNine Solutions',
    position: 'CTO',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
    review: 'The networking alone was worth the investment. Met key partners and the speaker lineup was world-class.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Sarah Rodriguez',
    company: 'Innovation Labs',
    position: 'Product Director',
    avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=100',
    review: 'As a product leader, the insights I gained were invaluable. The hands-on workshops exceeded all expectations.',
    rating: 4,
  },
  {
    id: '5',
    name: 'David Kumar',
    company: 'SecureTech',
    position: 'Security Architect',
    avatar: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=100',
    review: 'The security track was excellent. Cutting-edge content and access to experts who shared real-world experiences.',
    rating: 5,
  },
];

export const SPONSORS: Sponsor[] = [
  // Platinum
  { id: '1', name: 'TechCorp Global', logo: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=300', tier: 'platinum', website: 'https://techcorp.com' },
  { id: '2', name: 'CloudScale Inc', logo: 'https://images.pexels.com/photos/3562543/pexels-photo-3562543.jpeg?auto=compress&cs=tinysrgb&w=300', tier: 'platinum', website: 'https://cloudscale.com' },
  // Gold
  { id: '3', name: 'DataDriven AI', logo: 'https://images.pexels.com/photos/838644/pexels-photo-838644.jpeg?auto=compress&cs=tinysrgb&w=300', tier: 'gold', website: 'https://datadriven.com' },
  { id: '4', name: 'SecureTech Solutions', logo: 'https://images.pexels.com/photos/60504/pexels-photo-60504.jpeg?auto=compress&cs=tinysrgb&w=300', tier: 'gold', website: 'https://securetech.com' },
  { id: '5', name: 'ProductLabs', logo: 'https://images.pexels.com/photos/2387871/pexels-photo-2387871.jpeg?auto=compress&cs=tinysrgb&w=300', tier: 'gold', website: 'https://productlabs.com' },
  // Silver
  { id: '6', name: 'Web Innovators', logo: 'https://images.pexels.com/photos/258058/pexels-photo-258058.jpeg?auto=compress&cs=tinysrgb&w=300', tier: 'silver', website: 'https://webinnovators.com' },
  { id: '7', name: 'DevTools Pro', logo: 'https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=300', tier: 'silver', website: 'https://devtoolspro.com' },
  { id: '8', name: 'Analytics Plus', logo: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=300', tier: 'silver', website: 'https://analyticsplus.com' },
  { id: '9', name: 'Cloud Base', logo: 'https://images.pexels.com/photos/163064/pexels-photo-163064.jpeg?auto=compress&cs=tinysrgb&w=300', tier: 'silver', website: 'https://cloudbase.com' },
  // Community
  { id: '10', name: 'Tech Meetups SF', logo: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=300', tier: 'community', website: 'https://techmeetupsf.com' },
  { id: '11', name: 'Developer Network', logo: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=300', tier: 'community', website: 'https://developernetwork.com' },
  { id: '12', name: 'Startup Hub', logo: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=300', tier: 'community', website: 'https://startuphub.com' },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: '1',
    name: 'Early Bird',
    price: 299,
    originalPrice: 499,
    description: 'Perfect for individual developers and tech enthusiasts',
    features: [
      'Full access to all sessions',
      'Networking events access',
      'Conference materials',
      'Lunch included',
      'Certificate of attendance',
      'Post-event recordings',
    ],
    remaining: 127,
    total: 500,
  },
  {
    id: '2',
    name: 'Standard',
    price: 499,
    description: 'Great value for professionals seeking comprehensive access',
    features: [
      'Everything in Early Bird',
      'Workshop access',
      'Exclusive after-party',
      'VIP networking session',
      'Speaker meet & greet',
      'Priority seating',
    ],
    remaining: 234,
    total: 400,
  },
  {
    id: '3',
    name: 'VIP',
    price: 999,
    description: 'The ultimate experience for executives and serious innovators',
    features: [
      'Everything in Standard',
      'VIP lounge access',
      'Private dinner with speakers',
      '1-on-1 mentorship sessions',
      'VIP gift package',
      'Front row reserved seats',
      'Personal event concierge',
    ],
    recommended: true,
    remaining: 45,
    total: 100,
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: '1',
    question: 'Who can attend TechSummit 2026?',
    answer: 'TechSummit is open to anyone passionate about technology and innovation. This includes developers, engineers, product managers, entrepreneurs, executives, students, and tech enthusiasts of all backgrounds.',
  },
  {
    id: '2',
    question: 'What is your refund policy?',
    answer: 'We offer full refunds up to 60 days before the event. For refunds requested 30-60 days before the event, a 20% processing fee applies. Within 30 days, tickets are non-refundable but transferable to another attendee.',
  },
  {
    id: '3',
    question: 'Is parking available at the venue?',
    answer: 'Yes, Moscone Center has underground parking with over 1,000 spaces. Valet parking is available for VIP ticket holders. We recommend using public transit as the venue is well-connected.',
  },
  {
    id: '4',
    question: 'Can I attend the conference online?',
    answer: 'Yes! We offer virtual tickets that include access to all keynotes, panels, and selected workshops via our premium streaming platform. Virtual attendees receive recordings and exclusive digital materials.',
  },
  {
    id: '5',
    question: 'Is a certificate included?',
    answer: 'All attendees receive a certificate of attendance. Workshop participants receive additional certificates for each completed workshop. VIP attendees receive executive-level professional development certificates.',
  },
  {
    id: '6',
    question: 'How can I contact support?',
    answer: 'You can reach our support team via email at info@techsummit2026.com, by phone at +1 (555) 123-4567, or through the contact form on this website. We typically respond within 24 hours.',
  },
];

export const HOTELS: Hotel[] = [
  {
    id: '1',
    name: 'The St. Regis San Francisco',
    image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    distance: '0.3 mi from venue',
    price: '$450/night',
  },
  {
    id: '2',
    name: 'W San Francisco',
    image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4,
    distance: '0.2 mi from venue',
    price: '$320/night',
  },
  {
    id: '3',
    name: 'Marriott Marquis',
    image: 'https://images.pexels.com/photos/203463/pexels-photo-203463.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4,
    distance: '0.5 mi from venue',
    price: '$280/night',
  },
];
