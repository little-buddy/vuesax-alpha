import { defineClientConfig } from '@vuepress/client'

import Vuesax from 'vuesax-alpha'
import 'vuesax-alpha/dist/index.css'
import 'vuesax-alpha/theme-chalk/dark/css-vars.css'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(Vuesax as any)
  },
  setup() {},
  rootComponents: [],
})
