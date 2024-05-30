import Logow from '@/public/assets/svgs/velionwhite.svg';
import Logo from '@/public/assets/svgs/velionfooter.svg';

import cloud from "@/public/assets/svgs/cloudinfra.svg"
import datas from "@/public/assets/svgs/datas.svg" 
import softdev from "@/public/assets/svgs/softdev.svg";



import { Whatwemodel, Footer } from '@/types';

export const header = {
    logo: Logo,
    btnSignupText: 'Get Started',
    logow: Logow,
  };

  export const nav = [
    {
      title: 'What We Do',
      link: '/how-we-work',
    },
    {
      title: 'Our Work',
      link: '/our-work',
      additionalLinks: [
        {
          title: 'Clients',
          link: '/clients',
        }, 
       
        {
          title: 'Education',
          link: '/our-work/education',
        },
      
        {
          title: 'Our Impact',
          link: '/our-work/our-impact',
        },
        {
          title: 'Our Approach',
          link: '/our-work/our-approach',
        },
      ]
    },
    {
      title: 'About us',
      link: '/about',
      additionalLinks: [
        {
          title: 'Our Story',
          link: '/our-story',
        },
        {
          title: 'Our brand',
          link: '/our-brand',
        },
        {
          title: 'Our Team',
          link: '/teams',
        },
        
        
      ]
    }, 
    {
      title: 'Blog',
      link: '/blog'
    },
    {
        title: 'Contact',
        link: '/contact', 
      
    }
];

export const whatwe:Whatwemodel[] = [
  {
      image:softdev,
      title:"AI & Data Services​",
      subtitle:'Unlock your business’s full potential with expert artificial intelligence and data services.',
      bcolor:'[#347295]',
      tcolor:'text-[#347295]',
      link:'/services/dataaiservice'
  },
  {
      image:datas,
      title:"Software Development",
      subtitle:'Customized software development solutions to accelerate your business.',
      bcolor:'[#FF9900]',
      tcolor:'text-[#FF9900]',
      link:'/services/softwaredev'
  },
  {
      image:softdev,
      title:"Software Consulting",
      subtitle:'Maximize productivity with tailored software consulting by expert professionals.',
      bcolor:'[#DB3236]',
      tcolor:'text-[#DB3236]',
      link:'/services/softwareconsult'
  },
  {
      image:cloud,
      title:"DevOps & MLOps",
      subtitle:'Optimize your software and machine learning workflows with comprehensive DevOps and MLOps services.',
      bcolor:'[#68A703]',
      tcolor:'text-[#68A703]',
      link:'/services/devops'
  },
  {
      image:cloud,
      title:"Startup & MVP services",
      subtitle:'Achieve startup success with our MVP services. Minimize costs and risks.',
      bcolor:`[#CE1E5B]`,
      tcolor:`text-[#CE1E5B]`,
      link:'/services/startup'
  },
  {
      image:datas,
      title:"Technical Training​",
      subtitle:'Advance your technological skills with customized training and expert guidance.',
      bcolor:'[#4885ED]',
      tcolor:`text-[#4885ED]`,
      link:'/services/training'
  }
]


export const linksFooter:Footer[] = [
  {
      title:'About us',
      subs:[
          {
              name:'What we do',
              link:'/services',
              dropdown:true
          },
          {
              name:'Who we are',
              link:'/aboutus'
          },
          {
              name:'Contact us',
              link:'/contactus'
          },
      ]
  },
  {
      title:'Resources',
      subs:[
          {
              name:'Blogs',
              link:'/services',
              dropdown:true
          },
          // {
          //     name:'News Update',
          //     link:'/aboutus'
          // },
          // {
          //     name:'Blog',
          //     link:'/blog'
          // }
      ]
  }
]


