type NavItem = {
    name: string;
    text: string;
    link: string;
    icon: string;
  };
  
  const NavItem: NavItem[] = [
    {
      name: 'home',
      text: 'Home',
      link: '/',
      icon: 'home',
    },
    {
      name: 'about',
      text: 'About',
      link: '/about',
      icon: 'address-card',
    },
    {
      name: 'projects',
      text: 'Projects',
      link: '/projects',
      icon: 'terminal',
    }
  ];
  
  export default NavItem;