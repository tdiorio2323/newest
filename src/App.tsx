import React, { useState } from 'react';
import { 
  Crown, 
  Palette, 
  Layout, 
  Users, 
  Smartphone, 
  Play,
  ChevronDown,
  ChevronRight,
  Sparkles,
  Zap,
  Heart,
  Settings,
  Search,
  BarChart3,
  CreditCard,
  Star
} from 'lucide-react';

interface SectionProps {
  title: string;
  icon: React.ReactNode;
  items: string[];
  color: string;
  isExpanded?: boolean;
  onToggle?: () => void;
}

const Section: React.FC<SectionProps> = ({ title, icon, items, color, isExpanded = false, onToggle }) => (
  <div className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 ${isExpanded ? 'col-span-full' : ''}`}>
    <div 
      className="flex items-center justify-between cursor-pointer mb-4"
      onClick={onToggle}
    >
      <div className="flex items-center gap-3">
        <div className={`p-3 rounded-xl ${color} shadow-lg`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      {onToggle && (isExpanded ? <ChevronDown className="text-white" /> : <ChevronRight className="text-white" />)}
    </div>
    
    {(isExpanded || !onToggle) && (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {items.map((item, index) => (
          <div key={index} className="bg-white/5 rounded-lg p-3 border border-white/10 hover:bg-white/10 transition-colors">
            <span className="text-white/90 text-sm">{item}</span>
          </div>
        ))}
      </div>
    )}
  </div>
);

const UserFlow: React.FC<{ title: string; steps: string[]; color: string }> = ({ title, steps, color }) => (
  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
    <h4 className={`text-lg font-bold mb-4 ${color}`}>{title}</h4>
    <div className="space-y-2">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center text-black font-bold text-sm`}>
            {index + 1}
          </div>
          <span className="text-white/90 text-sm">{step}</span>
        </div>
      ))}
    </div>
  </div>
);

