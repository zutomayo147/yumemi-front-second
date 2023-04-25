import { ClipLoader } from 'react-spinners';
import { useRecoilValue } from 'recoil';

import prefListLogic from './prefListLogic';
import usePrefectures from './usePrefectures';

import Checkbox from '@/components/Checkbox';
import { checkedPrefAtom } from '@/stores/atoms';

const PrefList = () => {
  const checkedPrefs = useRecoilValue(checkedPrefAtom);
  const { handleCheckboxChange } = prefListLogic();
  const { prefectures, isLoading, isError } = usePrefectures();

  if (isError) return <div>fetch prefectures Error</div>;
  if (isLoading) {
    return (
      <div className='pref-list__loading'>
        <ClipLoader color='#000' loading={isLoading} size={50} />
      </div>
    );
  }

  return (
    <>
      <ul className='pref-list'>
        {prefectures.map(prefecture => (
          <li key={prefecture.prefCode}>
            <Checkbox prefecture={prefecture} onChange={handleCheckboxChange} />
          </li>
        ))}
      </ul>
      {checkedPrefs.length === 0 && (
        <div className='pref-list__annotation__container'>
          <p className='pref-list__annotation'>
            一つ以上の都道府県を選択してください
          </p>
        </div>
      )}
    </>
  );
};

export default PrefList;
