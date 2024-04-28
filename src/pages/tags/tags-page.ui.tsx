import { Container } from '@/shared/uis/container';
import { TagsTags } from '@/widgets/tags-tags';
import { DefaultLayout } from '@/widgets/default-layout';

import { tagsTitle } from './tags-page.module.css';

function TagsPage() {
  return (
    <DefaultLayout>
      <Container>
        <h2 className={tagsTitle}>태그</h2>
        <TagsTags />
      </Container>
    </DefaultLayout>
  );
}

export default TagsPage;
