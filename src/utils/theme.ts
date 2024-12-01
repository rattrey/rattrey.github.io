// utils/theme.ts

export const theme = {
    colors: {
      // Core colors representing data relationships and intelligence
      primary: {
        900: '#0F172A',  // Darkest - for backgrounds
        800: '#1E293B',  // For cards and sections
        700: '#334155',  // For hover states
        600: '#475569'   // For lighter elements
      },
      // Accent colors representing intelligence and data flow
      accent: {
        primary: '#06B6D4',    // Main accent
        secondary: '#22D3EE',  // Secondary accent
        light: '#67E8F9',      // Highlights
        dark: '#0891B2'        // Deep accents
      },
      // Functional colors for UI elements
      state: {
        success: '#10B981',  // Success states
        warning: '#F59E0B',  // Warning states
        error: '#EF4444',    // Error states
        info: '#3B82F6'      // Information states
      },
      // Text colors
      text: {
        primary: '#F8FAFC',     // Primary text on dark
        secondary: '#CBD5E1',   // Secondary text on dark
        dark: '#0F172A',        // Dark text on light
        muted: '#64748B'        // Muted text
      },
      // Background gradients
      gradients: {
        primary: 'from-[#0F172A] via-[#1E293B] to-[#0F172A]',
        accent: 'from-[#06B6D4] via-[#0891B2] to-[#0F172A]'
      }
    },
    // Animation timings representing data flow
    animation: {
      fast: '300ms',
      medium: '500ms',
      slow: '800ms'
    },
    // Spacing and layout
    layout: {
      maxWidth: 'max-w-7xl',
      padding: {
        x: 'px-4 sm:px-6 lg:px-8',
        y: 'py-20'
      }
    },
    // Category-specific styles
    categories: {
      technical: {
        gradient: "from-primary-800/10 to-primary-900/5",
        accent: "accent-primary",
        text: "text-accent-primary",
        hover: "hover:bg-primary-800/20"
      },
      analytics: {
        gradient: "from-primary-800/10 to-primary-900/5",
        accent: "accent-secondary",
        text: "text-accent-secondary",
        hover: "hover:bg-primary-800/20"
      },
      leadership: {
        gradient: "from-primary-800/10 to-primary-900/5",
        accent: "accent-light",
        text: "text-accent-light",
        hover: "hover:bg-primary-800/20"
      },
      business: {
        gradient: "from-primary-800/10 to-primary-900/5",
        accent: "accent-dark",
        text: "text-accent-dark",
        hover: "hover:bg-primary-800/20"
      }
    },
    // Card styles
    card: {
      base: "bg-primary-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300",
      border: "border border-accent-primary/10",
      hover: "hover:border-accent-primary/20"
    },
    // Timeline styles
    timeline: {
      dot: "w-3 h-3 rounded-full bg-accent-primary",
      line: "w-24 h-px bg-accent-primary/20",
      text: {
        primary: "text-sm text-accent-light whitespace-nowrap",
        secondary: "text-xs text-accent-primary/80 whitespace-nowrap"
      }
    },
    // Component-specific styles
    components: {
      expertiseBadge: {
        expert: "bg-accent-primary/20 text-accent-light",
        advanced: "bg-accent-secondary/20 text-accent-secondary",
        intermediate: "bg-primary-600/20 text-accent-light"
      },
      tag: {
        base: "px-3 py-1.5 rounded-full text-sm",
        primary: "bg-primary-700/50 text-accent-light",
        accent: "bg-accent-primary/10 text-accent-light"
      }
    }
  };
  
  // Common Tailwind class combinations
  export const classes = {
    container: `${theme.layout.maxWidth} mx-auto ${theme.layout.padding.x}`,
    sectionPadding: theme.layout.padding.y,
    card: theme.card.base,
    gradientBg: `bg-gradient-to-br ${theme.colors.gradients.primary}`,
    heading: {
      h1: 'text-5xl font-bold',
      h2: 'text-3xl font-bold',
      h3: 'text-xl font-semibold'
    },
    // Additional common combinations
    section: {
      wrapper: 'min-h-screen py-20',
      inner: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
    },
    animation: {
      fadeIn: `transition-all duration-${theme.animation.medium}`,
      slideIn: `transform transition-all duration-${theme.animation.slow}`
    }
  };
  
  export type ThemeType = typeof theme;
  export type ThemeClasses = typeof classes;
