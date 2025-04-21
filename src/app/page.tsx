import Start from "@/components/home/start";
import Posts from "@/components/posts/posts";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <>
      <Start />
      {/* <SideMenu /> */}
      <Container maxWidth='md'>
        <Posts />
      </Container>
    </>
  );
}
