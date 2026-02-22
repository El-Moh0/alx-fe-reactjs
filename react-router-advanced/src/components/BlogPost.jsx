import { useParams } from 'react-router-dom';

export default function BlogPost() {
  const { id } = useParams(); // dynamic parameter from URL

  return (
    <div>
      <h1>Blog Post {id}</h1>
      <p>This is the content for blog post {id}.</p>
    </div>
  );
}