import { supabase } from '@/utils/supabaseClient';

interface Payload {
  message: string;
  sender: string;
  sender_description: string;
  wedding_id: number;
}
const postLove = async (payload: Payload) => {
  try {
    const { data, error } = await supabase
      .from('wall_of_love')
      .insert([payload]);
    return {
      data,
      error,
    };
  } catch (e) {
    throw e;
  }
};

export default postLove;
