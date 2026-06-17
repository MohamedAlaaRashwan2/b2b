import { NavItem, Speaker, ScheduleItem, GalleryImage, Testimonial, Sponsor, PricingTier, FAQItem, Hotel, Benefit, Highlight, EventInfo } from '@/types';

export const SITE_CONFIG = {
  name: 'Business Guide 2026',
  url: 'https://BusinessGuide1.com',
  email: 'info@BusinessGuide1.com',
  phone: '+201100033218',
  whatsapp: '+201068620277',
  address: '171 El Tahrir، Street، عابدين، محافظة القاهرة‬ 4280102, Egypt',
  social: {
    twitter: 'https://twitter.com/BusinessGuide',
    linkedin: 'https://linkedin.com/company/BusinessGuide',
    instagram: 'https://instagram.com/BusinessGuide',
    facebook: 'https://facebook.com/BusinessGuide',
    tiktok: 'https://tiktok.com/@BusinessGuide',
  },
};

export const EVENT_INFO: EventInfo = {
  name: 'Business Guide 2026',
  tagline: 'Where Innovation Meets Inspiration',
  date: 'June 26, 2026',
  time: '10:00 AM - 8:00 PM PST',
  venue: 'Cairo',
  location: 'El Tahrir Street, Bab El Louq',
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
  { label: 'Location', href: '#location' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const STATISTICS = [
  { value: 4, suffix: '+', label: 'Speakers' },
  { value: 200, suffix: '+', label: 'Attendees' },
  { value: 8, suffix: '+', label: 'Sessions' },
  { value: 100000, suffix: '+', label: 'Reach' },
];

export const BENEFITS: Benefit[] = [
  {
    icon: 'Users',
    title: 'Understand the Business World',
    description: 'Get clear insights into how businesses really work and the key fundamentals that shape success.',
  },
  {
    icon: 'GraduationCap',
    title: 'Learn from Real Experts',
    description: 'Gain practical knowledge from industry professionals in Marketing, Management, ERP Systems, Accounting, and Business Development.',
  },
  {
    icon: 'TrendingUp',
    title: 'Build Your Direction',
    description: "Whether you're starting your career or growing a business, discover the clarity you need to make better decisions.",
  },
  {
    icon: 'Heart',
    title: 'Connect & Grow',
    description: 'Meet like-minded individuals, entrepreneurs, and professionals who share the same ambition to grow and succeed.',
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
    name: 'Mostafa Sharf-Eldeen',
    position: 'Founder & CEO Utopia Marketing',
    company: 'Utopia Marketing',
    bio: 'Entrepreneurship Instructor Marketing Visionary',
    session: 'The Future of AI: Beyond the Hype',
    image: '/mostafa.jpeg',
    social: {
      linkedin: 'https://linkedin.com/in/sarahchen',
      facebook: 'https://facebook.com/sarahchen',
    },
  },
  {
    id: '2',
    name: 'Rana Youssef',
    position: 'CO-Founder & GM Utopia',
    company: 'Utopia Marketing',
    bio: 'Business devaptor, Business Growth Expert',
    session: 'Building Resilient Cloud Infrastructure',
    image: '/rana.jpeg',
    social: {
      linkedin: 'https://www.linkedin.com/in/rana-mokhtar-63b0762a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      facebook: 'https://www.facebook.com/share/17edsoVMsq/',
      instagram: 'https://www.instagram.com/rana.mokhtar.8?igsh=Y3o0YmppdnA0Z3o4',
    },
  },
  {
    id: '3',
    name: 'Ibrahim Ramadan',
    position: 'CEO, ITSS',
    company: 'DataDriven AI',
    bio: 'Management & Accounting Consultant Technology Strategist',
    session: 'Data Strategy: From Collection to Insight',
    image: '/iprahim.jpeg',
    social: {
      linkedin: 'https://www.linkedin.com/in/ibrahimramadanodoo?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      facebook: 'https://www.facebook.com/share/1BsaQyLZcd/?mibextid=wwXIfr',
      // website: 'https://emilyzhang.io',
    },
  },
  {
    id: '4',
    name: 'Ahmed Elmenshawy',
    position: 'Financial Systems Manager',
    company: 'StartupVenture Labs',
    bio: 'ERP Systems Expert Digital Transformation Expert',
    session: 'From Idea to Exit: The Startup Journey',
    image: '/ahmed.jpeg',
    social: {
      linkedin: 'https://www.linkedin.com/in/ahmed-menshawy-8a0bb71a8?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
      facebook: 'https://www.facebook.com/share/1JRgck2X9P/?mibextid=wwXIfr',
      instagram: 'https://www.instagram.com/reel/DZlDaWvEXdx/?igsh=bm9weWN1cXpzdjBv',
    },
  },
];

export const SCHEDULE: ScheduleItem[] = [
  // Day 1
  {
    id: '1',
    time: '10:00 AM',
    endTime: '10:30 AM',
    title: 'Registration & Welcome',
    category: 'networking',
    duration: '30 min',
    description: 'Network with fellow attendees and enjoy premium coffee.',
    stage: 'The GrEEK Campus',
  },
  {
    id: '2',
    time: '10:30 AM',
    endTime: '11:00 AM',
    title: 'Opening Ceremony',
    speaker: 'Rana Youssef',
    category: 'talk',
    duration: '30 min',
    description: 'Sarah unveils her vision for the next decade of technology innovation.',
    stage: 'Main Stage',
  },
  {
    id: '3',
    time: '11:00 AM',
    endTime: '12:00 PM',
    title: 'Keynote Session',
    speaker: 'Emily Zhang',
    category: 'workshop',
    duration: '60 min',
    description: 'Hands-on workshop building practical AI applications from scratch.',
    stage: 'Workshop Hall A',
  },
  {
    id: '4',
    time: '12:00 PM',
    endTime: '01:00 PM',
    title: 'Panel Discussion',
    category: 'networking',
    duration: '60 min',
    description: 'Connect with startups and investors over gourmet lunch.',
    stage: 'Exhibition Hall',
  },
  {
    id: '5',
    time: '01:00 PM',
    endTime: '02:30 PM',
    title: 'Lunch & Networking',
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
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: '1', src: '/mostafaAlaa.png', alt: 'Main conference hall', category: 'conference' },
  { id: '2', src: '/about1.jpeg', alt: 'Workshop session', category: 'workshop' },
  { id: '3', src: '/about2.jpeg', alt: 'Networking event', category: 'networking' },
  { id: '4', src: '/about3.jpeg', alt: 'Speaker presentation', category: 'speaker' },
  { id: '5', src: '/about4.jpeg', alt: 'Tech showcase', category: 'conference' },
  { id: '6', src: '/about5.jpeg', alt: 'Hands-on workshop', category: 'workshop' },
  { id: '7', src: '/about6.jpeg', alt: 'Networking dinner', category: 'networking' },
  { id: '8', src: '/about7.jpeg', alt: 'Panel discussion', category: 'speaker' },
  { id: '9', src: '/about8.jpg', alt: 'Innovation stage', category: 'conference' },
  { id: '10', src: '/about9.jpg', alt: 'Breakout session', category: 'workshop' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'John Peterson',
    company: 'TechStart Inc',
    position: 'CEO',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
    review: 'Business Guide 2025 was transformative for our startup. We connected with investors and left with 3 partnerships that changed our trajectory.',
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

export const TICKET_PRICE = 999;

export const BADR_UNIVERSITY_DISCOUNT = {
  percentage: 15,
  name: 'Badr University Student Discount',
  maxFileSizeMB: 3,
  allowedFileTypes: ['image/jpeg', 'image/png', 'image/jpg'],
};

export const PRICING_TIERS: PricingTier[] = [
  // {
  //   id: '1',
  //   name: 'Early Bird',
  //   price: 299,
  //   originalPrice: 499,
  //   description: 'Perfect for individual developers and tech enthusiasts',
  //   features: [
  //     'Full access to all sessions',
  //     'Networking events access',
  //     'Conference materials',
  //     'Lunch included',
  //     'Certificate of attendance',
  //     'Post-event recordings',
  //   ],
  //   remaining: 127,
  //   total: 500,
  // },
  {
    id: '2',
    name: 'Standard',
    price: 999,
    description: 'Great value for professionals seeking comprehensive access',
    features: [
      'Everything in Early Bird',
      'Workshop access',
      'Exclusive after-party',
      'VIP networking session',
      'Speaker meet & greet',
      'Priority seating',
    ],
    remaining: 220,
    total: 250,
  },
  // {
  //   id: '3',
  //   name: 'VIP',
  //   price: 999,
  //   description: 'The ultimate experience for executives and serious innovators',
  //   features: [
  //     'Everything in Standard',
  //     'VIP lounge access',
  //     'Private dinner with speakers',
  //     '1-on-1 mentorship sessions',
  //     'VIP gift package',
  //     'Front row reserved seats',
  //     'Personal event concierge',
  //   ],
  //   recommended: true,
  //   remaining: 45,
  //   total: 100,
  // },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: '1',
    question: 'Who can attend Business Guide 2026?',
    answer: 'Business Guide is open to anyone passionate about technology and innovation. This includes developers, engineers, product managers, entrepreneurs, executives, students, and tech enthusiasts of all backgrounds.',
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
    answer: 'You can reach our support team via email at info@BusinessGuide1.com, by phone at +1 (555) 123-4567, or through the contact form on this website. We typically respond within 24 hours.',
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
