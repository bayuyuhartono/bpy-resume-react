import digitalSignatureCover from "@/assets/projects/digital-signature.jpg"
import eventRsvpCover from "@/assets/projects/event-rsvp.jpg"
import juragan99Cover from "@/assets/projects/juragan99.jpg"
import rajaKonstruksiCover from "@/assets/projects/raja-konstruksi.jpg"
import stagyCover from "@/assets/projects/stagy.jpg"
import whatsappDashboardCover from "@/assets/projects/whatsapp-dashboard.jpg"
import checkInDesk from "@/assets/stagy-venue/check-in-desk.png"
import invitationBlast from "@/assets/stagy-venue/invitation-blast.png"
import roomDisplay from "@/assets/stagy-venue/room-display.png"
import welcomeWall from "@/assets/stagy-venue/welcome-wall.png"
import type { Project } from "@/types/content"

const SOLO_ROLE = { heading: "End to end, solo" }

/** Urutan di sini = urutan di Home, nomor (01–06), dan rantai "Next project". */
export const PROJECTS: Project[] = [
  {
    slug: "juragan99",
    kind: "case-study",
    cardEyebrow: "Juragan99 Trans · via Pesoros Dev · 2022–Now",
    cardTitle: "Bus booking app",
    cardSummary:
      "Android & iOS app from route search to QR boarding pass — 10,000+ active users within three months of launch.",
    featured: true,
    tags: ["React Native", "Laravel"],
    cover: juragan99Cover,
    coverAlt: "Juragan99 app screens: home, schedule list, seat selection and QR boarding pass",
    coverWide: true,
    eyebrowName: "Juragan99 Trans",
    titleLines: ["Bus booking", "app"],
    intro:
      "An Android, iOS and web app that takes passengers from route search to a QR boarding pass. It reached 10,000+ active users within three months of launch.",
    meta: [
      { label: "Client", value: "Juragan99 Trans" },
      { label: "Role", value: "Founder & sole engineer" },
      { label: "Platforms", value: "Android · iOS · Web" },
      { label: "Stack", value: "React Native · Laravel" },
      { label: "Timeline", value: "2022 — Now" },
    ],
    stats: [
      { value: "10K", accent: "+", label: "Active users in 3 months" },
      { value: "3", label: "Platforms, built solo" },
      { value: "2022", accent: "→", label: "Live and maintained since launch" },
    ],
    overview: {
      label: "The brief",
      heading: "Booking a bus seat should take minutes",
      body: "Juragan99 Trans needed passengers to find a trip, pick a seat, pay and board straight from their phone, with every step in one app.",
    },
    role: {
      ...SOLO_ROLE,
      body: "As the founder of Pesoros Dev, I built it alone: architecture, the React Native app, the Laravel API, payment integration, release, and the development and maintenance that has continued since 2022.",
    },
    features: {
      label: "What I built",
      heading: "The passenger journey",
      items: [
        {
          title: "Search",
          description:
            "Route and schedule search with a date-by-date price strip, so passengers can spot the cheapest day.",
        },
        { title: "Choose a seat", description: "Seat selection by bus class on a live seat map." },
        {
          title: "Add-ons",
          description:
            "Passenger details, refund protection and travel insurance in the same checkout.",
        },
        { title: "Pay", description: "Virtual-account payments across major Indonesian banks." },
        {
          title: "Board",
          description: "An e-ticket with a QR boarding pass, scanned at the bus door.",
        },
      ],
    },
    stack: [
      { label: "Mobile", value: "React Native (Android & iOS)" },
      { label: "Backend", value: "Laravel REST API" },
      { label: "Payments", value: "Bank virtual accounts" },
      { label: "Tickets", value: "QR e-ticket & boarding pass" },
    ],
    nextTitleLines: ["Bus booking", "app"],
    ctaLabel: "Start a project",
  },
  {
    slug: "stagy",
    kind: "product",
    cardEyebrow: "Stagy · Pesoros Dev product · 2026",
    cardTitle: "Stagy — event check-in platform",
    cardSummary:
      "My own event-ops product: guest import, WhatsApp & email invitations, QR + UHF RFID check-in, live venue screens, door prizes and reports. First run at Pertamina IIF 2026.",
    featured: true,
    tags: ["Product", "Laravel", "RFID"],
    highlightTag: "Product",
    cover: stagyCover,
    coverAlt: "Stagy screens: admin dashboard, welcome wall and door-prize draw",
    eyebrowName: "Stagy",
    titleLines: ["Event check-in,", "productized"],
    intro:
      "Stagy is the event-ops platform I built and sell through Pesoros Dev. It covers the whole guest journey, from the organizer's spreadsheet to the closing report, and runs live at the venue on QR scanners and a UHF RFID gate.",
    meta: [
      { label: "Type", value: "Own product" },
      { label: "Role", value: "Founder · product & engineering" },
      { label: "First deployment", value: "Pertamina IIF 2026" },
      { label: "Platforms", value: "Web admin · Venue screens · RFID gate" },
      { label: "Timeline", value: "2026 — Now" },
    ],
    stats: [
      { value: "1", accent: "st", label: "Live deployment: Pertamina IIF 2026" },
      { value: "2", label: "Check-in methods: QR and UHF RFID" },
      { value: "4", accent: "mo", label: "From first commit to live event" },
    ],
    overview: {
      label: "The problem",
      heading: "Every event rebuilds the same registration desk",
      body: "Organizers juggle spreadsheets, manual WhatsApp blasts, paper guest books and long queues at the door, and then rebuild it all for the next event. Stagy packages that work into one platform that can be set up again for each new event.",
    },
    role: {
      heading: "Product to production, solo",
      body: "I own Stagy end to end: product scope, UX, the modular Laravel platform, Meta WhatsApp Cloud API integration, a Python bridge for the RFID gate hardware, on-site support at the event, and the marketing site and content.",
    },
    features: {
      label: "What I built",
      heading: "The guest journey",
      items: [
        {
          title: "Import",
          description:
            "Excel or CSV upload with a preview step and row validation, matched by the organizer's guest ID, with a downloadable error report.",
        },
        {
          title: "Invite",
          description:
            "Personal WhatsApp and email invitations with an RSVP link, sent from a rate-limited queue with delivery status per guest.",
        },
        {
          title: "Confirm",
          description:
            "Guests RSVP from their phone and admins approve them. Each approved guest gets a PDF confirmation letter and a QR e-ticket, then a printed ID card bound to an RFID card.",
        },
        {
          title: "Check in",
          description:
            "A UHF RFID gate or a QR desk scan, with a welcome wall greeting each guest on the big screen. Repeat taps inside the cooldown window are ignored.",
        },
        {
          title: "On site",
          description:
            'Tap in and out per room with live "who\'s inside" screens, plus an on-stage door-prize draw that only picks guests who have checked in.',
        },
        {
          title: "Report",
          description:
            "Daily check-in and per-stream attendance reports exported to Excel, then bulk e-certificates after the event.",
        },
      ],
    },
    venue: [
      {
        image: checkInDesk,
        alt: "Check-in desk with a hardware QR scanner field, camera scanner and live counts by guest tier",
        label: "Check-in desk",
        caption: "Hardware QR scanner and phone camera, with live counts by guest tier.",
        position: "top-left",
      },
      {
        image: invitationBlast,
        alt: "Invitation blast screen with delivery status per guest",
        label: "Invitation blast",
        caption: "WhatsApp and email sending with delivery status for every guest.",
        position: "top-left",
      },
      {
        image: welcomeWall,
        alt: "Welcome wall on the venue screen showing guests as they arrive",
        label: "Welcome wall",
        caption: "Each guest appears on the big screen the moment they pass the gate.",
      },
      {
        image: roomDisplay,
        alt: "Room display listing the guests currently inside a session room",
        label: "Room display",
        caption: "Who's inside each room right now, updated as guests tap in and out.",
      },
    ],
    resell: {
      label: "Why it's a product",
      heading: "Built to resell",
      items: [
        {
          title: "Your brand",
          description: "Logo, colors and display screens set per event, with no code changes.",
        },
        {
          title: "Your tiers",
          description: "Guest levels, rooms, sessions and door-prize rules are all configuration.",
        },
        {
          title: "Your channels",
          description: "The organizer's own WhatsApp Business number and email sender.",
        },
        { title: "Bilingual", description: "Admin and guest screens in Indonesian and English." },
      ],
    },
    stack: [
      { label: "Backend", value: "Laravel 13 · PHP 8.4 (modular HMVC)" },
      { label: "Messaging", value: "Meta WhatsApp Cloud API · Email queue" },
      {
        label: "Check-in",
        value: "UHF RFID gate (Python TCP bridge) · QR scanner · Camera scan",
      },
      { label: "Documents", value: "Excel import/export · PDF letters, ID cards & certificates" },
    ],
    nextTitleLines: ["Stagy — event", "check-in"],
    ctaLabel: "Run Stagy at your event",
  },
  {
    slug: "whatsapp-dashboard",
    kind: "case-study",
    cardEyebrow: "Juragan99 Trans · via Pesoros Dev · 2025",
    cardTitle: "WhatsApp business dashboard",
    cardSummary:
      "Messaging, templates synced with Meta, analytics and logs for the WhatsApp Business API.",
    featured: false,
    tags: ["Node.js", "React"],
    cover: whatsappDashboardCover,
    coverAlt: "WhatsApp business dashboard screens",
    eyebrowName: "Juragan99 Trans",
    titleLines: ["WhatsApp", "business", "dashboard"],
    intro:
      "An internal console for customer messaging on the WhatsApp Business API: every sender number, conversation and template in one place.",
    meta: [
      { label: "Client", value: "Juragan99 Trans" },
      { label: "Role", value: "Sole engineer · Pesoros Dev" },
      { label: "Platform", value: "Web console" },
      { label: "Stack", value: "Node.js · React" },
      { label: "Year", value: "2025" },
    ],
    stats: [
      { value: "4", label: "Message types: text, template, media, location" },
      { value: "Meta", label: "Templates synced with Meta" },
      { value: "1", label: "Console for every sender number" },
    ],
    overview: {
      label: "The brief",
      heading: "One inbox for customer chats",
      body: "Juragan99 Trans needed its team to message customers over the WhatsApp Business API from one console, across several sender numbers, with a record of every message.",
    },
    role: {
      ...SOLO_ROLE,
      body: "I designed and built the console through Pesoros Dev: the Node.js backend on the WhatsApp Business API, the React dashboard, template sync with Meta, and analytics and logging.",
    },
    features: {
      label: "What I built",
      heading: "The console",
      items: [
        {
          title: "Send",
          description: "Text, template, media and location messages from the dashboard.",
        },
        {
          title: "Templates",
          description:
            "Message templates synced with Meta, so approved templates are ready to use.",
        },
        { title: "History", description: "Inbound and outbound message history with filters." },
        { title: "Numbers", description: "Multiple sender numbers managed in one place." },
        {
          title: "Insights",
          description: "Delivery analytics, activity logs and user management.",
        },
      ],
    },
    stack: [
      { label: "Backend", value: "Node.js" },
      { label: "Frontend", value: "React" },
      { label: "Messaging", value: "WhatsApp Business API" },
      { label: "Templates", value: "Synced with Meta" },
    ],
    nextTitleLines: ["WhatsApp business", "dashboard"],
    ctaLabel: "Start a project",
  },
  {
    slug: "raja-konstruksi",
    kind: "case-study",
    cardEyebrow: "Raja Konstruksi · via Pesoros Dev · 2026",
    cardTitle: "Construction project management",
    cardSummary:
      "Budget vs. actual, daily reports, S-curve progress and material control with approvals.",
    featured: false,
    tags: ["Laravel"],
    cover: rajaKonstruksiCover,
    coverAlt: "Raja Konstruksi project dashboard, S-curve and budget plan",
    eyebrowName: "Raja Konstruksi",
    titleLines: ["Construction", "project", "management"],
    intro:
      "Keeps every construction project's budget, progress and materials in one view, in English and Indonesian.",
    meta: [
      { label: "Client", value: "Raja Konstruksi" },
      { label: "Role", value: "Sole engineer · Pesoros Dev" },
      { label: "Platform", value: "Web app" },
      { label: "Stack", value: "Laravel" },
      { label: "Year", value: "2026" },
    ],
    stats: [
      { value: "2", label: "Languages: English and Indonesian" },
      { value: "Weekly", label: "S-curve progress tracking" },
      { value: "1", label: "Dashboard across every project" },
    ],
    overview: {
      label: "The brief",
      heading: "Every project, one view",
      body: "Raja Konstruksi needed budgets, site progress and materials for all its projects tracked in one place instead of scattered reports.",
    },
    role: {
      ...SOLO_ROLE,
      body: "I built the platform through Pesoros Dev: data model, Laravel application, approval flows, reporting and deployment at rajakonstruksi.co.id.",
    },
    features: {
      label: "What I built",
      heading: "The platform",
      items: [
        {
          title: "Overview",
          description: "A multi-project dashboard with budget, material and resource overview.",
        },
        { title: "Budget", description: "Budget plan versus actual tracking for each project." },
        { title: "Progress", description: "Daily reports and weekly S-curve progress." },
        {
          title: "Materials",
          description: "Purchase requests and material control with approvals.",
        },
        {
          title: "Site files",
          description: "Gantt chart, drawings, photo gallery and issue tracking.",
        },
      ],
    },
    stack: [
      { label: "Backend", value: "Laravel" },
      { label: "Platform", value: "Web app" },
      { label: "Languages", value: "English · Indonesian" },
      { label: "Live at", value: "rajakonstruksi.co.id" },
    ],
    nextTitleLines: ["Construction", "project management"],
    ctaLabel: "Start a project",
  },
  {
    slug: "digital-signature",
    kind: "case-study",
    cardEyebrow: "Universitas Tarumanagara · via Pesoros Dev · 2025",
    cardTitle: "Digital signature",
    cardSummary:
      "Sign PDFs online with a verifiable QR stamp, signing history, approvals and delegations.",
    featured: false,
    tags: ["Laravel"],
    cover: digitalSignatureCover,
    coverAlt: "Digital signature dashboard, signature upload and signing history",
    eyebrowName: "Universitas Tarumanagara",
    titleLines: ["Digital", "signature"],
    intro:
      "Lets faculty sign official documents online, each with a QR stamp that anyone can verify.",
    meta: [
      { label: "Client", value: "Universitas Tarumanagara" },
      { label: "Role", value: "Sole engineer · Pesoros Dev" },
      { label: "Platform", value: "Web app" },
      { label: "Stack", value: "Laravel" },
      { label: "Year", value: "2025" },
    ],
    stats: [
      { value: "QR", label: "Verification stamp on every signed document" },
      { value: "Any", label: "Page of a PDF can carry the signature" },
      { value: "1", label: "Unique ID per document" },
    ],
    overview: {
      label: "The brief",
      heading: "Sign without the paper trip",
      body: "Universitas Tarumanagara needed official documents signed online, while still letting anyone confirm a document is genuine.",
    },
    role: {
      ...SOLO_ROLE,
      body: "I built the system through Pesoros Dev: PDF signing and stamping, document verification, the approval and delegation flow, and the activity dashboard.",
    },
    features: {
      label: "What I built",
      heading: "The signing flow",
      items: [
        {
          title: "Upload",
          description: "Upload a PDF and place a signature and QR verification stamp on any page.",
        },
        { title: "Request", description: "Signing requests, approvals and delegations." },
        { title: "Verify", description: "Unique document IDs so anyone can verify a document." },
        { title: "History", description: "Signing history with export." },
        { title: "Monitor", description: "A dashboard of signing activity." },
      ],
    },
    stack: [
      { label: "Backend", value: "Laravel" },
      { label: "Documents", value: "PDF signing & stamping" },
      { label: "Verification", value: "QR code · unique document ID" },
      { label: "Platform", value: "Web app" },
    ],
    nextTitleLines: ["Digital", "signature"],
    ctaLabel: "Start a project",
  },
  {
    slug: "event-rsvp",
    kind: "case-study",
    cardEyebrow: "Universitas Tarumanagara · via Pesoros Dev · 2025",
    cardTitle: "Event RSVP platform",
    cardSummary:
      "Campus events filtered by faculty, one-click registration and QR e-tickets for check-in.",
    featured: false,
    tags: ["Laravel"],
    cover: eventRsvpCover,
    coverAlt: "Event RSVP home page, event list and QR e-ticket",
    eyebrowName: "Universitas Tarumanagara",
    titleLines: ["Event RSVP", "platform"],
    intro: "Students find campus events, register in one click and check in with a QR e-ticket.",
    meta: [
      { label: "Client", value: "Universitas Tarumanagara" },
      { label: "Role", value: "Sole engineer · Pesoros Dev" },
      { label: "Platform", value: "Web app" },
      { label: "Stack", value: "Laravel" },
      { label: "Year", value: "2025" },
    ],
    stats: [
      { value: "1", label: "Click to register" },
      { value: "QR", label: "E-ticket for every registration" },
      { value: "2", label: "Filters: faculty and city" },
    ],
    overview: {
      label: "The brief",
      heading: "From discovery to the door",
      body: "Universitas Tarumanagara needed one place for students to discover campus events, sign up and get in on the day.",
    },
    role: {
      ...SOLO_ROLE,
      body: "I built the platform through Pesoros Dev: event listings, registration, QR e-tickets and check-in, in Laravel.",
    },
    features: {
      label: "What I built",
      heading: "The student journey",
      items: [
        { title: "Discover", description: "Browse events filtered by faculty and city." },
        { title: "Register", description: "View the details and register in one click." },
        { title: "Ticket", description: "Receive a QR e-ticket for entry." },
        { title: "My tickets", description: "Access and manage every registered event." },
        { title: "Check in", description: "Scan the QR e-ticket at the door." },
      ],
    },
    stack: [
      { label: "Backend", value: "Laravel" },
      { label: "Tickets", value: "QR e-tickets" },
      { label: "Platform", value: "Web app" },
      { label: "Users", value: "Students & event organizers" },
    ],
    nextTitleLines: ["Event RSVP", "platform"],
    ctaLabel: "Start a project",
  },
]
