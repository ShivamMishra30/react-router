import { redirect, useActionData, useNavigate, useNavigation } from 'react-router-dom';

import NewPostForm from '../components/NewPostForm';
import { savePost } from '../util/api';

function NewPostPage() {
  const navigate = useNavigate();
  const data = useActionData()
  const navigation = useNavigation()

  function cancelHandler() {
    navigate('/blog');
  }

  return (
    <>
    {data && data.status && <p>Invaild Input Values</p>}
      <NewPostForm
        onCancel={cancelHandler}
        submitting={navigation.state === 'submitting'}
      />
    </>
  );
}

export default NewPostPage;

export async function action({request}){
  const formData = await request.formData()
  const post = {
    title: formData.get('title'),
    body: formData.get('post-text')
  }
   const validationError = await savePost(post);
  if (validationError) {
    return validationError;
  }
  return redirect('/blog');
}