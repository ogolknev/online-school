export default defineAppConfig({
  // https://ui.nuxt.com/getting-started/theme#design-system
  ui: {
    colors: {
      primary: 'yellow',
      neutral: 'neutral',
    },
    button: {
      defaultVariants: {
        // size: 'lg'
      }
    },
    input: {
      defaultVariants: {
        size: 'lg'
      }
    },
    formField: {
      slots: {
        error: 'text-error text-[0.8em] mt-1'
      }
      
    }
  }
})
