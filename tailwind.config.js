/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./examples/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontSize: {
      "6xl": ["44px", "52px"],
      "5xl": ["40px", "48px"],
      "4xl": ["36px", "42px"],
      "3xl": ["32px", "38px"],
      "2xl": ["28px", "34px"],
      xl: ["24px", "30px"],
    },

    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        blue: {
          50: "#C3DBF8",
          100: "#89B9F2",
          200: "#4E96EC",
          300: "#1373E6",
          400: "#0E56AC",
          500: "#093972",
          600: "#041C39",
          700: "",
          800: "",
          900: "",
          950: "",
        },
        blueInteraction: {
          50: "#E7E5FF",
          100: "#CEE4FF",
          200: "#9DC6FF",
          300: "#3387FF",
          400: "#1000FF",
          500: "#384ECC",
          600: "#2037A1",
          700: "#001858",
        },
        blueInteractionNeutral: {
          50: "#A6CCFF",
          100: "#7B8BFF",
          200: "#4464ED",
          300: "#384ECC",
          400: "#2037A1",
          500: "#001858",
        },
        blueNeutral: {
          50: "#ABC3E0",
          100: "#6999D2",
          200: "#367ED4",
          300: "#266EC4",
          400: "#295992",
          500: "#1C3451",
        },
        darkBlue: {
          50: "#C0C7CE",
          100: "#839090",
          200: "#45596C",
          300: "#07223C",
          400: "#05192C",
          500: "#03101D",
          600: "#01080F",
        },
        darkBlueNeutral: {
          50: "#A8AFB6",
          100: "#63707D",
          200: "#2D4154",
          300: "#103144",
          400: "#23303D",
          500: "#192027",
        },
        white: {
          50: "#FFFFFF",
          100: "#BFBFBF",
          200: "#7F7F7F",
          300: "#404040",
        },
        whiteNeutral: {
          50: "#DBDBDB",
          100: "#DFDFDF",
          200: "#E7E7E7",
          300: "#D7D7D7",
          400: "#9F9F9F",
          500: "#585858",
        },
        black: {
          50: "#C6C6C6",
          100: "#8D8D8D",
          200: "#545454",
          300: "#1C1C1C",
          400: "#141414",
          500: "#0D0D0D",
          600: "#070707",
        },
        blackNeutral: {
          50: "#AEAEAE",
          100: "#6D6D6D",
          200: "#3C3C3C",
          300: "#2C2C2C",
          400: "#2D2D2D",
          500: "#1F1F1F",
        },
        red: {
          50: "#FEF2F2",
          100: "#FDBFC0",
          200: "#FC8082",
          300: "#FC4044",
          400: "#FA0006",
          500: "#BB0004",
          600: "#7C0002",
          700: "#3E0001",
        },
        redNeutral: {
          50: "#E5A7A8",
          100: "#DC6062",
          200: "#E3282C",
          300: "#FA0006",
          400: "#03181C",
          500: "#9C2022",
          600: "#561819",
        },
        orange: {
          50: "#FBEC8F",
          100: "#F8D980",
          200: "#F5C640",
          300: "#F2B400",
          400: "#B58600",
          500: "#785900",
          600: "#3C2D00",
          700: "",
          800: "",
          900: "",
          950: "",
        },
        orangeNeutral: {
          50: "#E3D4A7",
          100: "#D8B960",
          200: "#DDAE28",
          300: "#CD9E18",
          400: "#987920",
          500: "#544518",
        },
        green: {
          50: "#C3EBBF",
          100: "#89D880",
          200: "#4EC440",
          300: "#13B100",
          400: "#0E8400",
          500: "#095800",
          600: "#042C00",
        },
        greenNeutral: {
          50: "#ABD3A7",
          100: "#69B860",
          200: "#36AC28",
          300: "#269C18",
          400: "#297820",
          500: "#1C4418",
        },
        lightBlue: {
          50: "#F3F7FC",
          100: "#E8EFFA",
          200: "#DCE6F7",
          300: "#D0DEF4",
          400: "#B4BECF",
          500: "#888F9A",
          600: "#4C5055",
        },
        lightBlueNeutral: {
          50: "#D8DFE4",
          100: "#C8CFDA",
          200: "#C4CEDF",
          300: "#B4BECF",
          400: "#888F9A",
          500: "#4C5055",
        },
        gray: {
          50: "#FBFBFB",
          100: "#F7F7F8",
          200: "#F2F3F5",
          300: "#EEEFF1",
          400: "#B2B3B5",
          500: "#777778",
          600: "#3C3C3C",
          700: "",
          800: "",
          900: "",
          950: "",
        },
        grayNeutral: {
          50: "#E3E3E3",
          100: "#D7D7D8",
          200: "#DADBDD",
          300: "#CACBCD",
          400: "#979798",
          500: "#545454",
        },
        blueAccent: {
          50: "#E0F4FC",
          100: "#C2E9FA",
          200: "#A3DEF7",
          300: "#84D3F4",
          400: "#639EB7",
          500: "#42697A",
          600: "#21353D",
        },
        blueAccentNeutral: {
          50: "#C8DCE4",
          100: "#A2C9DA",
          200: "#8BC6DF",
          300: "#7BB6CF",
          400: "#62899A",
          500: "#394D55",
        },
        redAccent: {
          50: "#FED4D0",
          100: "#FDA9A1",
          200: "#FB7E72",
          300: "#FA5343",
          400: "#BB3E32",
          500: "#7D2921",
          600: "#3F1511",
        },
        redAccentNeutral: {
          50: "#E6BCB8",
          100: "#DD8981",
          200: "#E3665A",
          300: "#D3564A",
          400: "#9D4941",
          500: "#572D29",
        },
        yellow: {
          50: "#FFF9D7",
          100: "#FFF4AF",
          200: "#FFEE87",
          300: "#FFE85F",
          400: "#D7C65F",
          500: "#9F944F",
          600: "#585230",
          700: "",
          800: "",
          900: "",
          950: "",
        },
        yellowNeutral: {
          50: "#E7E1BF",
          100: "#DFD48F",
          200: "#E7D66F",
          300: "#D7C65F",
          400: "#9F944F",
          500: "#585230",
        },
        green: {
          50: "#CDF7DB",
          100: "#9CF0B7",
          200: "#6AE892",
          300: "#38E06E",
          400: "#2AA852",
          500: "#1C7037",
          600: "#0E381C",
          700: "",
          800: "",
          900: "",
          950: "",
        },
        greenNeutral: {
          50: "#B5DFC3",
          100: "#7CD097",
          200: "#52D07A",
          300: "#42C06A",
          400: "#3C99057",
          500: "#265034",
        },

        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
