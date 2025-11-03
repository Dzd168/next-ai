'use client';

export default function DocPage() {
  const handleAddDoc = async () => {
    const response = await fetch('/api/doc/add', {
      method: 'POST',
      body: JSON.stringify({ title: 'test', content: 'test' }),
    });
    const data = await response.json();
    console.log(data);
  }
  const handleQueryDoc = async () => {
    const response = await fetch('/api/doc/query', {
      method: 'GET',
    });
    const data = await response.json();
    console.log(data);
  }
  return (
    <>
      <button className="cursor-pointer" onClick={() => handleAddDoc()}>Add Doc</button>
      <button className="cursor-pointer" onClick={() => handleQueryDoc()}>Query Doc</button>
    </>
  );
}