import CustomInput from "@/components/CustomInput";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <main className="bg-primary h-screen">
      <div className="container mx-auto text-center p-12">
        <h1 className="text-primary-foreground font-bold text-4xl">
          Let's List GPT's
        </h1>
        <p className="text-primary-foreground text-white">
          The world's leading AI-powered developer platform
        </p>
      </div>
      <div className="container mx-auto mt-40">
        <div className="flex items-center">
          <div className="left-col">
            <CustomInput label="GPT Name" />
            <CustomInput label="Description" />
            <CustomInput label="GPT URL" />
            <CustomInput label="Developer Email" />
            <CustomInput label="Website" />
          </div>
          <div className="right-col px-40">
            <Button variant='secondary'>List Now</Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
