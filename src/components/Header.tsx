import { CreateBlogDialog } from "./CreateBlogDialog";
import { BookOpen } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              CA Monk
            </span>
          </div>
          <CreateBlogDialog />
        </div>
      </div>
    </header>
  );
};
