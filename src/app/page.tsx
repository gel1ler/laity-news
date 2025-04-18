import SideMenu from "@/components/home/sideMenu";
import Start from "@/components/home/start";
import News from "@/components/news/news";
import { Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* <Start /> */}
      <SideMenu />
      <Container maxWidth='md'>
        <News />
      </Container>
    </>
  );
}
