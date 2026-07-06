import type { NavLink, Feature, Step, Stat } from '@/types';

// ─── Navigation ─────────────────────────────────────────────────

export const NAV_LINKS: NavLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Stats', href: '#stats' },
  {
    label: 'Docs',
    href: 'https://github.com/StabilityNexus/Windmill-EVM-Contracts',
    external: true,
  },
];

// ─── Features ───────────────────────────────────────────────────

export const FEATURES: Feature[] = [
  {
    title: 'Dynamic Price Curves',
    description:
      'Order prices adjust over time using configurable slopes. Buy orders decrease while sell orders increase, creating natural market convergence.',
    icon: 'curve',
  },
  {
    title: 'Keeper Network',
    description:
      'Autonomous keepers scan and match compatible orders using an efficient O(N log N) two-pointer sweep algorithm for optimal execution.',
    icon: 'network',
  },
  {
    title: 'Multi-Chain Support',
    description:
      'Deploy across Ethereum, Ethereum Classic, Polygon, BSC, and Base with pre-configured RPC endpoints and contract verification.',
    icon: 'chain',
  },
  {
    title: 'Transparent Fees',
    description:
      'A flat 0.1% keeper fee per matched order. No hidden costs, no front-running — everything is settled atomically on-chain.',
    icon: 'fee',
  },
];

// ─── How It Works ───────────────────────────────────────────────

export const STEPS: Step[] = [
  {
    number: 1,
    title: 'Create an Order',
    description:
      'Define your token pair, amount, starting price, and price slope to control how your order adjusts over time.',
  },
  {
    number: 2,
    title: 'Price Discovery',
    description:
      'Your order price dynamically moves along its configured curve, naturally converging with counterparty orders.',
  },
  {
    number: 3,
    title: 'Keeper Matching',
    description:
      'Autonomous keepers continuously scan for compatible buy and sell orders where buy price meets or exceeds sell price.',
  },
  {
    number: 4,
    title: 'On-Chain Settlement',
    description:
      'Matched orders are settled atomically on-chain. Tokens are exchanged at the settlement price with transparent keeper fees.',
  },
];

// ─── Stats ──────────────────────────────────────────────────────

export const STATS: Stat[] = [
  { label: 'Supported Chains', value: '6+' },
  { label: 'Matching Algorithm', value: 'O(N log N)' },
  { label: 'Keeper Fee', value: '0.1%' },
  { label: 'On-Chain Settlement', value: '100%' },
];
