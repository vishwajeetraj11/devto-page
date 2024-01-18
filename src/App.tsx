import "./App.css";

function App() {
  return (
    <div className="bg-[#eeeeee]">
      <div className="bg-white pb-2">
        <nav className="max-w-[1280px] mx-auto bg-white items-center flex pt-[10px]">
          <img
            className="h-[40px] mr-[20px]"
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
          />
          <div className="flex border items-center rounded-md px-2">
            <input
              className="border-none outline-none rounded-md h-[40px] w-[300px]"
              placeholder="Search..."
            />
            <SearchIcon />
          </div>
          <div className="ml-auto">
            <button className="mr-[20px]">Login</button>
            <OutlineButton />
          </div>
        </nav>
      </div>
      <main className="bg-[#eeeeee] max-w-[1280px] mx-auto flex mt-4">
        <div className="w-[240px]">
          <LeftSidebar />
        </div>
        <div className="flex-1 px-4">
          <Main />
        </div>
        <div className="">
          <RightSidebar />
        </div>
      </main>
    </div>
  );
}

export default App;

const OutlineButton = () => (
  <button className="px-6 py-2 border border-indigo-600 text-indigo-600 rounded-lg">
    Create account
  </button>
);

const LeftSidebar = () => {
  return (
    <>
      <div className="border rounded-md bg-white p-4">
        <p className="mb-4 text-xl font-medium">
          DEV Community is a community of 1,239,881 amazing developers
        </p>
        <p className="mb-3 text-stone-500">
          We're a place where coders share, stay up-to-date and grow their
          careers.
        </p>
        <div className="flex flex-col">
          <OutlineButton />
          <button className="mt-3">Login</button>
        </div>
      </div>
      <div className="mt-4 flex flex-col">
        {[
          "Home",
          "Podcast",
          "Videos",
          "Tags",
          "FAQ",
          "Forem Shop",
          "Advertice on DEV",
          "About",
          "Contact",
        ].map((item) => (
          <div
            key={item}
            className="flex group hover:bg-indigo-200 rounded-md py-2"
          >
            <HomeIcon />
            <span className="ml-2 group-hover:underline">{item}</span>
          </div>
        ))}
      </div>
      <footer className="mt-6 text-[14px] text-slate-600">
        <p>
          <a
            className="font-medium text-[13px] text-indigo-500 pr-1"
            aria-label="DEV Community Home"
            href="/"
          >
            DEV Community
          </a>
          A constructive and inclusive social network for software developers.
          With you every step of your journey.
        </p>

        <p className="mt-4">
          Built on{" "}
          <a
            className="font-medium text-[13px] text-indigo-500 pr-1"
            target="_blank"
            rel="noopener"
            href="https://www.forem.com"
          >
            Forem
          </a>{" "}
          — the{" "}
          <a
            target="_blank"
            rel="noopener"
            className="font-medium text-[13px] text-indigo-500 pr-1"
            href="https://dev.to/t/opensource"
          >
            open source
          </a>{" "}
          software that powers{" "}
          <a
            target="_blank"
            rel="noopener"
            className="font-medium text-[13px] text-indigo-500 pr-1"
            href="https://dev.to"
          >
            DEV
          </a>{" "}
          and other inclusive communities.
        </p>
        <p className="mt-4">
          Made with love and{" "}
          <a
            target="_blank"
            rel="noopener"
            className="font-medium text-[13px] text-indigo-500 pr-1"
            href="https://dev.to/t/rails"
          >
            Ruby on Rails
          </a>
          . DEV Community <span title="copyright">©</span> 2016 - 2024.
        </p>
      </footer>
    </>
  );
};

