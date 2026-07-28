import type { OfficeLocation } from '../types';

export const officesData: OfficeLocation[] = [
  {
    id: 'usa-frisco',
    country: 'United States',
    city: 'Frisco, TX',
    address: 'Caldim Tech Services LLC, 8668 John Hickman Pkwy, Suite 903, Frisco, Texas 75034',
    phone: '+1 (248) 455-3855',
    email: 'bala@caldimengg.com',
    coordinates: { x: 23, y: 40 },
    lat: 33.1507,
    lng: -96.8236,
    timezone: 'UTC-5 (Central)',
    isHeadquarters: false
  },
  {
    id: 'india-chennai',
    country: 'India',
    city: 'Chennai, TN',
    address: 'Caldim Engineering Pvt. Ltd., Plot #14, First Cross Street, Michael Gardens, Ramapuram, Chennai — 600089',
    phone: '+91-9790968074',
    email: 'uvaraj@caldimengg.com',
    coordinates: { x: 70, y: 52 },
    lat: 13.0827,
    lng: 80.2707,
    timezone: 'UTC+5:30 (IST)',
    isHeadquarters: true
  },
  {
    id: 'india-hosur',
    country: 'India',
    city: 'Hosur, TN',
    address: '2nd floor, plot No.23,24,&25, Near Check Post, N.H-207, Bagalur Road, Nallur Panchayat, Hosur - 635103',
    phone: '+91-9790968074',
    email: 'swami@caldimengg.com',
    coordinates: { x: 69, y: 53 },
    lat: 12.7409,
    lng: 77.8253,
    timezone: 'UTC+5:30 (IST)',
    isHeadquarters: false
  },
  {
    id: 'canada-toronto',
    country: 'Canada',
    city: 'Toronto, ON',
    address: '200 Bay St, South Tower, Toronto, ON M5J 2J2',
    phone: '+1 (416) 583-2100',
    email: 'bala@caldimengg.com',
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
    email: 'uvaraj@caldimengg.com',
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
    email: 'swami@caldimengg.com',
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
    email: 'bala@caldimengg.com',
    coordinates: { x: 48, y: 26 },
    lat: 51.5074,
    lng: -0.1278,
    timezone: 'UTC+0 (GMT)'
  }
];
