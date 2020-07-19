import React from "react";

import styles from "./LineChart.module.css";

function buildPolyLineString(points, xMultipier, yMultipier, maxXEntries) {
  return points
    .slice(Math.max(points.length - maxXEntries, 0))
    .reduce((acc, current, i) => {
      return acc.concat(`${i * xMultipier}, ${-(current * yMultipier)}`);
    }, [])
    .join(" ");
}

export default function LineChart({
  width,
  height,
  xOffset = 10,
  yOffset = 17,
  data = [],
  maxXEntries = 100
}) {
  const maxYPoint = height - 50;
  const maxYRange = Math.max(
    maxYPoint,
    ...data.reduce((prev, { points }) => prev.concat(points), [])
  );

  const yMultipier = 1;
  const xMultipier = 2.5;
  const scaleY = maxYPoint / maxYRange;

  return (
    <>
      <span className={styles.labelY}>population →</span>
      <svg className={styles.lineChart} width={width} height={height}>
        <g
          transform={`scale(1, ${scaleY}), translate(0, ${(height - 30) /
            scaleY})`}
        >
          {data.map(({ points, color }, i) => (
            <g
              key={`line-${i}`}
              transform={`translate(${xOffset + 5}, ${yMultipier + yOffset})`}
            >
              <polyline
                points={buildPolyLineString(
                  points,
                  xMultipier,
                  yMultipier,
                  maxXEntries
                )}
                stroke={color}
                fill="transparent"
                strokeWidth={2}
              />
            </g>
          ))}
        </g>
      </svg>
      <span className={styles.labelX}>days since the first case →</span>
    </>
  );
}
