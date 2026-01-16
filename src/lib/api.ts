import { Blog, CreateBlogData } from "@/types/blog";

const API_BASE_URL = "http://localhost:3001";

// Mock data for when JSON server is not running (preview mode)
const mockBlogs: Blog[] = [
  {
    id: 1,
    title: "Future of Fintech",
    category: ["FINANCE", "TECH"],
    description: "Exploring how AI and blockchain are reshaping financial services",
    date: "2026-01-11T09:12:45.120Z",
    coverImage: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
    content: "The financial technology sector is undergoing a revolutionary transformation. Artificial intelligence and blockchain technology are at the forefront of this change, fundamentally altering how we think about banking, investments, and financial services.\n\nAI-powered algorithms are now capable of making complex trading decisions in milliseconds, while blockchain technology ensures transparency and security in transactions. Traditional banks are being forced to adapt or risk becoming obsolete.\n\nLooking ahead, we can expect to see even greater integration of these technologies. Decentralized finance (DeFi) platforms are already challenging traditional banking models, offering users unprecedented control over their financial assets.\n\nThe convergence of AI and blockchain will likely lead to more personalized financial services, reduced costs, and greater accessibility for underserved populations around the world."
  },
  {
    id: 2,
    title: "Sustainable Living in 2026",
    category: ["LIFESTYLE", "ENVIRONMENT"],
    description: "Practical tips for reducing your carbon footprint in everyday life",
    date: "2026-01-10T14:30:00.000Z",
    coverImage: "https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg",
    content: "Sustainable living has become more accessible than ever before. With growing awareness of climate change and environmental degradation, individuals are seeking practical ways to reduce their impact on the planet.\n\nStart with small changes: switch to reusable bags, reduce single-use plastics, and consider your transportation choices. Electric vehicles and public transit are becoming increasingly viable options for daily commutes.\n\nYour diet also plays a significant role. Reducing meat consumption, buying local produce, and minimizing food waste can significantly lower your carbon footprint. Many communities now offer composting programs and farmers' markets.\n\nRemember, sustainability is a journey, not a destination. Every small action contributes to a larger movement toward a healthier planet."
  },
  {
    id: 3,
    title: "The Rise of Remote Work",
    category: ["BUSINESS", "TECH"],
    description: "How companies are adapting to the new normal of distributed teams",
    date: "2026-01-09T08:00:00.000Z",
    coverImage: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg",
    content: "The workplace has fundamentally changed. What started as a necessity has evolved into a preferred way of working for millions of professionals worldwide.\n\nCompanies are investing heavily in digital infrastructure to support distributed teams. Collaboration tools, virtual meeting platforms, and project management software have become essential components of modern business operations.\n\nHowever, remote work comes with its challenges. Maintaining company culture, ensuring employee well-being, and fostering innovation require intentional effort and new management strategies.\n\nThe future of work is hybrid. Organizations that successfully blend remote and in-office experiences will attract top talent and maintain competitive advantages in their industries."
  }
];

let localMockBlogs = [...mockBlogs];
let nextId = 4;

// Check if we're in a browser environment that can't reach localhost
const isPreviewMode = typeof window !== 'undefined' && 
  !window.location.hostname.includes('localhost') && 
  !window.location.hostname.includes('127.0.0.1');

export const blogApi = {
  getAll: async (): Promise<Blog[]> => {
    if (isPreviewMode) {
      // Return mock data in preview mode
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
      return [...localMockBlogs].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
    
    const response = await fetch(`${API_BASE_URL}/blogs`);
    if (!response.ok) {
      throw new Error("Failed to fetch blogs");
    }
    return response.json();
  },

  getById: async (id: number): Promise<Blog> => {
    if (isPreviewMode) {
      await new Promise(resolve => setTimeout(resolve, 300));
      const blog = localMockBlogs.find(b => b.id === id);
      if (!blog) {
        throw new Error("Blog not found");
      }
      return blog;
    }
    
    const response = await fetch(`${API_BASE_URL}/blogs/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch blog");
    }
    return response.json();
  },

  create: async (data: CreateBlogData): Promise<Blog> => {
    if (isPreviewMode) {
      await new Promise(resolve => setTimeout(resolve, 500));
      const newBlog: Blog = {
        ...data,
        id: nextId++,
        date: new Date().toISOString(),
      };
      localMockBlogs.push(newBlog);
      return newBlog;
    }
    
    const response = await fetch(`${API_BASE_URL}/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        date: new Date().toISOString(),
      }),
    });
    if (!response.ok) {
      throw new Error("Failed to create blog");
    }
    return response.json();
  },
};
