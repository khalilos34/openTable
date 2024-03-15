import { Search } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="max-w-screen-2xl bg-white m-auto ">
      <nav className=" flex justify-between items-center p-2">
        <Link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 428 95"
            width="200"
            height="30"
          >
            <path
              d="M83.36 0a47.5 47.5 0 1047.46 47.5A47.48 47.48 0 0083.36 0zm0 59.37A11.87 11.87 0 1195.22 47.5a11.87 11.87 0 01-11.87 11.87zM0 47.5a11.87 11.87 0 1111.87 11.87A11.87 11.87 0 010 47.5"
              fill="#da3743"
            />
            <path
              d="M243.82 38.41a12.14 12.14 0 0112.42 12.54c0 .41-.06 1.35-.12 1.76a1.38 1.38 0 01-1.29 1.23h-17.34a6.5 6.5 0 006.74 6.27 9 9 0 005.8-2 1.13 1.13 0 011.76 0l2.28 3a1.14 1.14 0 01-.12 1.76 15.27 15.27 0 01-10.08 3.69c-8.08 0-13.71-6.45-13.71-14.19s5.64-14.06 13.66-14.06zm5 10.73a5 5 0 00-5.21-4.69c-3.28 0-5.39 2-5.74 4.69h11zm65.6-21.16H286.9a1.11 1.11 0 00-1.11 1.11v4.81a1.11 1.11 0 001.11 1.11h9.94v30a1.15 1.15 0 001.16 1.07h5.45a1.15 1.15 0 001.11-1.11v-30h9.94a1.11 1.11 0 001.11-1.11v-4.77a1.11 1.11 0 00-1.15-1.11zm41.45 10.44a19.15 19.15 0 00-6.62 1.17V29.26a1.34 1.34 0 00-1.25-1.28h-4.75a1.39 1.39 0 00-1.25 1.28v35.53a1.34 1.34 0 001.29 1.29H346a1.3 1.3 0 001.3-1.29v-2.1a11.83 11.83 0 009 4c7.4.04 12.7-6.41 12.7-14.19 0-7.88-5.07-14.09-13.09-14.09zm-.64 21.63a6.21 6.21 0 01-6-3.75v-9.68a10.7 10.7 0 015.62-1.52c4.45 0 6.74 3.63 6.74 7.45s-2.11 7.49-6.33 7.49zm45.85-21.63a12.14 12.14 0 0112.42 12.54c0 .41-.06 1.35-.12 1.76a1.38 1.38 0 01-1.29 1.23h-17.31a6.5 6.5 0 006.74 6.27 9 9 0 005.8-2 1.13 1.13 0 011.76 0l2.28 3a1.14 1.14 0 01-.12 1.76 15.27 15.27 0 01-10.08 3.69c-8.08 0-13.71-6.45-13.71-14.19s5.63-14.07 13.66-14.07zm5 10.73a5 5 0 00-5.21-4.69c-3.28 0-5.39 2-5.74 4.69h11zM212.95 38.41a11.69 11.69 0 00-8.84 4v-2.12a1.3 1.3 0 00-1.29-1.29h-2.88a1.3 1.3 0 00-1.29 1.29v35.52a1.34 1.34 0 001.29 1.29h4.75a1.39 1.39 0 001.31-1.29v-10.2a20.1 20.1 0 006.5 1.11c8.08 0 13.42-6.21 13.42-14.13-.02-8.2-5.59-14.18-12.97-14.18zm-1.35 21.63a10.7 10.7 0 01-5.6-1.54v-9.65a6.21 6.21 0 016-3.75c4.22 0 6.39 3.69 6.39 7.5s-2.34 7.44-6.79 7.44zm64.5-21.63a10.92 10.92 0 00-8.71 3.91v-2a1.3 1.3 0 00-1.29-1.29H263a1.3 1.3 0 00-1.29 1.29v24.5a1.34 1.34 0 001.29 1.26h4.34c1.29 0 1.7-.29 1.7-1.29V49.31a6 6 0 015.86-4.22c3.28 0 4.69 2.17 4.69 5.69v14a1.3 1.3 0 001.29 1.29h4.75a1.34 1.34 0 001.29-1.29v-14c.02-6.57-2.21-12.37-10.82-12.37zm49.18 0a34.18 34.18 0 00-9.28 1.35 1.24 1.24 0 00-.88 1.64l.59 3a1.17 1.17 0 001.52 1.17 33.86 33.86 0 017.62-1c2.87 0 3.87 1.64 3.75 5.1a19.85 19.85 0 00-5.21-.76c-6.85 0-10.78 3.69-10.78 8.5 0 5.8 3.75 9.26 9.14 9.26a11.85 11.85 0 008.49-3.4v1.46a1.3 1.3 0 001.29 1.29h2.64a1.3 1.3 0 001.29-1.29V50.19c.02-7.38-1.74-11.78-10.17-11.78zm3.16 20a5.81 5.81 0 01-4.86 2.87 3.57 3.57 0 01-3.92-3.78c0-2.4 1.7-3.87 4.8-3.87a10.79 10.79 0 014 .82v4zM173.86 28a19.45 19.45 0 00-19.37 19.5 19.4 19.4 0 0038.8 0A19.49 19.49 0 00173.86 28zm0 7.53a12.09 12.09 0 0111.9 12 11.87 11.87 0 11-11.9-12.03zm208.84 30.6a1.31 1.31 0 001.3-1.29v-4.77a1.3 1.3 0 00-1.29-1.29h-.21a1.25 1.25 0 01-1.16-1.16V29.36a1.39 1.39 0 00-1.34-1.29h-4.7a1.39 1.39 0 00-1.3 1.29V61.5a5 5 0 004.65 4.66h4zm34.83-22.22a5.24 5.24 0 1110.47 0 5.24 5.24 0 11-10.47 0zm9.36 0a4.14 4.14 0 10-8.24 0 4.13 4.13 0 108.24 0zm-6.13-2.89h2.11c1.17 0 2.17.47 2.17 1.81a1.64 1.64 0 01-1 1.53l1.28 2.31H424l-1-1.94h-1.14v1.94h-1.14v-5.65zm1.86 2.81a1 1 0 001.19-.95.91.91 0 00-1.14-.92h-.78v1.86h.72z"
              fill="#333"
            />
          </svg>
        </Link>
        <div className="flex items-center gap-x-4 mx-12">
          <Button className="bg-blue-primary rounded-md outline-none hover:bg-blue-primary/90 h-9 py-2  ">
            Sign in
          </Button>
          <Search />
        </div>
      </nav>
    </header>
  );
};

export default Header;