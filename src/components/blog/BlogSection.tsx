import React from 'react';
import BlogCard from './BlogCard';

const BLOG_POSTS = [
  {
    id: 1,
    title: "Understanding FIRE: Your Path to Financial Independence",
    excerpt: "Learn the fundamentals of the FIRE movement and how you can start your journey to financial independence and early retirement.",
    date: "Mar 15, 2024",
    imageUrl: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=2071",
    author: "Sarah Johnson",
    readTime: "5 min"
  },
  {
    id: 2,
    title: "Smart Investment Strategies for Beginners",
    excerpt: "A comprehensive guide to help you start your investment journey with confidence and make informed decisions.",
    date: "Mar 12, 2024",
    imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=2070",
    author: "Michael Chen",
    readTime: "4 min"
  },
  {
    id: 3,
    title: "Building a Strong Emergency Fund",
    excerpt: "Why having an emergency fund is crucial and how to build one that provides real financial security.",
    date: "Mar 10, 2024",
    imageUrl: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&q=80&w=2071",
    author: "Emily Parker",
    readTime: "3 min"
  }
];

export default function BlogSection() {
  const handleBlogClick = (id: number) => {
    // TODO: Implement blog post navigation
    console.log(`Clicked blog post ${id}`);
  };

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Financial Insights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed with our latest articles on personal finance, investment strategies, and financial independence.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              imageUrl={post.imageUrl}
              author={post.author}
              readTime={post.readTime}
              onClick={() => handleBlogClick(post.id)}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="inline-flex items-center px-6 py-3 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
            View All Articles
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}