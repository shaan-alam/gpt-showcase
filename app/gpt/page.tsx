import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import GPT from "@/components/GPT";
import Link from "next/link";

const GPTPage = () => {
  return (
    <main className="h-screen relative z-[10]">
      <div className="container mx-auto py-12">
        <div className="flex items-center justify-between">
          <div className="left-col">
            <h1 className="text-3xl font-bold text-primary-foreground mb-2">
              Custom GPT's
            </h1>
            <h4 className="text-primary-foreground">
              The world's leading AI-powered developer platform
            </h4>
          </div>
          <div className="right-col">
            <Link href="/">
              <Button variant="secondary">List My GPT for FREE</Button>
            </Link>
          </div>
        </div>
        <div className="flex w-full items-center justify-between mt-32">
          <div className="left-col">
            <div className="bg-gray-700 rounded-md p-4 flex items-center justify-between">
              <span className="bg-yellow p-2 rounded-md mr-4 font-semibold cursor-pointer">
                Popular
              </span>
              <span className="p-2 rounded-md border-yellow text-yellow font-semibold transition-colors hover:bg-yellow hover:text-primary border-2 mr-4 cursor-pointer">
                New
              </span>
              <span className="p-2 rounded-md border-yellow text-yellow font-semibold transition-colors hover:bg-yellow hover:text-primary border-2 cursor-pointer">
                All
              </span>
            </div>
          </div>
          <div className="right-col w-full px-4">
            <Input
              className="bg-primary border-gray-700 text-white focus:border-gray-600 w-full"
              placeholder="Search GPT's"
            />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-6 my-6">
          <GPT />
          <GPT />
          <GPT />
          <GPT />
          <GPT />
          <GPT />
          <GPT />
          <GPT />
          <GPT />
          <GPT />
          <GPT />
          <GPT />
          <GPT />
        </div>
      </div>
    </main>
  );
};

export default GPTPage;
