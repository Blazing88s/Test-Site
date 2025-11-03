import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: '3D Visualization Trends in 2024',
    excerpt: 'Explore the latest trends shaping the future of architectural visualization.',
    author: 'Sarah Chen',
    date: 'Mar 15, 2024',
    image: 'https://images.unsplash.com/photo-1558442086-8ea19a79cd4d'
  },
  {
    title: 'The Impact of Ray Tracing in Product Renders',
    excerpt: 'How real-time ray tracing is revolutionizing product visualization.',
    author: 'Mike Roberts',
    date: 'Mar 10, 2024',
    image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87'
  },
  {
    title: 'Sustainable Architecture Visualization',
    excerpt: 'Showcasing environmental features through 3D visualization.',
    author: 'Emma Wilson',
    date: 'Mar 5, 2024',
    image: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099'
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-gray-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 text-white">Latest Insights</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.title} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-indigo-400 transition-colors">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center ml-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}