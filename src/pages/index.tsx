import Header from '@/components/layouts/Header';
import PrefList from '@/features/prefList/PrefList';
import PopulationChart from '@/features/showGraph/PopulationChart';

export default function Home() {
  return (
    <>
      <Header />
      <PrefList />
      <PopulationChart />
    </>
  );
}
