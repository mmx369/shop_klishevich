const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

const withImages = require('next-images')

// This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration

const nextConfig = (phase) => {
  const defaultConfig = withImages()

  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  // when `next build` or `npm run build` is used
  const isProd = phase === PHASE_PRODUCTION_BUILD

  console.log(`isDev:${isDev}  isProd:${isProd}`)

  const env = {
    RESTURL: (() => {
      if (isDev) return 'http://localhost:3000'
      if (isProd) {
        return 'http://localhost:3000'
      }
      return 'RESTURL:not (isDev,isProd)'
    })(),

    RESTURL_SESSIONS: (() => {
      if (isDev) return 'http://localhost:3000/sessions'
      if (isProd) {
        return 'http://localhost:3000/sessions'
      }
      return 'RESTURL_SESSIONS:not (isDev,isProd)'
    })(),
  }

  return {
    ...defaultConfig,
    env,
    images: {
      domains: ['res.cloudinary.com'],
    },
  }
}

module.exports = nextConfig
