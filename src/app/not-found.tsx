import { SmallButton } from "@/components/ui/Buttons";

export default function Custom404() {
  return (
    <section className="flex h-full items-center p-16 md:mb-20">
      <div className="container mx-auto flex flex-col items-center justify-center md:my-24 md:px-5">
        <div className="max-w-md text-center">
          <h2 className="mb-8 text-9xl font-extrabold ">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldnt find this page.</p>
          <p className="mb-8 mt-4">But dont worry, you can find plenty of other things on our homepage.</p>
          <SmallButton href="/" className="rounded-md">
            Back to home
          </SmallButton>
        </div>
      </div>
    </section>
  );
}
