import { supabase } from '@/utils/supabaseClient';

const getWeddingBySlug = async (slug: string) => {
  try {
    return await supabase
      .from('weddings')
      .select('*, rundowns(*)')
      .eq('slug', slug);
  } catch (e) {
    throw e;
  }
};

export default getWeddingBySlug;
