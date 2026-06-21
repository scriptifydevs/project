import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        osint: {
          pageBg: "#0e1014",
          cardBg: "transparent",
          neonGreen: "#00e19b",
          pureWhite: "#ffffff",
          whiteF2: "#fffffff2",
          lightGrayBody: "#d1d5dbe6",
          mutedGray: "#9ca3af8c",
          deepBlack: "#000000",
        }
      },
      fontFamily: {
        space: ['var(--font-space)'],
        inter: ['var(--font-inter)'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "primary-btn": "0 0 0 1px rgba(0,0,0,0.2), 0 8px 18px -6px rgba(0, 225, 155, 0.5)",
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 rgba(0, 225, 155, 0.35), 0 0 0 1px rgba(0, 225, 155, 0.25), 0 4px 18px -4px rgba(0, 0, 0, 0.5)' },
          '50%': { boxShadow: '0 0 0 4px rgba(0, 225, 155, 0), 0 0 0 1px rgba(0, 225, 155, 0.3), 0 8px 28px -6px rgba(0, 0, 0, 0.6)' },
        }
      },
      animation: {
        'glow-pulse': 'glowPulse 7s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
export default config;
