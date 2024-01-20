import { GetServerSidePropsContext } from 'next';
import { getServerSideSitemap } from 'next-sitemap';

// Define your specific pages
const pages = [
    { route: '/company', changefreq: 'daily', priority: '0.8' },
    { route: '/contact', changefreq: 'daily', priority: '0.8' },
    { route: '/', changefreq: 'daily', priority: '0.8' },
    { route: '/program', changefreq: 'daily', priority: '0.8' },
];

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const lastmod = new Date().toISOString();

    // Generate sitemap fields based on defined pages
    const fields = pages.map((page) => ({
        loc: `${process.env.URL}${page.route}`,
        changefreq: page.changefreq,
        priority: page.priority,
        lastmod,
    }));

    // Generate sitemap using getServerSideSitemap
    return getServerSideSitemap(ctx, fields as any); // Cast 'fields' to 'any'
};

export default () => {
    return;
};
