import { supabase } from '@/utils/supabaseClient';

const getLove = async (wedding_id: number) => {
  try {
    const { data, error } = await supabase
      .from('wall_of_love')
      .select('*')
      .eq('wedding_id', wedding_id);
    return {
      data,
      error,
    };
  } catch (e) {
    throw e;
  }
};

export default getLove;
