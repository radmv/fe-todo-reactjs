import { Badge, CenteredContent, Heading2 } from "../../components";

const FeaturesSection = () => {
  return (
    <section id="features" className="w-full bg-color-grey-primary">
      <CenteredContent variant="flex flex-col gap-y-8 my-12 py-28">
        <Badge bg="color-blue">
          <span className="text-base font-bold text-white">Top Features</span>
        </Badge>
        <Heading2>
          Built-in Robust Features <br />
          Versatile Purposes
        </Heading2>
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-3 gap-x-8">
            <FeaturesCard
              icon={
                <svg
                  width="80"
                  height="70"
                  viewBox="0 0 80 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="60" cy="38" r="20" fill="#75F1F1" />
                  <path
                    d="M64.1667 35C64.1667 18.9 51.1 5.83337 35 5.83337C18.9 5.83337 5.83334 18.9 5.83334 35C5.83334 51.1 18.9 64.1667 35 64.1667"
                    stroke="#5313CA"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23.3333 8.75H26.25C20.5625 25.7833 20.5625 44.2167 26.25 61.25H23.3333"
                    stroke="#5313CA"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M43.75 8.75C46.5792 17.2667 48.0084 26.1333 48.0084 35"
                    stroke="#5313CA"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.75 46.6667V43.75C17.2667 46.5792 26.1333 48.0084 35 48.0084"
                    stroke="#5313CA"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.75 26.25C25.7833 20.5625 44.2167 20.5625 61.25 26.25"
                    stroke="#5313CA"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M53.0833 62.4167C58.238 62.4167 62.4166 58.238 62.4166 53.0834C62.4166 47.9287 58.238 43.75 53.0833 43.75C47.9287 43.75 43.75 47.9287 43.75 53.0834C43.75 58.238 47.9287 62.4167 53.0833 62.4167Z"
                    stroke="#5313CA"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M64.1667 64.1667L61.25 61.25"
                    stroke="#5313CA"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              title="Real Tracking"
            >
              Get the clients behavior faster and accurate by a few of clicks.
            </FeaturesCard>
            <FeaturesCard
              icon={
                <svg
                  width="76"
                  height="70"
                  viewBox="0 0 76 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="57.6666" cy="32" r="18" fill="#75F1F1" />
                  <path
                    d="M58.3333 35.5832V40.5417C58.3333 49.7292 53.0833 53.6667 45.2083 53.6667H18.9583C11.0833 53.6667 5.83334 49.7292 5.83334 40.5417V24.7916C5.83334 15.6041 11.0833 11.6666 18.9583 11.6666H26.8333C26.4542 12.775 26.25 14 26.25 15.3125V26.6875C26.25 29.5167 27.1833 31.9083 28.8458 33.5708C30.5083 35.2333 32.9 36.1667 35.7292 36.1667V40.2209C35.7292 41.7084 37.4208 42.6123 38.675 41.7957L47.1042 36.1667H54.6875C56 36.1667 57.225 35.9623 58.3333 35.5832Z"
                    stroke="#5313CA"
                    strokeWidth="4"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M64.1667 15.3125V26.6876C64.1667 31.0334 61.95 34.2999 58.3333 35.5832C57.225 35.9624 56 36.1668 54.6875 36.1668H47.1042L38.675 41.7957C37.4208 42.6124 35.7292 41.7085 35.7292 40.221V36.1668C32.9 36.1668 30.5083 35.2334 28.8458 33.5709C27.1833 31.9084 26.25 29.5168 26.25 26.6876V15.3125C26.25 14 26.4542 12.775 26.8333 11.6667C28.1167 8.05004 31.3833 5.83337 35.7292 5.83337H54.6875C60.375 5.83337 64.1667 9.62504 64.1667 15.3125Z"
                    stroke="#5313CA"
                    strokeWidth="4"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.5833 64.1666H42.5833"
                    stroke="#5313CA"
                    strokeWidth="4"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M32.0833 53.6667V64.1667"
                    stroke="#5313CA"
                    strokeWidth="4"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M53.9452 21.1458H53.9715"
                    stroke="#5313CA"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M45.7791 21.1458H45.8054"
                    stroke="#5313CA"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M37.6116 21.1458H37.6378"
                    stroke="#5313CA"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              title="Email Marketing"
            >
              Send a couple of templates A/B testing to encourage clients
            </FeaturesCard>
            <FeaturesCard
              icon={
                <svg
                  width="77"
                  height="70"
                  viewBox="0 0 77 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="58.3334" cy="26" r="18" fill="#75F1F1" />
                  <path
                    d="M34.2417 51.7708H51.5083C51.2458 52.0041 50.9833 52.2083 50.7208 52.4416L38.2666 61.7749C34.1541 64.8374 27.4458 64.8374 23.3042 61.7749L10.8208 52.4416C8.07917 50.4 5.83331 45.8791 5.83331 42.4666V20.8541C5.83331 17.2957 8.54583 13.3582 11.8708 12.1041L26.3958 6.64993C28.7875 5.74576 32.7542 5.74576 35.1458 6.64993L49.6417 12.1041C52.4125 13.1541 54.775 16.0708 55.5041 19.0458H34.2125C33.5708 19.0458 32.9875 19.075 32.4333 19.075C27.0375 19.3958 25.6375 21.3499 25.6375 27.5041V43.3416C25.6666 50.0499 27.3875 51.7708 34.2417 51.7708Z"
                    stroke="#5313CA"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M25.6666 32.725H64.1666"
                    stroke="#5313CA"
                    strokeWidth="4"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M64.1666 27.4751V43.6625C64.1083 50.1375 62.3291 51.7417 55.5916 51.7417H34.2416C27.3875 51.7417 25.6666 50.0208 25.6666 43.2833V27.4459C25.6666 21.3209 27.0666 19.3667 32.4625 19.0167C33.0166 19.0167 33.6 18.9875 34.2416 18.9875H55.5916C62.4458 19.0167 64.1666 20.7084 64.1666 27.4751Z"
                    stroke="#5313CA"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M33.0167 44.5083H36.8958"
                    stroke="#5313CA"
                    strokeWidth="4"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M43.0208 44.5083H52.5583"
                    stroke="#5313CA"
                    strokeWidth="4"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              title="Payment Gateway"
            >
              Clients would send the money to your bank account, secured.
            </FeaturesCard>
          </div>
          <div className="grid grid-cols-2 gap-x-8">
            <FeaturesCard
              icon={
                <svg
                  width="80"
                  height="70"
                  viewBox="0 0 80 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="60" cy="38" r="20" fill="#75F1F1" />
                  <path
                    d="M10.7042 7.29163V42.2041C10.7042 45.0625 12.0459 47.775 14.35 49.4958L29.5459 60.8708C32.7834 63.2916 37.2459 63.2916 40.4834 60.8708L55.6792 49.4958C57.9833 47.775 59.325 45.0625 59.325 42.2041V7.29163H10.7042Z"
                    stroke="#5313CA"
                    strokeWidth="4"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M5.83334 7.29163H64.1667"
                    stroke="#5313CA"
                    strokeWidth="4"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M23.3333 23.3334H46.6667"
                    stroke="#5313CA"
                    strokeWidth="4"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23.3333 37.9166H46.6667"
                    stroke="#5313CA"
                    strokeWidth="4"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              title="Avoid Client Fraud"
            >
              Our AI technologies can prevent client to steal your final income
              from each project you worked.
            </FeaturesCard>
            <FeaturesCard
              icon={
                <svg
                  width="76"
                  height="70"
                  viewBox="0 0 76 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="58" cy="26" r="18" fill="#75F1F1" />
                  <path
                    d="M8.75002 26.2499C11.9717 26.2499 14.5834 23.6382 14.5834 20.4166C14.5834 17.1949 11.9717 14.5833 8.75002 14.5833C5.52836 14.5833 2.91669 17.1949 2.91669 20.4166C2.91669 23.6382 5.52836 26.2499 8.75002 26.2499Z"
                    stroke="#5313CA"
                    strokeWidth="4"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M61.25 26.2499C64.4717 26.2499 67.0834 23.6382 67.0834 20.4166C67.0834 17.1949 64.4717 14.5833 61.25 14.5833C58.0284 14.5833 55.4167 17.1949 55.4167 20.4166C55.4167 23.6382 58.0284 26.2499 61.25 26.2499Z"
                    stroke="#5313CA"
                    strokeWidth="4"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M55.4167 20.4166H43.75"
                    stroke="#5313CA"
                    strokeWidth="4"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M26.25 20.4166H14.5834"
                    stroke="#5313CA"
                    strokeWidth="4"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.875 48.125V53.9583C21.875 55.7375 20.7959 57.2833 19.2792 57.925C18.725 58.1875 18.1417 58.3333 17.5 58.3333H11.6667C9.24585 58.3333 7.29169 56.3792 7.29169 53.9583V48.125C7.29169 45.7042 9.24585 43.75 11.6667 43.75H17.5C19.9209 43.75 21.875 45.7042 21.875 48.125Z"
                    stroke="#5313CA"
                    strokeWidth="4"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M62.7083 48.125V53.9583C62.7083 56.3792 60.7542 58.3333 58.3333 58.3333H52.5C51.8583 58.3333 51.275 58.1875 50.7208 57.925C49.2042 57.2833 48.125 55.7375 48.125 53.9583V48.125C48.125 45.7042 50.0792 43.75 52.5 43.75H58.3333C60.7542 43.75 62.7083 45.7042 62.7083 48.125Z"
                    stroke="#5313CA"
                    strokeWidth="4"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M43.75 16.0416V24.7916C43.75 27.1833 41.7667 29.1666 39.375 29.1666H30.625C28.2333 29.1666 26.25 27.1833 26.25 24.7916V16.0416C26.25 13.65 28.2333 11.6666 30.625 11.6666H39.375C41.7667 11.6666 43.75 13.65 43.75 16.0416Z"
                    stroke="#5313CA"
                    strokeWidth="4"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M43.75 22.5458C50.6625 26.0458 55.4167 33.5708 55.4167 42.2917C55.4167 42.7875 55.3875 43.2542 55.3292 43.75"
                    stroke="#5313CA"
                    strokeWidth="4"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.6709 43.75C14.6125 43.2542 14.5834 42.7875 14.5834 42.2917C14.5834 33.5708 19.3375 26.0458 26.25 22.5458"
                    stroke="#5313CA"
                    strokeWidth="4"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              title="More Automations"
            >
              Our system will notify clients regarding deadline payment,
              repetition orders, and many more.
            </FeaturesCard>
          </div>
        </div>
      </CenteredContent>
    </section>
  );
};

const FeaturesCard = ({ icon, title, children }) => {
  return (
    <div className="flex flex-col w-full gap-24 p-8 bg-white rounded-2xl">
      {icon}
      <div className="flex flex-col gap-3 text-xl font-bold">
        {title}
        <p className="text-base font-normal text-color-grey-secondary">
          {children}
        </p>
      </div>
    </div>
  );
};

export default FeaturesSection;
