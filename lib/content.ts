export const featureItems = [
  {
    title: 'Secure Upload',
    description: 'Validate file type, size, and metadata before any temporary upload begins.',
  },
  {
    title: 'Temporary Storage',
    description: 'Files are encrypted and retained only for the configured transfer lifecycle.',
  },
  {
    title: 'Download Limits',
    description: 'Prevent unlimited access with time-based and usage-based destruction.',
  },
  {
    title: 'Audit Logs',
    description: 'Track access attempts, downloads, and revocations without collecting unnecessary data.',
  },
];

export const faqItems = [
  {
    q: 'How does CloudVault Zero delete files?',
    a: 'The app encrypts files before temporary cloud storage, enforces expiration and download limits, and then issues a cleanup job to revoke access and delete the blob and metadata.',
  },
  {
    q: 'Is the recipient link public?',
    a: 'No. Links are tokenized and validated server-side. Direct public access to storage objects is prevented by Firebase security rules and API validation.',
  },
  {
    q: 'Can admins download private files?',
    a: 'No. Admins can view metadata, health, and policy controls, but not the contents of private user files through the dashboard.',
  },
];
