// utils/theme.ts

export const theme = {
  section: {
    wrapper: 'w-full min-h-screen flex flex-col',
    inner: 'flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20',
    background: 'bg-gradient-to-b from-primary-950 via-primary-900 to-primary-950'
  },
    colors: {
      // Core colors - Refined for deep navy professional look

        // Core colors - Deep space-inspired navy/teal base
        primary: {
        950: '#0a192f',  // Darkest deep space blue
        900: '#0f2942',  // Deep background
        800: '#163755',  // Container backgrounds
        700: '#1d4468',  // Active states
        600: '#24527b',  // Interactive elements
        500: '#2b608e',  // Mid-tone elements
        400: '#3d7cb2',  // Subtle highlights
        300: '#5089bd',  // Muted interactive
        200: '#7dacd4',  // Subtle emphasis
        100: '#b3cde6',  // Light accents
        50: '#e5f0f9',   // Lightest shade
        },

        
    
        // Accent colors - Atomic glow inspired
        accent: {
        core: {
            600: '#ff7b24',  // Vibrant atomic core
            500: '#ff8e44',  // Primary hover
            400: '#ffa366',  // Active state
            300: '#ffb788',  // Subtle accents
        },
        energy: {
            600: '#00b4d8',  // Electric blue
            500: '#48cae4',  // Hover state
            400: '#90e0ef',  // Active state
            300: '#ade8f4',  // Subtle variant
        },
        particle: {
            600: '#ffd700',  // Particle glow
            500: '#ffdd33',  // Hover state
            400: '#ffe566',  // Active state
            300: '#fff1a8',  // Subtle variant
        }
        },
        
    
  
      // Text colors - Enhanced for readability on navy
      text: {
        primary: '#ffffff',     // Pure white
        secondary: '#e2e8f0',   // Soft light
        tertiary: '#cbd5e1',    // Star dust
        inverse: '#0f2942',     // Deep space
        muted: 'rgba(255, 255, 255, 0.85)',
      },
  
      // Data visualization palette optimized for navy background
      data: {
        visualization: {
          primary: ['#0ea5d9', '#22b8ed', '#47c7f3', '#7dd7f7'],    // Blues
          secondary: ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd'],   // Royal blues
          tertiary: ['#8b5cf6', '#a78bfa', '#c4b5fd', '#ddd6fe'],    // Purples
          categorical: [
            '#0ea5d9',  // Bright blue
            '#2563eb',  // Royal blue
            '#8b5cf6',  // Purple
            '#ec4899',  // Pink
            '#f59e0b',  // Amber
            '#10b981',  // Emerald
          ],
        },
      },
  
      // Gradient system refined for navy base
      gradients: {
        primary: 'bg-gradient-to-b from-[#0a192f] via-[#0f2942] to-[#0a192f] w-full',  // Space background
        atomic: 'bg-gradient-to-b from-[#ff7b24] via-[#ff8e44] to-[#0f2942] w-full',   // Atomic glow
        energy: 'bg-gradient-to-b from-[#00b4d8] via-[#48cae4] to-[#0f2942] w-full',   // Energy field
        particle: 'bg-gradient-to-b from-[#ffd700] via-[#ffdd33] to-[#0f2942] w-full', // Particle trail
        surface: 'bg-gradient-to-b from-primary-800/95 to-primary-800/85',      // Card surfaces
        glow: 'bg-gradient-to-b from-accent-core-600/20 via-accent-core-400/10 to-transparent', // Ethereal glow
      },
      // State colors
      state: {
        success: '#22c55e',  // Nature green
        warning: '#fbbf24',  // Solar yellow
        error: '#ef4444',    // Red alert
        info: '#00b4d8',     // Info blue
      }
    },
    
  
    opacity: {
      hover: '0.8',
      active: '0.9',
      disabled: '0.5',
      overlay: '0.7',
    },
  
    animation: {
      fast: '300ms',
      medium: '500ms',
      slow: '800ms'
    },
  
    layout: {
      maxWidth: 'max-w-7xl',
      padding: {
        x: 'px-4 sm:px-6 lg:px-8',
        y: 'py-20'
      }
    },
  
    elevation: {
      1: 'shadow-sm',
      2: 'shadow',
      3: 'shadow-md',
      4: 'shadow-lg',
      5: 'shadow-xl',
    },

    effects: {
        glow: {
          core: 'shadow-lg shadow-accent-core-600/50',
          energy: 'shadow-lg shadow-accent-energy-600/50',
          particle: 'shadow-lg shadow-accent-particle-600/50',
        },
        glass: 'backdrop-blur-sm bg-white/10',
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
        base: "backdrop-blur-sm bg-white/10 rounded-xl transition-all duration-300",
        border: "border border-white/10",
        hover: "hover:bg-white/15 hover:border-white/20 hover:shadow-lg hover:shadow-accent-core-600/20",
        glow: "shadow-lg shadow-accent-core-600/20",
      },
    
      // Timeline with particle effects
      timeline: {
        dot: "w-3 h-3 rounded-full bg-accent-core-600 shadow-lg shadow-accent-core-600/50",
        line: "w-24 h-px bg-accent-core-600/20",
        text: {
          primary: "text-sm text-white whitespace-nowrap",
          secondary: "text-xs text-accent-core-300 whitespace-nowrap"
        }
      },
    // Component-specific styles
    components: {
        expertiseBadge: {
          expert: "bg-accent-core-600/20 text-accent-core-300 shadow-sm shadow-accent-core-600/30",
          advanced: "bg-accent-energy-600/20 text-accent-energy-300 shadow-sm shadow-accent-energy-600/30",
          intermediate: "bg-primary-600/20 text-primary-100 shadow-sm shadow-primary-600/30"
        },
        tag: {
          base: "px-3 py-1.5 rounded-full text-sm",
          primary: "bg-primary-700/50 text-primary-100",
          accent: "bg-accent-core-600/10 text-accent-core-300"
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
    animation: {
      fadeIn: `transition-all duration-${theme.animation.medium}`,
      slideIn: `transform transition-all duration-${theme.animation.slow}`
    }
  };
  
  export type ThemeType = typeof theme;
  export type ThemeClasses = typeof classes;
