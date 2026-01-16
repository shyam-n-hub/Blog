interface CategoryBadgeProps {
  category: string;
}

const categoryStyles: Record<string, string> = {
  FINANCE: "category-finance",
  TECH: "category-tech",
  CAREER: "category-career",
  SKILLS: "category-skills",
  REGULATION: "category-regulation",
  TECHNOLOGY: "category-tech",
};

export const CategoryBadge = ({ category }: CategoryBadgeProps) => {
  const styleClass = categoryStyles[category.toUpperCase()] || "category-finance";

  return (
    <span className={`category-badge ${styleClass}`}>
      {category}
    </span>
  );
};
