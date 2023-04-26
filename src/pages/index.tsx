import dynamic from 'next/dynamic';

import Header from '@/components/layouts/Header';
import PrefList from '@/features/prefList/PrefList';
const PopulationChart = dynamic(
  () => import('@/features/showGraph/PopulationChart'),
  {
    ssr: false,
  },
);

export default function Home() {
  return (
    <>
      <Header />
      <PrefList />
      <PopulationChart />
    </>
  );
}
