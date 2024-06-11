import { Badge } from '@/components/Badge';
import {
  CATEGORY_COLOR,
  CATEGORY_NAME_SHORT,
  MilestonesLine,
  MilestonesTable,
} from './';
import { Head } from '@/components/Head';
import { Heading } from '@/components/Heading';
import { MilestonesTableHighlight } from './TableHighlight';
import { objectEntries } from '@/lib/utils';
import { type PageProps } from '@/types';
import { Template, TemplateMain, TemplateSection } from '@/components/Template';
import { Text } from '@/components/Text';
import { useSetThemeColor } from '@/components/App';

export const MilestonesPage = ({ id, themeColor, title }: PageProps) => {
  useSetThemeColor(themeColor);

  return (
    <Template id={id}>
      <Head title={title} />
      <TemplateMain>
        <TemplateSection>
          <div className="grid-col grid-col:6@l">
            <Heading size="h1">Milestones</Heading>
            <Text size="l">
              <p>
                A compilation of milestones from my professional activities,
                including project launches, feature releases, achievements,
                album releases, recognitions, and career progress.
              </p>
            </Text>
          </div>
        </TemplateSection>
        <TemplateSection
          aria-hidden
          className="pt:2xl@m"
          grid={false}
          paddingTop="l"
          wrap={false}
        >
          <MilestonesLine />
        </TemplateSection>
        <TemplateSection
          aria-hidden
          className="pr:0 pl:0"
          grid={false}
          paddingTop="base"
        >
          <div className="Template-badges scrollbar">
            {objectEntries(CATEGORY_NAME_SHORT).map(([category, name]) => {
              return (
                <Badge beacon={CATEGORY_COLOR[category]} key={category}>
                  {name}
                </Badge>
              );
            })}
          </div>
        </TemplateSection>
        <TemplateSection grid={false}>
          <Text className="ml:s ml@l mb" size="l" tag="h2">
            Highlighted milestones
          </Text>
          <MilestonesTableHighlight />
        </TemplateSection>
        <TemplateSection grid={false} paddingBottom="10vw">
          <Text className="ml:s ml@l mb" size="l" tag="h2">
            All milestones
          </Text>
          <MilestonesTable />
        </TemplateSection>
      </TemplateMain>
    </Template>
  );
};
