import { BiocodePage } from '@/features/Project';
import { getSitemap } from '@/lib/utility';
import { getImages } from '@/lib/getImages';

export default function Page({ ...props }) {
  return <BiocodePage {...props} />;
}

export const getStaticProps = async () => {
  const { images, ...sitemap } = getSitemap('biocode');
  return {
    props: {
      images: await getImages(images),
      ...sitemap,
    },
  };
};