const Main = () => {
  return (
    <>
      {/* Tabs */}
      <div>
        {["Relevant", "Latest", "Top"].map((tab, index) => (
          <button
            className={`px-4 py-3 ${
              tab === "Relevant"
                ? "font-semibold text-black"
                : "font-medium text-black/70"
            }`}
            key={index}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </>
  );
};

const RightSidebar = () => {
  return (
    <div className="max-w-[300px]">
      <div className="bg-white">
        <div className="p-4">
          <p className="font-semibold mb-1 text-xl">#discuss</p>
          <p className="text-xs text-stome-500">
            Discussion threads targeting the whole community
          </p>
        </div>
        {discussionData.map((discussion) => (
          <div className="group p-4 border-b" key={discussion.id}>
            <p className="group-hover:text-indigo-500 mb-1">
              {discussion.title}
            </p>
            <p className="text-sm text-stone-400">
              {" "}
              {discussion.comments} comments
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <p className="text-black">trending guides/resources</p>
        {dataTrending.map((trending) => (
          <div
            className="px-4 py-3 group hover:bg-white rounded-md"
            key={trending}
          >
            <p className="text-slate-600 font-normal text-[15px] group-hover:text-indigo-500">
              {trending}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const discussionData = [
  {
    id: "1",
    title: `418 I'm a Teapot`,
    comments: 5,
  },
  {
    id: "2",
    title: `
    SQL looks like English is a well-intentioned error
      `,
    comments: 10,
  },
  {
    id: "3",
    title: `What concepts do junior devs get stuck on where they usually need guidance to get past the problem?`,
    comments: 12,
  },
  {
    id: "4",
    title: `Meme Monday`,
    comments: 2,
  },
  {
    id: "5",
    title: `What Non-Tech Skills Do You Value in Software Engineers?`,
    comments: 40,
  },
];

export const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <path d="m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"></path>
  </svg>
);

const BookMarkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    aria-hidden="true"
  >
    <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path>
  </svg>
);

const CommentIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      role="img"
      aria-labelledby="anlb22f2h0diu5yefnhjohamvv8jrxqm"
    >
      <title id="anlb22f2h0diu5yefnhjohamvv8jrxqm">Comments</title>
      <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
    </svg>
  );
};

const emojis = [
  "https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg",
  "https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg",
  "https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg",
  "https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg",
  "https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg",
];

const HomeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 44 44"
    width="24"
    height="24"
  >
    <g>
      <path
        fill="#A0041E"
        d="M13.344 18.702h-2a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v7a.5.5 0 01-.5.5z"
      ></path>
      <path fill="#FFE8B6" d="M9 20L22 7l13 13v17H9z"></path>
      <path fill="#FFCC4D" d="M22 20h1v16h-1z"></path>
      <path
        fill="#66757F"
        d="M35 21a.997.997 0 01-.707-.293L22 8.414 9.707 20.707a1 1 0 11-1.414-1.414l13-13a.999.999 0 011.414 0l13 13A.999.999 0 0135 21z"
      ></path>
      <path
        fill="#66757F"
        d="M22 21a.999.999 0 01-.707-1.707l6.5-6.5a1 1 0 111.414 1.414l-6.5 6.5A.997.997 0 0122 21z"
      ></path>
      <path fill="#C1694F" d="M14 30h4v6h-4z"></path>
      <path fill="#55ACEE" d="M14 21h4v4h-4zm12.5 0h4v4h-4zm0 9h4v4h-4z"></path>
      <path
        fill="#5C913B"
        d="M37.5 37.5A1.5 1.5 0 0136 39H8a1.5 1.5 0 010-3h28a1.5 1.5 0 011.5 1.5z"
      ></path>
    </g>
  </svg>
);

type PostType = {
  id: string;
  postImg?: string;
  username: string;
  userImg: string;
  date: string;
  title: string;
  tags: string[];
  reactions: number;
  time: number;
};

const Post = (props: PostType) => {
  const { date, postImg, reactions, tags, time, title, userImg, username } =
    props;

  return (
    <div className="rounded-md overflow-hidden bg-white">
      {postImg && (
        <img className="w-full h-[273px] object-cover" src={postImg} />
      )}
      <div className="p-4 flex gap-2">
        <div>
          <img src={userImg} className="rounded-full h-8 w-8" />
        </div>
        <div className="flex flex-col w-full">
          <p className="text-[14px]">{username}</p>
          <p className="text-[12px] text-stone-500">{date}</p>
          <p>{title}</p>
          <div>
            {tags.map((tag) => {
              return (
                <p
                  className={
                    "px-2 inline-block py-1 border border-transparent rounded-md hover:border text-[13px] mr-2 " +
                    "hover:bg-rose-100 hover:border-rose-300"
                  }
                  key={tag}
                >
                  #{tag}
                </p>
              );
            })}
          </div>
          <div className="flex justify-between items-center w-full flex-1 mt-4">
            <div className="flex items-center gap-3 ">
              {emojis.map((emoji, index) => (
                <img
                  className={
                    index === 0
                      ? ""
                      : "ml-[-25px]" +
                        " bg-[#f4f4f4] rounded-full p-1 border border-white"
                  }
                  src={emoji}
                  key={emoji}
                />
              ))}
              <p className="text-stone-500">
                {reactions} <span>reactions</span>
              </p>
              <button className="flex">
                <CommentIcon />
                <span className="text-md text-stone-500">Add Comment</span>
              </button>
            </div>
            <div className="flex items-center gap-3 ml-auto">
              <span className="text-[12px] text-slate-500">
                {time} min read
              </span>{" "}
              <BookMarkIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const posts = [
  {
    id: "1",
    postImg:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--3i9KVQb5--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gh7nqc8h6lvmstr3qh6g.jpg",
    username: "Rifat Khan",
    userImg:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--V5Gl-oEg--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1227440/7eb5f152-1218-4ad6-a16b-4ca7b23b8856.png",
    date: "Jan 18",
    title: "Inheritance with access-specifier in cpp",
    tags: ["oop", "cpp", "inheritance", "access"],
    reactions: 4,
    time: 2,
  },
  {
    id: "2",
    username: "Rifat Khan",
    userImg:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--V5Gl-oEg--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1227440/7eb5f152-1218-4ad6-a16b-4ca7b23b8856.png",
    date: "Jan 18",
    title: "Inheritance with access-specifier in cpp",
    tags: ["oop", "cpp", "inheritance", "access"],
    reactions: 4,
    time: 2,
  },
  {
    id: "3",
    username: "Rifat Khan",
    userImg:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--V5Gl-oEg--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1227440/7eb5f152-1218-4ad6-a16b-4ca7b23b8856.png",
    date: "Jan 18",
    title: "Inheritance with access-specifier in cpp",
    tags: ["oop", "cpp", "inheritance", "access"],
    reactions: 4,
    time: 2,
  },
  {
    id: "4",
    username: "Rifat Khan",
    userImg:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--V5Gl-oEg--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1227440/7eb5f152-1218-4ad6-a16b-4ca7b23b8856.png",
    date: "Jan 18",
    title: "Inheritance with access-specifier in cpp",
    tags: ["oop", "cpp", "inheritance", "access"],
    reactions: 4,
    time: 2,
  },
  {
    id: "5",
    username: "Rifat Khan",
    userImg:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--V5Gl-oEg--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1227440/7eb5f152-1218-4ad6-a16b-4ca7b23b8856.png",
    date: "Jan 18",
    title: "Inheritance with access-specifier in cpp",
    tags: ["oop", "cpp", "inheritance", "access"],
    reactions: 4,
    time: 2,
  },
  {
    id: "6",
    postImg:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--3i9KVQb5--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gh7nqc8h6lvmstr3qh6g.jpg",
    username: "Rifat Khan",
    userImg:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--V5Gl-oEg--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1227440/7eb5f152-1218-4ad6-a16b-4ca7b23b8856.png",
    date: "Jan 18",
    title: "Inheritance with access-specifier in cpp",
    tags: ["oop", "cpp", "inheritance", "access"],
    reactions: 4,
    time: 2,
  },
  {
    id: "7",
    username: "Rifat Khan",
    userImg:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--V5Gl-oEg--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1227440/7eb5f152-1218-4ad6-a16b-4ca7b23b8856.png",
    date: "Jan 18",
    title: "Inheritance with access-specifier in cpp",
    tags: ["oop", "cpp", "inheritance", "access"],
    reactions: 4,
    time: 2,
  },
  {
    id: "8",
    postImg:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--3i9KVQb5--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gh7nqc8h6lvmstr3qh6g.jpg",
    username: "Rifat Khan",
    userImg:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--V5Gl-oEg--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1227440/7eb5f152-1218-4ad6-a16b-4ca7b23b8856.png",
    date: "Jan 18",
    title: "Inheritance with access-specifier in cpp",
    tags: ["oop", "cpp", "inheritance", "access"],
    reactions: 4,
    time: 2,
  },
  {
    id: "9",
    username: "Rifat Khan",
    userImg:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--V5Gl-oEg--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1227440/7eb5f152-1218-4ad6-a16b-4ca7b23b8856.png",
    date: "Jan 18",
    title: "Inheritance with access-specifier in cpp",
    tags: ["oop", "cpp", "inheritance", "access"],
    reactions: 4,
    time: 2,
  },
  {
    id: "10",
    username: "Rifat Khan",
    userImg:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--V5Gl-oEg--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1227440/7eb5f152-1218-4ad6-a16b-4ca7b23b8856.png",
    date: "Jan 18",
    title: "Inheritance with access-specifier in cpp",
    tags: ["oop", "cpp", "inheritance", "access"],
    reactions: 4,
    time: 2,
  },
  {
    id: "11",
    username: "Rifat Khan",
    userImg:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--V5Gl-oEg--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1227440/7eb5f152-1218-4ad6-a16b-4ca7b23b8856.png",
    date: "Jan 18",
    title: "Inheritance with access-specifier in cpp",
    tags: ["oop", "cpp", "inheritance", "access"],
    reactions: 4,
    time: 2,
  },
  {
    id: "12",
    username: "Rifat Khan",
    userImg:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--V5Gl-oEg--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1227440/7eb5f152-1218-4ad6-a16b-4ca7b23b8856.png",
    date: "Jan 18",
    title: "Inheritance with access-specifier in cpp",
    tags: ["oop", "cpp", "inheritance", "access"],
    reactions: 4,
    time: 2,
  },
];

const dataTrending = [
  "Looks That Helped Me Become a Tech Lead",
  `After creating RawJS, I'm never touching React again.`,
  "2024’s Tech Trend: Frontend for Backend",
  "✨ Top 5 Underrated Open Source Projects that no one talks about 🫵🤐",
  "The Top 10 GitHub Repositories Making Waves 🌊📊",
  "Design Patterns in JavaScript: A Comprehensive Guide",
];

/*
1. get posts data => all tags => 
2. get tags metadata => all tags meta => {opps: #444 }}
#444444
#444444[13]
#444444[80]
*/
