import { avatar } from "@/src/assets";
import { debounce } from 'lodash';
import { useCallback, useEffect, useState } from "react";

const PAGE_SIZE = 10;

export const useDoctors = () => {
  const [doctors, setDoctors] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState<any[]>([]);

  const fetchDoctors = useCallback(async (pageNum = 1, searchTerm = '') => {
    if (loading || !hasMore) {
      return;
    }

    setLoading(true);

    const allDoctors = Array.from({ length: 100 }, (_, i) => ({
      id: i + 1,
      avatar,
      name: `Dr. Nome ${i + 1}`,
      specialization: 'Especialidade',
      rating: { total: 50 + i, average: 4.5 },
      expirencieYears: `${5 + (i % 10)} anos`,
      averageSatisfaction: 90 + (i % 10),
    }));

    const filteredDoctors = allDoctors.filter((doc) =>
      doc.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const pageData = filteredDoctors.slice((pageNum - 1) * PAGE_SIZE, pageNum * PAGE_SIZE);

    if (pageNum === 1) {
      setDoctors(pageData);
    } else {
      setDoctors((prev) => [...prev, ...pageData]);
    }

    setFiltered(filteredDoctors);

    if (pageData.length < PAGE_SIZE || pageNum * PAGE_SIZE >= filteredDoctors.length) {
      setHasMore(false);
    } else {
      setHasMore(true);
    }

    setLoading(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchDoctors(1, search);
    setPage(2);
  }, [fetchDoctors, search]);

  const loadMore = () => {
    if (!loading && hasMore) {
      fetchDoctors(page, search);
      setPage((prev) => prev + 1);
    }
  };

  const handleSearchChange = debounce((text: string) => {
    setPage(1);
    setSearch(text);
  }, 300);

  return {
    doctors,
    loading,
    handleSearchChange,
    loadMore,
    filtered,
  }
}