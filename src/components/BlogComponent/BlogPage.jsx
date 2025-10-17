import React, { useState, useEffect } from 'react';
import styles from './BlogPage.module.css';
import { getBlogPosts } from '../../services/api';
import BlogPostCard from '../BlogPostCard/BlogPostCard';
import Pagination from '../Pagination/Pagination';

function BlogPage() {
  const [blogData, setBlogData] = useState({ posts: [], totalPages: 1 });
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const data = await getBlogPosts(currentPage);
      setBlogData(data);
      setLoading(false);
    };
    fetchPosts();
  }, [currentPage]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <h1 className={styles.h1contacto}>BLOG</h1>
      <div className={styles.container}>
        {blogData.posts.map(post => (
          <BlogPostCard key={post.id} post={post} />
        ))}

        {blogData.totalPages > 1 && (
          <Pagination 
            currentPage={currentPage}
            totalPages={blogData.totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </>
  );
}

export default BlogPage;