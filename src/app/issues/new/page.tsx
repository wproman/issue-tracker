"use Client";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
const NewIssuePage = () => {
  return (
    <div className="max-w-lg space-y-3">
      <h1>NewIssuePage</h1>
      <Textarea placeholder="Description" />
      <Button>Submit new issue</Button>
    </div>
  );
};

export default NewIssuePage;
