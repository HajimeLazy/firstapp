export default async function BlogPost({ params }) {
  const { slug } = await params;
  const decodeSlug = decodeURIComponent(slug);

  return (
    <div>
      <h1>บทความ: {decodeSlug}</h1>
      <p>เนื้อหาบทความ...</p>
    </div>
  );
}
