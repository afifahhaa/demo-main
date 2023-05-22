import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: {
        relative: true,
        files:[
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './src/**/*.{html,js}',
        './components/**/*.{html,js}',
        './pages/**/*.{html,js}',
        './node_modules/@my-company/tailwind-components/**/*.js',
        path.join(path.dirname(require.resolve('@my-company/tailwind-components')), '**/*.js'),
    ],
}

    theme: {
        colors: {
            'blue': '#1fb6ff',
            'purple': '#7e5bef',
            'pink': '#ff49db',
            'orange': '#ff7849',
            'green': '#13ce66',
            'yellow': '#ffc82c',
            'gray-dark': '#273444',
            'gray': '#8492a6',
            'gray-light': '#d3dce6',
          },
          fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
          },
          extend: {
            spacing: {
              '8xl': '96rem',
              '9xl': '128rem',
            },
            borderRadius: {
              '4xl': '2rem',
            }
          }
        
      }
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    

    plugins: [
        plugin(function ({ addComponents, theme }) {
          addComponents({
            '.card': {
              backgroundColor: theme('colors.white'),
              borderRadius: theme('borderRadius.lg'),
              padding: theme('spacing.6'),
              boxShadow: theme('boxShadow.xl'),
            }
          });
        }
        )
        ]
    };


    module.exports = {
        theme: {
          screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }
      
            'md': '768px',
            // => @media (min-width: 768px) { ... }
      
            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }
      
            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }
      
            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
          }
        }
      }   