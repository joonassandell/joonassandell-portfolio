import { ConditionalWrapper } from '@/components/ConditionalWrapper';
import { Heading } from '@/components/Heading';
import { Hr } from '@/components/Hr';
import { type InfoProps } from './';
import { Link } from '@/components/Link';
import { m } from 'framer-motion';
import { MQ, TEXT_VARIANTS } from '@/lib/config';
import { Text } from '@/components/Text';
import { useInView } from '@/lib/useInView';
import { useMedia } from 'react-use';
import { useRef } from 'react';

export const Info = ({
  client,
  heading,
  role = [],
  smallPrint,
  tech,
  text,
  type = [],
  year,
}: InfoProps) => {
  const { href, name } = client || {};
  const mqL = useMedia(MQ.l, false);
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef);
  const textRef = useRef(null);
  const textInView = useInView(textRef);

  return (
    <section className="Info wrap grid -gap:row:l">
      <div className="grid-col" data-s data-s-position="top" data-s-speed={0.5}>
        <Hr className="mb:0@until:l" />
      </div>
      <m.div
        animate={gridInView && 'animate'}
        className="grid-col grid-col:5@l"
        initial="initial"
        ref={gridRef}
        variants={{
          animate: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <div className="grid">
          <m.div
            className="grid -gap:column:0 -gap:row:l grid-col grid-col:6 grid-col:9@m grid-col:5@l"
            variants={TEXT_VARIANTS}
          >
            <div className="grid-col grid-col:4@m grid-col:12@l">
              <Text className="mb:2xs" color="mute" size="s" tag="p">
                Client
              </Text>
              <Text className="mb:0" size="s" tag="p">
                <ConditionalWrapper
                  condition={Boolean(href)}
                  wrapper={children => (
                    <Link href={href as URL['href']}>{children}</Link>
                  )}
                >
                  {name}
                </ConditionalWrapper>
              </Text>
            </div>
            <div className="grid-col grid-col:4@m grid-col:12@l">
              <Text className="mb:2xs" color="mute" size="s" tag="p">
                Year
              </Text>
              <Text className="mb:0" size="s" tag="p">
                {year}
              </Text>
            </div>
            <div className="grid-col grid-col:4@m grid-col:12@l grid -gap-column:0">
              <div className="grid-col">
                <Text className="mb:2xs" color="mute" size="s" tag="p">
                  Project type
                </Text>
                <Text size="s" tag="ul">
                  {type.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </Text>
              </div>
              {tech && (
                <div className="grid-col visible@m hidden@l">
                  <Text className="mb:2xs" color="mute" size="s" tag="p">
                    Tech
                  </Text>
                  <Text className="grid-col" size="s" tag="ul">
                    {tech.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </Text>
                </div>
              )}
            </div>
          </m.div>
          <m.div
            className="grid -gap:column:0 grid-col grid-col:6 grid-col:4@s grid-col:3@m grid-col:5@l"
            variants={TEXT_VARIANTS}
          >
            <div className="grid-col">
              <Text className="mb:2xs" color="mute" size="s">
                Role
              </Text>
              <Text className="grid-col" size="s" tag="ul">
                {role.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </Text>
            </div>
            {tech && (
              <div className="grid-col hidden@m:max@l">
                <Text className="mb:2xs" color="mute" size="s" tag="p">
                  Tech
                </Text>
                <Text className="grid-col" size="s" tag="ul">
                  {tech.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </Text>
              </div>
            )}
            <Text
              className="grid-col -align:end"
              color="mute"
              size="xs"
              tag="small"
            >
              {smallPrint}
            </Text>
          </m.div>
        </div>
      </m.div>
      <m.div
        animate={textInView && 'animate'}
        className="grid-col grid-col:9@m grid-col:7@l grid-col:6@xl"
        custom={{ delay: mqL ? 0.4 : 0 }}
        initial="initial"
        ref={textRef}
        variants={TEXT_VARIANTS}
      >
        <Heading className="mb:l" size="h4" tag="h2">
          {heading}
        </Heading>
        <div className="grid">
          <Text
            animate
            className="Info-text grid-col grid-col:8@s grid-col:7@m"
          >
            {text}
          </Text>
        </div>
      </m.div>
    </section>
  );
};
