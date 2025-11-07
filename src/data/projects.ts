import type { Project } from '../types'
import academicyImg from '../assets/img/Academicy.jpg'
import ayulaPOSImg from '../assets/img/AyulaPOS.jpg'

const projects: Project[] = [
  {
    id: 'academicy',
    title: 'Academicy',
    description: 'Academic management system with student, lecturer, and admin portals for educational institutions.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
    image: academicyImg,
    year: '2024',
    fullDescription: 'Academicy is a comprehensive academic management system designed to streamline educational processes. It features separate portals for students, lecturers, and administrators, providing role-based access and functionality.',
    features: [
      'Student portal for course registration and grade tracking',
      'Lecturer dashboard for course management and grading',
      'Admin panel for system-wide management',
      'Real-time notifications and updates',
      'Responsive design for mobile and desktop'
    ]
  },
  {
    id: 'ayula-pos',
    title: 'AyulaPOS',
    description: 'Point of Sale system with inventory management, sales tracking, and comprehensive dashboard analytics.',
    tech: ['PHP', 'Bootstrap', 'MySQL', 'JavaScript'],
    image: ayulaPOSImg,
    year: '2024',
    fullDescription: 'AyulaPOS is a modern point of sale system designed for small to medium businesses. It includes inventory management, sales tracking, and powerful analytics to help business owners make data-driven decisions.',
    features: [
      'Intuitive POS interface for fast transactions',
      'Real-time inventory tracking and alerts',
      'Comprehensive sales analytics dashboard',
      'Customer management system',
      'Multi-user support with role permissions',
      'Print receipts and generate reports'
    ]
  }
]

export default projects
