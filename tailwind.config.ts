import { type Config } from 'tailwindcss'
import easings from 'open-props/src/easing'
export default {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      './index.html'
    ],
    safelist:[
      {
        pattern:/col-start-(1|2|3|4|5)/,
      },
      {
        pattern:/row-start-(1|2|3|4|5|6)/,
      },
      // same as below
      // 'col-start-1',
      // 'col-start-2',
      // 'col-start-3',
      // 'col-start-4',
      // 'col-start-5',
      // 'row-star-1',
      // 'row-star-2',
      // 'row-star-3',
      // 'row-star-4',
      // 'row-star-5',
      // 'row-star-6',
    ],
    theme: {
      extend: {
        screens: {
          sm: '520px',
          lg: '976px'
        },
        colors: {
          highlight: '#6202ff'
        },
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
        },
        fontSize: {
          '4.5xl': ['2.625rem', '1.15'],
          '5.5xl': ['3.375rem', '1.15']
        },
        keyframes:{
          'roll-reveal':{
                 from:{
					opacity:'0',
					transform:'rotate(12deg) scale(0)',
				 },
                 to:{
					opacity:'1',
					transform:'rotate(0deg) scale(1)',
				 }
				},
				//Reduced motion alternative
				'fade-in':{
					from:{opacity:'0'},
					to:{opacity:'1'}
				},
         'slide-top':{
          from:{
            opacity:'0',
            transform:'translateY(20px)'
          },
          to:{
            opacity:'1',
            transform:'translateY(0)'
          }
         },
         'slide-left':{
					from: { transform: 'translateX(20px)', opacity: '0' },
					to: { transform: 'translateX(0px)', opacity: '1' },
				}
        },
        animation:{
          'slide-top':'slide-top 0.3s ease-out backwards',
          'slide-left':'slide-left 0.3s ease-out backwards',
          'fade-in':'0.4s fade-ind ease-out backwards',
          'roll-reveal':`4s roll-reveal ${easings['--ease-spring-2']} backwards`
        }
      }
    },
    plugins: [],
} satisfies Config