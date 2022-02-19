import { supabase } from '@/utils/supabaseClient';

interface Pagination {
  from: number;
  to: number;
  page: number;
}
const getLove = async (wedding_id: number, pagination: Pagination) => {
  try {
    const { data, error, ...rest } = await supabase
      .from('wall_of_love')
      .select('*', { count: 'exact' })
      .eq('wedding_id', wedding_id)
      .range(pagination.from, pagination.to)
      .order('id', { ascending: false });
    return {
      data,
      error,
      page: pagination.page + 1,
      ...rest,
    };
  } catch (e) {
    throw e;
  }
};

export default getLove;
