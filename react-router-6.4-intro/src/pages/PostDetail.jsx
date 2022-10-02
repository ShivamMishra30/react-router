import { useLoaderData, useParams } from 'react-router-dom';

import BlogPost from '../components/BlogPost';
import { getPost } from '../util/api';

function PostDetailPage() {
  const post = useLoaderData()
  console.log(post)
  return (
    <>
      <BlogPost title={post.title} text={post.body} />
    </>
  );
}

export default PostDetailPage;
   
export function loader({params}){
  const postId = params.id  
  return getPost(postId)
}