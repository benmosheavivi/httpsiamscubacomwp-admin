import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@/data/blogPosts";

interface BlogCardProps {
  post: BlogPost;
}

const categoryColors: Record<string, string> = {
  Food: "bg-accent text-accent-foreground",
  Beaches: "bg-primary text-primary-foreground",
  Activities: "bg-ocean-deep text-primary-foreground",
  Nightlife: "bg-coral text-primary-foreground",
};

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link to={`/blog/${post.slug}`}>
      <Card className="overflow-hidden group cursor-pointer border-border/50 hover:shadow-lg transition-all duration-300 h-full">
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        <CardContent className="p-5">
          <Badge className={`${categoryColors[post.category] || ""} mb-3 text-xs`}>
            {post.category}
          </Badge>
          <h3 className="font-display text-lg font-semibold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {post.excerpt}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;
