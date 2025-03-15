import { Container } from "@/components";
import { Banner, Hero, ListPosts, Sidebar } from "@/components/partials";


export default function Home() {
  return (
    <section>
      <Hero></Hero>
      <Container className="px-4">
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 space-y-6">
            {/* Banner */}
            <Banner />
            {/* Danh sách bài viết */}
            <ListPosts />
          </div>
          {/* Sidebar bên phải */}
          <Sidebar />
        </div>
        
      </Container>
    </section>
  );
}
