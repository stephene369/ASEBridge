import { Models } from 'appwrite';
import { Link } from 'react-router-dom';
import {  multiFormatDateString } from '../../lib/utils';
import { useUserContext } from '../../context/AuthContext';
import PostStats from './PostStats';

type PostCardProps = {
  post: Models.Document
}

const PostCard = ({ post }: PostCardProps) => {
  const { user } = useUserContext();


  return (
    <div className="post-card">
      <div className="flex-between">
        <div className="flex items-center gap-3">
          <Link to={`/asebridge/profile/${post.creator.id}`} >
            <img
              src={post?.creator?.imageUrl || '/asebridge/assets/icons/profile-placeholder.svg'}
              alt="creator"
              className='rounded-full w-12 lg:h-12'
            />
          </Link>
          <div className="flex flex-col">
            <p className='base-medium lg:body-bold text-light-1'>{post.creator.name}</p>

            <div className='flex-center gap-2 text-light-3'>
              <p className='subtle-semibold lg:small-regular'>
                {multiFormatDateString(post.$createdAt)}
              </p>
              --
              <p className='subtle-semibold lg:small-regular' >{post.location}</p>
            </div>

          </div>
        </div>



        <Link to={`/asebridge/update-post/${post.$id}`}
          className={`${user.id !== post.creator.$id && 'hidden'} `} >
          <i className='bx bx-edit text-blue-500' style={{ fontSize: '20px' }}></i>
        </Link>
      </div>

      <Link to={`/asebridge/post/${post.$id}`}>
        <div className="small-medium lg:base-medium py-5">
          <p className='text-light-1'>{post.caption}</p>
          <ul className="flex gap-1 mt-2">
            {post.tags.map((tag: string) => (
              <li key={tag} className='text-light-5'>
                #{tag}
              </li>
            ))}
          </ul>
        </div>

        <img
          src={post.imageUrl || '/asebridge/assets/icons/profile-placeholder.svg'}
          className='post-cart_img'
          alt='post image'
        />
      </Link>

      <PostStats post={post} userId={user.id} />
    </div>

  )
}

export default PostCard