import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import SEOHead from './SEOHead';
import { 
  ArrowLeft, 
  MapPin, 
  TrendingUp, 
  Star, 
  Calendar, 
  Users, 
  Shield, 
  Award,
  Phone,
  Mail,
  Download,
  Share2,
  Heart,
  Eye,
  CheckCircle
} from 'lucide-react';
import { MapPin, TrendingUp, Download, Phone, Mail, MessageCircle, X, ChevronLeft, ChevronRight, Building, DollarSign, Calendar, Users, Star, Calculator, FileText, BarChart3, Shield, Award } from 'lucide-react';

const PropertyDetail = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [investmentAmount, setInvestmentAmount] = useState(0);
  const [calculatorValues, setCalculatorValues] = useState({
    investment: '',
    downPayment: '',
    loanTerm: '25'
  });
  const [isLiked, setIsLiked] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [id]);

  // Auto slideshow effect
  useEffect(() => {
    const property = propertyData[id as unknown as keyof typeof propertyData];
    if (property && property.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
      }, 5000); // Change image every 5 seconds
      return () => clearInterval(interval);
    }
  }, [id]);

  // Complete property data with enhanced investment metrics and feasibility
  const propertyData = {
    1: {
      title: "Best Western Meridian Hotel",
      location: "Nairobi CBD",
      type: "Hotel",
      price: "US$10M",
      priceKsh: "Ksh 1.2B",
      yield: "15.2%",
      images: [
        'https://content.knightfrank.com/property/hub2547666/images/a531920b-a627-43ed-905e-eacd1b941068-0.jpg?cio=true&w=1200',
        'https://content.knightfrank.com/property/hub2547666/images/82c7a8ae-a715-41ff-a906-e892f78acc0a-0.jpg?cio=true&w=1200',
        'https://content.knightfrank.com/property/hub2547666/images/8a0ac1f8-1e08-4827-ac66-409773bed6b1-0.jpg?cio=true&w=1200',
        "https://content.knightfrank.com/property/hub2547666/images/a531920b-a627-43ed-905e-eacd1b941068-0.jpg",
        'https://content.knightfrank.com/property/hub2547666/images/c59d11e2-6a4b-4700-97e4-6149f4473726-0.jpg?cio=true&w=1200'
      ],
      features: ["119 Rooms", "3.5 Star Hotel", "Conference Facilities", "Basement Parking", "Restaurant & Bar", "Spa & Wellness"],
      status: "Available",
      riskLevel: "Low",
      occupancyRate: "95%",
      description: "The Best Western Plus Meridian Hotel is a landmark property within the periphery of Nairobi CBD and has historically been regarded as one of the most significant hotels within the city. This 6-storey hotel building offers comprehensive hospitality services with excellent occupancy rates throughout the year.",
      details: {
        size: "119 rooms",
        floors: "6 floors + basement",
        parking: "Basement + ground floor",
        yearBuilt: "Established landmark",
        occupancy: "High year-round",
        tenants: "Hotel operations",
        roi: "15.2% annually",
        appreciation: "12% annually"
      },
      amenities: [
        "119 Hotel Rooms",
        "Conference Facilities", 
        "Restaurant & Bar",
        "Coffee Shop",
        "Spa & Wellness Center",
        "Fitness Centre",
        "Outdoor Rooftop Pool",
        "24/7 Security & CCTV",
        "Backup Power Generator",
        "2 Passenger Lifts + Service Lift",
        "Electronic Card Access System",
        "Fire Safety Systems"
      ],
      investment: {
        totalInvestment: 1200000000,
        monthlyIncome: 17000000,
        annualIncome: 200000000,
        managementFee: 12,
        netYield: 15.2,
        cashOnCash: 14.8,
        capRate: 16.7,
        breakEvenPoint: 6.8,
        appreciationRate: 12,
        totalROI: 27.2
      },
      feasibility: {
        marketDemand: "Very High",
        locationScore: 9.2,
        growthPotential: "Excellent",
        liquidityRating: "High",
        maintenanceRequirement: "Standard",
        regulatoryRisk: "Low"
      },
      brochureUrl: "/brochures/best-western-meridian-hotel.pdf"
    },

    2: {
      title: "Buffalo Mall & Development Land",
      location: "Naivasha",
      type: "Retail",
      price: "US$5M",
      priceKsh: "Ksh 750M",
      yield: "11.0%",
      images: [
        'https://content.knightfrank.com/property/hub2429185/images/79bb901f-3dba-41b8-9601-d462f09fa400-0.jpg?cio=true&w=1200',
        'https://content.knightfrank.com/property/hub2429185/images/d52cc1be-f7b5-44af-9899-4993fbef9d32-0.jpg?cio=true&w=1200',
        'https://content.knightfrank.com/property/hub2429185/images/1dab0404-50f6-4502-83f3-bcd333726e64-0.jpg?cio=true&w=1200',
        "https://content.knightfrank.com/property/hub2429185/images/79bb901f-3dba-41b8-9601-d462f09fa400-0.jpg"
      ],
      features: ["58,965 sqft GLA", "33 Retail Units", "9 Acres Additional Land", "70% Occupancy", "Premier Shopping Destination"],
      status: "Available",
      riskLevel: "Medium",
      occupancyRate: "70%",
      description: "Buffalo Mall stands as the premier shopping destination in Naivasha, strategically situated to capitalise on the town's burgeoning economic growth and tourist appeal. It is the town's largest formal retail centre with excellent potential for expansion on the adjoining 9-acre development land.",
      details: {
        size: "58,965 sqft + 9 acres",
        floors: "Retail mall configuration",
        parking: "Ample parking available",
        yearBuilt: "Part of 2004 masterplan",
        occupancy: "70% (growing)",
        tenants: "33 diverse retail units",
        roi: "11% initially, up to 16% potential",
        appreciation: "Strong growth potential"
      },
      amenities: [
        "33 Flexible Retail Units",
        "24/7 Security",
        "Car Parking Facilities",
        "Disabled Access Facilities",
        "Modern Toilets",
        "Highway Access",
        "Tourist & Commuter Traffic",
        "Dual Road Access",
        "Development-Ready Land",
        "Strategic Location"
      ],
      investment: {
        totalInvestment: 550000000,
        monthlyIncome: 5041667,
        annualIncome: 60500000,
        managementFee: 10,
        netYield: 11.0,
        cashOnCash: 9.9,
        capRate: 12.5,
        breakEvenPoint: 9.1,
        appreciationRate: 8,
        totalROI: 19.0
      },
      feasibility: {
        marketDemand: "High",
        locationScore: 7.8,
        growthPotential: "Very Good",
        liquidityRating: "Medium",
        maintenanceRequirement: "Standard",
        regulatoryRisk: "Low"
      },
      brochureUrl: "/brochures/buffalo-mall-development.pdf"
    },

    3: {
      title: "ICD Industrial Complex",
      location: "Mombasa Road, Nairobi",
      type: "Industrial",
      price: "US$8.5M",
      priceKsh: "KSh 1B",
      yield: "14.8%",
      images: [
        "https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
        "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
        "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
        "https://images.pexels.com/photos/1267324/pexels-photo-1267324.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
      ],
      features: ["3 Acres", "99,300 sqft GLA", "4-Storey Office Block", "Motor Showroom", "Warehouses", "Vehicle Workshops"],
      status: "Available",
      riskLevel: "Low",
      occupancyRate: "85%",
      description: "A prime industrial site strategically located off Mombasa road with comprehensive development including office blocks, showrooms, warehouses and workshops. Its proximity to JKIA, ICD, and SGR Terminus provides unmatched connectivity for industrial operations.",
      details: {
        size: "3 acres (99,300 sqft built)",
        floors: "4-storey office + industrial",
        parking: "Extensive on-site parking",
        yearBuilt: "Well-maintained, recently refurbished",
        occupancy: "Owner occupied",
        tenants: "Industrial/commercial mix",
        roi: "14.8% annually",
        appreciation: "10% annually"
      },
      amenities: [
        "4-Storey Office Block",
        "Motor Vehicle Showroom",
        "Separate Warehouses",
        "Vehicle Workshop Facilities",
        "Mains Electricity & Water",
        "Advanced ICT Networking",
        "Tar Surfaced Access Road",
        "Strategic Mombasa Road Location",
        "JKIA & ICD Proximity",
        "SGR Terminus Access"
      ],
      investment: {
        totalInvestment: 1000000000,
        monthlyIncome: 12333333,
        annualIncome: 148000000,
        managementFee: 8,
        netYield: 14.8,
        cashOnCash: 13.6,
        capRate: 15.2,
        breakEvenPoint: 7.4,
        appreciationRate: 10,
        totalROI: 24.8
      },
      feasibility: {
        marketDemand: "High",
        locationScore: 8.5,
        growthPotential: "Excellent",
        liquidityRating: "High",
        maintenanceRequirement: "Low",
        regulatoryRisk: "Low"
      },
      brochureUrl: "/brochures/icd-industrial-complex.pdf"
    },

    4: {
      title: "BASL House",
      location: "Kumasi Road, Nairobi CBD",
      type: "Commercial",
      price: "US$1.45M",
      priceKsh: "KSh 190M",
      yield: "16.5%",
      images: [
        'https://content.knightfrank.com/property/hub2448515/images/89393bfa-52be-4c67-8bbf-aee9cf35b19d-0.jpg?cio=true&w=1200',
        'https://content.knightfrank.com/property/hub2448515/images/3d3d3b2e-cabe-4a33-8e96-511294b670a0-0.jpg?cio=true&w=1200',
        'https://content.knightfrank.com/property/hub2448515/images/f65e77cb-e69d-42cb-acf1-4117fcec2e7f-0.jpg?cio=true&w=1200',
        'https://content.knightfrank.com/property/hub2448515/images/07cd69ed-196a-4fbb-9b33-1249a5e5a07b-0.jpg?cio=true&w=1200'
      ],
      features: ["18,988 sqft", "4 Storey Building", "100% Occupied", "Multiple Tenants", "CBD Location", "High Footfall"],
      status: "Available",
      riskLevel: "Low",
      occupancyRate: "100%",
      description: "Prime investment opportunity in the heart of Nairobi CBD. This four-storey commercial building is strategically located along Kumasi Road off Kirinyaga Road, offering exceptional rental returns with 100% occupancy and high demand for retail and office space.",
      details: {
        size: "18,988 sqft",
        floors: "4 storeys",
        parking: "Street parking available",
        yearBuilt: "Established building",
        occupancy: "100%",
        tenants: "Multiple established tenants",
        roi: "16.5% annually",
        appreciation: "8% annually"
      },
      amenities: [
        "Prime CBD Location",
        "Multiple Tenant Spaces",
        "High Footfall Area",
        "Easy Access to Business Districts",
        "Proximity to Government Offices",
        "Shopping & Retail Access",
        "Public Transport Links",
        "Established Commercial Area",
        "Banking & Financial Services Nearby",
        "Restaurant & Hotel Access"
      ],
      investment: {
        totalInvestment: 190000000,
        monthlyIncome: 2604167,
        annualIncome: 31350000,
        managementFee: 6,
        netYield: 16.5,
        cashOnCash: 15.5,
        capRate: 17.2,
        breakEvenPoint: 6.1,
        appreciationRate: 8,
        totalROI: 24.5
      },
      feasibility: {
        marketDemand: "Very High",
        locationScore: 9.5,
        growthPotential: "Good",
        liquidityRating: "Very High",
        maintenanceRequirement: "Standard",
        regulatoryRisk: "Low"
      },
      brochureUrl: "/brochures/basl-house.pdf"
    },

    5: {
      title: "The Atrium Office Development",
      location: "Chaka Road, Kilimani",
      type: "Commercial",
      price: "US$13.5M",
      priceKsh: "Ksh 1.8B",
      yield: "13.8%",
      images: [
        "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
        "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
        "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
      ],
      features: ["6 Storey Modern Office", "161,019 sqft", "221 Parking Bays", "Glass Curtain Walling", "Internal Courtyard", "International Standards"],
      status: "Available",
      riskLevel: "Low",
      occupancyRate: "92%",
      description: "An excellently designed office development with exceptional rental income and high technological specifications. Built to international design standards in 2013, The Atrium has served as regional headquarters to reputable local and international organizations.",
      details: {
        size: "161,019 sqft (14,959 sqm)",
        floors: "6 storeys",
        parking: "221 covered bays",
        yearBuilt: "2013",
        occupancy: "High-grade tenants",
        tenants: "Regional HQs & International orgs",
        roi: "13.8% annually",
        appreciation: "9% annually"
      },
      amenities: [
        "Glass Curtain Wall Exterior",
        "Bio Glass with UV Filters",
        "Double Height Reception",
        "Internal Landscaped Courtyard",
        "221 Covered Parking Bays",
        "Fully Handicapped Accessible",
        "Specialized Washroom Facilities",
        "Advanced Building Systems",
        "Prime Kilimani Location",
        "Junction of Chaka & Lenana Roads"
      ],
      investment: {
        totalInvestment: 1485000000,
        monthlyIncome: 17081250,
        annualIncome: 204975000,
        managementFee: 8,
        netYield: 13.8,
        cashOnCash: 12.7,
        capRate: 14.5,
        breakEvenPoint: 7.2,
        appreciationRate: 9,
        totalROI: 22.8
      },
      feasibility: {
        marketDemand: "Very High",
        locationScore: 8.8,
        growthPotential: "Excellent",
        liquidityRating: "High",
        maintenanceRequirement: "Low",
        regulatoryRisk: "Very Low"
      },
      brochureUrl: "/brochures/atrium-office-development.pdf"
    },

    6: {
      title: "Uchumi House Commercial Building",
      location: "Aga Khan Walk, Central Business District, Nairobi",
      type: "Commercial",
      price: "US$4.4M",
      priceKsh: "KSh 570M",
      yield: "12.2%",
      images: [
        "/p1/IMG-20250813-WA0009.jpg",
        "/p1/IMG-20250813-WA0010.jpg"
      ],
      features: ["4,491 sqm", "5 Storey + Basement", "Prime CBD Location", "Established Tenants", "Excellent Visibility", "Landmark Neighbors"],
      status: "Available",
      riskLevel: "Low",
      occupancyRate: "88%",
      description: "Premier commercial property in Nairobi's Central Business District along Aga Khan Walk and Nkrumah Lane. This five-story building with basement offers immediate rental income and excellent visibility in the heart of the city's commercial zone.",
      details: {
        size: "4,491 sqm",
        floors: "5 storeys + basement + mezzanine",
        parking: "Available parking",
        yearBuilt: "Established development",
        occupancy: "Stable tenant base",
        tenants: "Office & retail mix",
        roi: "12.2% annually",
        appreciation: "7% annually"
      },
      amenities: [
        "Prime Aga Khan Walk Location",
        "5-Storey + Basement Structure",
        "Mezzanine Level",
        "Excellent Street Visibility",
        "Level Building Terrain",
        "Established Commercial Zone",
        "Landmark Neighbor Properties",
        "Government Office Proximity",
        "Major Transportation Access",
        "Thriving Business Environment"
      ],
      investment: {
        totalInvestment: 562500000,
        monthlyIncome: 5729167,
        annualIncome: 68750000,
        managementFee: 7,
        netYield: 12.2,
        cashOnCash: 11.4,
        capRate: 13.1,
        breakEvenPoint: 8.2,
        appreciationRate: 7,
        totalROI: 19.2
      },
      feasibility: {
        marketDemand: "High",
        locationScore: 9.0,
        growthPotential: "Good",
        liquidityRating: "High",
        maintenanceRequirement: "Standard",
        regulatoryRisk: "Low"
      },
      brochureUrl: "/brochures/uchumi-house.pdf"
    },

    7: {
      title: "The Panari Hotel",
      location: "Mombasa Road, Nairobi West",
      type: "Hotel",
      price: "US$23.1M",
      priceKsh: "KSh 3B",
      yield: "18.5%",
      images: [
        "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
        "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
        "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
        "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
      ],
      features: ["136 Rooms", "5-Star Rating", "2.5 Acres", "12 Meeting Rooms", "4 Restaurants", "350 Car Parking"],
      status: "Available",
      riskLevel: "Medium",
      occupancyRate: "88%",
      description: "A magnificent 5-star hotel situated along Mombasa Road in Nairobi West, offering luxury accommodations and state-of-the-art amenities. This well-established facility provides strategic access to CBD and JKIA via the Nairobi Expressway, hosting international clients and business dignitaries.",
      details: {
        size: "2.5 acres (27,000 sqm)",
        floors: "Multi-level hotel complex",
        parking: "350 vehicle capacity",
        yearBuilt: "2014",
        occupancy: "High international clientele",
        tenants: "5-star hotel operations",
        roi: "18.5% annually",
        appreciation: "15% annually"
      },
      amenities: [
        "136 Recently Refurbished Rooms",
        "12 Meeting & Conference Rooms",
        "4 Executive Restaurants",
        "4 Executive Bars",
        "2 Fully Equipped Gyms",
        "Swimming Pool",
        "350 Vehicle Parking",
        "Fully Equipped Kitchen",
        "5 Disability-Accessible Rooms",
        "Double-Glazed Windows",
        "Nairobi National Park Views",
        "High-Speed Internet",
        "24/7 Security",
        "Backup Power Systems",
        "Landscaped Gardens"
      ],
      investment: {
        totalInvestment: 3500000000,
        monthlyIncome: 53958333,
        annualIncome: 647500000,
        managementFee: 15,
        netYield: 18.5,
        cashOnCash: 15.7,
        capRate: 19.8,
        breakEvenPoint: 5.4,
        appreciationRate: 15,
        totalROI: 33.5
      },
      feasibility: {
        marketDemand: "Very High",
        locationScore: 8.7,
        growthPotential: "Excellent",
        liquidityRating: "Medium",
        maintenanceRequirement: "High",
        regulatoryRisk: "Medium"
      },
      brochureUrl: "/brochures/panari-hotel.pdf"
    },
     8: {
        title: "Absa Towers",
        location: "Loita and Market Street, Nairobi CBD",
        type: "Office Development",
        price: "US$16.2M",
        priceKsh: "KSh 2.1B",
        yield: "9%",
        images: [
            "/p3/ABSA_Towers.png", 
            "/p3/Screenshot 2025-08-14 212635.png", 
            "/p3/Screenshot 2025-08-14 212644.png", 
            "/p3/Screenshot 2025-08-14 212655.png",
            "/p3/Screenshot 2025-08-14 212707.png",
            "/p3/Screenshot 2025-08-14 212720.png"
        ],
        features: [
            "17 Storey Commercial Block", 
            "24,768 sqm (266,602 sq.ft) Gross Built Up Area", 
            "13,313 sqm (143,300 sq.ft) Net Lettable Area",
            "160 Parking Bays (6 levels)",
            "99.8% Occupancy Rate",
            "Leased to Blue Chip Corporates"
        ],
        status: "For Sale",
        riskLevel: "Low", 
        occupancyRate: "99.8%",
        description: "Absa Towers is a prime seventeen-storey modern office development strategically located within the City Centre of Nairobi. It boasts an excellent rental income from blue-chip corporate occupiers and high technological specifications, making it a highly desirable investment.",
        details: {
            size: "0.487 of an acre (0.197 Ha)",
            floors: "17 storey commercial block",
            parking: "160 vehicle capacity (6 levels)",
            yearBuilt: "1992",
            occupancy: "99.8% (blue-chip corporate occupiers)",
            tenants: "Tier-one banks, insurance organizations, key government institutions",
            roi: "Attractive initial yield profile north of 9.0%",
            appreciation: "Potential for asset value enhancement" 
        },
        amenities: [
            "Large reception area",
            "4 No. passenger lifts (Schindler, 950kg, 15 persons)",
            "2 No. Back-up generators (500 KVA & 640 KVA)",
            "Solar panels to supplement mains power (75 No. 345 Watts Jinko Solar panels)",
            "Fibre optic services",
            "Fully handicapped accessible (ramps, specialised washroom facilities)",
            "Glass curtain walling",
            "Body scanner at reception",
            "Access controlled doors to Tenants spaces",
            "Secondary exit in emergency",
            "24 hour security",
            "CCTV surveillance provision on Tenants spaces",
            "Barriers at entry to vehicle parking/driveways",
            "Fire alarm system",
            "Fire extinguishers (CO2 and dry powder)",
            "Fire sprinkler and smoke detector systems on car parking floors",
            "Fire exit door on each floor",
            "Wet riser hydrant with low/high-pressure delivery hoses at every fire exit",
            "Water pump system connected to hydrants",
            "Piped water from NCC",
            "Mains sewer line",
            "120,000 litres reinforced concrete water tank (basement)",
            "1 No. steel water tank (48,000 litres)",
            "2 No. steel tanks (24,000 litres each) on various floors",
            "Immediate frontage onto Loita and Market Streets (tarmacked)",
            "Grilled metal gate entry to driveway",
            "Tarmaced or paved concrete block driveways, service and parking areas"
        ],
        investment: {
            totalInvestment: 2035000000,
            monthlyIncome: 15500000, 
            annualIncome: 185000000, 
            managementFee: 100000, 
            netYield: 9.0,
            cashOnCash: null, 
            capRate: null, 
            breakEvenPoint: 11, 
            appreciationRate: 12.0, 
            totalROI: 9.0 
        },
        feasibility: {
            marketDemand: "High", 
            locationScore: 9.0, 
            growthPotential: "Excellent", 
            liquidityRating: "Medium", 
            maintenanceRequirement: "Medium", 
            regulatoryRisk: "Low" 
        },
        brochureUrl: "/brochures/absa-towers.pdf"
    },
    9: {
        title: "Tembo Coop House",
        location: "Moi Avenue, Nairobi CBD",
        type: "Commercial Building",
        price: "US$3M",
        priceKsh: "KSh 385,000,000",
        yield: "Details on Application",
        images: [
            "https://images.pexels.com/photos/1647416/pexels-photo-1647416.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop", 
            "https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop", 
            "https://images.pexels.com/photos/1036838/pexels-photo-1036838.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=fit", 
            "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop" 
        ],
        features: [
            "Located along Moi Avenue, Nairobi CBD",
            "Solid Construction",
            "Ground Floor with shops",
            "Seven (7) Upper Floors with offices",
            "Built Up Area: 30,174 Sq. Ft. Approx",
            "Land: 0.0859 Acres Approx.",
            "Fully occupied and let to stable tenants"
        ],
        status: "For Sale",
        riskLevel: "Low", 
        occupancyRate: "100%", 
        description: "A well-constructed commercial building situated on Moi Avenue in the heart of Nairobi CBD. The property comprises ground floor retail units and seven upper floors of offices, boasting full occupancy with stable tenants.",
        details: {
            size: "0.0859 Acres Approx.",
            floors: "Ground floor + 7 upper floors",
            parking: "Not specified",
            yearBuilt: "Not specified", 
            occupancy: "Fully occupied",
            tenants: "Stable tenants",
            roi: "Details on Application",
            appreciation: "Not specified"
        },
        amenities: [
            "Reliable Water supply and adequate storage",
            "Electricity supplemented with Backup Generator",
            "Firefighting equipment on site",
            "8-passenger 630 kgs Kleemann lift serving all floors",
            "Fibre Internet"
        ],
        investment: {
            totalInvestment: 385000000,
            monthlyIncome: null, 
            annualIncome: null, 
            managementFee: null, 
            netYield: null, 
            cashOnCash: null, 
            capRate: null, 
            breakEvenPoint: null, 
            appreciationRate: null, 
            totalROI: null 
        },
        feasibility: {
            marketDemand: "High", 
            locationScore: 8.5, 
            growthPotential: "Good", 
            liquidityRating: "Medium", 
            maintenanceRequirement: "Medium", 
            regulatoryRisk: "Medium" 
        },
        brochureUrl: "/brochures/tembo-coop-house.pdf"
    }
  };

  const property = propertyData[id as unknown as keyof typeof propertyData];

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Property Not Found</h2>
          <Link to="/properties" className="text-blue-600 hover:text-blue-700 font-medium">
            ← Back to Properties
          </Link>
        </div>
      </div>
    );
  }

  const handleWhatsAppContact = (message: string) => {
    const phoneNumber = "254115277610";
    const encodedMessage = encodeURIComponent(
      `Hi! I'm interested in ${property.title} in ${property.location}. ${message}`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const calculateInvestmentReturns = (amount: number) => {
    const monthlyReturn = (amount * property.investment.netYield / 100) / 12;
    const yearlyReturn = amount * property.investment.netYield / 100;
    const fiveYearProjection = amount * Math.pow(1 + (property.investment.totalROI / 100), 5);
    return { monthlyReturn, yearlyReturn, fiveYearProjection };
  };

  const investmentReturns = calculateInvestmentReturns(investmentAmount || property.investment.totalInvestment);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  const handleDownloadBrochure = () => {
    // In a real application, this would download the actual PDF
    // For now, we'll simulate the download
    const link = document.createElement('a');
    link.href = property.brochureUrl;
    link.download = `${property.title.replace(/\s+/g, '-').toLowerCase()}-brochure.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Generate structured data for the property
  const propertyStructuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "name": property.title,
    "description": property.description,
    "url": `https://murivest.com/property/${id}`,
    "image": property.images,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": property.location,
      "addressCountry": "KE"
    },
    "offers": {
      "@type": "Offer",
      "price": property.price,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "floorSize": {
      "@type": "QuantitativeValue",
      "value": property.details.size
    },
    "numberOfRooms": property.features.length,
    "propertyType": property.type,
    "yearBuilt": property.details.yearBuilt,
    "occupancyRate": property.occupancyRate,
    "investmentReturn": property.yield
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Times New Roman, serif' }}>
      <SEOHead
        title={`${property.title} - ${property.location} | Investment Property | Murivest Realty Group`}
        description={`${property.description} Located in ${property.location}, this ${property.type.toLowerCase()} property offers ${property.yield} annual returns. Price: ${property.price}. Contact Murivest Realty Group for investment details.`}
        keywords={`${property.title}, ${property.location} property, ${property.type} investment Kenya, commercial property ${property.location}, investment property Kenya, ${property.yield} returns, Murivest Realty Group, ${property.location} real estate`}
        url={`https://murivest.com/property/${id}`}
        image={property.images[0]}
        type="article"
        structuredData={propertyStructuredData}
      />
      
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/properties"
              className="inline-flex items-center text-gray-600 hover:text-gray-800 font-medium transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Properties
            </Link>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`p-2 rounded-lg transition-colors ${
                  isLiked ? 'bg-red-50 text-red-600' : 'bg-gray-50 hover:bg-gray-100 text-gray-600'
                }`}
              >
                <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
              </button>
              <button className="p-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                <Share2 className="h-5 w-5 text-gray-600" />
              </button>
              <button 
                onClick={handleDownloadBrochure}
                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <FileText className="h-4 w-4 mr-2" />
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Property Header */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  property.status === 'Available' 
                    ? 'bg-green-50 text-green-700 border border-green-200' 
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}>
                  {property.status}
                </span>
                <span className="px-4 py-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-lg text-sm font-medium">
                  {property.type}
                </span>
                <span className="px-4 py-2 bg-gray-50 text-gray-700 border border-gray-200 rounded-lg text-sm font-medium">
                  {property.yield} Annual Yield
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {property.title}
              </h1>
              
              <div className="flex items-center text-gray-600 mb-6">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="text-lg">{property.location}</span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <div className="text-4xl font-bold text-blue-600">{property.price}</div>
                <div className="text-2xl text-gray-500">({property.priceKsh})</div>
              </div>
            </motion.div>

            {/* Image Gallery with Slideshow */}
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="relative">
                <div className="relative group cursor-pointer" onClick={() => setIsImageModalOpen(true)}>
                  <img 
                    src={property.images[currentImageIndex]} 
                    alt={`${property.title} ${currentImageIndex + 1}`}
                    className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
                    <Eye className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Navigation Arrows */}
                  {property.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-lg transition-all duration-200"
                      >
                        <ChevronLeft className="h-6 w-6 text-gray-800" />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-lg transition-all duration-200"
                      >
                        <ChevronRight className="h-6 w-6 text-gray-800" />
                      </button>
                    </>
                  )}
                  
                  {/* Image Counter */}
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {property.images.length}
                  </div>
                </div>
                
                {/* Thumbnail Navigation */}
                {property.images.length > 1 && (
                  <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                    {property.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                          index === currentImageIndex ? 'border-blue-600' : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <img 
                          src={image} 
                          alt={`${property.title} thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Property Description */}
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                Property Overview
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                {property.description}
              </p>
            </motion.div>

            {/* Property Details */}
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                Property Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(property.details).map(([key, value]) => (
                  <div key={key} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <div className="text-sm text-gray-600 capitalize mb-2 font-medium">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                    <div className="font-bold text-gray-900 text-lg">{value}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Investment Metrics */}
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                Investment Analysis
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <div className="flex items-center mb-3">
                    <DollarSign className="h-8 w-8 text-blue-600 mr-3" />
                    <div>
                      <div className="text-sm text-blue-700 font-medium">Total Investment</div>
                      <div className="text-2xl font-bold text-blue-900">
                        {property.price}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <div className="flex items-center mb-3">
                    <TrendingUp className="h-8 w-8 text-green-600 mr-3" />
                    <div>
                      <div className="text-sm text-green-700 font-medium">Monthly Income</div>
                      <div className="text-2xl font-bold text-green-900">
                        ${property.investment.totalInvestment > 1000000000 
                          ? `${(property.investment.monthlyIncome / 1000000 * 0.0077).toFixed(1)}M`
                          : `${(property.investment.monthlyIncome / 1000 * 0.0077).toFixed(0)}K`
                        }
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                  <div className="flex items-center mb-3">
                    <BarChart3 className="h-8 w-8 text-purple-600 mr-3" />
                    <div>
                      <div className="text-sm text-purple-700 font-medium">Annual Return</div>
                      <div className="text-2xl font-bold text-purple-900">
                        {property.yield}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Key Investment Metrics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {Object.entries({
                    'Net Yield': `${property.investment.netYield}%`,
                    'Cash on Cash': property.investment.cashOnCash ? `${property.investment.cashOnCash}%` : 'N/A',
                    'Cap Rate': property.investment.capRate ? `${property.investment.capRate}%` : 'N/A',
                    'Total ROI': property.investment.totalROI ? `${property.investment.totalROI}%` : 'N/A'
                  }).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-sm text-gray-400 mb-1 font-medium">{key}</div>
                      <div className="text-2xl font-bold text-yellow-400">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Market Analysis */}
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                Market Analysis
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(property.feasibility).map(([key, value]) => (
                  <div key={key} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <div className="text-sm text-gray-600 capitalize mb-2 font-medium">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                    <div className="text-lg font-bold text-gray-900">{value}</div>
                    {key === 'locationScore' && (
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-500" 
                          style={{ width: `${(parseFloat(value) / 10) * 100}%` }}
                        ></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Amenities & Features */}
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                Amenities & Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{amenity}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Investment Calculator */}
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                Investment Calculator
              </h2>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Investment Amount (USD)
                </label>
                <input
                  type="number"
                  value={investmentAmount || ''}
                  onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                  placeholder="Enter your investment amount"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>

              {investmentAmount > 0 && (
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <div className="text-sm text-green-700 mb-2 font-medium">Monthly Returns</div>
                    <div className="text-2xl font-bold text-green-800">
                      ${investmentReturns.monthlyReturn.toLocaleString()}
                    </div>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <div className="text-sm text-blue-700 mb-2 font-medium">Annual Returns</div>
                    <div className="text-2xl font-bold text-blue-800">
                      ${investmentReturns.yearlyReturn.toLocaleString()}
                    </div>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                    <div className="text-sm text-purple-700 mb-2 font-medium">5-Year Projection</div>
                    <div className="text-2xl font-bold text-purple-800">
                      ${investmentReturns.fiveYearProjection.toLocaleString()}
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Sidebar - Contact Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-200"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Interested in this Property?
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700 font-medium">+254 115 277 610</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700 font-medium">investments@murivest.co.ke</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-medium text-lg transition-all duration-300"
                    onClick={() => handleWhatsAppContact("I would like to schedule a viewing.")}
                  >
                    Schedule Viewing
                  </button>

                  <button
                    className="w-full border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700 py-4 rounded-lg font-medium text-lg transition-all duration-300"
                    onClick={() => handleWhatsAppContact("I would like to request more information.")}
                  >
                    Request Information
                  </button>
                  
                  <button
                    onClick={handleDownloadBrochure}
                    className="w-full bg-gray-800 hover:bg-gray-900 text-white py-4 rounded-lg font-medium text-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download Brochure
                  </button>
                </div>

                {/* Market Insights */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-4">Market Insights</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">Market Trend</span>
                      <div className="flex items-center text-green-600">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        <span className="font-bold">Bullish</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">Demand Level</span>
                      <span className="font-bold text-blue-600">{property.feasibility.marketDemand}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">Price Appreciation</span>
                      <span className="font-bold text-green-600">+{property.investment.appreciationRate}% YoY</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {isImageModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsImageModalOpen(false)}
          >
            <motion.div
              className="relative max-w-4xl max-h-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsImageModalOpen(false)}
                className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full z-10"
              >
                <X className="h-6 w-6 text-white" />
              </button>
              
              <img 
                src={property.images[currentImageIndex]} 
                alt={`${property.title} ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              {property.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full"
                  >
                    <ChevronLeft className="h-8 w-8 text-white" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full"
                  >
                    <ChevronRight className="h-8 w-8 text-white" />
                  </button>
                </>
              )}
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white px-4 py-2 rounded-full">
                {currentImageIndex + 1} / {property.images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PropertyDetail;