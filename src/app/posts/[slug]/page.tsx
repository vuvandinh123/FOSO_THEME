import { Adds, Container } from "@/components";
import {
  HeaderPost,
  ListPost,
  PostContent,
  TableOfContents,
} from "@/components/partials";
import { FeedbackReaction, ShareSidebar } from "@/components/ui";

export default function BlogPost() {
  return (
    <Container className="px-4 py-6">
      <div className="">
        {/* Nội dung bài viết */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <HeaderPost></HeaderPost>
            {/* Nội dung bài viết */}
            <PostContent></PostContent>
            {/* phân hồi */}
            <FeedbackReaction></FeedbackReaction>
            {/* bài viết liên quan */}
            <ListPost></ListPost>
          </div>

          {/* Mục lục */}
          <div className="lg:col-span-1">
            <div className="">
              <TableOfContents />
              <Adds />
            </div>
          </div>
        </div>
      </div>
      <ShareSidebar></ShareSidebar>
    </Container>
  );
}
