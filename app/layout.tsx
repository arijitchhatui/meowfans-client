import { AgeConfirmation } from '@/app/(legal)/components/AgeConfirmation';
import { CookieBanner } from '@/app/(legal)/components/CookieBanner';
import { AppBottomNav } from '@/components/AppBottomNav';
import { AppSidebar } from '@/components/AppSideBar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AppConfig } from '@/lib/app.config';
import { cn } from '@/lib/utils';
import { ApolloWrapper } from '@/packages/gql/ApolloWrapper';
import { Theme } from '@radix-ui/themes';
import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';
import { headers } from 'next/headers';
import { Toaster } from 'react-hot-toast';
import './globals.css';

export async function generateMetadata() {
  const headerList = headers();
  const pathname = (await headerList).get('x-pathname');

  const metadata = {
    metadataBase: new URL(AppConfig.siteUrl),
    title: {
      template: AppConfig.template,
      default: `${AppConfig.title} | ${pathname?.substring(1)}`
    },
    alternates: {
      canonical: AppConfig.canonical
    },
    manifest: AppConfig.manifest,
    applicationName: AppConfig.applicationName,
    description: AppConfig.description,
    openGraph: {
      siteName: AppConfig.site_name,
      title: `${AppConfig.title} | 18+`,
      description: AppConfig.subDescription,
      type: 'website',
      locale: AppConfig.locale,
      url: AppConfig.siteUrl
    },
    generator: 'Next.js',
    keywords: AppConfig.keywords,
    icons: AppConfig.icons
  } satisfies Metadata;

  return metadata;
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--primary-font',
  style: 'normal'
});

export const viewport: Viewport = {
  themeColor: '#000000'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="rating" content="adult" />
        <meta name="robots" content="index, follow" />
        <meta name="classification" content="Adult" />
        <meta name="rating" content="RTA-5042-1996-1400-1577-RTA" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/icons/app_icon_20x20.svg" />
        {AppConfig.icons.map(({ rel, url }, idx) => (
          <link key={idx} rel={rel} href={url} />
        ))}
      </head>
      <body className={cn(inter.variable, 'overscroll-none')}>
        <ApolloWrapper>
          <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={8}
            toastOptions={{
              className: 'single-toaster',
              duration: 5000,
              style: {
                background: '#1a1a1a',
                color: '#fff',
                padding: '5px 10px',
                fontSize: '14px'
              }
            }}
          />
          <Theme>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              value={{ light: 'light', dark: 'dark' }}
            >
              <AgeConfirmation />
              <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                  <main className="w-full">
                    {children}
                    {/* <Footer /> */}
                  </main>
                </SidebarInset>
              </SidebarProvider>
              <AppBottomNav />
              <CookieBanner />
            </ThemeProvider>
          </Theme>
        </ApolloWrapper>
      </body>
    </html>
  );
}
