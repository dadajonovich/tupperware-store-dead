import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={424}
    height={568}
    viewBox="0 0 424 568"
    backgroundColor="#808080"
    foregroundColor="#ffffff"
  >
    <rect x="20" y="20" rx="10" ry="10" width="385" height="385" />
    <rect x="20" y="435" rx="10" ry="10" width="385" height="25" />
    <rect x="20" y="485" rx="10" ry="10" width="100" height="30" />
    <rect x="290" y="475" rx="10" ry="10" width="115" height="50" />
  </ContentLoader>
);

export default Skeleton;
