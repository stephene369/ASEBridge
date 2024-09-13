import { useGetRecentPosts } from '../../lib/react-query/queriesAndMutations';
import { Loader } from 'lucide-react';
import { Models } from 'appwrite';
import PostCard from '../../components/shared/PostCard';

function Home() {
  const {data: posts, isPending:isPostLoading } = useGetRecentPosts()

  console.log("URL", import.meta.env.VITE_APPWRITE_URL)
  console.log("PROJECT ID", import.meta.env.VITE_APPWRITE_PROJECT_ID)

  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className='h3-bold md:h2-bold text-left  w-full'>
            Home Feed
          </h2>

          {isPostLoading && !posts ? (
            <Loader/>

          ):(
            <ul className="flex flex-col flex-1 gap-9 w-full">
              {
                posts?.documents.map((post: Models.Document)=>(
                  <PostCard post={post} key={post.caption} />
                ))
              }
            </ul>
          )}

        </div>
      </div>
    </div>
  )
}

export default Home;