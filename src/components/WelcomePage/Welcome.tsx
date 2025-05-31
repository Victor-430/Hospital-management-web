import Image from "next/image";

interface WelcomePageProps {
  companyName: string;
  logoSrc: string;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ companyName, logoSrc }) => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-gray-100">
      {/* Background gradient effect */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-[#61CEFFB8] opacity-50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#4DC6FD] opacity-80 rounded-full blur-3xl"></div>

      {/* Main content */}
      <div className="flex items-center space-x-4 p-8">
        <Image
          src={logoSrc}
          alt={`${companyName} Logo`}
          width={40}
          height={40}
          className=""
        />
        <h1 className="text-lg font-bold text-gray-800">
          <span className="text-blue-500">Care</span>
          <span className="text-green-600">Cycle</span>
        </h1>
      </div>
    </div>
  );
};

export default WelcomePage;