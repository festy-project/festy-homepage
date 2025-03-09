type TimeTableData = Array<
  Array<{
    title: string;
    content: string;
    height: number;
    type: 'LINE' | 'SOLID';
    marginTop?: string;
  }>
>;
export const timeTableData: TimeTableData = [
  [
    {
      title: 'Shaun',
      content: '15:50 - 16:40',
      height: 160,
      type: 'LINE',
    },
    {
      title: 'Kaaze',
      content: '16:50 - 17:45',
      height: 160,
      type: 'SOLID',
    },
    {
      title: 'Acraze',
      content: '17:45 - 18:45',
      height: 190,
      type: 'SOLID',
    },
  ],
  [
    {
      marginTop: '80px',
      title: 'Juncoco',
      content: '16:20 - 17:30',
      height: 210,
      type: 'LINE',
    },
  ],
  [
    {
      marginTop: '0px',
      title: 'Showtek',
      content: '15:50 - 17:30',
      height: 290,
      type: 'LINE',
    },
    {
      title: 'James Hype',
      content: '17:35 - 18:30',
      height: 200,
      type: 'LINE',
    },
  ],
];
