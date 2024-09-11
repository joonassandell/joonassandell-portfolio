import { Figure } from '@/components/Figure';
import { getImage } from '@/lib/utils';
import { Heading } from '@/components/Heading';
import { m } from 'framer-motion';
import { MQ } from '@/lib/config';
import { type PageProps } from '@/types';
import { Subtitle } from '@/components/Subtitle';
import { TemplateArea } from '@/components/Template';
import { Text } from '@/components/Text';
import { useParallax } from '@/lib/useParallax';

export const BiocodeSoftware = ({ images }: PageProps) => {
  const { ref, value: y } = useParallax({ speed: 'slow' });

  return (
    <section className="Template-software">
      <TemplateArea
        className="Template-software-hero"
        grid={false}
        pt="2xl-5xl"
        wrap={false}
      >
        <Figure
          alt="Isometric Biocode software for producers"
          animate={false}
          borderRadius={false}
          placeholder={false}
          {...getImage(
            'joonassandell-biocode-software-for-producers-hero',
            images,
          )}
        />
      </TemplateArea>
      <TemplateArea grid={false} id="software" pt="2xl-5xl">
        <Subtitle animate center>
          The Software
        </Subtitle>
        <Heading animate center size="h1" tag="h2">
          Simplifying the carbon footprint calculating
        </Heading>
        <Text animate center className="mb:0" color="mute" size="l" tag="p">
          Biocode’s software is designed to make calculations straightforward
          and accessible for food businesses and producers. While the process
          may seem complex, our platform simplifies each step, allowing users to
          easily track and reduce their environmental impact with confidence and
          clarity.
        </Text>
      </TemplateArea>
      <TemplateArea gridGap="m" gridRowGap="m" pt="2xl-5xl">
        <Figure
          alt="Biocode software collection"
          background="var(--biocode-light-bg-300)"
          border
          borderRadius="var(--border-radius-l)"
          className="grid-col"
          fill="large"
          scroll="mask"
          scrollImageSpeed="medium"
          scrollImageStartPosition="negative"
          scrollImageStartPositionMultiplier={2}
          scrollSpeed="slow"
          scrollStartPosition={0}
          {...getImage('joonassandell-biocode-software-collection', images)}
        />
        <m.div className="grid-col grid" ref={ref} style={{ y }}>
          <div className="grid-col grid-col:6@s grid-col:3@l">
            <Text animate className="mb:0" tag="p">
              <Subtitle tag="span">Real-time results</Subtitle>{' '}
              <Text className="mb:0" color="mute" tag="span">
                Fast and comprehensive emission breakdown in seconds
              </Text>
            </Text>
          </div>
          <div className="grid-col grid-col:6@s grid-col:3@l">
            <Text animate className="mb:0" tag="p">
              <Subtitle tag="span">GHG Protocol</Subtitle>{' '}
              <Text className="mb:0" color="mute" tag="span">
                Scope 1–3 emissions including location/market-based emissions
              </Text>
            </Text>
          </div>
          <div className="grid-col grid-col:6@s grid-col:3@l">
            <Text animate className="mb:0" tag="p">
              <Subtitle tag="span">Emission factor database</Subtitle>{' '}
              <Text className="mb:0" color="mute" tag="span">
                Large ready-to-use emission database at your fingertips
              </Text>
            </Text>
          </div>
          <div className="grid-col grid-col:6@s grid-col:3@l">
            <Text animate className="mb:0" tag="p">
              <Subtitle tag="span">Essentials</Subtitle>{' '}
              <Text className="mb:0" color="mute" tag="span">
                Sharing emissions data, suggestions, helpful tips, scenarios,
                customization…
              </Text>
            </Text>
          </div>
        </m.div>
      </TemplateArea>
      <TemplateArea gridRowGap="m" pt="l-2xl">
        <div className="grid-col grid-col:4@l">
          <Heading animate maxWidth size="h5" tag="h3">
            Continuous UX research to match user needs
          </Heading>
          <Text animate className="mb:0" color="mute" tag="p">
            Our UX processes begin with planning user interviews, in
            collaboration with the marketing team, to better understand user
            needs and improve both the UX and UI of the software. As one part of
            this effort, we are currently designing new UI and unifying the
            interfaces of the producer and product sections, with a focus on
            consistency across the platform.
          </Text>
        </div>
        <div className="grid-col grid-col:10@m grid-col:8@l">
          <Figure
            alt="Biocode for food brands overview"
            border
            sizes={`${MQ.l} 60vw, ${MQ.m} 70vw, 100vw`}
            {...getImage('joonassandell-biocode-software-overview', images)}
          />
        </div>
        <div className="grid-col grid-col:10@m -start:3@m grid-col:8@l -start:1@l">
          <Figure
            alt="Biocode for producers overview"
            border
            sizes={`${MQ.l} 60vw, ${MQ.m} 70vw, 100vw`}
            {...getImage(
              'joonassandell-biocode-software-for-producers-overview',
              images,
            )}
          />
        </div>
        <div className="grid-col grid-col:10@m -start:3@m grid-col:4@l -start:9@l">
          <Text animate color="mute" tag="p">
            The UI unification process involves converting design elements like
            spacing, colors, and components to match our cohesive design system.
            Our UI is constantly evolving, and we continuously refine our
            approach, selecting the best components and solutions for each use
            case to optimize clarity and accessibility, for example:
          </Text>
          <Text animate className="mb:0" color="mute">
            <ul>
              <li>
                Notice the subtle differences in spacings; currently spacings
                are too big (latter image) and we need to reduce them to give
                more space to essential elements such as inputs
              </li>
              <li>
                Better positioning and visibility for the main action button
                (first image)
              </li>
              <li>
                Clear wording: <q>New calculation</q> is more understandable
                than <q>New assessment</q>
              </li>
            </ul>
          </Text>
        </div>
      </TemplateArea>
      <TemplateArea gridRowGap="m" pt="2xl-5xl">
        <div className="grid-col grid-col:8@m grid-col:7@l grid">
          <Figure
            alt="Calculation example card"
            border="#001A61"
            className="grid-col grid-col:6"
            sizes={`${MQ.l} 25vw, ${MQ.m} 33vw, 50vw`}
            {...getImage('joonassandell-biocode-software-card-example', images)}
          />
          <Figure
            alt="Product results sidebar"
            className="grid-col grid-col:6"
            sizes={`${MQ.l} 25vw, ${MQ.m} 33vw, 50vw`}
            {...getImage(
              'joonassandell-biocode-software-product-sidebar',
              images,
            )}
          />
        </div>
        <div className="grid-col grid-col:5@l grid -gap:row:l">
          <div className="grid-col">
            <Heading animate maxWidth size="h5" tag="h3">
              Designing emissions calculation for clarity and instant insights
            </Heading>
            <Text animate className="mb:0" color="mute" tag="p">
              Our goal is to provide a comfortable user experience with clear
              navigation and data structure, while the platform manages
              complexity in the background. With real-time updates to emission
              values and detailed breakdowns for each LCA stage, users can feel
              encouraged by the progress they’ve made, even after entering just
              a single input. Main action buttons, and other elements are placed
              for easy discovery, while onboarding includes example calculations
              to help users getting started with the software.
            </Text>
          </div>
          <Figure
            alt="Product year and scenario navigation"
            border
            className="grid-col grid-col:8@m grid-col:12@l -align:end"
            sizes={`${MQ.l} 33vw, ${MQ.m} 70vw, 100vw`}
            {...getImage(
              'joonassandell-biocode-software-product-navigation',
              images,
            )}
          />
        </div>
        <div className="grid-col grid-col:8@m -start:3@m grid-col:5@l -start:1@l grid -gap:row:l">
          <Text animate className="mb:0 grid-col" color="mute" tag="p">
            We ensured that users can easily move between views, always knowing
            where they are in the process. We investigated that organizing the
            data from stage to yearly-based views was clearly the best method to
            understand the calculation structure. This structure also creates a
            low-level stage- and result-based comparison possibility for
            calculations of different years.
          </Text>
          <Figure
            alt="Product LCA stage navigation"
            border
            className="grid-col -align:end"
            sizes={`${MQ.l} 33vw, ${MQ.m} 70vw, 100vw`}
            {...getImage(
              'joonassandell-biocode-software-product-sidebar-navigation',
              images,
            )}
          />
        </div>
        <div className="grid-col grid-col:7@l -align:end">
          <Figure
            alt="Product raw materials LCA stage page"
            border
            sizes={`${MQ.l} 60vw, 100vw`}
            {...getImage(
              'joonassandell-biocode-software-product-raw-materials',
              images,
            )}
          />
        </div>
        <div className="grid-col grid-col:10@m">
          <Figure
            alt="Product production LCA stage page"
            border
            sizes={`${MQ.m} 70vw, 100vw`}
            {...getImage(
              'joonassandell-biocode-software-product-production',
              images,
            )}
          />
        </div>
        <div className="grid-col grid-col:10@m -end">
          <Figure
            alt="Scope 2 LCA stage page"
            border
            sizes={`${MQ.m} 70vw, 100vw`}
            {...getImage(
              'joonassandell-biocode-software-company-scope-2',
              images,
            )}
          />
        </div>
      </TemplateArea>
      <TemplateArea gridRowGap="m" pb="2xl-5xl" pt="2xl-5xl">
        <div className="grid-col grid-col:4@l">
          <Heading animate size="h5" tag="h3">
            Results
          </Heading>
          <Text animate className="mb:0" color="mute" tag="p">
            Write about the results.
          </Text>
        </div>
        <div className="grid-col grid-col:10@m grid-col:8@l">
          <Figure
            alt="Analytics of product results page"
            border
            sizes={`${MQ.l} 60vw, ${MQ.m} 70vw, 100vw`}
            {...getImage(
              'joonassandell-biocode-software-product-results-analytics',
              images,
            )}
          />
        </div>
        <div className="grid-col grid-col:10@m -en">
          <Figure
            alt="Product results page with breakdown of lca stages"
            border
            sizes={`${MQ.m} 70vw, 100vw`}
            {...getImage(
              'joonassandell-biocode-software-product-results',
              images,
            )}
          />
        </div>
      </TemplateArea>
    </section>
  );
};
