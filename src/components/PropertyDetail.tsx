import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
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
  Calculator,
  DollarSign,
  PieChart,
  BarChart3,
  MessageCircle,
  Eye,
  Heart,
  CheckCircle,
  Info,
  Building,
  Wallet,
  TrendingDown,
  Clock,
  Target,
  Zap,
  Lightbulb
} from 'lucide-react';

const PropertyDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [investmentAmount, setInvestmentAmount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [id]);
  // Complete property data with enhanced investment metrics and feasibility
  const propertyData = {
    1: {
      title: "Best Western Meridian Hotel",
      location: "Nairobi CBD",
      type: "Hotel",
      price: "Ksh 1.2B",
      yield: "15.2%",
      images: [
        'https://content.knightfrank.com/property/hub2547666/images/a531920b-a627-43ed-905e-eacd1b941068-0.jpg?cio=true&w=1200',
        'https://content.knightfrank.com/property/hub2547666/images/82c7a8ae-a715-41ff-a906-e892f78acc0a-0.jpg?cio=true&w=1200',
        'https://content.knightfrank.com/property/hub2547666/images/8a0ac1f8-1e08-4827-ac66-409773bed6b1-0.jpg?cio=true&w=1200',
        'https://content.knightfrank.com/property/hub2547666/images/6e44e03d-9fd9-49b2-aaa0-61334d1a321c-0.jpg?cio=true&w=1200',
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
      }
    },

    2: {
      title: "Buffalo Mall & Development Land",
      location: "Naivasha",
      type: "Retail",
      price: "US$5M",
      yield: "11.0%",
      images: [
        'https://content.knightfrank.com/property/hub2429185/images/79bb901f-3dba-41b8-9601-d462f09fa400-0.jpg?cio=true&w=1200',
        'https://content.knightfrank.com/property/hub2429185/images/d52cc1be-f7b5-44af-9899-4993fbef9d32-0.jpg?cio=true&w=1200',
        'https://content.knightfrank.com/property/hub2429185/images/1dab0404-50f6-4502-83f3-bcd333726e64-0.jpg?cio=true&w=1200',
        'https://content.knightfrank.com/property/hub2429185/images/a0e19b97-d614-4437-80da-93869ce1b11b-0.jpg?cio=true&w=1200'
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
      }
    },

    3: {
      title: "ICD Industrial Complex",
      location: "Mombasa Road, Nairobi",
      type: "Industrial",
      price: "KSh 1B",
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
      }
    },

    4: {
      title: "BASL House",
      location: "Kumasi Road, Nairobi CBD",
      type: "Commercial",
      price: "KSh 190M",
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
      }
    },

    5: {
      title: "The Atrium Office Development",
      location: "Chaka Road, Kilimani",
      type: "Commercial",
      price: "US$13.5M",
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
      }
    },

    6: {
      title: "Uchumi House Commercial Building",
      location: "Aga Khan Walk, Central Business District, Nairobi",
      type: "Commercial",
      price: "KSh 570M",
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
      }
    },

    7: {
      title: "The Panari Hotel",
      location: "Mombasa Road, Nairobi West",
      type: "Hotel",
      price: "KSh 3.5B",
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
      }
    },
     8: {
        title: "Absa Towers",
        location: "Loita and Market Street, Nairobi CBD",
        type: "Office Development",
        price: "KSh 2.1B",
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
        }
    },
    9: {
        title: "Tembo Coop House",
        location: "Moi Avenue, Nairobi CBD",
        type: "Commercial Building",
        price: "KSh 385,000,000",
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
        }
    }
  };

  const property = propertyData[id as unknown as keyof typeof propertyData];

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Property Not Found</h2>
          <Link to="/properties" className="text-amber-600 hover:text-amber-700 font-medium">
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

  const tabs = [
    { id: 'overview', name: 'Overview', icon: Building },
    { id: 'investment', name: 'Investment', icon: DollarSign },
    { id: 'feasibility', name: 'Feasibility', icon: PieChart },
    { id: 'calculator', name: 'Calculator', icon: Calculator }
  ];

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
      "priceCurrency": "KES",
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <SEOHead
        title={`${property.title} - ${property.location} | Investment Property | Murivest Realty Group`}
        description={`${property.description} Located in ${property.location}, this ${property.type.toLowerCase()} property offers ${property.yield} annual returns. Price: ${property.price}. Contact Murivest Realty Group for investment details.`}
        keywords={`${property.title}, ${property.location} property, ${property.type} investment Kenya, commercial property ${property.location}, investment property Kenya, ${property.yield} returns, Murivest Realty Group, ${property.location} real estate`}
        url={`https://murivest.com/property/${id}`}
        image={property.images[0]}
        type="article"
        structuredData={propertyStructuredData}
      />
      
      {/* Enhanced Header */}
      <div className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1">
          <div className="flex items-center justify-between">
            <Link 
              to="/properties"
              className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Properties
            </Link>
                          {/* Property Header */}
            <motion.div>
              <div className="flex flex-col lg:flex-row font-luxury lg:items-start lg:justify-between mb-1">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      property.status === 'Available' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {property.status}
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {property.type}
                    </span>
                  </div>
                  <h1 className="text-5xl lg:text-5xl font-bold text-gray-900 mb-3">{property.title}</h1>
                  <div className="text-6xl font-bold text-amber-600 mb-2">{property.price}</div>
                  <div className="flex items-center text-gray-600 mb-1">
                    <MapPin className="h-5 w-5 mr-2 text-amber-600" />
                    <span className="text-lg">{property.location}</span>
                    
                  </div>
                </div>
                
                <div className="text-right">
                  
                </div>
              </div>
            </motion.div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`p-2 rounded-lg transition-colors ${
                  isLiked ? 'bg-red-100 text-red-600' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                }`}
              >
                <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
              </button>
              <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                <Share2 className="h-5 w-5 text-gray-600" />
              </button>
              <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                <Download className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <div className="relative group">
                    <img 
                      src={property.images[0]} 
                      alt={property.title}
                      className="w-full h-96 object-cover rounded-2xl shadow-lg transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                    <div className="absolute top-4 right-4">
                      <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                        <Eye className="h-5 w-5 text-gray-700" />
                      </button>
                    </div>
                  </div>
                </div>
                {property.images.slice(1, 5).map((image, index) => (
                  <div key={index} className="relative group">
                    <img 
                      src={image} 
                      alt={`${property.title} ${index + 2}`}
                      className="w-full h-48 object-cover rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl"></div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Tabs */}
            <motion.div 
              className="bg-white rounded-3xl shadow-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex space-x-1 bg-gray-100 rounded-xl p-1 mb-8">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 flex items-center justify-center py-3 px-4 rounded-lg font-medium transition-all ${
                        activeTab === tab.id
                          ? 'bg-white text-amber-600 shadow-sm'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      <Icon className="h-5 w-5 mr-2" />
                      {tab.name}
                    </button>
                  );
                })}
              </div>

              {/* Tab Content */}
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Property Description</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">{property.description}</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Property Details</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {Object.entries(property.details).map(([key, value]) => (
                        <div key={key} className="bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-amber-200 transition-colors">
                          <div className="text-sm text-gray-500 capitalize mb-1">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                          <div className="font-bold text-gray-900">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Amenities & Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {property.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center bg-gray-50 p-3 rounded-lg hover:bg-amber-50 transition-colors">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'investment' && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl">
                      <div className="flex items-center mb-3">
                        <DollarSign className="h-8 w-8 text-amber-600 mr-3" />
                        <div>
                          <div className="text-sm text-amber-800">Total Investment</div>
                          <div className="text-2xl font-bold text-amber-900">
                            {property.price}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                      <div className="flex items-center mb-3">
                        <TrendingUp className="h-8 w-8 text-green-600 mr-3" />
                        <div>
                          <div className="text-sm text-green-800">Monthly Income</div>
                          <div className="text-2xl font-bold text-green-900">
                            {property.investment.totalInvestment > 1000000000 
                              ? `${(property.investment.monthlyIncome / 1000000).toFixed(1)}M`
                              : `${(property.investment.monthlyIncome / 1000).toFixed(0)}K`
                            }
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                      <div className="flex items-center mb-3">
                        <BarChart3 className="h-8 w-8 text-blue-600 mr-3" />
                        <div>
                          <div className="text-sm text-blue-800">Annual Return</div>
                          <div className="text-2xl font-bold text-blue-900">
                            {property.investment.totalInvestment > 1000000000 
                              ? `${(property.investment.annualIncome / 1000000).toFixed(0)}M`
                              : `${(property.investment.annualIncome / 1000).toFixed(0)}K`
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-900 text-white p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold mb-6">Investment Metrics</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {Object.entries({
                        'Net Yield': `${property.investment.netYield}%`,
                        'Cash on Cash': `${property.investment.cashOnCash}%`,
                        'Cap Rate': `${property.investment.capRate}%`,
                        'Total ROI': `${property.investment.totalROI}%`
                      }).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-sm text-gray-400 mb-1">{key}</div>
                          <div className="text-2xl font-bold text-amber-400">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'feasibility' && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Market Analysis</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {Object.entries(property.feasibility).map(([key, value]) => (
                        <div key={key} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
                          <div className="text-sm text-gray-500 capitalize mb-2">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                          <div className="text-lg font-bold text-gray-900">{value}</div>
                          {key === 'locationScore' && (
                            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                              <div 
                                className="bg-amber-600 h-2 rounded-full" 
                                style={{ width: `${(parseFloat(value) / 10) * 100}%` }}
                              ></div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-2xl">
                    <div className="flex items-start">
                      <Info className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold text-blue-900 mb-2">Investment Recommendation</h4>
                        <p className="text-blue-800">
                          Based on our analysis, this property shows {property.feasibility.growthPotential.toLowerCase()} investment potential with 
                          {property.riskLevel.toLowerCase()} risk, {property.feasibility.marketDemand.toLowerCase()} demand, and strong growth prospects. 
                          The location score of {property.feasibility.locationScore}/10 indicates {
                            property.feasibility.locationScore > 8 ? 'premium' : 'good'
                          } positioning for long-term appreciation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'calculator' && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Investment Calculator</h3>
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Investment Amount (Ksh)
                      </label>
                      <input
                        type="number"
                        value={investmentAmount || ''}
                        onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                        placeholder="Enter your investment amount"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {investmentAmount > 0 && (
                    <motion.div 
                      className="grid grid-cols-1 md:grid-cols-3 gap-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                        <div className="text-sm text-green-700 mb-2">Monthly Returns</div>
                        <div className="text-2xl font-bold text-green-800">
                          Ksh {investmentReturns.monthlyReturn.toLocaleString()}
                        </div>
                      </div>
                      <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                        <div className="text-sm text-blue-700 mb-2">Annual Returns</div>
                        <div className="text-2xl font-bold text-blue-800">
                          Ksh {investmentReturns.yearlyReturn.toLocaleString()}
                        </div>
                      </div>
                      <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                        <div className="text-sm text-purple-700 mb-2">5-Year Projection</div>
                        <div className="text-2xl font-bold text-purple-800">
                          Ksh {investmentReturns.fiveYearProjection.toLocaleString()}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Contact Card */}
              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-lg mb-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-luxury font-bold text-navy-900 mb-6">Interested in this Property?</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-gold-600 mr-3" />
                    <span className="font-elegant text-gray-700">+254 700 000 000</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-gold-600 mr-3" />
                    <span className="font-elegant text-gray-700">investments@murivest.com</span>
                  </div>
                </div>
                <button
                  className="w-full bg-gold-600 hover:bg-gold-700 text-white py-4 rounded-lg font-elegant font-semibold text-lg transition-all duration-300 mb-4"
                  onClick={() => handleWhatsAppContact("I would like to schedule a viewing.")}
                >
                  Schedule Viewing
                </button>

                <button
                  className="w-full border-2 border-navy-900 hover:bg-navy-900 hover:text-white text-navy-900 py-4 rounded-lg font-elegant font-semibold text-lg transition-all duration-300"
                  onClick={() => handleWhatsAppContact("I would like to request more information.")}
                >
                  Request Information
                </button>
              </motion.div>

              {/* Quick Stats */}
              <motion.div 
                className="bg-white rounded-3xl shadow-xl p-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="font-bold text-gray-900 mb-4">Market Insights</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Market Trend</span>
                    <div className="flex items-center text-green-600">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span className="font-bold">Bullish</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Demand Level</span>
                    <span className="font-bold text-amber-600">{property.feasibility.marketDemand}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Price Appreciation</span>
                    <span className="font-bold text-blue-600">+{property.investment.appreciationRate}% YoY</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;