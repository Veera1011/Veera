import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {

  projects = [
    {
      title: 'MemoTrack',
      description: 'MemoTrack is a hospital maintenance tool with real-time dashboards, memo submission, and approval workflows.',
      technologies: ['Flutter', 'Firebase'],
      link: 'https://play.google.com/store/apps/details?id=com.memotrack.myapp'
    },
    {
      title: 'Nexus Scholar Network',
      description: 'Nexus Scholar Network is a project developed for the Annamalai University Department of Information Technology. It aims to create a unified and centralized...',
      technologies: ['HTMX', 'Django', 'Tailwind CSS', 'GSAP', 'MySQL'],
      link: 'https://github.com/VEERA5603/Nexus-Scholar-Network'
    },
    {
      title: 'Personal Assistant',
      description: 'This project is a system control application that allows users to control a system by entering the IP address of the system from a Flutter app and sending commands...',
      technologies: ['Flutter', 'Flask'],
      link: 'https://github.com/VEERA5603/Personal-Assistant'
    },
    {
      title: 'WorkHub',
      description: 'WorkHub is a platform connecting customers with skilled technicians for various home services, such as plumbing, mechanics, gardening, and more. Customer...',
      technologies: ['Node.js', 'Express.js', 'MongoDB Atlas', 'EJS', 'Razorpay', 'Tailwind CSS'],
      link: 'https://github.com/VEERA5603/WorkHub'
    }
  ];
}
