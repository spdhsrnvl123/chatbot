import type { MenuItem } from "../types/chat";

interface MenuButtonsProps {
  items: MenuItem[];
  onMenuClick: (item: MenuItem) => void;
}

function MenuButtons({ items, onMenuClick }: MenuButtonsProps) {
  return (
    <div className="mt-3 ml-10 flex flex-wrap gap-2">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onMenuClick(item)}
          className="px-3 py-2 bg-white border border-[#34bf87] text-[#34bf87] rounded-full text-sm hover:bg-[#34bf87] hover:text-white transition-colors shadow-sm"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

export default MenuButtons;
