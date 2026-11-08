export const getSiteUrl = () => {
  const configured =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.RENDER_EXTERNAL_URL ||
    process.env.VERCEL_URL;
  if (!configured) return "http://localhost:3000";
  return configured.startsWith("http") ? configured.replace(/\/$/, "") : `https://${configured}`;
};

const mapQuery = encodeURIComponent(
  "Sree Abhyasa Junior College, Golnaka Circle, Beside Sundari Hospital, Alwal, Medchal-Malkajgiri, Telangana",
);

export const college = {
  name: "Sree Abhyasa Junior College",
  shortName: "Sree Abhyasa",
  code: "59238",
  location: "Alwal, Medchal-Malkajgiri, Telangana",
  address:
    "Sree Abhyasa Junior College, Golnaka Circle, Beside Sundari Hospital, Alwal, Medchal-Malkajgiri, Telangana.",
  phones: [
    { display: "63098 36569", href: "tel:+916309836569", digits: "916309836569" },
    { display: "85209 36569", href: "tel:+918520936569", digits: "918520936569" },
  ],
  whatsapp:
    "https://wa.me/916309836569?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20admissions%20at%20Sree%20Abhyasa%20Junior%20College.",
  mapEmbed: `https://www.google.com/maps?q=${mapQuery}&output=embed`,
  mapLink: `https://www.google.com/maps/search/?api=1&query=${mapQuery}`,
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Courses", href: "/courses" },
  { label: "Facilities", href: "/facilities" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
] as const;

export const verifiedStats = [
  { value: "59238", label: "Official college code", detail: "As published in the college brochure" },
  { value: "08", label: "Course pathways", detail: "4 intermediate streams + 4 exam tracks" },
  { value: "04", label: "Competitive tracks", detail: "JEE, NEET, EAPCET and CA Foundation" },
  { value: "Alwal", label: "College location", detail: "Medchal-Malkajgiri, Telangana" },
] as const;

export const eligibilityPlaceholder = "[Add verified eligibility criteria from the college office]";
export const unverifiedDataNote =
  "The college brochure confirms the courses and academic features listed here. Eligibility, duration and fee details are not published in the brochure; fields awaiting verification are clearly marked.";

export type CourseCategory = "Intermediate Programme" | "Competitive Exam Preparation";

export type Course = {
  slug: string;
  title: string;
  shortTitle: string;
  category: CourseCategory;
  tagline: string;
  description: string;
  highlights: string[];
  eligibility: string;
};

export const courses: Course[] = [
  {
    slug: "mpc",
    title: "MPC",
    shortTitle: "MPC",
    category: "Intermediate Programme",
    tagline: "Mathematics · Physics · Chemistry",
    description:
      "An intermediate science stream listed in the official college brochure, supported by integrated coaching for board examinations and engineering entrance preparation. The college places a strong emphasis on fundamental concepts, daily competitive-exam focus and structured problem-solving practice.",
    highlights: [
      "Integrated board and competitive exam coaching",
      "Daily focus on JEE and EAPCET preparation",
      "Worksheets for problem-solving ability",
      "Weekly online examinations and review",
    ],
    eligibility: eligibilityPlaceholder,
  },
  {
    slug: "bipc",
    title: "BiPC",
    shortTitle: "BiPC",
    category: "Intermediate Programme",
    tagline: "Biology · Physics · Chemistry",
    description:
      "An intermediate science stream listed in the official college brochure, with integrated coaching for board examinations and NEET. Students are supported through concept-led teaching, regular assessment, individual attention and performance analysis.",
    highlights: [
      "Integrated board examination and NEET coaching",
      "Strong emphasis on fundamental concepts",
      "Term, cumulative and weekly online examinations",
      "Individual mentorship and personal attention",
    ],
    eligibility: eligibilityPlaceholder,
  },
  {
    slug: "mec",
    title: "MEC",
    shortTitle: "MEC",
    category: "Intermediate Programme",
    tagline: "Commerce-focused intermediate study",
    description:
      "MEC is one of the intermediate programmes offered at Sree Abhyasa Junior College. The college's published academic approach brings meticulous planning, limited class strength, regular assessment and individual mentoring to every stream.",
    highlights: [
      "Meticulous academic planning",
      "Limited strength per class",
      "Regular examinations and performance review",
      "Career guidance, values and ethics",
    ],
    eligibility: eligibilityPlaceholder,
  },
  {
    slug: "cec",
    title: "CEC",
    shortTitle: "CEC",
    category: "Intermediate Programme",
    tagline: "Commerce and humanities pathway",
    description:
      "CEC is one of the intermediate programmes offered at Sree Abhyasa Junior College. Students learn in a positive, closely monitored environment with patient-oriented teaching, worksheets and parent communication regarding academic progress.",
    highlights: [
      "Positive learning environment",
      "Counselling and patient-oriented teaching",
      "Worksheets and regular assessments",
      "Parent communication on marks and absenteeism",
    ],
    eligibility: eligibilityPlaceholder,
  },
  {
    slug: "iit-jee",
    title: "IIT-JEE Mains & Advanced",
    shortTitle: "IIT-JEE",
    category: "Competitive Exam Preparation",
    tagline: "Engineering entrance preparation",
    description:
      "The college brochure identifies integrated coaching for IIT-JEE Mains and Advanced alongside board examination preparation. Strong fundamentals, daily exam focus, worksheets and a cycle of online, term and cumulative examinations shape the preparation approach.",
    highlights: [
      "Integrated coaching with board examinations",
      "Daily focus on JEE Mains & Advanced",
      "Fundamental concepts and problem-solving",
      "Analysis and review after assessments",
    ],
    eligibility: eligibilityPlaceholder,
  },
  {
    slug: "neet",
    title: "NEET",
    shortTitle: "NEET",
    category: "Competitive Exam Preparation",
    tagline: "Medical entrance preparation",
    description:
      "The college offers integrated coaching for board examinations and NEET within its science programmes. Preparation is supported by concept-focused instruction, regular testing, careful review and personal attention for each student.",
    highlights: [
      "Integrated board examination and NEET coaching",
      "Daily NEET preparation focus",
      "Weekly online, term and cumulative examinations",
      "Individual mentoring and support for slow learners",
    ],
    eligibility: eligibilityPlaceholder,
  },
  {
    slug: "eapcet",
    title: "EAPCET",
    shortTitle: "EAPCET",
    category: "Competitive Exam Preparation",
    tagline: "State-level entrance preparation",
    description:
      "EAPCET preparation is integrated into the college's daily academic focus. The published approach combines meticulous planning, concept clarity, problem-solving worksheets and repeated assessment with performance analysis.",
    highlights: [
      "Daily EAPCET preparation focus",
      "Integrated board examination coaching",
      "Worksheets to develop problem-solving ability",
      "Performance analysis and review",
    ],
    eligibility: eligibilityPlaceholder,
  },
  {
    slug: "ca-foundation",
    title: "CA Foundation",
    shortTitle: "CA Foundation",
    category: "Competitive Exam Preparation",
    tagline: "Commerce pathway with expert guidance",
    description:
      "The college brochure states that CA Foundation coaching is guided by chartered accountants. Students also benefit from the institution's limited class strength, structured examinations, individual mentoring and career guidance.",
    highlights: [
      "Coaching guided by chartered accountants",
      "Limited strength per class",
      "Individual attention and mentoring",
      "Regular assessment and academic review",
    ],
    eligibility: eligibilityPlaceholder,
  },
];

export const intermediateCourses = courses.filter((course) => course.category === "Intermediate Programme");
export const competitiveCourses = courses.filter((course) => course.category === "Competitive Exam Preparation");
export const courseOptions = courses.map((course) => course.shortTitle);
export const courseEnquiryHref = (slug: string) =>
  `/admissions?course=${encodeURIComponent(slug)}`;

export const academicHighlightGroups = [
  {
    title: "Teaching & Academic Planning",
    intro: "A disciplined, concept-led academic programme.",
    items: [
      "Well-qualified and experienced faculty",
      "Integrated coaching for board examinations and competitive examinations",
      "CA Foundation coaching guided by chartered accountants",
      "Strong emphasis on fundamental concepts",
      "Daily focus on JEE, NEET and EAPCET preparation",
      "Meticulous academic planning",
    ],
  },
  {
    title: "Assessment & Review",
    intro: "Consistent feedback that makes progress visible.",
    items: [
      "Weekly online examinations",
      "Term examinations and cumulative examinations",
      "Performance analysis and review",
      "Worksheets to develop problem-solving abilities",
      "Limited strength per class",
      "Parent communication regarding marks and absenteeism",
    ],
  },
  {
    title: "Care, Mentoring & Environment",
    intro: "Individual attention within a supportive setting.",
    items: [
      "Individual mentorship and personal attention",
      "Positive learning environment",
      "Special focus on slow learners",
      "Counselling and patient-oriented teaching",
      "Career guidance, student values and ethics",
      "CCTV surveillance",
    ],
  },
] as const;

export const academicHighlights = academicHighlightGroups.flatMap((group) => group.items);

export const whyChoose = [
  {
    title: "Integrated preparation",
    description:
      "Board examination teaching and competitive examination coaching are brought together in one carefully planned academic programme.",
  },
  {
    title: "Personal attention",
    description:
      "Limited class strength, individual mentorship and special focus on slow learners keep every student visible and supported.",
  },
  {
    title: "Continuous assessment",
    description:
      "Weekly online tests, term and cumulative examinations, worksheets and performance reviews create a steady improvement loop.",
  },
  {
    title: "Values with ambition",
    description:
      "Career guidance, ethics, counselling and patient-oriented teaching are part of the college's student-development approach.",
  },
] as const;

export const academicApproach = [
  {
    step: "01",
    title: "Plan with precision",
    description:
      "Meticulous academic planning aligns board syllabi with the daily demands of JEE, NEET, EAPCET and CA Foundation preparation.",
  },
  {
    step: "02",
    title: "Build fundamentals",
    description:
      "Teaching places special emphasis on core concepts so students can apply knowledge confidently rather than memorise it.",
  },
  {
    step: "03",
    title: "Practise deliberately",
    description:
      "Worksheets and problem-solving activities turn classroom learning into examination-ready ability.",
  },
  {
    step: "04",
    title: "Assess and review",
    description:
      "Weekly online examinations, term and cumulative examinations are followed by analysis and review.",
  },
  {
    step: "05",
    title: "Mentor individually",
    description:
      "Personal attention, counselling and special support for slow learners help each student move forward.",
  },
] as const;

export const studentSupport = [
  {
    title: "Individual mentorship",
    description: "A unique mentorship programme gives individual attention to each student.",
  },
  {
    title: "Support for slow learners",
    description: "Counselling and patient-oriented teaching provide focused support where it is needed most.",
  },
  {
    title: "Career guidance",
    description: "Students receive guidance alongside the values and ethics emphasised by the college.",
  },
  {
    title: "Parent communication",
    description: "Marks and absenteeism are communicated to parents through mobile SMS.",
  },
  {
    title: "Positive learning environment",
    description: "A supportive environment encourages questions, consistency and steady academic growth.",
  },
  {
    title: "Close monitoring",
    description: "CCTV surveillance and limited class strength support a safe, attentive campus setting.",
  },
] as const;

export const examinationSystem = [
  {
    title: "Weekly online examinations",
    description: "Conducted every weekend according to the college brochure.",
  },
  {
    title: "Term examinations",
    description: "Structured checks on learning across each academic term.",
  },
  {
    title: "Cumulative examinations",
    description: "Broader assessments that revisit concepts over time.",
  },
  {
    title: "Analysis and review",
    description: "Performance is reviewed so teaching and preparation can respond to student needs.",
  },
  {
    title: "Parent updates",
    description: "Marks and absenteeism are reported to parents through mobile SMS.",
  },
] as const;

export type FacilityIcon =
  | "air"
  | "faculty"
  | "mentor"
  | "class"
  | "care"
  | "exam"
  | "worksheet"
  | "security";

export const facilities: { title: string; description: string; icon: FacilityIcon }[] = [
  {
    title: "AC & digital classrooms",
    description: "Air-conditioned, digitally enabled teaching spaces as highlighted in the college brochure.",
    icon: "air",
  },
  {
    title: "Qualified & experienced faculty",
    description: "Teaching is led by well-qualified and experienced faculty, with a strong focus on fundamentals.",
    icon: "faculty",
  },
  {
    title: "Individual student mentoring",
    description: "A unique mentorship programme gives personal attention to every learner.",
    icon: "mentor",
  },
  {
    title: "Limited strength per class",
    description: "Smaller classes allow closer interaction, feedback and academic monitoring.",
    icon: "class",
  },
  {
    title: "Attention to slow learners",
    description: "Counselling and patient-oriented teaching provide additional, focused support.",
    icon: "care",
  },
  {
    title: "Regular examinations",
    description: "Weekly online tests and term and cumulative examinations maintain a steady assessment rhythm.",
    icon: "exam",
  },
  {
    title: "Worksheets & problem solving",
    description: "Structured worksheets are used to develop problem-solving ability and concept application.",
    icon: "worksheet",
  },
  {
    title: "CCTV surveillance",
    description: "Campus surveillance supports a secure and closely monitored learning environment.",
    icon: "security",
  },
];

export const testimonialPlaceholders = [
  { slot: "Parent perspective", status: "Awaiting verified testimonial" },
  { slot: "Student perspective", status: "Awaiting verified testimonial" },
  { slot: "Academic journey", status: "Awaiting verified testimonial" },
] as const;

export const socialPlaceholders = [
  { label: "Facebook", note: "Add official profile URL" },
  { label: "Instagram", note: "Add official profile URL" },
  { label: "YouTube", note: "Add official channel URL" },
] as const;

export const seoKeywords = [
  "Sree Abhyasa Junior College",
  "Junior College in Alwal",
  "IIT JEE coaching in Alwal",
  "NEET coaching in Alwal",
  "EAPCET coaching in Alwal",
  "CA Foundation coaching",
  "MPC BiPC Junior College in Alwal",
  "Intermediate college Medchal-Malkajgiri",
] as const;
