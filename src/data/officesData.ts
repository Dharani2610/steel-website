import type { OfficeLocation } from '../types';

export const officesData: OfficeLocation[] = [
  {
    id: 'india-hosur-chennai',
    country: 'India',
    city: 'Hosur & Chennai, TN',
    address: 'CALDIM Products & Engineering Hub, Hosur, Chennai, Tamil Nadu, India',
    phone: '+91 99529 68294',
    email: 'salesandsupport@caldimengg.com',
    coordinates: { x: 70, y: 52 },
    lat: 12.9716,
    lng: 77.5946,
    timezone: 'UTC+5:30 (IST)',
    isHeadquarters: true
  },
  {
    id: 'usa-houston',
    country: 'United States',
    city: 'Houston, TX',
    address: '1200 Smith St, Suite 2400, Houston, TX 77002',
    phone: '+1 (713) 890-4500',
    email: 'salesandsupport@caldimengg.com',
    coordinates: { x: 22, y: 38 },
    lat: 29.7604,
    lng: -95.3698,
    timezone: 'UTC-5 (Central)',
    isHeadquarters: false
  },
  {
    id: 'canada-toronto',
    country: 'Canada',
    city: 'Toronto, ON',
    address: '200 Bay St, South Tower, Toronto, ON M5J 2J2',
    phone: '+1 (416) 583-2100',
    email: 'salesandsupport@caldimengg.com',
    coordinates: { x: 26, y: 30 },
    lat: 43.6532,
    lng: -79.3832,
    timezone: 'UTC-4 (Eastern)'
  },
  {
    id: 'australia-sydney',
    country: 'Australia',
    city: 'Sydney, NSW',
    address: '100 Barangaroo Ave, Tower One, Sydney NSW 2000',
    phone: '+61 (2) 9012-3400',
    email: 'salesandsupport@caldimengg.com',
    coordinates: { x: 88, y: 78 },
    lat: -33.8688,
    lng: 151.2093,
    timezone: 'UTC+10 (AEST)'
  },
  {
    id: 'dubai-uae',
    country: 'United Arab Emirates',
    city: 'Dubai',
    address: 'Almas Tower, Level 48, Jumeirah Lakes Towers, Dubai',
    phone: '+971 (4) 438-9200',
    email: 'salesandsupport@caldimengg.com',
    coordinates: { x: 62, y: 44 },
    lat: 25.2048,
    lng: 55.2708,
    timezone: 'UTC+4 (GST)'
  },
  {
    id: 'uk-london',
    country: 'United Kingdom',
    city: 'London',
    address: '30 St Mary Axe, City of London, EC3A 8EP',
    phone: '+44 (20) 7946-0900',
    email: 'salesandsupport@caldimengg.com',
    coordinates: { x: 48, y: 26 },
    lat: 51.5074,
    lng: -0.1278,
    timezone: 'UTC+0 (GMT)'
  }
];
