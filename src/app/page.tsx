import LatestBlogs from "@/components/shared/LatestBlogs/LatestBlogs";

const HomePage = async () => {

  //SSG - Static Site Generation
  const res = await fetch(`http://localhost:8000/blogs`, {
    // cache: "force-cache", by default
    next: {
      revalidate: 30,
    },
  });
  const blogs = await res.json();

  // console.log(blogs)

  return (
    <div >
      <LatestBlogs blogs={blogs} />
    </div>
  );
};

export default HomePage;
