import { Card, CardContent } from "@/components/ui/card";
import { Instagram as InstagramIcon } from "lucide-react";

const Instagram = () => {
  const posts = [
    {
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f",
      likes: 156,
      comments: 23
    },
    {
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      likes: 243,
      comments: 15
    },
    {
      image: "https://images.unsplash.com/photo-1438565434616-3ef039228b15",
      likes: 189,
      comments: 31
    },
    {
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f",
      likes: 278,
      comments: 42
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-12">
          <InstagramIcon className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-bold text-primary">@pediatrakids</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((post, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-0 relative">
                <img
                  src={post.image}
                  alt={`Instagram post ${index + 1}`}
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <div className="text-center">
                    <p className="font-semibold">{post.likes} likes</p>
                    <p className="font-semibold">{post.comments} comments</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instagram;