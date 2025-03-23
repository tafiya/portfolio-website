import BlogDetails from "@/components/pageComponant/blog/BlogDetails";


const BlogDetailsPage = async ({
  params,
}) => {
  const { id } = await params;
  //console.log(id);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/blogs/${id}`,
    {
      cache: "no-store",
    }
  );
  const blogData = await res.json();

  const blog = blogData?.data;
  return (
    <div>
      <BlogDetails blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;