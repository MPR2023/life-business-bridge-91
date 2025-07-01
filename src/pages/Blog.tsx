
import { Outlet } from "react-router-dom";

const Blog = () => {
  return (
    <div className="min-h-screen bg-black text-silver pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Blog;
