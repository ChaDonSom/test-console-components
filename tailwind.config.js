/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/index.ts", "./src/**/*.{html,ts,vue,css,scss}"],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  prefix: "tcc-",
}
