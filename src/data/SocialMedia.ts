type SocialMedia = {
    name: string;
    text: string;
    link: string;
    icon: string;
    isBrand: boolean;
  };
  
  const SocialMedia: SocialMedia[] = [
    {
      name: 'github',
      text: 'girvinjunod',
      link: 'https://github.com/girvinjunod',
      icon: 'github-square',
      isBrand: true,
    },
    {
      name: 'linkedin',
      text: 'Girvin Junod',
      link: 'https://www.linkedin.com/in/girvin-junod/',
      icon: 'linkedin',
      isBrand: true,
    },
    {
      name: 'email',
      text: 'Email',
      link: 'mailto:13519096@std.stei.itb.ac.id',
      icon: 'envelope-square',
      isBrand: false,
    },
    {
      name: 'instagram', // default item
      text: '@girvinjunod_',
      link: 'https://www.instagram.com/girvinjunod_',
      icon: 'instagram-square',
      isBrand: true,
    },
  ];
  
  export default SocialMedia;