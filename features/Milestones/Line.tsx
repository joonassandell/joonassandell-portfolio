import { type CartesianMarkerProps } from '@nivo/core';
import {
  CATEGORY_COLOR,
  MILESTONES_PER_YEAR,
  MILESTONES_SORTED,
  type PointSymbolProps,
} from './';
import { type LineSvgProps } from '@nivo/line';
import { useMemo } from 'react';
import dynamic from 'next/dynamic';

const ResponsiveLine = dynamic(
  () => import('@nivo/line').then(m => m.ResponsiveLine),
  { ssr: false },
);

export const MilestonesLine = () => {
  const lineData = useMemo(() => {
    const convertData = MILESTONES_SORTED.map(m => {
      const date = new Date(m.date);

      return {
        ...m,
        x: date,
        y: MILESTONES_PER_YEAR[date.getFullYear()],
      };
    });

    return [
      {
        data: [
          ...convertData,
          {
            hidden: true,
            x: new Date('2005-05-01'),
            y: 1,
          },
        ],
        id: 'milestones',
      },
    ];
  }, []);

  // This causes few hydration errors
  const markers = useMemo(() => {
    return MILESTONES_SORTED.filter(m => m.category === 'career').map(m => {
      const obj: CartesianMarkerProps = {
        axis: 'x',
        legendOrientation: 'horizontal',
        lineStyle: {
          stroke: 'var(--border-900)',
          strokeWidth: 1,
        },
        value: new Date(m.date),
      };
      return obj;
    });
  }, []);

  /**
   * Default or unwanted props which cause hydration errors if not defined
   * @link https://nivo.rocks/line
   */
  const preventHydrationErrors: Omit<LineSvgProps, 'data'> = {
    areaBaselineValue: 0,
    areaBlendMode: 'normal',
    areaOpacity: 0.2,
    crosshairType: 'bottom-left',
    debugMesh: false,
    debugSlices: false,
    defs: [],
    enableArea: false,
    enableCrosshair: false,
    enableGridX: true,
    enableGridY: true,
    enablePointLabel: false,
    enablePoints: true,
    enableSlices: false,
    enableTouchCrosshair: false,
    fill: [],
    isInteractive: true,
    layers: [
      'grid',
      'markers',
      'axes',
      'areas',
      'crosshair',
      'lines',
      'points',
      'slices',
      'mesh',
      'legends',
    ],
    legends: [],
    pointLabel: 'yFormatted',
    role: 'img',
    sliceTooltip: () => <></>,
    tooltip: () => <></>,
    useMesh: false,
  };

  return (
    <div className="Template-line scrollbar">
      <div className="Template-line-inner">
        <ResponsiveLine
          animate
          axisBottom={{
            format: value => value.getFullYear(),
            tickPadding: 12,
            tickSize: 0,
            tickValues: 'every 1 year',
          }}
          axisLeft={{
            legend: 'Milestones per year',
            legendOffset: 8,
            legendPosition: 'middle',
            tickPadding: 12,
            tickSize: 0,
          }}
          axisRight={null}
          axisTop={null}
          colors={['var(--border-900)']}
          curve="monotoneX"
          data={lineData}
          // gridYValues={[0, 18, 19]}
          lineWidth={2}
          markers={markers}
          pointBorderColor={{ from: 'color' }}
          pointBorderWidth={2}
          pointColor={{ from: 'color' }}
          pointSize={0.5}
          pointSymbol={props => (
            <PointSymbol {...(props as PointSymbolProps)} />
          )}
          theme={{
            background: 'transparent',
            grid: {
              line: {
                stroke: 'var(--border-100)',
              },
            },
            text: {
              fill: 'var(--text-mute)',
              fontFamily: 'inherit',
              fontSize: '0.8125rem',
            },
          }}
          xFormat="time:%Y-%m-%d"
          xScale={{
            format: '%Y-%m-%d',
            precision: 'day',
            type: 'time',
            useUTC: false,
          }}
          yScale={{ type: 'linear' }}
          {...preventHydrationErrors}
        />
      </div>
    </div>
  );
};

const PointSymbol = ({
  borderColor,
  borderWidth,
  datum,
  size,
}: PointSymbolProps) => {
  if (datum.hidden) return;
  size = datum.major ? size * 1.25 : size;

  return (
    <g>
      <circle fill="var(--bg-50)" r={`${size * 1.4}rem`} />
      <circle
        fill="var(--bg-50)"
        r={`${size}rem`}
        stroke={borderColor}
        strokeWidth={borderWidth}
      />
      <circle fill={CATEGORY_COLOR[datum.category]} r={`${size / 2}rem`} />
    </g>
  );
};
