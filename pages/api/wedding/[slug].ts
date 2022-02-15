import nextConnect from 'next-connect';
import { supabase } from '@/utils/supabaseClient';

const weddingApi = nextConnect()
  .get(async (req, res) => {
    try {
      const {
        query: { slug },
      } = req;

      const response = await supabase
        .from('weddings')
        .select('*')
        .eq('slug', slug);

      res.status(200).json(response);
    } catch (e) {
      res.status(500).json({
        error: true,
        message: e,
      });
    }
  })
  .patch(async () => {
    throw new Error('Throws me around! Error can be caught and handled.');
  });

export default weddingApi;
