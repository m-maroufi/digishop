import React from 'react';

async function SinglePage({ params }: { params: Promise<{ id: string }> }) {
  const data = await params;
  console.log(data);
  return <div>SinglePage</div>;
}

export default SinglePage;
