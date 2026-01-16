import { useState } from "react";
import { Header } from "@/components/Header";
import { BlogList } from "@/components/BlogList";
import { BlogDetail } from "@/components/BlogDetail";

const Index = () => {
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-3">
            CA Monk Blog
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay updated with the latest trends in finance, accounting, and career growth
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Panel - Blog List */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <h2 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                Latest Articles
              </h2>
              <div className="max-h-[calc(100vh-220px)] overflow-y-auto scrollbar-thin pr-2">
                <BlogList
                  selectedBlogId={selectedBlogId}
                  onSelectBlog={setSelectedBlogId}
                />
              </div>
            </div>
          </div>

          {/* Right Panel - Blog Detail */}
          <div className="lg:col-span-8">
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8 min-h-[500px]">
              <BlogDetail blogId={selectedBlogId} />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-foreground">CA Monk</span>
              <span className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} All rights reserved.
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
