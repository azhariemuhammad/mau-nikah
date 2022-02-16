import Head from 'next/head';
import { Meta } from '@/components/Containers/interface';
interface MetaProps {
  meta: Meta;
  slug: string;
}
const MetaHeadComponent = (props: MetaProps) => {
  const { title, imageUrl, description } = props.meta || {};

  return (
    <Head>
      <title>{title || ''}</title>
      <meta property="og:image" content={imageUrl || ''} />
      <meta property="og:title" content={title || ''} />
      <meta property="og:description" content={description || ''} />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`https://nikahhariini.vercel.app/${props.slug || ''}`}
      ></meta>
    </Head>
  );
};

export default MetaHeadComponent;
