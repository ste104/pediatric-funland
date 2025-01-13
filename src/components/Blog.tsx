import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Blog = () => {
  const posts = [
    {
      title: "Como cuidar da saúde bucal do seu bebê",
      date: "15 Mar 2024",
      excerpt: "Dicas importantes para manter a higiene bucal do seu pequeno desde cedo.",
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f"
    },
    {
      title: "A importância das vacinas",
      date: "10 Mar 2024",
      excerpt: "Entenda por que a vacinação é fundamental para a saúde das crianças.",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901"
    },
    {
      title: "Alimentação saudável na infância",
      date: "5 Mar 2024",
      excerpt: "Guia completo para uma alimentação equilibrada e nutritiva.",
      image: "https://images.unsplash.com/photo-1438565434616-3ef039228b15"
    }
  ];

  return (
    <section id="blog" className="py-16 bg-gradient-to-b from-white to-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Blog
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <p className="text-sm text-gray-500">{post.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{post.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;