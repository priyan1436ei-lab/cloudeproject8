# CloudVault Zero

CloudVault Zero is a zero-retention secure cloud file exchange platform for temporary transfers. The system lets senders upload a file, validate and encrypt it, create a secure tokenized share link, and enforce lifecycle rules such as expiration and download limits before automatic destruction.

## Problem Statement

Traditional cloud sharing platforms prioritize permanence. That creates unnecessary retention risk. CloudVault Zero focuses on the opposite: upload, secure access, limited-time delivery, and automatic deletion.

## Core Concept

UPLOAD → ENCRYPT → SHARE → DOWNLOAD → DESTROY

## Features

- Secure file upload with validation and size enforcement
- AES-256-GCM style encryption workflow
- Temporary cloud storage with no public object URLs
- Secure random token URLs
- Password protection and download limits
- Expiration timers and scheduled cleanup
- User and admin dashboards
- Privacy score and security monitoring
- Demo mode for offline development

## Architecture

- Frontend: Next.js + TypeScript + Tailwind CSS
- Cloud: Firebase Auth, Firestore, Storage, Hosting, Cloud Functions
- Security: server-side validation, storage rules, audit events, cleanup workers
- Design: dark-first SaaS/security interface

## Data Lifecycle

1. File is selected and validated.
2. Metadata is checked for type, size, and extension.
3. File is encrypted before temporary storage.
4. A secure token is generated.
5. Recipient accesses a protected share link.
6. Download is validated, counted, and limited.
7. Expiration or revocation triggers destruction.
8. Sensitive metadata is removed.

## Tech Stack

- Next.js 16
- TypeScript
- Tailwind CSS
- Lucide Icons
- Firebase
- Cloud Functions

## Folder Structure

```text
app/
  admin/
  api/
  dashboard/
  login/
  register/
  share/[token]/
  transfers/[id]/
  globals.css
  layout.tsx
  page.tsx
components/
  theme-toggle.tsx
functions/
  src/
lib/
  content.ts
  mock-data.ts
firestore.rules
storage.rules
firebase.json
.env.example
README.md
PROJECT_REPORT.md
```

## Security Architecture

- Client and server validation
- Disallow public direct file reads
- Enforce role-based admin rules
- Apply rate limiting and suspicious access detection
- Store only minimal metadata
- Destroy file after expiration or revocation

## Firebase Setup

1. Create a Firebase project.
2. Add app config to `.env.local`.
3. Deploy rules with Firebase CLI.
4. Enable Firestore, Storage, and Authentication.
5. Configure environment variables.

## Demo Mode

Set `NEXT_PUBLIC_DEMO_MODE=true` to run the app without live Firebase credentials.

## Local Development

```bash
npm install
npm run dev
```

## Testing and Validation

```bash
npm run lint
npm run build
```

## Deployment

This project can be deployed to Firebase Hosting or Vercel with Next.js.

## Privacy Model

The app minimizes stored personal data, avoids retaining unnecessary IP and device fingerprints, and limits audit metadata to privacy-preserving records suitable for security monitoring.

## Future Enhancements

- End-to-end client-side encryption
- QR-based secure transfer
- Enterprise SSO
- Malware scanning integration
- Zero-knowledge architecture

## Screenshots

Use the live landing page, dashboard, share page, and admin page as the visual reference for the project demo.
