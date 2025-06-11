import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="p-4 border-b border-gray-200">
      <ul className="flex flex-col sm:flex-row sm:gap-6 gap-2 list-none">
        <li>
          <Link
            href="/"
            className="text-gray-700 hover:text-indigo-600 hover:underline underline-offset-4 transition-all duration-200"
          >
            หน้าแรก
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-gray-700 hover:text-indigo-600 hover:underline underline-offset-4 transition-all duration-200"
          >
            เกี่ยวกับ
          </Link>
        </li>
        <li>
          <Link
            href="/service"
            className="text-gray-700 hover:text-indigo-600 hover:underline underline-offset-4 transition-all duration-200"
          >
            บริการ
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-indigo-600 hover:underline underline-offset-4 transition-all duration-200"
          >
            ติดต่อ
          </Link>
        </li>
      </ul>
    </nav>
  );
}
