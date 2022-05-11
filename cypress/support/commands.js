// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import hkdf from '@panva/hkdf'
import '@testing-library/cypress/add-commands'
import { EncryptJWT } from 'jose'

async function getDerivedEncryptionKey(secret) {
  return await hkdf(
    'sha256',
    secret,
    '',
    'NextAuth.js Generated Encryption Key',
    32
  )
}

export async function encode(token, secret) {
  const maxAge = 30 * 24 * 60 * 60 // 30 days
  const encryptionSecret = await getDerivedEncryptionKey(secret)
  return await new EncryptJWT(token)
    .setProtectedHeader({ alg: 'dir', enc: 'A256GCM' })
    .setIssuedAt()
    .setExpirationTime(Date.now() / 1000 + maxAge)
    .setJti('test')
    .encrypt(encryptionSecret)
}

Cypress.Commands.add('login', () => {
  cy.intercept('/api/auth/session', { fixture: 'session.json' }).as('session')

  // Generate and set a valid cookie from the fixture that next-auth can decrypt
  cy.wrap(null)
    .then(() => cy.fixture('session.json'))
    .then((sessionJSON) =>
      encode(sessionJSON, Cypress.env('NEXTAUTH_JWT_SECRET'))
    )
    .then((encryptedToken) =>
      cy.setCookie('next-auth.session-token', encryptedToken)
    )

  Cypress.Cookies.preserveOnce('next-auth.session-token')
})
