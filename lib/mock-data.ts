export type TransferStatus = 'ACTIVE' | 'ACCESSED' | 'DOWNLOADED' | 'EXPIRED' | 'REVOKED' | 'DESTROYED' | 'CREATED';

export type Transfer = {
  id: string;
  fileName: string;
  sizeMb: number;
  createdAt: string;
  expiresAt: string;
  downloads: number;
  limit: number;
  status: TransferStatus;
  privacyScore: number;
  passwordProtected: boolean;
  fileType: string;
  secureToken: string;
};

export const transfers: Transfer[] = [
  {
    id: 'TR-1204',
    fileName: 'project-report.pdf',
    sizeMb: 12.4,
    createdAt: '2026-10-08T10:00:00Z',
    expiresAt: '2026-10-08T23:45:00Z',
    downloads: 0,
    limit: 1,
    status: 'ACTIVE',
    privacyScore: 94,
    passwordProtected: false,
    fileType: 'PDF',
    secureToken: '8dK92xLmP7Q',
  },
  {
    id: 'TR-1205',
    fileName: 'quarterly-briefing.pptx',
    sizeMb: 8.2,
    createdAt: '2026-10-08T09:00:00Z',
    expiresAt: '2026-10-08T19:00:00Z',
    downloads: 1,
    limit: 3,
    status: 'ACCESSED',
    privacyScore: 88,
    passwordProtected: true,
    fileType: 'PPTX',
    secureToken: '7Nz4lQpX2vJ',
  },
  {
    id: 'TR-1206',
    fileName: 'medical-records.txt',
    sizeMb: 1.3,
    createdAt: '2026-10-08T08:20:00Z',
    expiresAt: '2026-10-08T08:40:00Z',
    downloads: 0,
    limit: 1,
    status: 'EXPIRED',
    privacyScore: 90,
    passwordProtected: true,
    fileType: 'TXT',
    secureToken: 'LxM2pQkR9bC',
  },
  {
    id: 'TR-1207',
    fileName: 'design-pack.zip',
    sizeMb: 45.8,
    createdAt: '2026-10-08T07:45:00Z',
    expiresAt: '2026-10-09T07:45:00Z',
    downloads: 2,
    limit: 3,
    status: 'DOWNLOADED',
    privacyScore: 92,
    passwordProtected: false,
    fileType: 'ZIP',
    secureToken: 'pQ8tM9bD2nZ',
  },
  {
    id: 'TR-1208',
    fileName: 'legal_notice.pdf',
    sizeMb: 3.1,
    createdAt: '2026-10-07T18:30:00Z',
    expiresAt: '2026-10-08T18:30:00Z',
    downloads: 0,
    limit: 1,
    status: 'REVOKED',
    privacyScore: 90,
    passwordProtected: true,
    fileType: 'PDF',
    secureToken: 'vJ5rLmT8xA1',
  },
  {
    id: 'TR-1209',
    fileName: 'training-manual.docx',
    sizeMb: 4.2,
    createdAt: '2026-10-05T10:15:00Z',
    expiresAt: '2026-10-05T11:15:00Z',
    downloads: 1,
    limit: 1,
    status: 'DESTROYED',
    privacyScore: 96,
    passwordProtected: true,
    fileType: 'DOCX',
    secureToken: 'T3xK9cJbL1s',
  },
];

export const systemStats = {
  activeTransfers: 12,
  expiringSoon: 3,
  destroyed: 48,
  totalFilesSent: 189,
  dataSentGb: 1.8,
  suspiciousActivity: 4,
  storageUsedGb: 2.4,
  cleanupFailures: 1,
};

export const auditEntries = [
  { time: '08:13', event: 'LINK_CREATED', detail: 'Secure transfer generated' },
  { time: '08:42', event: 'LINK_ACCESSED', detail: 'Recipient opened secure link' },
  { time: '08:46', event: 'DOWNLOAD_COMPLETED', detail: 'File delivered successfully' },
  { time: '09:02', event: 'TRANSFER_EXPIRED', detail: 'Lifecycle reached expiration threshold' },
];

export const securityHighlights = [
  'AES-256-GCM encryption before temporary storage',
  'Secure random token instead of sequential IDs',
  'No public cloud storage URLs',
  'Automatic cleanup and access revocation',
  'Privacy-preserving audit metadata',
];
