export type Image = {
  src: string;
  alt?: string;
  caption?: string;
};

export type Link = {
  text: string;
  href: string;
};

export type Hero = {
  title?: string;
  text?: string;
  image?: Image;
  actions?: Link[];
};

export type Subscribe = {
  title?: string;
  text?: string;
  formUrl: string;
};

export type SiteConfig = {
  logo?: Image;
  title: string;
  subtitle?: string;
  description: string;
  image?: Image;
  headerNavLinks?: Link[];
  footerNavLinks?: Link[];
  socialLinks?: Link[];
  hero?: Hero;
  subscribe?: Subscribe;
  postsPerPage?: number;
  projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
  description: "夜浮卿的个人博客和爱好分享, 联系方式: yefu24324.com",
  footerNavLinks: [
    // {
    //     text: 'About',
    //     href: '/about'
    // },
    {
      href: "/contact",
      text: "联系",
    },
    // {
    //     text: 'Terms',
    //     href: '/terms'
    // },
    {
      href: "https://github.com/JustGoodUI/dante-astro-theme",
      text: "Download theme",
    },
  ],
  headerNavLinks: [
    {
      href: "/",
      text: "首页",
    },
    {
      href: "/projects",
      text: "作品",
    },
    {
      href: "/blog",
      text: "博客",
    },
    {
      href: "/share/music",
      text: "分享",
    },
    // {
    //     text: '树洞',
    //     href: '/treehole'
    // }
    // {
    //     text: 'Tags',
    //     href: '/tags'
    // }
  ],
  hero: {
    // image: {
    //     src: '/hero2.jpg',
    //     alt: 'A person sitting at a desk in front of a computer'
    // },
    actions: [
      {
        href: "/contact",
        text: "联系方式",
      },
    ],
    text: "感谢访问我的网站，这个网站主要目的是展示我得意的作品。这些作品来自我的灵光一现和满足我练习的目的，每个作品都会有在线地址可以体验，我希望你会喜欢。如果同时给你了一些帮助，那恭喜你也恭喜我帮助到了你。",
    title: 'print!("你好世界。")',
  },
  image: {
    alt: "夜浮卿的个人博客和爱好分享",
    src: "/dante-preview.jpg",
  },
  postsPerPage: 8,
  projectsPerPage: 8,
  socialLinks: [
    {
      href: "https://github.com/yefu24324",
      text: "Github",
    },
    // {
    //     text: 'Dribbble',
    //     href: 'https://dribbble.com/'
    // },
    // {
    //     text: 'Instagram',
    //     href: 'https://instagram.com/'
    // },
    // {
    //     text: 'X/Twitter',
    //     href: 'https://twitter.com/'
    // }
  ],
  subscribe: {
    formUrl: "#",
    text: "One update per week. All the latest posts directly in your inbox.",
    title: "Subscribe to Dante Newsletter",
  },
  subtitle: "全栈开发 / 二次元爱好",
  title: "夜浮卿",
};

export default siteConfig;
