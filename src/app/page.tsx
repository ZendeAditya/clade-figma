import JobCard from "@/components/JobCard";
import JobPreview from "@/components/JobPreview";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main>
      <Nav />
      <JobPreview/>
      <JobCard/>
    </main>
  );
}