function App() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const designSystemComponents = [
    "VIP Buttons (6 variants)",
    "Primary: Gold gradient with crown icon",
    "Secondary: Glass morphism with white text",
    "CTA: Animated shine effect",
    "Luxury Cards (4 types)",
    "Stats Card: Glass with holographic border",
    "Content Card: Premium with locked overlay",
    "Creator Card: VIP badge and subscriber count",
    "Navigation Components",
    "VIP Sidebar: Fixed left with blur background",
    "Mobile Nav: Bottom tab with premium icons",
    "Form Elements",
    "Premium Input: Glass with gold focus ring",
    "VIP Select: Custom dropdown with animations"
  ];

  const pageRedesigns = [
    "Creator Dashboard Redesign",
    "3-column grid with glass cards",
    "Earnings with gold accents",
    "Premium charts with holographic effects",
    "Fan Discovery Pages",
    "TikTok-style vertical scroll",
    "Category tiles with creator previews",
    "Full-screen creator profiles",
    "Admin Dashboard VIP Theme",
    "Executive dark theme with gold accents",
    "Large stat cards with trend indicators",
    "User management with advanced filtering",
    "Premium charts and analytics"
  ];

  const mobileComponents = [
    "Touch Targets: Minimum 44px spacing",
    "Swipe Gestures: Content cards and navigation",
    "Bottom Sheet: Modals slide up from bottom",
    "Haptic Feedback: Premium interactions",
    "Responsive Breakpoints",
    "Mobile-first design approach",
    "Touch-optimized interface elements",
    "Progressive enhancement for desktop"
  ];

  const interactions = [
    "Page Transitions: Smooth cross-fades with scale",
    "Micro-animations: Button hovers, card reveals",
    "Loading States: Premium spinners and skeletons",
    "Success States: Confetti and celebration animations",
    "Hover Effects: Glow and shimmer animations",
    "Form Validation: Real-time with smooth transitions",
    "Content Reveal: Parallax and intersection observers",
    "Navigation: Smooth scrolling and page transitions"
  ];

  const colorPalette = [
    { name: "Primary Gold", color: "#FFD700", bg: "bg-yellow-500" },
    { name: "Hot Pink", color: "#FF69B4", bg: "bg-pink-500" },
    { name: "Blue Violet", color: "#8A2BE2", bg: "bg-purple-600" },
    { name: "Glass Effect", color: "rgba(255,255,255,0.1)", bg: "bg-white/10 border border-white/20" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-yellow-700 p-6">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl shadow-2xl">
            <Crown className="w-8 h-8 text-black" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-pink-300 to-purple-300 bg-clip-text text-transparent">
            Cabana VIP Blueprint
          </h1>
        </div>
        <p className="text-white/80 text-lg max-w-2xl mx-auto">
          Complete Framer design system for luxury adult content platform
        </p>
      </div>

      {/* Color Palette */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Palette className="w-6 h-6" />
          Design Foundation
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {colorPalette.map((color, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
              <div className={`w-full h-16 rounded-lg mb-3 ${color.bg}`}></div>
              <p className="text-white font-semibold">{color.name}</p>
              <p className="text-white/60 text-sm">{color.color}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Phases Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <Section
          title="Phase 1: Design System"
          icon={<Palette className="w-6 h-6 text-black" />}
          items={designSystemComponents}
          color="bg-gradient-to-r from-yellow-400 to-yellow-600"
          isExpanded={expandedSection === 'phase1'}
          onToggle={() => toggleSection('phase1')}
        />

        <Section
          title="Phase 2: Page Redesigns"
          icon={<Layout className="w-6 h-6 text-white" />}
          items={pageRedesigns}
          color="bg-gradient-to-r from-pink-500 to-purple-600"
          isExpanded={expandedSection === 'phase2'}
          onToggle={() => toggleSection('phase2')}
        />

        <Section
          title="Phase 4: Mobile Components"
          icon={<Smartphone className="w-6 h-6 text-white" />}
          items={mobileComponents}
          color="bg-gradient-to-r from-purple-600 to-blue-600"
          isExpanded={expandedSection === 'phase4'}
          onToggle={() => toggleSection('phase4')}
        />

        <Section
          title="Phase 5: Interactive Prototypes"
          icon={<Play className="w-6 h-6 text-white" />}
          items={interactions}
          color="bg-gradient-to-r from-green-500 to-teal-600"
          isExpanded={expandedSection === 'phase5'}
          onToggle={() => toggleSection('phase5')}
        />
      </div>

      {/* User Flows */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Users className="w-6 h-6" />
          Phase 3: User Flow Mapping
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <UserFlow
            title="Creator Onboarding"
            steps={["Welcome & Role Selection", "Profile Setup", "Content Upload", "Monetization Setup"]}
            color="text-yellow-400"
          />
          <UserFlow
            title="Fan Discovery"
            steps={["Interest Selection", "Content Discovery", "Creator Following", "First Subscription"]}
            color="text-pink-400"
          />
          <UserFlow
            title="Monetization Flow"
            steps={["Content Creation", "Pricing Strategy", "Content Publishing", "Analytics Review"]}
            color="text-purple-400"
          />
        </div>
      </div>

      {/* Quick Start Guide */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Zap className="w-6 h-6" />
          🚀 Start Order
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Create new Framer project: 'Cabana VIP Design System'",
            "Build color palette and typography first",
            "Create 6 button variants as master components",
            "Design Creator Dashboard as first full page",
            "Add mobile breakpoints and responsive behavior",
            "Create interactive prototype with transitions"
          ].map((step, index) => (
            <div key={index} className="flex items-start gap-3 bg-white/5 rounded-lg p-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                {index + 1}
              </div>
              <span className="text-white/90 text-sm">{step}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Icons */}
      <div className="mt-12 flex justify-center items-center gap-6 text-white/60">
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5" />
          <span className="text-sm">Premium Design</span>
        </div>
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5" />
          <span className="text-sm">Luxury Experience</span>
        </div>
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5" />
          <span className="text-sm">User-Centric</span>
        </div>
      </div>
    </div>
  );
}

export default App;