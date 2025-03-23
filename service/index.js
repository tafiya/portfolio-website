"use server"
export const getAllTBlogs = async (

) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/blogs`,
      {
        cache: "no-store",  // Ensure fresh data each time
        next: {
          tags: ["BLOGS"], // optional, for server-side caching
        },
      
      }
    );
    const data = await res.json();
    return data;

  } catch (error) {
    return Error(error.message);
  }
};
// skill
export const getAllSkills = async (

) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/skills`,
      {
        cache: "no-store",
      }
    );
    const data = await res.json();
    return data;

  } catch (error) {
    return Error(error.message);
  }
};
// service
export const getAllService = async (

) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/service`,
      {
        cache: "no-store",  // Prevent caching to get fresh data
        next: {
          tags: ["SERVICE"], // optional, for server-side caching
        },
      }
    );
    const data = await res.json();
    return data;

  } catch (error) {
    return Error(error.message);
  }
};
// project
export const getAllProject= async (

) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/projects`,
      {
        cache: "no-store",  // Prevent caching to get fresh data
        next: {
          tags: ["PROJECTS"], // optional, for server-side caching
        },
      }
    );
    const data = await res.json();
    return data;

  } catch (error) {
    return Error(error.message);
  }
};