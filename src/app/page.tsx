import LatestBlogs from "@/components/shared/LatestBlogs/LatestBlogs";

const HomePage = async () => {

  const res = await fetch(`http://localhost:8000/blogs`);
  const blogs = await res.json();

  // console.log(blogs)

  return (
    <div className="w-[90%] mx-auto my-5">
      

    <LatestBlogs blogs={blogs}/>
    </div>
  );
};

export default HomePage;
