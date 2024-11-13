import React from 'react';
import { BarChart } from '@opd/g2plot-react';
import { ProgramLists } from '../../../Data/ProgramLists';

export const ProgressProgram = () => {
  // Prepare the data
  const data = ProgramLists().map((program) => ({
    programName: program.programName,
    progress: program.progress,
  }));

  // Configuration for the Bar chart
  const config = {
    data,
    xField: 'progress',
    yField: 'programName',
    seriesField: 'programName',
    colorField: 'programName',
    legend: {
      position: 'top-left',
    },
    xAxis: {
      title: { text: 'Progress (%)' },
    },
    yAxis: {
      title: { text: 'Nama Program' },
    },
    tooltip: {
      showMarkers: false,
      shared: true,
    },
  };

  return <BarChart {...config} />;
};

