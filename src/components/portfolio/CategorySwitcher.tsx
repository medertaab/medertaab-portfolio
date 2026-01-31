import { motion } from "framer-motion"
import { Category } from "@component/types/portfolio"

interface CategorySwitcherProps {
  active: Category
  onChange: (cat: Category) => void
}

const CategorySwitcher: React.FC<CategorySwitcherProps> = ({
  active,
  onChange,
}) => {
  const categories = Object.values(Category)

  return (
    <div className="flex flex-wrap gap-4 md:gap-12 items-center border-b border-brand-cream/20 pb-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`relative py-2 text-sm font-bold tracking-[0.15em] transition-all uppercase ${
            active === cat
              ? "text-brand-cream"
              : "text-brand-cream/40 hover:text-brand-cream"
          }`}
        >
          {cat}
          {active === cat && (
            <motion.div
              layoutId="activeTab"
              className="absolute -bottom-1 left-0 w-full h-[3px] bg-brand-cream"
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            />
          )}
        </button>
      ))}
    </div>
  )
}

export default CategorySwitcher
