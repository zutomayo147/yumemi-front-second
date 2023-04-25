import { useEffect } from 'react';

import { useRecoilState } from 'recoil';
import useSWR from 'swr';

import apiFetch from '@/common/apiFetch';
import { Prefecture } from '@/common/types';
import { prefectureSchema } from '@/common/zodValidation';
import { prefectureAtom } from '@/stores/atoms';

const usePrefectures = () => {
  const [prefectures, setPrefectures] = useRecoilState(prefectureAtom);

  const prefecturesFetcher = async (url: string): Promise<Prefecture[]> => {
    const result = await apiFetch<Prefecture[]>(url);
    const validatedResult = result.map((prefecture: Prefecture) =>
      prefectureSchema.parse(prefecture),
    );
    return validatedResult;
  };

  const { data, error } = useSWR<Prefecture[]>(
    '/api/PrefectureCode',
    prefecturesFetcher,
    {
      revalidateOnFocus: false,
      dedupingInterval: 60 * 60 * 1000,
      revalidateOnMount: true,
    },
  );

  useEffect(() => {
    if (data) {
      setPrefectures(data);
    }
  }, [data, setPrefectures]);

  const isLoading = !data && !error;
  const isError = error !== undefined;

  return {
    prefectures,
    isLoading,
    isError,
  };
};

export default usePrefectures;
