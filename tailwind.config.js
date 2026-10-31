/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './assets/js/**/*.js'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Cores que mudam entre tema claro e escuro (definidas em src/input.css)
                canvas: 'rgb(var(--canvas) / <alpha-value>)',
                surface: 'rgb(var(--surface) / <alpha-value>)',
                heading: 'rgb(var(--heading) / <alpha-value>)',
                fg: 'rgb(var(--fg) / <alpha-value>)',
                muted: 'rgb(var(--muted) / <alpha-value>)',
                accent: 'rgb(var(--accent) / <alpha-value>)',
                line: 'rgb(var(--line) / <alpha-value>)',
                // Azul SAP, igual nos dois temas
                sap: { DEFAULT: '#0070F2', 200: '#8CC4FF', 300: '#4DA3FF', 600: '#0064D9', 700: '#0057BD' },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            },
        },
    },
};
