import { Button } from "@/components/ui/button";
import Link from "next/link";
const page = () => {
  return (
    <Button>
      <Link href="/issues/new">New issues</Link>
    </Button>
  );
};

export default page;
