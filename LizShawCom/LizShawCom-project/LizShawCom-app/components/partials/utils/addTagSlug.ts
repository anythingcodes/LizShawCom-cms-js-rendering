import { CardProps } from '../Card';
import { TagWithSlug } from '../Tag';

export const formatTagSlug = (tagName: string | undefined) =>
  !!tagName ? `/tag/${tagName}` : '';

export default (
  allTags: Array<TagWithSlug>,
  postTags: CardProps['blog_tags'] = [],
): Array<TagWithSlug> =>
  postTags.map((postTag) => {
    let slug = '';
    const matchingTag = allTags.find(({ name }) => name === postTag.name);
    if (matchingTag && matchingTag.slug) {
      slug = formatTagSlug(matchingTag.slug);
    }
    return { ...postTag, slug };
  });
