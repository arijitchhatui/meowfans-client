import {
  BadgeCheck,
  BadgeDollarSign,
  Bell,
  ChartBarStacked,
  CircleUserRound,
  Flame,
  GalleryVerticalEnd,
  History,
  Home,
  Mars,
  MarsStroke,
  Spotlight,
  SquarePlay,
  ThumbsUp,
  Trophy,
  Type,
  Venus,
  Workflow
} from 'lucide-react';

export interface LoginInput {
  email: string;
  password: string;
}

export interface SignupInput {
  email: string;
  password: string;
  fullName: string;
}

export const handlePathName = (pathname: string) => {
  if (pathname.startsWith('/vaults')) return '/vaults';
  else if (pathname.startsWith('/profiles')) return '/profiles';
  else if (pathname.startsWith('/dashboard')) return '/dashboard';
  else if (pathname.startsWith('/creators')) return '/creators';
  else return pathname;
};

export const authCookieKey = '_accessToken';

export const THEME = '_theme';

export enum AppSizes {
  ICON_1024 = '1024',
  ICON_512 = '512',
  ICON_384 = '384',
  ICON_256 = '256',
  ICON_196 = '196',
  ICON_144 = '144',
  ICON_96 = '96',
  ICON_72 = '72',
  ICON_48 = '48',
  ICON_36 = '36'
}

export const appBottomNavButtonOptions = [
  { icon: Home, title: 'Dashboard', path: '/dashboard' },
  // { icon: CirclePlay, title: 'Shorts', path: '/shorts' },
  // { icon: ChartLine, title: 'Trending', path: '/trending' },
  { icon: GalleryVerticalEnd, title: 'Vaults', path: '/vaults' },
  // { icon: CircleDollarSign, title: 'Top Creators', path: '/top-creators' },
  { icon: CircleUserRound, title: 'Creators', path: '/creators' },
  { icon: Type, title: 'Categories', path: '/categories' }
];

export const navActions = [
  [
    { label: 'Liked', icon: ThumbsUp },
    { label: 'Watch history', icon: History },
    { label: 'Subscriptions', icon: BadgeDollarSign },
    { label: 'Creators', icon: BadgeCheck }
  ],
  [
    { label: 'Newest ', icon: Flame },
    { label: 'Best', icon: Spotlight },
    { label: 'Shorts', icon: SquarePlay },
    { label: 'Top creators', icon: Trophy }
  ],
  [
    { label: 'Category', icon: ChartBarStacked },
    { label: 'Workspaces', icon: Workflow },
    { label: 'Notifications', icon: Bell }
  ]
];

