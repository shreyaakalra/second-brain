import { cn } from "@/lib/utils";
import { CanvasText } from "./ui/canvas-text";

export default function Hero(){
    return(
        <div className="flex flex-col items-center">
            <div className="flex flex-col mt-30">
                <h2
                  className={cn(
                    "group relative mx-auto mt-4 max-w-2xl text-center text-4xl leading-20 font-bold tracking-tight text-balance text-neutral-600 sm:text-5xl md:text-6xl xl:text-7xl dark:text-neutral-700",
                  )}
                >
                  Your digital memory,{" "}
                  <CanvasText
                    text="perfectly organized."
                    backgroundClassName="bg-yellow-600 dark:bg-yellow-700"
                    colors={[
                      "rgba(250, 204, 21, 1)",
                      "rgba(250, 204, 21, 0.9)",
                      "rgba(250, 204, 21, 0.8)",
                      "rgba(250, 204, 21, 0.7)",
                      "rgba(250, 204, 21, 0.6)",
                      "rgba(250, 204, 21, 0.5)",
                      "rgba(250, 204, 21, 0.4)",
                      "rgba(250, 204, 21, 0.3)",
                      "rgba(250, 204, 21, 0.2)",
                      "rgba(250, 204, 21, 0.1)",
                    ]}
                    lineGap={4}
                    animationDuration={20}
                  />
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-center text-xl leading-8 font-semibold tracking-tight text-balance text-neutral-600">
                  A dedicated home for your "I'll read this later" pile. Drop in articles, videos, and threads, and let your Second Brain remember everything so you don't have to.
                </p>
            </div>
        </div>
    );
}