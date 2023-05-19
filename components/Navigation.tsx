import styles from "@/styles/navigation.module.css";
import { FiLogIn } from "react-icons/fi";
import Image from "next/image";
import { useState } from "react";

export default function Navigation() {
  const [activeElement, setActiveElement] = useState<String | null>(null);


  return (
    <nav className="w-full border-b">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 w-full">
          <div className="flex items-center justify-between w-full">
            <div className="flex-shrink-0">
              <a href="/" className="text-white text-lg font-semibold">
                <div className="flex items-center">
                  <Image
                    src="/sgdorm.png"
                    alt="SGUniDorm"
                    width="40"
                    height="40"
                  />
                  <span className={styles.titleGradient}>SGUniDorms</span>
                </div>
              </a>
            </div>
            <p
              className={`hidden md:block text-gray-400 px-3 py-2 rounded-md text-md font-medium cursor-pointer ${
                activeElement === "nus" ? "text-white" : "hover:text-white"
              }`}
              onMouseEnter={() => setActiveElement("nus")}
              onMouseLeave={() => setActiveElement(null)}
            >
              NUS
            </p>
            <p className="hidden md:block text-gray-400 hover:text-white px-3 py-2 rounded-md text-md font-medium cursor-pointer">
              NTU
            </p>
            <p className="hidden md:block text-gray-400 hover:text-white px-3 py-2 rounded-md text-md font-medium cursor-pointer">
              SMU
            </p>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="/"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                >
                  <p className="flex items-center">
                    Sign In <FiLogIn className="ml-1 " />
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
