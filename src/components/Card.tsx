import { extendVariants, Card } from "@nextui-org/react";
export const CFSCard = extendVariants(Card, {
  variants: {
    type: {
      default: {
        base: "flex flex-column px-8 py-6 bg-neutral-600 rounded-2xl shadow mt-10",
        header: "text-white text-2xl font-medium font-['IBM Plex Sans'] ",
        body: "text-white text-2xl font-medium font-['IBM Plex Sans'] "
      },
      cardStyle: {
        base: " flex px-8 py-6 bg-neutral-500 rounded-2xl shadow mt-10",
        header: "w-40 justify-center text-white text-2xl font-medium font-['IBM Plex Sans']",
        body:"text-white text-2xl font-medium font-['IBM Plex Sans']"
        //header: "text-white text-2xl font-medium font-['IBM Plex Sans']",
        //body: "text-white text-2xl font-medium font-['IBM Plex Sans']"
      },
      cardStyle2: {
        base: " flex px-8 py-6 bg-neutral-400 rounded-2xl shadow mt-10",
        header: "text-white text-2xl font-medium font-['IBM Plex Sans']",
        body:" text-white font-medium font-['IBM Plex Sans']"
      },
      cardStyleRadio: {
        base: "cursor-pointer px-10 py-8 border-gray-600 drop-shadow-2xl rounded-2xl mt-10 text-1xl font-medium font-['IBM Plex Sans']",
      },
    },
  },
  defaultVariants: {
    type: "default",
  },
});