export const appSideBarButtonOptions = {
  teams: [
    { name: 'Straight', logo: Mars, plan: 'Enterprise' },
    { name: 'Lesbian.', logo: Venus, plan: 'Startup' },
    { name: 'Gay.', logo: MarsStroke, plan: 'Free' }
  ],
  navMain: [
    // { title: 'Subscriptions', url: '/subscriptions', icon: BadgeDollarSign },
    // { title: 'Liked', url: '/liked', icon: ThumbsUp },
    // { title: 'Watch History', url: '/history', icon: History, badge: '10' },
    { title: 'Dashboard', url: '/dashboard', icon: Home, isActive: true },
    { title: 'Creators', url: '/creators', icon: BadgeCheck },
    { title: 'Categories', url: '/categories', icon: Type },
    { title: 'Vaults', url: '/vaults', icon: GalleryVerticalEnd }
  ],
  navSecondary: [
    { title: 'Newest ', url: '/newest', icon: Flame },
    { title: 'Best', url: '/best', icon: Spotlight },
    { title: 'Shorts', url: '/shorts', icon: SquarePlay },
    { title: 'Top creators', url: '/top creators', icon: Trophy }
  ],
  category: [
    { name: 'African', url: '/categories/african', emoji: '📊' },
    { name: 'Amateur', url: '/categories/amateur', emoji: '🍳' },
    { name: 'American', url: '/categories/american', emoji: '💪' },
    { name: 'Arab', url: '/categories/arab', emoji: '📚' },
    { name: 'Anal', url: '/categories/anal', emoji: '🌱' },
    { name: 'Asian', url: '/categories/asian', emoji: '🗣️' },
    { name: 'Ass licking', url: '/categories/ass licking', emoji: '🏠' },
    { name: 'Babe', url: '/categories/babe', emoji: '💰' },
    { name: 'Bangladeshi', url: '/categories/bangladeshi', emoji: '🎬' },
    { name: 'BBC', url: '/categories/bbc', emoji: '✅' }
  ],
  types: [
    {
      name: 'Tech format',
      emoji: '🏠',
      pages: [
        { name: 'Webcam', url: '/categories/webcam', emoji: '💻' },
        { name: 'VR', url: 'categories/vr', emoji: '🎮' },
        { name: 'Virtual Reality', url: '/categories/virtual reality', emoji: '🕶️' },
        { name: 'VR Sex', url: '/categories/vr sex', emoji: '🕶️' },
        { name: 'POV', url: '/categories/pov', emoji: '🎥' },
        { name: 'Gonzo', url: '/categories/gonzo', emoji: '🎬' },
        { name: 'Hardcore', url: '/categories/hardcore', emoji: '💥' },
        { name: 'Vintage', url: '/categories/vintage', emoji: '📼' },
        { name: 'Outdoor', url: '/categories/outdoor', emoji: '🏞️' }
      ]
    },
    {
      name: 'Role play style fantasy',
      emoji: '💼',
      pages: [
        { name: 'Cosplay', url: '/categories/cosplay', emoji: '🦸‍♀️' },
        { name: 'Roleplay', url: '/categories/role play', emoji: '🎭' },
        { name: 'Romantic', url: '/categories/romantic', emoji: '❤️' },
        { name: 'Romantic BDSM', url: '/categories/bdsm', emoji: '❤️‍🔥' },
        { name: 'Fantasy', url: '/categories/fantasy', emoji: '🧚‍♀️' },
        { name: 'Erotic Stories', url: '/categories/erotic', emoji: '📖' },
        { name: 'Schoolgirl', url: '/categories/school girl', emoji: '🎒' },
        { name: 'Uniforms', url: '/categories/uniforms', emoji: '👔' },
        { name: 'Lingerie', url: '/categories/lingerie', emoji: '🩱' }
      ]
    },
    {
      name: 'Relationships',
      emoji: '🎨',
      pages: [
        { name: 'Lesbian', url: '/categories/lesbian', emoji: '👭' },
        { name: 'Threesome', url: '/categories/threesome', emoji: '3️⃣' },
        { name: 'Threesome M/F', url: '/categories/threesome mf', emoji: '👨‍👩‍👧' },
        { name: 'Gangbang F/F', url: '/categories/gangbang ff', emoji: '👭' },
        { name: 'Swingers', url: '/categories/swingers', emoji: '🔄' },
        { name: 'Step Family', url: '/categories/step family', emoji: '🏠' },
        { name: 'Interracial', url: '/categories/interracial', emoji: '🌎' }
      ]
    },
    {
      name: 'Appearance',
      emoji: '🏡',
      pages: [
        { name: 'Babe', url: '/categories/babe', emoji: '💰' },
        { name: 'BBW', url: '/categories/bbw', emoji: '🎀' },
        { name: 'Blonde', url: '/categories/blonde', emoji: '👱‍♀️' },
        { name: 'Brunette', url: '/categories/brunette', emoji: '👩‍🦰' },
        { name: 'Redhead', url: '/categories/redhead', emoji: '🦰' },
        { name: 'Hairy', url: '/categories/hairy', emoji: '🦰' },
        { name: 'Thick', url: '/categories/thick', emoji: '🍑' },
        { name: 'Big Tits', url: '/categories/big tits', emoji: '🍒' },
        { name: 'Shaved', url: '/categories/shaved', emoji: '✂️' }
      ]
    },
    {
      name: 'Experience',
      emoji: '🧳',
      pages: [
        { name: 'Amateur', url: '/categories/amateur', emoji: '🍳' },
        { name: 'Mature', url: '/categories/mature', emoji: '🧓' },
        { name: 'MILF', url: '/categories/milf', emoji: '👩‍🦳' },
        { name: 'Teen', url: '/categories/teen', emoji: '👧' },
        { name: 'Young', url: '/categories/young', emoji: '🧑' }
      ]
    },
    {
      name: 'Fetish',
      emoji: '🥳',
      pages: [
        { name: 'Anal', url: '/categories/anal', emoji: '🌱' },
        { name: 'Ass Licking', url: '/categories/ass licking', emoji: '🏠' },
        { name: 'BBC', url: '/categories/bbc', emoji: '✅' },
        { name: 'BDSM', url: '/categories/bdsm', emoji: '🔗' },
        { name: 'Big Cock', url: '/categories/big cock', emoji: '🍆' },
        { name: 'Blowjob', url: '/categories/blowjob', emoji: '💋' },
        { name: 'Bondage', url: '/categories/bondage', emoji: '🪢' },
        { name: 'Creampie', url: '/categories/creampie', emoji: '🥛' },
        { name: 'Cum', url: '/categories/cum', emoji: '💦' },
        { name: 'Double Penetration', url: '/categories/double penetration', emoji: '🔄' },
        { name: 'Facial', url: '/categories/facial', emoji: '😮' },
        { name: 'Feet', url: '/categories/feet', emoji: '🦶' },
        { name: 'Femdom', url: '/categories/Femdom', emoji: '👑' },
        { name: 'Fisting', url: '/categories/fisting', emoji: '✋' },
        { name: 'Gangbang', url: '/categories/gangbang', emoji: '👥' },
        { name: 'Handjob', url: '/categories/handjob', emoji: '🤲' },
        { name: 'Masturbation', url: '/categories/masturbation', emoji: '🤏' },
        { name: 'Oral', url: '/categories/oral', emoji: '👄' },
        { name: 'Spanking', url: '/categories/spanking', emoji: '🖐️' },
        { name: 'Squirt', url: '/categories/squirt', emoji: '💦' },
        { name: 'Swallow', url: '/categories/swallow', emoji: '👅' },
        { name: 'Anal Toys', url: '/categories/anal toys', emoji: '🍑' },
        { name: 'Fetish', url: '/categories/fetish', emoji: '🖤' },
        { name: 'BDSM Fetish', url: '/categories/bdsm fetish', emoji: '🖤' },
        { name: 'Feet Fetish', url: '/categories/feet fetish', emoji: '🦶' }
      ]
    }
  ]
};
