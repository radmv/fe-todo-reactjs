import { Badge, Button, CenteredContent } from "../../components";

const HeroSection = () => {
  return (
    <section id="hero" className="mt-12">
      <CenteredContent variant="flex flex-row justify-between items-center">
        <div className="w-1/2">
          <Badge bg="color-gray">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.15 16.5V18.6"
                stroke="#5313CA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.15 22H17.15V21C17.15 19.9 16.25 19 15.15 19H9.15C8.05 19 7.15 19.9 7.15 21V22V22Z"
                stroke="#5313CA"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M6.15 22H18.15"
                stroke="#5313CA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 16C8.13 16 5 12.87 5 9V6C5 3.79 6.79 2 9 2H15C17.21 2 19 3.79 19 6V9C19 12.87 15.87 16 12 16Z"
                stroke="#5313CA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.47 11.65C4.72 11.41 4.06 10.97 3.54 10.45C2.64 9.45001 2.04 8.25001 2.04 6.85001C2.04 5.45001 3.14 4.35001 4.54 4.35001H5.19C4.99 4.81001 4.89 5.32001 4.89 5.85001V8.85001C4.89 9.85001 5.1 10.79 5.47 11.65Z"
                stroke="#5313CA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.53 11.65C19.28 11.41 19.94 10.97 20.46 10.45C21.36 9.45001 21.96 8.25001 21.96 6.85001C21.96 5.45001 20.86 4.35001 19.46 4.35001H18.81C19.01 4.81001 19.11 5.32001 19.11 5.85001V8.85001C19.11 9.85001 18.9 10.79 18.53 11.65Z"
                stroke="#5313CA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-base font-bold">
              <span className="text-color-blue">12,000 </span>top freelancers
              signed up last week
            </p>
          </Badge>
          <h1 className="text-[65px] font-semibold font-serif my-8">
            Clients Analytics for Freelancer
          </h1>
          <p className="text-lg">
            Learn how to track the hot prospects to bring more fortune while
            freelancing from home or your favorite cafes.
          </p>
          <div className="flex flex-row mt-8 gap-x-4">
            <Button variant="primaryBig">Explore Features</Button>
            <Button variant="secondaryIconBig">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.10001 12V10.52C9.10001 8.60999 10.45 7.83999 12.1 8.78999L13.38 9.52999L14.66 10.27C16.31 11.22 16.31 12.78 14.66 13.73L13.38 14.47L12.1 15.21C10.45 16.16 9.10001 15.38 9.10001 13.48V12Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Watch Demo
            </Button>
          </div>
        </div>
        <div className="w-[510px] h-[560px]">
          <img src="/images/hero_illustration.png" alt="hero" />
        </div>
      </CenteredContent>
    </section>
  );
};

export default HeroSection;
