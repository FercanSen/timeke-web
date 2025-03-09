import Link from "next/link";
import { sidebarMenuItems } from "./sidebarMenu";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Timeke</h2>
      <nav className="flex flex-col gap-4">
        {sidebarMenuItems.map(({ title, href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded"
          >
            <Icon className="w-5 h-5" />
            <span>{title}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
