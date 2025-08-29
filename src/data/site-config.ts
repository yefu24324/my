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
    title: '夜浮卿',
    subtitle: '全栈开发 / 二次元爱好',
    description: '夜浮卿的个人博客和爱好分享, 联系方式: yefu24324.com',
    image: {
        src: '/dante-preview.jpg',
        alt: '夜浮卿的个人博客和爱好分享'
    },
    headerNavLinks: [
        {
            text: '首页',
            href: '/'
        },
        {
            text: '作品',
            href: '/projects'
        },
        {
            text: '博客',
            href: '/blog'
        },
        {
            text: '分享',
            href: '/share/music'
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
    footerNavLinks: [
        // {
        //     text: 'About',
        //     href: '/about'
        // },
        {
            text: '联系',
            href: '/contact'
        },
        // {
        //     text: 'Terms',
        //     href: '/terms'
        // },
        {
            text: 'Download theme',
            href: 'https://github.com/JustGoodUI/dante-astro-theme'
        }
    ],
    socialLinks: [
        {
            text: 'Github',
            href: 'https://github.com/yefu24324'
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
    hero: {
        title: 'print!("你好世界。")',
        text: "感谢访问我的网站，这个网站主要目的是展示我得意的作品。这些作品来自我的灵光一现和满足我练习的目的，每个作品都会有在线地址可以体验，我希望你会喜欢。如果同时给你了一些帮助，那恭喜你也恭喜我帮助到了你。",
        // image: {
        //     src: '/hero2.jpg',
        //     alt: 'A person sitting at a desk in front of a computer'
        // },
        actions: [
            {
                text: '联系方式',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
