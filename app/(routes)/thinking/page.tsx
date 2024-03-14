import ProjectCard from "./_components/project-card";

const cardData = [
  {
    tags: ["Artificial Intelligence", "Gen AI", "Product Development"],
    title:
      "Generative AI in business: top 5 use cases every company should consider with a free newsletter",
    thumbnail: "/ai-head-break.jpg",
  },
  {
    tags: ["Artificial Intelligence", "Gen AI", "Product Development"],
    title:
      "Generative AI in business: top 5 use cases every company should consider with a free newsletter",
    thumbnail: "/ai-head-break.jpg",
  },
  {
    tags: ["Artificial Intelligence", "Gen AI", "Product Development"],
    title:
      "Generative AI in business: top 5 use cases every company should consider with a free newsletter",
    thumbnail: "/ai-head-break.jpg",
  },
  {
    tags: ["Artificial Intelligence", "Gen AI", "Product Development"],
    title:
      "Generative AI in business: top 5 use cases every company should consider with a free newsletter",
    thumbnail: "/ai-head-break.jpg",
  },
  {
    tags: ["Artificial Intelligence", "Gen AI", "Product Development"],
    title:
      "Generative AI in business: top 5 use cases every company should consider with a free newsletter",
    thumbnail: "/ai-head-break.jpg",
  },
  {
    tags: ["Artificial Intelligence", "Gen AI", "Product Development"],
    title:
      "Generative AI in business: top 5 use cases every company should consider with a free newsletter",
    thumbnail: "/ai-head-break.jpg",
  },
  {
    tags: ["Artificial Intelligence", "Gen AI", "Product Development"],
    title:
      "Generative AI in business: top 5 use cases every company should consider with a free newsletter",
    thumbnail: "/ai-head-break.jpg",
  },
  {
    tags: ["Artificial Intelligence", "Gen AI", "Product Development"],
    title:
      "Generative AI in business: top 5 use cases every company should consider with a free newsletter",
    thumbnail: "/ai-head-break.jpg",
  },
  {
    tags: ["Artificial Intelligence", "Gen AI", "Product Development"],
    title:
      "Generative AI in business: top 5 use cases every company should consider with a free newsletter",
    thumbnail: "/ai-head-break.jpg",
  },
  {
    tags: ["Artificial Intelligence", "Gen AI", "Product Development"],
    title:
      "Generative AI in business: top 5 use cases every company should consider with a free newsletter",
    thumbnail: "/ai-head-break.jpg",
  },
  {
    tags: ["Artificial Intelligence", "Gen AI", "Product Development"],
    title:
      "Generative AI in business: top 5 use cases every company should consider with a free newsletter",
    thumbnail: "/ai-head-break.jpg",
  },
  {
    tags: ["Artificial Intelligence", "Gen AI", "Product Development"],
    title:
      "Generative AI in business: top 5 use cases every company should consider with a free newsletter",
    thumbnail: "/ai-head-break.jpg",
  },
  {
    tags: ["Artificial Intelligence", "Gen AI", "Product Development"],
    title:
      "Generative AI in business: top 5 use cases every company should consider with a free newsletter",
    thumbnail: "/ai-head-break.jpg",
  },
  {
    tags: ["Artificial Intelligence", "Gen AI", "Product Development"],
    title:
      "Generative AI in business: top 5 use cases every company should consider with a free newsletter",
    thumbnail: "/ai-head-break.jpg",
  },
  {
    tags: ["Artificial Intelligence", "Gen AI", "Product Development"],
    title:
      "Generative AI in business: top 5 use cases every company should consider with a free newsletter",
    thumbnail: "/ai-head-break.jpg",
  },
];

const ThinkingsPage = () => {
  return (
    <>
      <div className="block-blog block-overflow block-blog">
        <div className="block-content">
          <h1 className="client-content-text">Thinking</h1>
          <div className="description description-mth">
            Useful. Relevant. Challenging.
          </div>
        </div>
      </div>
      <div className="block-blog">
        <div className="block-content">
          <div className="blog-filter">
            {/* entire block needs to be made to update when blog is input - with filter */}
            {/* also add filter functionality */}
            <a className="blog-filter-item">
              <span className="blog-filter-name">All</span>
              <span className="blog-filter-badge">155</span>
            </a>
            <a className="blog-filter-item">
              <span className="blog-filter-name">Strategy</span>
              <span className="blog-filter-badge">39</span>
            </a>
            <a className="blog-filter-item">
              <span className="blog-filter-name">Trending</span>
              <span className="blog-filter-badge">140</span>
            </a>
            <a className="blog-filter-item">
              <span className="blog-filter-name">Development</span>
              <span className="blog-filter-badge">25</span>
            </a>
          </div>
          <ProjectCard cardData={cardData} />
        </div>
      </div>
    </>
  );
};

export default ThinkingsPage;
